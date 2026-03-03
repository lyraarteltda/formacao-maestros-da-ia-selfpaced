export const BlackFridayBadge = () => {
  return (
    <div className="fixed top-24 right-4 md:top-32 md:right-8 z-50 animate-[fade-in_0.5s_ease-out]">
      <div className="relative group">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-xl opacity-75 animate-[pulse_2s_ease-in-out_infinite] group-hover:opacity-100 transition-opacity"></div>
        
        {/* Main circle */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300 border-4 border-yellow-300 animate-[spin_20s_linear_infinite]">
          <div className="absolute inset-2 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          
          {/* Content */}
          <div className="relative text-center z-10 animate-[spin_20s_linear_infinite_reverse]">
            <div className="text-black font-black text-xl md:text-3xl leading-none drop-shadow-lg">
              70%
            </div>
            <div className="text-black font-bold text-xs md:text-sm uppercase tracking-wider mt-1 drop-shadow-lg">
              OFF
            </div>
            <div className="text-black font-black text-[10px] md:text-xs uppercase mt-1 drop-shadow-lg">
              🔥 Black Friday
            </div>
          </div>
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};
