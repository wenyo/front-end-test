import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Content from "./component/Content";
import { newsDataGet } from "./util/api";

function App() {
  newsDataGet().then((x) => console.log(x.data));

  return (
    <main className="h-screen flex flex-col flex-wrap">
      <Header />
      <div className="grow flex flex-row">
        <Nav />
        <Content />
      </div>
      <Footer />
    </main>
  );
}

export default App;
