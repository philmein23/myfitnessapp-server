export type SetsReps = {
  sets: number;
  reps: number;
};

export type ExerciseStat = Exercise & SetsReps;

export enum Muscles {
  Pectorals,
  LatissimusDorsi,
  Biceps,
  Triceps,
}

export interface Exercise {
  id: number;
  name: string;
  description: string;
  muscleTargets: Muscles[];
}

export interface Program {
  id: number;
  name: string;
  exercises: ExerciseStat[];
}
