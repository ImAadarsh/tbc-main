import "../styles/globals.css";
import "../styles/ambassadors.css";
import HeaderMain from "./components/HeaderMain";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    return(
        <>
            {!router.pathname.includes("/ambassadors") && <HeaderMain />}
            <Component {...pageProps} />
        </>
    );
}
