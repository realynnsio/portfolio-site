'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SealIcon, { AboutIcon, ContactIcon, ProjectsIcon } from './Icons';
import NavButton from './NavButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-linear-to-b from-white via-white/80 to-white/0 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#top" className="flex items-center space-x-3 rtl:space-x-reverse">
          <SealIcon 
            className="fill-dive-100"
            style={{width:40, height:40, marginRight: 16, marginLeft: 10}} />
          <span className="self-center text-4xl whitespace-nowrap font-jersey text-dive-100">alma-nashrida</span>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-white/30 backdrop-blur-xs rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:backdrop-blur-none">
            <li>
              <NavButton icon={<AboutIcon/>} href="#about">About</NavButton>
            </li>
            <li>
              <NavButton icon={<ProjectsIcon/>} href="#projects">Projects</NavButton>
            </li>
            <li>
              <NavButton icon={<ContactIcon/>} href="#contact">Contact</NavButton>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
