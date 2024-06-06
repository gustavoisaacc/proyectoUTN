function Li({ children }) {
  return (
    <li className="grid grid-cols-4 gap-2 justify-between border-b-2 py-5">
      {children}
    </li>
  );
}

export default Li;
