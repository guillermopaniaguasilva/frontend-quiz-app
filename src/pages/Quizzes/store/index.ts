import { StoreApi, UseBoundStore, create } from 'zustand';

interface QuizzState {
  subject: string;
  score: number;
  darkTheme: boolean;

  setSubject: (_: string) => void;
  increaseScore: (_: number) => void;
  switchDarkTheme: () => void;
}

export const useQuizzStore = create<QuizzState>()((set) => ({
  subject: '',
  score: 0,
  darkTheme: false,
  setSubject: (subject) => set(() => ({ subject })),
  increaseScore: (previousScore) => set(() => ({ score: previousScore + 1 })),
  switchDarkTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}));

interface QuizzesWindow extends Window {
  matchingStore?: UseBoundStore<StoreApi<QuizzState>>;
}

(window as QuizzesWindow).matchingStore = useQuizzStore;
