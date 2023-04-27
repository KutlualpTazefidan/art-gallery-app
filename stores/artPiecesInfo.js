import { create } from "zustand";

export const useArtPiecesInfo = create((set, get) => ({
  favoritePieces: [],
  addToFavorites: (pieceSlug) => {
    console.log(pieceSlug, "add");
    console.log(get().favoritePieces, "favoritePieces");
    set((state) => {
      return { favoritePieces: [...get().favoritePieces, pieceSlug] };
    });
  },
  removeFavorite: (pieceSlug) => {
    console.log(pieceSlug, "remove");
    console.log(get().favoritePieces, "favoritePieces");
    set((state) => {
      const filteredFavoritePieces = state.favoritePieces.filter(
        (piece) => piece !== pieceSlug
      );
      return { favoritePieces: filteredFavoritePieces };
    });
  },
}));
