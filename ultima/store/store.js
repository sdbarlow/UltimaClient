import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUltimaStore = create(persist(
  (set) => ({
    dropdown: false,
    user: null,
    setUser: (user) => set({ user }),
    setDropDown: (dropdown) => set({ dropdown })
  }),
  {
    name: 'ultima-store',
    version: 1,
  }
));

export default useUltimaStore;
