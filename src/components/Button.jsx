function Button({ value }) {
  return (
    <>
      <button
        className="
        bg-[#402873] hover:bg-[#7448cf] text-white px-4 py-2
        rounded-full transition-colors duration-300 cursor-pointer"
      >
        <span>{value}</span>
      </button>
    </>
  );
}

export default Button;
