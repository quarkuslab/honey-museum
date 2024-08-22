import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-between">
      <div className="bg-yellow-500 min-h-screen mt-1 text-black flex items-center w-full">
        <div className="bg-yellow-500 p-32 max-w-6xl">
          <h1 className="text-7xl font-sans bg-yellow-500 p-2 leading-tight">
            Explore the Natural Richness of Idukki at Vattavada Honey Museum
          </h1>
          <p className="text-2xl text-black bg-yellow-500">
            Your Gateway to Authentic Honey, Chocolates, Spices, and Adventures
          </p>
          <button className="mt-7 bg-orange-400 text-gray-50 px-8 py-1 border rounded-full border-transparent">
            Know more
          </button>
        </div>
        <div>
          <img src="/landing.png" alt="Honey Museum" />
        </div>
      </div>
    </main>
  );
}
