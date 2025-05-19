import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { Provider } from "./components/ui/provider";
import Mypage from "./pages/Mypage";
import MypageEdit from "./pages/MypageEdit";
import MypageSettings from "./pages/MypageSettings";
import Search from "./components/Search";
import Home from "./pages/Home";

function App() {
  return (
    <Provider>
      <div className="App">
        <NavBar></NavBar>
        <Search></Search>
        <Mypage></Mypage>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
