import { PrismaClient, Project } from '@prisma/client';
const prisma = new PrismaClient();

class ProjectService {
  async createProject(data: Omit<Project, 'id'>): Promise<Project> {
    return prisma.project.create({ data });
  }

  async getProjects(): Promise<Project[]> {
    const projects = await prisma.project.findMany({
      orderBy: {createdAt: 'asc'},
      include: {
        activities: {select: {completed: true}},
      },
    });

    return projects.map((project) => ({
      ...project,
      percentComplete: this.calculatePercentComplete(project.activities),
    }));
  }

  async deleteProject(id: number) {
    await prisma.activity.deleteMany({ where: { projectId: id } });
    return prisma.project.delete({ where: { id } });
  }

  async updateProject(id: number, data: { name?: string; startDate?: Date; endDate?: Date }) {
    return prisma.project.update({
      where: { id },
      data,
    });
  }

  private calculatePercentComplete(activities: any[]): number {
    const total = activities.length;
    const completed = activities.filter((activity) => activity.completed).length;
    return total > 0 ? (completed / total) * 100 : 0;
  }
}

export default new ProjectService();
