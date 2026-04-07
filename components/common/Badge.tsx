
function Badge({ text = "30% off until 4d : 2h : 41m : 17s" }: { text: string }) {
  return (
    <div className="relative w-fit rounded-xl p-px bg-gradient-to-br from-[#2466F2] via-transparent to-[#2466F2] z-20">
      <div className="flex items-center justify-center gap-3 bg-[#E5E5EA] dark:bg-[#171B21] py-2 px-4 rounded-xl relative">
        <div className="w-2.5 h-2.5 rounded-full bg-[#2466F2]" />
        <div className="w-3 h-3 rounded-full bg-[#2466F2] blur-[5px] absolute left-3.5" />
        <span className="text-[0.938rem] text-black dark:text-[#D0D5D9]">{text}</span>
      </div>
    </div>
  );
}

export default Badge;
