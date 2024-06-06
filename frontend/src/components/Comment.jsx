function Comment({ items }) {
  return (
    <div className="rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 p-10 bg-slate-100 w-[50%]">
      <div className="flex gap-5 text-xl font-semibold ">
        <h1>{items.name}</h1>
        <p>{items.votes}</p>
      </div>
      <p className=" font-normal">{items.comment}</p>
    </div>
  );
}

export default Comment;
