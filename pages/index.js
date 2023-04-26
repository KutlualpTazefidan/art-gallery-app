import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data } = useSWR(URL);

  console.log("data: ", data);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <ArtPieces pieces={data} />
    </div>
  );
}
