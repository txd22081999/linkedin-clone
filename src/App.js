import "./App.scss";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Core from "./components/Core";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LeftBar />
        <Core />
        <RightBar />
      </main>
    </div>
  );
}

export default App;
