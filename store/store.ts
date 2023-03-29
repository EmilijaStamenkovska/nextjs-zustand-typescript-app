import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
    cookies: number,
}

type Actions = {
    increase: () => void,
    decrease: () => void,
    removeAll: () => void
}

export const useStore = create<Store & Actions>()(
    persist((set) => ({
        cookies: 0,
        increase: () => set((state) => ({ cookies: state.cookies + 1 })),
        decrease: () => set((state) => ({ cookies: state.cookies - 1 })),
        removeAll: () => set({ cookies: 0 })
    }),
        { name: 'value', getStorage: () => localStorage }
    )
)