import { PrismaClient, Activity } from '@prisma/client';
const prisma = new PrismaClient();

class ActivityService {
  async createActivity(data: Omit<Activity, 'id'>): Promise<Activity> {
    return prisma.activity.create({ data });
  }

  async getActivities(projectId: string): Promise<Activity[]> {
    return prisma.activity.findMany({
      orderBy: { createdAt: 'asc' },
      where: { projectId: Number(projectId) },
    });
  }

  async setCheckActivity(id: number): Promise<Activity> {
    const activity = await prisma.activity.findUnique({
      where: { id },
    });

    if (!activity) {
      throw new Error('Activity not found');
    }

    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: { completed: !activity.completed },
    });

    console.table(updatedActivity)

    return updatedActivity;
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
