import Image from "next/image";

import { styles } from "../../styles";
import MySVG from "../../public/Woman-reading-light.svg";
import MySVGDark from "../../public/Woman_reading_dark.svg";
import SearchInput from "./components/SearchInput";
import Categories from "./components/Categories";

export default function Home() {
  return (
    <>
      <div className="h-full flex flex-col justify-between sm:flex-row px-10">
        <div className="sm:w-1/2 h-full flex flex-col justify-around">
          <p
            className={`${styles.text} welcome h-64 lg:text-xl leading-loose md:text-lg sm:text-xs`}
            style={{ whiteSpace: "pre-line" }}
          >
            {" "}
            Welcome to BookNook Store,
            <br></br>your gateway to captivating stories and knowledge.
            <br></br> Explore our diverse collection of books, spanning classic
            literature to modern bestsellers.
            <br></br> Find your next literary adventure with us.
            <br></br>
            Happy reading!{" "}
          </p>
          <div className="">
            <SearchInput />
          </div>
          <div className="">
            <Categories />
          </div>
        </div>

        {/* --------- SVG SECTION ----------  */}
        <div className="svg lg:w-1/2 md:w-1/3 dark:hidden flex justify-center">
          <Image
            priority
            src={MySVG}
            width={400}
            height={240}
            alt="Woman sitting and reading a book"
          />
        </div>
        <div className="svg lg:w-1/2 md:w-1/3 hidden dark:flex justify-center">
          <Image
            priority
            width={400}
            height={240}
            src={MySVGDark}
            alt="Woman sitting and reading a book"
          />
        </div>
      </div>
    </>
  );
}
