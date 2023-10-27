"use client";
import React, { useState } from "react";
import style from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Nav_Items = [
  { label: "Project", page: "project" },
  { label: "About", page: "about" },
  { label: "Brand", page: "brand" },
  { label: "Museums", page: "meseums" },
];

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);

  return (
    <section className="navbar fixed w-full h-[100px] z-10">
      <nav className="w-full text-[white]">
        <div className="p-[4%] mx-auto  md:items-center md:flex justify-between ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  width={80}
                  height={25}
                  alt="logo"
                  priority
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => {
                    setNavbar(!navbar);
                  }}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#f5f5f5]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#f5f5f5]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul
                onClick={() => setNavbar(!navbar)}
                className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0"
              >
                {Nav_Items.map((items, ids) => {
                  return (
                    <li key={ids} className={style.nav_item}>
                      <a href={"/#"}>{items.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;