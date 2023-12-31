import Image from "next/image";

import { styles } from "../../../styles";
import MySVG from "../../../public/Book_lover-cuate_light.svg";
import MySVGDark from "../../../public/Book_lover_cuate_dark.svg";

export default function About() {
  return (
    <>
      <div className="flex h-full sm:flex-row">
        <div className="sm:w-1/2 h-2/3 flex flex-col justify-around pl-10">
          <div className="flex justify-start">
          <div className={`${styles.text} text-center text-4xl font-bold font-['Lemonada']`}>About us</div>
          </div>
          <p
            className={`${styles.text} h-64 lg:text-xl leading-loose md:text-lg sm:text-xs`}
            style={{ whiteSpace: "pre-line" }}
          >
            {" "}
            Welcome to BookNook Store, <br></br>your gateway to captivating
            stories and knowledge.<br></br> Explore our diverse collection of
            books, spanning classic literature to modern bestsellers.<br></br>{" "}
            Find your next literary adventure with us.<br></br>
            <br></br> Happy reading!{" "}
          </p>
        </div>

        {/* --------- SVG SECTION ----------  */}

        <div className="svg w-1/2 dark:hidden flex justify-center items-center">
          <Image priority src={MySVG} alt="Woman sitting and reading a book" />
        </div>
        <div className="svg w-1/2 hidden dark:flex justify-center items-center">
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
