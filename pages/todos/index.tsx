const TodosHomePage = () => {
  return (
    <div className="h-screen w-screen flex gap-1">
      <aside className="h-full w-40 bg-slate-600 text-center">
        <h1 className="text-xl p-2">My Todos</h1>
        <div>Favorited Notes</div>

        <div className="border-b-[1px] border-b-slate-500 border-t-[1px] border-t-slate-500 m-4">
          <ul className="flex flex-col gap-4 p-4 truncate">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, facilis?
            </li>
            <li>Note 2</li>
            <li>Note 3</li>
            <li>Note 4</li>
            <li>Note 5</li>
          </ul>
        </div>
      </aside>
      <main className="h-full w-full">TODO</main>
    </div>
  );
};

export default TodosHomePage;
