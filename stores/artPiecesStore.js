import { create } from "zustand";

export const useArtPiecesStore = create((set) => ({
  pieces: [],
  setPieces: (pieces) => {
    set((state) => {
      return { pieces: pieces };
    });
  },
}));
