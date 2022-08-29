import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import View from "./View/View";
import { NAV_ITEM } from "./util/Enum";

function App() {
  return (
    <main className="h-screen flex flex-col flex-wrap">
      <Header />

        <Routes>
          {Object.keys(NAV_ITEM).map((key) => {
            const item = NAV_ITEM[key];
            return <Route element={<View props={item} />} path={item.path} key={key}></Route>;
          })}
        </Routes>

      <Footer />
    </main>
  );
}

export default App;
