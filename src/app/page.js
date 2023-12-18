import Image from "next/image";

import { styles } from "../../styles";
import MySVG from "../../public/Woman-reading-light.svg";
import MySVGDark from "../../public/Woman_reading_dark.svg";
import SearchInput from "./components/SearchInput";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
      <div className="flex h-5/6">
        <div className="w-1/2 flex flex-col justify-around pl-10">
          <p
            className={`${styles.text} break-words h-64  text-xl font-normal leading-loose`}
          >
            {" "}
            Welcome to BookNook Store, <br></br>your gateway to captivating
            stories and knowledge.<br></br> Explore our diverse collection of
            books, spanning classic literature to modern bestsellers.<br></br>{" "}
            Find your next literary adventure with us.<br></br>
            <br></br> Happy reading!{" "}
          </p>
          <div className="">
            <SearchInput />
          </div>
          <div className="">
            <Categories />
          </div>
        </div>
        <div className="w-1/2 dark:hidden flex justify-center items-center">
          <Image priority src={MySVG} alt="Woman sitting and reading a book" />
        </div>
        <div className="w-1/2 hidden dark:flex justify-center items-center">
          <Image
            priority
            src={MySVGDark}
            alt="Woman sitting and reading a book"
          />
        </div>
      </div>
    </>
  );
}
