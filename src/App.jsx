import Icon from "./components/Icon";
import Features from "./components/layouts/Features";
import Header from "./components/layouts/Header";
import Organize from "./components/layouts/Organize";
import TopSection from "./components/layouts/TopSection";

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
    </main>
  );
}

export default App;
