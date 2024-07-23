import { Request, Response } from 'express';
import activityService from '../services/activityService';

class ActivityController {
  async createActivity(req: Request, res: Response) {
    try {
      const activity = await activityService.createActivity(req.body);
      res.status(201).json(activity);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async getActivities(req: Request, res: Response) {
    try {
      const activities = await activityService.getActivities(req.params.projectId);
      res.status(200).json(activities);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async deleteActivity(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await activityService.deleteActivity(parseInt(id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateActivity(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedActivity = await activityService.updateActivity(parseInt(id), req.body);
      res.status(200).json(updatedActivity);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new ActivityController();
