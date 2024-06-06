function Li({ children, className }) {
  return (
    <li className={`grid ${className} gap-2 justify-between border-b-2 py-5`}>
      {children}
    </li>
  );
}

export default Li;
