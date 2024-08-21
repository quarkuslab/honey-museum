import Link from "next/link";
export default function HomePage() {
  return (
    <main className="flex flex-row justify-between ">
      <div className=" bg-yellow-500 h-screen  text-black ">
        <h1 className="text-8xl flex items-center p-32 max-w-5xl ">
          Explore the Natural Richness of Idukki Vattavada Honey Museum
        </h1>
        <p className=" text-black bg-yellow-500 ">
          Your Gateway to Authentic Honey, Chocolates, Spices, and Adventures
        </p>
      </div>
      <div className="flex-1 lg:w-1/2 p-4">
        <img src="assets/images/landing.png" alt="" />
      </div>
    </main>
  );
}
