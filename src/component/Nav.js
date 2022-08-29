function Nav(params) {
  return (
    <div className="w-[200px] grow-0 shrink-0 shadow-[1px_0_0_0_rgba(0,0,0,0.1)] pt-12">
      <ul className="text-sm">
        <li className="px-5 py-2.5 cursor-pointer hover:text-sky-700">熱門報導</li>
        <li className="px-5 py-2.5 cursor-pointer hover:text-sky-700">台灣</li>
        <li className="px-5 py-2.5 cursor-pointer hover:text-sky-700">中國</li>
      </ul>
    </div>
  );
}

export default Nav;
