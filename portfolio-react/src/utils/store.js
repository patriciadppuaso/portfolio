import { create } from "zustand";

const useStore = create((set) => ({
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  isStartMenuOpen: false,
  toggleStartMenu: () =>
    set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),
  setStartMenuOpen: (isOpen) => set({ isStartMenuOpen: isOpen }),

  isWelcomeOpen: false,
  toggleWelcome: () =>
    set((state) => ({ isWelcomeOpen: !state.isWelcomeOpen })),
  setWelcomeOpen: (isOpen) => set({ isWelcomeOpen: isOpen }),

  isExperienceOpen: false,
  toggleExperience: () =>
    set((state) => ({ isExperienceOpen: !state.isExperienceOpen })),
  setExperienceOpen: (isOpen) => set({ isExperienceOpen: isOpen }),

  isSkillsOpen: false,
  toggleSkills: () => set((state) => ({ isSkillsOpen: !state.isSkillsOpen })),
  setSkillsOpen: (isOpen) => set({ isSkillsOpen: isOpen }),

  isWorkOpen: false,
  toggleWork: () => set((state) => ({ isWorkOpen: !state.isWorkOpen })),
  setWorkOpen: (isOpen) => set({ isWorkOpen: isOpen }),

  isCmdOpen: false,
  toggleCmd: () => set((state) => ({ isCmdOpen: !state.isCmdOpen })),
  setCmdOpen: (isOpen) => set({ isWorkOpen: isOpen }),

  activeSkillTab: "tech",
  setActiveSkillTab: (tab) => set({ activeSkillTab: tab }),

  chatHistory: [
    { type: "system", text: "HELPER_OS Terminal [Version 2.0.1]" },
    { type: "system", text: "(c) Creative Entity. All rights reserved." },
    { type: "system", text: " " },
    {
      type: "system",
      text: 'Type "help" to see what you can ask me, or "clear" to clear screen.',
    },
  ],
  addChatMessage: (msg) =>
    set((state) => ({ chatHistory: [...state.chatHistory, msg] })),
  clearChatHistory: (initialState) => set({ chatHistory: initialState }),
}));

export default useStore;
