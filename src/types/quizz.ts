export type QuizzCategory = {
  title: string;
  icon: string;
  iconBackground: string;
  questions: QuizzQuestion[];
};

export type QuizzQuestion = {
  question: string;
  options: string[];
  answer: string;
};

export type Quizz = {
  quizzes: QuizzCategory[];
};
