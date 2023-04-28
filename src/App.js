
// context
import Context from "./context/Context";

// css
import Styles from "./App.module.css"

// comoponents
import Mainpage from './components/Mainpage';
import Navbar from "./components/Navbar";

function App() {


  return (
    <div className={`${Styles.App}`}>
    <Context>
      <Navbar />
      <Mainpage />
    </Context>
    </div>

  );
}

export default App;
