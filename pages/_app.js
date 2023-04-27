import { useEffect } from "react";
import { SWRConfig } from "swr";
import useSWR from "swr";

import GlobalStyle from "../styles";

import { useArtPiecesStore } from "../stores/artPiecesStore";

import Layout from "../components/Layout";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
