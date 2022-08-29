function Header(params) {
  return (
    <header className="w-full h-[12vh] px-4 flex flex-row items-center justify-start shadow-[0_1px_0_0_rgba(0,0,0,0.1)]">
      <h1 className="h-16">
        <img className="h-full" src="./Bing-logo.png" />
      </h1>
      <div className="w-1/2 ml-4">
        <input type="text" className=" rounded-full w-full py-2 px-4 text-xs shadow-[2px_2px_8px_0_rgba(0,0,0,0.2)]" value="熱門報導"></input>
      </div>
    </header>
  );
}
export default Header;
