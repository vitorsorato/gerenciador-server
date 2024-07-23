import { Request, Response } from 'express';
import projectService from '../services/projectService';

class ProjectController {
  async createProject(req: Request, res: Response) {
    try {
      const project = await projectService.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async getProjects(req: Request, res: Response) {
    try {
      const projects = await projectService.getProjects();
      res.status(200).json(projects);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unexpected error occurred' });
      }
    }
  }

  async deleteProject(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await projectService.deleteProject(parseInt(id));
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateProject(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedProject = await projectService.updateProject(parseInt(id), req.body);
      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new ProjectController();
