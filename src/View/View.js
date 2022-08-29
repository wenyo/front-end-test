import Content from "../component/Content";
import Nav from "../component/Nav";

function View({ props }) {
  return (
    <div className="grow flex flex-row h-10">
      <Nav />
      <Content props={props.text} />
    </div>
  );
}

export default View;
