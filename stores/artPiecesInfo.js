import { create } from "zustand";

export const useArtPiecesInfo = create((set) => ({
  favoritePieces: [],
  setArtPiecesInfo: (pieceSlug) => {
    set((state) => {
      return { favoritePieces: pieceSlug };
    });
  },
}));
