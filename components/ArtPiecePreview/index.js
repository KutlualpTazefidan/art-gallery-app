import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
export default function ArtPiecePreview({ image, title, artist }) {
  return (
    <article>
      {title && <h3>{title}</h3>}
      <Image
        src={image}
        width={300}
        height={300}
        alt={`Image titled ${title}`}
      ></Image>
      <div>
        <FavoriteButton isFavorite={0} onToggleFavorite={0} /> {artist}
      </div>
    </article>
  );
}
