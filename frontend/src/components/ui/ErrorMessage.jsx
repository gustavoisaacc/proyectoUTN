export function ErrorMessage({ children }) {
  return (
    <div className="text-center my-4 bg-red-100 text-red-600 p-3 uppercase text-sm">
      {children}
    </div>
  );
}
