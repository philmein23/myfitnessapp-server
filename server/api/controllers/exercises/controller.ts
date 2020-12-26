import ExercisesService from '../../services/exercises.service';
import { Request, Response } from 'express';

export class ExercisesController {
  getAll(req: Request, res: Response): void {
    ExercisesService.getAll().then((exercises) =>
      res.status(200).json(exercises)
    );
  }

  findById(req: Request, res: Response): void {
    ExercisesService.getExerciseById(parseInt(req.params.id)).then((exercise) =>
      res.status(200).json(exercise)
    );
  }

  addNewExercise(req: Request, res: Response): void {
    const { name, description } = req.body;
    ExercisesService.addNewExercise(name, description).then((exercise) => {
      res.status(200).json(exercise);
    });
  }

  removeExercise(req: Request, res: Response): void {
    ExercisesService.removeExerciseById(
      parseInt(req.params.id)
    ).then((rowCount) => res.send(`${rowCount} rows have been deleted`));
  }
}

export default new ExercisesController();
