import "../styles/globals.css";
import "../styles/ambassadors.css";
import HeaderMain from "./components/HeaderMain";
import { useRouter } from "next/router";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { wrapper, store } from "../store";

function App({ Component, pageProps }) {
    const router = useRouter();

    return(
        <>
            <Provider store={store}>
                {!router.pathname.includes("/ambassadors") && <HeaderMain />}
                <Component {...pageProps} />
                {!router.pathname.includes("/ambassadors") && <Footer/>}
            </Provider>
        </>
    );
}

export default wrapper.withRedux(App);