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
import background from './images/background.png';
import joinClassNames from "./helpers/joinClassNames";

function App() {
    return (
    <main>
        <div className='absolute -z-10 w-screen h-full overflow-x-hidden'>
            <img className='lg:hidden w-screen h-full object-cover border-none' src={mobileBackground} alt=''/>
            <img className='hidden bg-white lg:block -z-10 w-screen h-full max-h-[930px] object-cover' src={background} alt=''/>
            <div className={joinClassNames(
                'bg-white -mt-[44px] -ml-32 w-full h-64 rotate-[24deg]',
                'lg:-mt-6 lg:rotate-[12deg]'
            )} />
            <div className={joinClassNames(
                'bg-white -mt-[244px] ml-24 w-full h-64 -rotate-[23.5deg]',
                'lg:-mt-[252px] lg:-rotate-[12deg]'
            )} />
        </div>
        <header className="mb-[480px] lg:mb-[368px] w-screen">
            <Header />
            <TopSection />
        </header>
        <Features />
        <Organize />
        <Subscribe />
        <Partners />
        <Testimonials />
        <Pricing />
        <ContactUs />
        <footer>
            <Footer />
        </footer>
    </main>
    );
}

export default App;
