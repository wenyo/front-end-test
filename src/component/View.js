import Content from "./Content";
import Nav from "./Nav";

function View({ props }) {
  return (
    <div className="grow flex flex-row h-10">
      <Nav />
      <Content props={props.text} />
    </div>
  );
}

export default View;
