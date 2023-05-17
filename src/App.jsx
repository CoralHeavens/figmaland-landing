import Icon from "./components/Icon";
import Features from "./components/layouts/Features";
import Header from "./components/layouts/Header";
import Organize from "./components/layouts/Organize";
import TopSection from "./components/layouts/TopSection";
import Subscribe from "./components/layouts/Subscribe";
import Partners from "./components/layouts/Partners";
import Testimonials from "./components/layouts/Testimonials";
import Pricing from "./components/layouts/Pricing";
import Footer from "./components/layouts/Footer";
import ContactUs from "./components/layouts/ContactUs";
import useMediaQuery from "./hooks/useMediaQuery";
import {QUERIES} from "./constants/mediaQueries";

function App() {
    const isMobile = !useMediaQuery(QUERIES.tablet);

    return (
    <main>
        <div className='absolute -z-10 bg-[#000000] w-full h-[752px] xl:hidden' />
        <Icon icon={isMobile ? 'backgroundMobile' : 'background'} className="absolute -z-10 !w-[418px]" />
        <header className="lg:h-[52vw] mb-12 w-screen">
            <Header isMobile={isMobile} />
            <TopSection isMobile={isMobile} />
        </header>
        {/*<Features />*/}
        {/*<Organize />*/}
        {/*<Subscribe />*/}
        {/*<Partners />*/}
        {/*<Testimonials />*/}
        {/*<Pricing />*/}
        {/*<ContactUs />*/}
        {/*<footer>*/}
        {/*    <Footer />*/}
        {/*</footer>*/}
    </main>
    );
}

export default App;
