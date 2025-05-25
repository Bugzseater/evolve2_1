import React from "react";

const prizes = [
    {
        title: "Runners Up",
        amount: "60,000 LKR",
        color: "#C0C0C0", // Silver
        icon: "🥈",
    },
    {
        title: "Winner",
        amount: "100,000 LKR",
        color: "#FFD700", // Gold
        icon: "🥇",
    },
    {
        title: "2nd Runner Up",
        amount: "40,000 LKR",
        color: "#CD7F32", // Bronze
        icon: "🥉",
    },
];

const PriceUC: React.FC = () => (
    <section className="py-8 bg-[#080111] w-full">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-8 px-2 md:px-0">
            {prizes.map((prize) => (
                <div
                    key={prize.title}
                    className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-lg p-6 md:p-8 min-w-[220px] w-full sm:w-auto text-center border-t-8 hover:scale-105 transition-transform duration-200"
                    style={{ borderTopColor: prize.color }}
                >
                    <div className="text-4xl md:text-5xl mb-3 md:mb-4">{prize.icon}</div>
                    <div className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-white/90">{prize.title}</div>
                    <div className="text-xl md:text-2xl font-bold" style={{ color: prize.color }}>{prize.amount}</div>
                </div>
            ))}
        </div>
    </section>
);

export default PriceUC;