import {create} from 'zustand';

const useGameContext = create((set) => ({
    gameData: null,
    setGameData: (data) => set({ gameData: data }),
}));

export default useGameContext;
