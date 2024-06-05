export default function Button({ children, ...props }) {
  return (
    <button
      className="px-10 py-2 text-xs md:text-base rounded-md bg-purple-600 text-white hover:bg-purple-700 hover:text-stone-100"
      {...props}
    >
      {children}
    </button>
  );
}
