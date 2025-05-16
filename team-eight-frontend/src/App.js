import "./App.css";
import Footer from "./components/Footer";
import { Provider } from "./components/ui/provider";
import Mypage from "./pages/Mypage";
import MypageEdit from "./pages/MypageEdit";
import MypageSettings from "./pages/MypageSettings";

function App() {
  return (
    <Provider>
      <div className="App">
        <MypageSettings></MypageSettings>
      </div>
    </Provider>
  );
}

export default App;
