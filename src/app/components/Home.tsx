import Image from "next/image";

export default function Home() {
  return (
    <section
      className="h-[90vh] grid-rows-2 md:grid-rows-none grid md:grid-cols-9"
      id="home"
    >
      <div className="md:col-span-5 flex flex-col justify-center px-12 bg-slate-800 max-h-[90vh] text-white">
        <h2 className="text-4xl">Hello,</h2>
        <h2 className="text-4xl">My name is MRaditya</h2>
        <h1 className="text-6xl">Welcome to my site</h1>
      </div>
      <div className="md:col-span-4 relative max-h-[90vh]">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-800 to-20%"></div>
      </div>
    </section>
  );
}
