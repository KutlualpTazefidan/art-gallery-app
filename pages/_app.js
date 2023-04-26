import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useArtPiecesStore } from "../stores/artPiecesStore";
import { useEffect } from "react";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const setPieces = useArtPiecesStore((state) => state.setPieces);
  const { data: pieces } = useSWR(URL, fetcher);

  useEffect(() => {
    setPieces(pieces || []);
  }, [setPieces, pieces]);

  if (!pieces) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
