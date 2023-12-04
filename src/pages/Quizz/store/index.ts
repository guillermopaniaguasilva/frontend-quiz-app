import { create } from 'zustand';

interface QuizzState {
  subject: string;
  score: number;

  setSubject: (_: string) => void;
  increaseScore: (_: number) => void;
}

export const useQuizzStore = create<QuizzState>()((set) => ({
  subject: '',
  score: 0,
  setSubject: (subject) => set(() => ({ subject })),
  increaseScore: (previousScore) => set(() => ({ score: previousScore + 1 })),
}));

(window as any).matchingStore = useQuizzStore;
