import Head from "next/head";
import { Inter } from "@next/font/google";
import NavBar from "../components/NavBar";

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
          <div className="max-w-6xl mx-auto relative px-24"> 
          <NavBar/>
          </div>

        </div>
      </div>
    </>
  );
}
