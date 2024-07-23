const express = require('express');
import request = require('supertest');
const projectRoutes = require('../routes/projectRoutes');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use('/projects', projectRoutes);

const mockProject = {
  name: 'teste_project',
  startDate: '2023-01-01T00:00:00.000Z',
  endDate: '2023-01-31T00:00:00.000Z'
};

const updatedProjectData = {
  name: 'updated_project',
  startDate: '2023-02-01T00:00:00.000Z',
  endDate: '2023-02-28T00:00:00.000Z'
};

let projectId;

describe('Project Controller', () => {
  beforeAll(async () => {
    await prisma.project.deleteMany({ where: { name: 'teste_project' } });
  });

  afterAll(async () => {
    await prisma.project.deleteMany({ where: { name: 'teste_project' } });
    await prisma.project.deleteMany({ where: { name: 'updated_project' } });
    await prisma.$disconnect();
  });

  test('should create a project', async () => {
    const res = await request(app)
      .post('/projects')
      .send(mockProject);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe(mockProject.name);
    projectId = res.body.id;
  });

  test('should get projects', async () => {
    const res = await request(app).get('/projects');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  test('should update a project', async () => {
    const res = await request(app)
      .put(`/projects/${projectId}`)
      .send(updatedProjectData);

    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe(updatedProjectData.name);
  });

  test('should delete a project', async () => {
    const res = await request(app).delete(`/projects/${projectId}`);

    expect(res.statusCode).toEqual(204);

    const getRes = await request(app).get('/projects');
    expect(getRes.body.find((p) => p.id === projectId)).toBeUndefined();
  });
});
