import React from "react";
import Image from "next/image";
import Link from "next/link";

import { styles } from "../../../styles";
import MySVG from "../../../public/Login-light.svg";
import MySVGDark from "../../../public/Login-dark.svg";

function login() {
  return (
    <div className="flex">
      
        <div className="flex w-full">
          <div className="right_section w-1/2 h-2/3 flex flex-col justify-around pl-8">
            <div
              className={`${styles.text} text-center text-3xl flex justify-start`}
            >
              Welcome back
            </div>
            <div className="form h-2/3 py-6 w-1/2 flex flex-col justify-around">
              <div>
                <label className={`block ${styles.text}`} for="email">
                  E-mail
                </label>
                <input
                  id="email"
                  placeholder="your email"
                  type="email"
                  name="email"
                  autoComplete="useremail"
                  required
                  className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none`}
                />
              </div>

              <div>
                <label className={`block ${styles.text}`} for="password">
                  password
                </label>
                <input
                  id="password"
                  placeholder="your password"
                  type="password"
                  name="password"
                  autoComplete="userPasswrod"
                  required
                  className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none `}
                />
              </div>
              <div className="self-end pt-2">
                <button className="w-48 h-8 bg-pickledBluewood rounded text-paleLeaf dark:bg-paleLeaf dark:text-pickledBluewood">
                  Login
                </button>
              </div>
            </div>
            {/*  -----------  NAVIGATING TO SIGNUP PAGE IN CASE NO ACCOUNT ---------- */}
            <div className="flex w-1/2 justify-start">
              <div className={`${styles.text}`}>don’t have account?</div>
              <div className="pl-4">
                <Link href="/create-account">
                  <p
                    className={`${styles.text} text-sm font-['Lemonada'] pl-4`}
                  >
                    Register here
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* --------- SVG SECTION ----------  */}
          <div className="dark:hidden flex justify-center items-center">
            <Image priority src={MySVG} alt="person loging in their account" />
          </div>
          <div className="hidden dark:flex justify-center items-center">
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
