import Head from "next/head";
import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Franco Stanziola</title>
        <meta
          name="Portfolio"
          content="Javascript developer, Franco stanziola"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen">
        <div className="fixed inset-0 max-w-6xl mx-auto h-screen border-l border-r border-zinc-700 bg-primary p-24 text-white ">
          <div className="max-w-6xl mx-auto relative px-24 py-0">
            <NavBar />

            <div className="max-w-2xl flex flex-col gap-5 mt-20">
              <div className="relative w-40 h-40 align-items-center">
                <Image
                  src="/yo.jpg"
                  fill
                  alt=""
                  className="object-center object-cover rounded-full"
                />
              </div>

              <h1 className="text-lg font-semibold-sans tracking-tight text-yellow-300 sm:text-5xl">
                Software Developer and part time Analogic Photographer.
              </h1>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
