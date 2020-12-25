import L from '../../common/logger';

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

  addNewExercise() {}

  removeExerciseById() {}
}

export default new ExercisesService();
