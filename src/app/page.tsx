"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-dvh py-8">
      <div className="w-10/12 mx-auto flex items-center">
        {/* left */}
        <div className="w-6/12 space-y-10">
          <div className="space-y-1">
            <p className="text-xl">Hello there!</p>
            <p className="text-6xl font-extrabold">
              I am <span className="text-slate-500">Ade Prastyo</span>
            </p>
            <p className="text-3xl">
              A Junior{" "}
              <span className="border-slate-300 border-b">
                {" "}
                Front End Engineer{" "}
              </span>
            </p>
          </div>
          <p className="w-11/12 text-justify font-light">
            Im still need more practice, learn, and experience through projects.
            <br /> So, if you guys have a chance for me through collaboration,{" "}
            <br /> I very open for it!
          </p>

          <button className="inline-flex h-12 rounded-xl animate-shimmer items-center justify-center border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Contact Me!
          </button>
        </div>

        {/* right */}
        <div className="w-6/12 flex justify-center">
          <div className="w-11/12 aspect-square">
            <Image
              src={"/hero.png"}
              width={1000}
              height={1000}
              alt="hero-img"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
