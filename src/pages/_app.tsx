import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import GlobalStyles from "../../components/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
