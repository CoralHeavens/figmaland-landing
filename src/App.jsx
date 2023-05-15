import Icon from "./components/Icon";
import Features from "./components/layouts/Features";
import Header from "./components/layouts/Header";
import Organize from "./components/layouts/Organize";
import TopSection from "./components/layouts/TopSection";
import Subscribe from "./components/layouts/Subscribe";
import Partners from "./components/layouts/Partners";
import Testimonials from "./components/layouts/Testimonials";
import Pricing from "./components/layouts/Pricing";

function App() {
  return (
    <main>
        <Icon icon='background' className="absolute -z-10"/>
        <div className="h-[52vw] mb-12">
            <Header />
            <TopSection />
        </div>
        <Features />
        <Organize />
        <Subscribe />
        <Partners />
        <Testimonials />
        <Pricing />
    </main>
  );
}

export default App;
