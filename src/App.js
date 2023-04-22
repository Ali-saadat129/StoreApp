
// context
import Context from "./context/Context";


// comoponents
import Mainpage from './components/Mainpage';
import Navbar from "./components/Navbar";

function App() {


  return (
    <Context>
      <Navbar />
      <Mainpage />
    </Context>


  );
}

export default App;
