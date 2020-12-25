import express from 'express';
import ExercisesController from './controller';

export default express.Router().post('/', ExercisesController.addNewExercise);
