import React from "react";
import Image from "next/image";
import Link from "next/link";

import { styles } from "../../../styles";
import MySVG from "../../../public/Login-light.svg";
import MySVGDark from "../../../public/Login-dark.svg";

function login() {
  return (
    <div className="flex">
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="right_section sm:w-1/2 h-2/3 flex flex-col justify-around pl-8">
          <div
            className={`${styles.text} text-center text-3xl flex justify-start`}
          >
            Welcome back
          </div>
          <div className="form h-2/3 sm:w-2/3 my-14 flex flex-col justify-around pr-2">
            <div>
              <label className={`block ${styles.text} pl-6 `} for="email">
                E-mail
              </label>
              <input
                id="email"
                placeholder="your email"
                type="email"
                name="email"
                autoComplete="useremail"
                required
                className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none pl-6`}
              />
            </div>

            <div>
              <label className={`block ${styles.text} pl-6`} for="password">
                password
              </label>
              <input
                id="password"
                placeholder="your password"
                type="password"
                name="password"
                autoComplete="userPasswrod"
                required
                className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none pl-6`}
              />
            </div>
            <div className="self-end pt-2">
              <button className="w-48 h-8 bg-pickledBluewood rounded text-paleLeaf dark:bg-paleLeaf dark:text-pickledBluewood">
                Login
              </button>
            </div>
          </div>
          {/*  -----------  NAVIGATING TO SIGNUP PAGE IN CASE NO ACCOUNT ---------- */}
          <div className="flex justify-start">
            <div className={`${styles.text}`}>{"no  account?"}</div>
              <Link href="/create-account">
                <p className={`${styles.text} text-sm font-['Lemonada'] pl-2`}>
                  Register here
                </p>
              </Link>
          </div>
        </div>

        {/* --------- SVG SECTION ----------  */}
        <div className="svg w-1/2 dark:hidden flex justify-center items-center">
          <Image 
            priority
            src={MySVG}
            alt="person loging in their account"
            />
        </div>
        <div className="svg w-1/2 hidden dark:flex justify-center items-center">
          <Image
            priority
            src={MySVGDark}
            alt="person loging in their account"
          />
        </div>
      </div>
    </div>
  );
}

export default login;
