import "./App.css";
import Header from "./component/Header"
import { newsDataGet } from "./util/api";

function App() {
  newsDataGet().then((x) => console.log(x.data));

  return <Header/>;
}

export default App;
