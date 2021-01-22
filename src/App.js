import "./App.scss";
import Header from "./components/Header";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Core from "./components/Core";
import Login from "./components/Login";

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  console.log(user);

  return (
    <div className="App">
      <Header />
      {/* <main>
        <LeftBar />
        <Core />
        <RightBar />
      </main> */}
      <Login />
    </div>
  );
}

export default App;
