import useSWR from "swr";
import Spotlight from "../components/Spotlight";

const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage() {
  const { data } = useSWR(URL);

  console.log("data: ", data);

  if (!data) return <div>Loading...</div>;

  function chooseRandomPiece(pieces) {
    const randomNumber = Math.floor(Math.random() * pieces.length);
    return pieces[randomNumber];
  }

  return <Spotlight image={"a"} artist={"s"} />;
}
