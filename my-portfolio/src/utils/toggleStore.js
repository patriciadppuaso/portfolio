import { create } from 'zustand';

const toggleStore = create((set) => ({
    count: 0,
    toggle: () => set((state) => ({ isDark: !state.isDark })),
}))

export default toggleStore; 