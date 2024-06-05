const Btns = ({ text, Icon, click }) => {
  return (
    <button
      onClick={click}
      className="w-full !text-nowrap flex flex-col-reverse items-center gap-2 text-[12px] border border-purple-300 py-2 rounded-lg font-[600] text-purple-700 last:after:contents-['Or'] last:after:w-40 relative last:after:h-6 last:after:text-white last:after:bg-green-400 last:after:absolute last:overflow-hidden last:after:top-[-20px] last:after:rotate-[45deg] last:after:right-[-50px] "
    >
      {text}
      <span className="text-purple-600 text-2xl p-2 bg-purple-200 rounded-full shadow-md ">
        {Icon}
      </span>
    </button>
  );
};

export default Btns;
