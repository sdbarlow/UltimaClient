import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUltimaStore = create(persist(
  (set) => ({
    user: null,
    setUser: (user) => set({ user }),
  }),
  {
    name: 'ultima-store',
    version: 1,
  }
));

export default useUltimaStore;
