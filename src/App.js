import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Content from "./component/Content";

function App() {

  return (
    <main className="h-screen flex flex-col flex-wrap">
      <Header />
      <div className="grow flex flex-row h-10">
        <Nav />
        <Content />
      </div>
      <Footer />
    </main>
  );
}

export default App;
