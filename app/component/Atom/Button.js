export default function Button({children, color='bg-blue-500' }) {
  return (
    <button
      className={`${color} text-white px-6 py-2 rounded `}
    >
      {children}
    </button>
  );
}