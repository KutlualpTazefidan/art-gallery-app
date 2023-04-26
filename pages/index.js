import ArtPieces from "../components/ArtPieces";

export default function HomePage({ pieces }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
