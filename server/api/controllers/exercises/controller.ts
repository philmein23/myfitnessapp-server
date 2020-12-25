import ExercisesService from '../../services/exercises.service';
import { Request, Response } from 'express';

export class ExercisesController {
  getAll(req: Request, res: Response): void {}

  addNewExercise(req: Request, res: Response): void {
    const { name, description } = req.body;
    ExercisesService.addNewExercise(name, description).then((exercise) => {
      res.status(200).json(exercise);
    });
  }
}

export default new ExercisesController();
