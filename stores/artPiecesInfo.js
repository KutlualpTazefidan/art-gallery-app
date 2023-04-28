import { create } from "zustand";
import { uid } from "uid";

export const useArtPiecesInfo = create((set, get) => ({
  // favoritePieces
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
  // comments
  commentsBySlug: { cool: [], blah: [{ text: "my comment" }] },
  addComment: (slug, comment) => {
    comment.id = uid();
    set(({ commentsBySlug }) => {
      if (!commentsBySlug[slug]) {
        const copy = { ...commentsBySlug };
        copy[slug] = [comment];
        return { commentsBySlug: copy };
      } else {
        const copy = { ...commentsBySlug };
        copy[slug] = [...copy[slug], comment];
        return { commentsBySlug: copy };
      }
    });
  },
}));
