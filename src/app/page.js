import Image from "next/image";

import { styles } from "../../styles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MySVG from "../../public/Woman-reading-light.svg";
import MySVGDark from "../../public/Woman_reading_dark.svg";
import SearchInput from "./components/SearchInput";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <div className="container flex">
      <Sidebar />
      <div className="nav_main_container flex flex-col">
        <Navbar />
        <div className="flex p-6 h-full">
          <div className="h-full flex flex-col justify-around pl-8">
            <p className={`${ styles.text} break-words h-64  text-xl font-normal leading-loose`}>
              {" "}
              Welcome to BookNook Store, <br></br>your gateway to captivating
              stories and knowledge.<br></br> Explore our diverse collection of
              books, spanning classic literature to modern bestsellers.<br></br> Find
              your next literary adventure with us.<br></br><br></br> Happy reading!{" "}
            </p>
            <div className="">
              <SearchInput />
            </div>
            <div className="">
              <Categories />
            </div>
          </div>
          <div className="w-1/2 dark:hidden flex justify-center items-center">
            <Image
              priority
              src={MySVG}
              alt="Woman setting and reading a book"
            />
          </div>
          <div className="w-1/2 hidden dark:flex justify-center items-center">
            <Image
              priority
              src={MySVGDark}
              alt="Woman setting and reading a book"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
