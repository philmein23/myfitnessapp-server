import L from '../../common/logger';
import db from '../db';
import { IResult } from 'pg-promise/typescript/pg-subset';

export enum Muscles {
  Pectorals,
  LatissimusDorsi,
  Biceps,
  Triceps,
}

type ExerciseId = number;

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
  async getAll(): Promise<Exercise[]> {
    L.info('Fetching all exercises...');
    return db.any('SELECT * from exercises');
  }

  async getExerciseById(exerciseId: number): Promise<Exercise> {
    L.info(`Fetching exercise with id: ${exerciseId}`);
    return db.oneOrNone('SELECT * FROM exercises WHERE id = $1', [exerciseId]);
  }

  async addNewExercise(name: string, description: string): Promise<ExerciseId> {
    L.info(`Adding new exerise: ${name}`);
    const result = await db.one(
      'INSERT INTO exercises (name, description) VALUES ($1, $2) RETURNING id',
      [name, description]
    );

    return result;
  }

  removeExerciseById(exerciseId: number) {
    L.info(`Removing exercise with id: ${exerciseId}`);
    return db.result(
      'DELETE FROM exercises WHERE id = $1',
      [exerciseId],
      (r: IResult) => r.rowCount
    );
  }
}

export default new ExercisesService();
