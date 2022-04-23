import Head from "next/head";
import Image from "next/image";
import Logo from "../Images/logo-removebg.png"
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef} from "react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  }


  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>Gogle</title>
        <meta name="description" content="Gogle a genune clone of google using google apis" />
        <link rel="icon" href="" />
      </Head>

      {/* Left */}
      <header className="flex justify-between p-5 text-sm text-gray-700">
        <div className="flex items-center space-x-4 ">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Images</p>
          <p className="link"> Gmail</p>

          {/*hero icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer " />

          {/* Avatar */}
          <Avatar />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-col items-center justify-center  " >
        <Image
          src={Logo}
          alt="Gogle logo"
          width="320px"
          height="180px"
        />
        <form onSubmit={search} className="flex hover:shadow-lg p-2  items-center border border-gray-300 mt-5 w-3/4 sm:w-1/2 rounded-3xl ">
          <SearchIcon className="h-5 ml-3 text-gray-400" />
          <input ref={searchInputRef}  type="text" className="border-none p-2 pl-4 m-0   flex-grow focus: outline-none" />
          <MicrophoneIcon className="h-5 mr-3 text-gray-400" />
        </form>
        <div>
          <button onClick={search} className="btn">Gogle Search</button>
          <button onClick={search} className="btn">I&apos;am Feeling Lucky</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
