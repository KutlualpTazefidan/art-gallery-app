import { create } from "zustand";

export const useArtPiecesInfo = create((set, get) => ({
  favoritePieces: [],
  addToFavorites: (pieceSlug) => {
    set((state) => {
      return { favoritePieces: [...get().favoritePieces, pieceSlug] };
    });
  },
  removeFavorite: (pieceSlug) => {
    set((state) => {
      const filteredFavoritePieces = state.favoritePieces.filter(
        (piece) => piece !== pieceSlug
      );
      return { favoritePieces: filteredFavoritePieces };
    });
  },
}));
