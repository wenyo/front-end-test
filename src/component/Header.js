function Header(params) {
  return (
    <header className="h-[10vh] px-4 flex flex-row items-center justify-start ">
      <h1 className="h-16">
        <img className="h-full" src="./Bing-logo.png" />
      </h1>
      <input type="text" className="ml-4 rounded-full w-1/2 py-2 px-4 text-xs shadow-[2px_2px_8px_0_rgba(0,0,0,0.2)]" value="熱門報導"></input>
    </header>
  );
}
export default Header;
