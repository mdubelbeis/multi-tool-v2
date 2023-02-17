const TodosHomePage = () => {
  return (
    <div className="relative top-0 bottom-0 -left-40 h-screen w-screen flex">
      <aside className="h-full w-40 bg-slate-600 text-center">
        <h1 className="text-xl p-2">My Todos</h1>
        <div>Favorited Notes</div>

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
      </aside>
      <div className="fixed left-0 top-[50%] -translate-y-[50%] flex items-center h-20 bg-slate-500 p-3 ">
        <span className="place-self-center text-white">{">"}</span>
      </div>
      <main className="h-full w-full">TODO</main>
    </div>
  );
};

export default TodosHomePage;
