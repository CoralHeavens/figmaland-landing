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
import mobileBackground from './images/mobileBackground.png';

function App() {
    return (
    <main>
        <img className='lg:hidden absolute -z-10 !w-screen h-full' src={mobileBackground} alt=''/>
        <Icon icon='background' className="hidden lg:block absolute -z-10 !w-screen" />
        <header className="lg:h-[52vw] mb-12 w-screen">
            <Header />
            <TopSection />
        </header>
        <Features />
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
