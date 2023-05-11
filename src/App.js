
// context
import Context from "./context/Context";
import { CartContext } from "../src/context/CardContext";
// css
import Styles from "./App.module.css"

// comoponents
import Mainpage from './components/Mainpage';
import Navbar from "./components/Navbar";

function App() {


  return (
    <div className={`${Styles.App}`}>
    <Context>
      <CartContext>
        <Navbar />
        <Mainpage />
      </CartContext>
    </Context>
    </div>

  );
}

export default App;
