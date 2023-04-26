import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { pieces } = useSWR(URL, fetcher);

  console.log("pieces: ", pieces);

  if (!pieces) return <div>Loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={pieces} />
    </>
  );
}
