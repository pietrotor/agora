const LagButtons = () => {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="appearance-none outline-none py-1 px-4 text-white font-bold text-[13px] bg-text rounded"
      >
        ES
      </button>
      <button
        type="button"
        className="appearance-none outline-none py-1 px-2 text-[13px] text-text"
      >
        EN
      </button>
    </div>
  );
};

export { LagButtons };
