import { create } from 'zustand'

interface SideBar {
    isOpen: boolean,
    isToggle: () => void
}

export const useSideBar = create<SideBar>((set) => ({
    isOpen: true,
    isToggle: () => set((state) => ({isOpen: !state.isOpen}))
}))