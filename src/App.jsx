import Icon from "./components/Icon";
import Features from "./components/layouts/Features";
import Header from "./components/layouts/Header";
import TopSection from "./components/layouts/TopSection";

function App() {
  return (
    <main>
      <Icon icon='background' className="absolute -z-10"/>
      <div className="h-topSection mb-12">
        <Header />
        <TopSection />
      </div>
      <Features />
    </main>
  );
}

export default App;
