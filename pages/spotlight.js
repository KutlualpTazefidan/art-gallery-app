import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ pieces }) {
  function chooseRandomPiece(pieces) {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomNumber];
  }

  const piece = chooseRandomPiece(pieces);

  return <Spotlight image={piece.imageSource} artist={piece.artist} />;
}
