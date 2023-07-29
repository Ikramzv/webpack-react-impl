function App() {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <button
        className="rounded-md p-5 bg-slate-900 border border-slate-900 text-white text-sm cursor-pointer
        hover:bg-slate-50 hover:text-slate-900 duration-200"
        onClick={console.log}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
