import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-yellow-50 grid grid-rows-10 overflow-hidden">
      {/* header */}
      <div className="flex justify-between items-center pt-4 px-8 md:px-16 row-span-1">
        <div>
          <Image
            src="/medium.svg" 
            alt="Logo"
            className=""
            width={120}
            height={40}
            priority
          />
        </div>
        <div className="flex justify-end items-center gap-x-4">
          <nav className="flex text-base gap-4">
            <div className="hidden md:flex gap-x-4">
              <a href="#">Our story</a>
              <a href="#">Membership</a>
              <a href="#">Write</a>
            </div>
            <div className="hidden sm:flex">
              <a href="#" className="sm:inline">Sign in</a>
            </div>
          </nav>
          <button className="bg-gray-900 text-white p-2 w-28 text-sm rounded-full">Get Started</button>
        </div>
      </div>
      <hr className="h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700" />
      {/* body */}
      <div className="flex row-span-9 justify-center items-center md:pl-32">
        {/* left */}
        <div className="flex flex-col place-items-start gap-4 p-4 md:w-3/5">
          <div> 
            <h1 className="text-7xl sm:text-8xl font-bold text-left">Human stories & ideas</h1>
          </div>
          <div>
            <p className="text-left text-gray-800">A place to read, write, and deepen your understanding</p>
          </div>
          <div className="flex justify-start">
            <button className="bg-green-700 text-white p-2 w-48 text-xl rounded-full">Start reading</button>
          </div>
        </div>
        {/* right */}
        <div className="relative hidden md:block w-2/5 h-full">
          <Image
            src="/side-hero.webp"
            alt="Logo"
            layout="fill"
            objectFit="contain" // Ensures it covers the container
            className="rounded-lg"
          />
        </div>
      </div>
      {/* footer */}
      <hr className="hidden md:block h-px my-1 bg-gray-100 border-1 dark:bg-gray-700" />
      <div className="w-full h-20 bg-black text-white md:hidden">
        <nav className="flex items-center h-full mx-8 gap-x-4 text-sm">
          <a href="#">About</a>
          <a href="#">Help</a> 
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
      <div className="w-full h-20 text-gray-900 text-sm hidden md:flex justify-center items-center">
        <nav className="flex items-center justify-center h-full mx-8 gap-x-4 text-sm">
          <a href="#">Help</a> 
          <a href="#">Status</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Text to speech</a>
          <a href="#">Teams</a>
        </nav>
      </div>
    </div>
  );
}
