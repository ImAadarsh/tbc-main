import "../styles/globals.css";
import "../styles/ambassadors.css";
import HeaderMain from "./components/HeaderMain";
import { useRouter } from "next/router";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    return(
        <>
            {!router.pathname.includes("/ambassadors") && <HeaderMain />}
            <Component {...pageProps} />
            {!router.pathname.includes("/ambassadors") && <Footer/>}
        </>
    );
}
