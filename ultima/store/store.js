import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUltimaStore = create(persist(
  (set) => ({
    cartoshow: '',
    dropdown: false,
    user: null,
    car: null,
    setUser: (user) => set({ user }),
    setDropDown: (dropdown) => set({ dropdown }),
    setCarToShow: (cartoshow) => set({ cartoshow }),
    setCar: (car) => set({ car })
  }),
  {
    name: 'ultima-store',
    version: 1
  }
));

export default useUltimaStore;
