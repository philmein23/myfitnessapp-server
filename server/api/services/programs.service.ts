import L from '../../common/logger';
import { Exercise, Muscles } from './exercises.service';
import db from '../db';

type SetsReps = {
  sets: number;
  reps: number;
};

type ExerciseStat = Exercise & SetsReps;

export interface Program {
  id: number;
  name: string;
  exercises: ExerciseStat[];
}

/** eventually we want to add data persistance, and remove the static data below */
let id = 0;
const programs: Program[] = [
  {
    id: id++,
    name: 'Back Attack',
    exercises: [
      {
        id: 1,
        name: 'Pull ups',
        sets: 3,
        reps: 12,
        description: '',
        muscleTargets: [Muscles.LatissimusDorsi],
      },
      {
        id: 2,
        name: 'Lat Pulldown',
        sets: 3,
        reps: 12,
        description: '',
        muscleTargets: [Muscles.LatissimusDorsi],
      },
    ],
  },
];

export class ProgramsService {
  async getAll(): Promise<Program[]> {
    L.info('fetching all programs...', programs);
    return programs;
  }

  getProgramById(id: number) {}

  addNewProgram(programName: string) {}

  removeProgram() {}
}

export default new ProgramsService();
