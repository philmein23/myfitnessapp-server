import express from 'express';
import ExercisesController from './controller';

export default express
  .Router()
  .get('/', ExercisesController.getAll)
  .get('/:id', ExercisesController.findById)
  .post('/', ExercisesController.addNewExercise)
  .delete('/:id', ExercisesController.removeExercise);
