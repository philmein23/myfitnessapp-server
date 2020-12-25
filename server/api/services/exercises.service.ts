import L from '../../common/logger';
import db from '../db';

export enum Muscles {
  Pectorals,
  LatissimusDorsi,
  Biceps,
  Triceps,
}

let id = 0;
export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscleTargets: Muscles[];
}

const exercises: Exercise[] = [
  {
    id: id++,
    name: 'bench press',
    muscleTargets: [Muscles.Pectorals],
    description: '',
  },
  {
    id: id++,
    name: 'wide-grip pullups',
    muscleTargets: [Muscles.LatissimusDorsi, Muscles.Biceps],
    description: '',
  },
];

export class ExercisesService {
  getAll() {}

  getExerciseById() {}

  async addNewExercise(name: string, description: string) {
    L.info(`Adding new exerise: ${name}`);
    const result = await db.one(
      'INSERT INTO exercises (name, description) VALUES ($1, $2) RETURNING id',
      [name, description]
    );

    return result;
  }

  removeExerciseById() {}
}

export default new ExercisesService();
