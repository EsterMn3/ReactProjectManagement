export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-s md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 xs:text-sm xs:px-3 "
      {...props}
    >
      {children}
    </button>
  );
}
