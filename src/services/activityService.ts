import { PrismaClient, Activity } from '@prisma/client';
const prisma = new PrismaClient();

class ActivityService {
  async createActivity(data: Omit<Activity, 'id'>): Promise<Activity> {
    return prisma.activity.create({ data });
  }

  async getActivities(projectId: string): Promise<Activity[]> {
    return prisma.activity.findMany({
      where: { projectId: Number(projectId) },
    });
  }

  async deleteActivity(id: number) {
    return prisma.activity.delete({ where: { id } });
  }

  async updateActivity(id: number, data: { name?: string; startDate?: Date; endDate?: Date; completed?: boolean }) {
    return prisma.activity.update({
      where: { id },
      data,
    });
  }
  
}

export default new ActivityService();
