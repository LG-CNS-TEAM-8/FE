import "./App.css";
import Footer from "./components/Footer";
import { Provider } from "./components/ui/provider";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <Provider>
      <div className="App"></div>
    </Provider>
  );
}

export default App;
