import Icon from "./components/Icon";
import Header from "./components/layouts/Header";
import TopSection from "./components/layouts/TopSection";

function App() {
  return (
    <main>
      <Icon icon='background' className="
        w-screen absolute -z-10"
      />
      <Header />
      <TopSection />
    </main>
  );
}

export default App;
