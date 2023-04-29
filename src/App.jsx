import Icon from "./components/Icon";
import Header from "./components/layouts/Header";

function App() {
  return (
    <main>
      <Icon icon='background' className="
        w-screen object-fill absolute -z-10
      "/>
      <Header logo='logo'/>
    </main>
  );
}

export default App;
