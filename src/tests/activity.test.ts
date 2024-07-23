const express = require('express');
import request = require('supertest');
const projectRoutes = require('../routes/projectRoutes');
const activityRoutes = require('../routes/activityRoutes');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use('/projects', projectRoutes);
app.use('/activities', activityRoutes);

const mockProject = {
  name: 'teste_project',
  startDate: '2023-01-01T00:00:00.000Z',
  endDate: '2023-01-31T00:00:00.000Z'
};

const mockActivity = {
  name: 'Activity 1',
  startDate: '2023-01-01T00:00:00.000Z',
  endDate: '2023-01-10T00:00:00.000Z',
  completed: false
};

const updatedActivityData = {
  name: 'Updated Activity',
  startDate: '2023-01-05T00:00:00.000Z',
  endDate: '2023-01-15T00:00:00.000Z',
  completed: true
};

let projectId;
let activityId;

describe('Activity Controller', () => {
  beforeAll(async () => {
    // Limpa projetos existentes com nome "teste_project" antes de rodar os testes
    await prisma.project.deleteMany({ where: { name: 'teste_project' } });
    // Cria um projeto para associar às atividades
    const project = await prisma.project.create({ data: mockProject });
    projectId = project.id;
  });

  afterAll(async () => {
    // Limpa os dados de teste após todos os testes serem executados
    await prisma.activity.deleteMany({ where: { projectId } });
    await prisma.project.deleteMany({ where: { name: 'teste_project' } });
    await prisma.$disconnect();
  });

  test('should create an activity', async () => {
    const res = await request(app)
      .post('/activities')
      .send({ ...mockActivity, projectId });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(mockActivity.name);
    activityId = res.body.id;
  });

  test('should get activities for a project', async () => {
    const res = await request(app).get(`/activities/${projectId}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('should update an activity', async () => {
    const res = await request(app)
      .put(`/activities/${activityId}`)
      .send(updatedActivityData);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe(updatedActivityData.name);
  });

  test('should delete an activity', async () => {
    const res = await request(app).delete(`/activities/${activityId}`);

    expect(res.statusCode).toEqual(204);

    const getRes = await request(app).get(`/activities/${projectId}`);
    expect(getRes.body.find((a) => a.id === activityId)).toBeUndefined();
  });
});
