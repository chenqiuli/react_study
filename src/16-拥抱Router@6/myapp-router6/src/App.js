import './App.css';
import { BrowserRouter, } from "react-router-dom"; // HashRouter,
import IndexRouter from './routers';
import Tabbar from './components/Tabbar/Tabbar';


function App () {
  return (
    <BrowserRouter>
      <IndexRouter />

      <Tabbar />
    </BrowserRouter>
  );
}

export default App;
