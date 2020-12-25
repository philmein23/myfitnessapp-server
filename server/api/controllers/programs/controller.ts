import ProgramsService from '../../services/programs.service';
import { Request, Response } from 'express';

export class ProgramsController {
  getAll(req: Request, res: Response): void {
    ProgramsService.getAll().then((programs) => {
      res.status(200).json(programs);
    });
  }

  addNewProgram(req: Request, res: Response): void {
    const { name, exercises } = req.body;
  }
}

export default new ProgramsController();
