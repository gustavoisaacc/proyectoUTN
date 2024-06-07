function ManagerTable({ name, icon, total, className }) {
  return (
    <div
      className={`w-full flex flex-col justify-between p-5 ${className} place-content-center gap-5 rounded-md text-2xl text-white`}
    >
      <div className="flex flex-col gap-2 text-center justify-center items-center font-semibold">
        <h2>{name}</h2>
        <span className="text-center">{icon}</span>
      </div>
      <p className="">{total}</p>
    </div>
  );
}

export default ManagerTable;
