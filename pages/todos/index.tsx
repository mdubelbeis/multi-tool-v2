import { useState } from "react";

const TodosHomePage = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true);
  const [asideLeftPos, setAsideLeftPos] = useState<string>("left-0");
  const [menuToggleBtnLeftPosition, setMenuToggleBtnLeftPosition] =
    useState<string>("left-[294px]");

  const handleMenuToggle = () => {
    setMenuIsOpen(!menuIsOpen);

    if (menuIsOpen) {
      setAsideLeftPos("left-0");
      setMenuToggleBtnLeftPosition("left-[294px]");
    } else {
      setAsideLeftPos("-left-72");
      setMenuToggleBtnLeftPosition("-right-[35px]");
    }
  };

  return (
    <div className={`h-screen w-screen flex`}>
      <aside
        className={`relative ${asideLeftPos} top:0 bottom:0 h-screen w-9/12 bg-slate-600 text-center shadow-xl shadow-slate-800`}
      >
        <h1 className="text-xl p-2">TODOS</h1>
        <div>Favorited TODOS??</div>

        <div className="border-b-[1px] border-b-slate-500 border-t-[1px] border-t-slate-500 m-4">
          <ul className="flex flex-col gap-4 p-4 truncate">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, facilis?
            </li>
            <li>Lorem amet consectir</li>
            <li>ispusum odispe odipie gite</li>
            <li>itufe e</li>
            <li>piesrt tirst t</li>
          </ul>
        </div>
        <div
          onClick={handleMenuToggle}
          className={`absolute ${menuToggleBtnLeftPosition} top-[50%] -translate-y-[50%] flex items-center h-20 bg-slate-500 p-3 rounded-tr-xl rounded-br-xl shadow-2xl hover:cursor`}
        >
          <span className="place-self-center text-white">{">"}</span>
        </div>
      </aside>
      <main className="">
        <a href="https://www.masondubelbeis.com">Mason J. Dubelbeis</a>
      </main>
    </div>
  );
};

export default TodosHomePage;
