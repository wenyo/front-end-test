import { Link } from "react-router-dom";
import { NAV_ITEM } from "../util/Enum";

function Nav(params) {
  return (
    <div className="w-[200px] grow-0 shrink-0 shadow-[1px_0_0_0_rgba(0,0,0,0.1)] pt-12">
      <ul className="text-sm">
        {Object.keys(NAV_ITEM).map((key) => {
          const item = NAV_ITEM[key];
          return (
            <li className="px-5 py-2.5 cursor-pointer hover:text-sky-700">
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
