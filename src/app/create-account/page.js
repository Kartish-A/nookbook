import React from "react";
import Image from "next/image";
import Link from "next/link";

import { styles } from "../../../styles";
import MySVG from "../../../public/Sign up-bro-light.svg";
import MySVGDark from "../../../public/Sign up-bro-dark.svg";

function CreateAccount() {
  return (
    <div className="flex h-full">
      <div className="flex w-full">
        <div className="right_section w-1/2 h-full flex flex-col justify-around pl-8">
          <div
            className={`${styles.text} text-center text-3xl flex justify-start`}
          >
          Create Your Account
          </div>
          <div className="form h-2/3 w-1/2 flex flex-col justify-around">
            <div>
              <label className={`block ${styles.text} pl-6`} for="firstName">
                First Name
              </label>
              <input
                id="firstName"
                placeholder="enter your first name"
                type="name"
                name="firstName"
                autoComplete="firstName"
                required
                className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none pl-6`}
              />
            </div>

            <div>
              <label className={`block ${styles.text} pl-6`} for="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                placeholder="enter your last name"
                type="name"
                name="lastName"
                autoComplete="lastName"
                required
                className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none pl-6`}
              />
            </div>

            <div>
              <label className={`block ${styles.text} pl-6`} for="email">
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
                placeholder=" Create a password"
                type="password"
                name="password"
                autoComplete="userPasswrod"
                required
                className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none pl-5 `}
              />
            </div>

            <div>
              <label className={`block ${styles.text} pl-6`} for="password">
                password confirm
              </label>
              <input
                id="password"
                placeholder=" Repeat your password"
                type="password"
                name="password"
                autoComplete="userPasswrod"
                required
                className={`w-full mt-2 border-b ${styles.borderColor} bg-transparent focus:outline-none pl-5 `}
              />
            </div>

            <div className="self-end pt-2">
              <button className="w-48 h-8 bg-pickledBluewood rounded text-paleLeaf dark:bg-paleLeaf dark:text-pickledBluewood">
                Create Account
              </button>
            </div>
          </div>
          {/*  -----------  NAVIGATING TO SIGNUP PAGE IN CASE NO ACCOUNT ---------- */}
          <div className="flex w-1/2 justify-start">
            <div className={`${styles.text}`}>Already have account?</div>
            <div className="pl-4">
              <Link href="/login">
                <p className={`${styles.text} text-sm font-['Lemonada'] pl-4`}>
                  Login here
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

export default CreateAccount;
