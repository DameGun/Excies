type Exercise = {
  id: string;
  muscles_id: string;
  name: string;
  description: string;
};

type ExerciseState = {
  data: Exercise[];
};

export type { Exercise, ExerciseState };
