import React from 'react';
import Logo from "@/components/ui/Header/Logo";
import { DribbbleIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "@/components/ui/icons";

import Link from "next/link";

function Header() {
    return (
        <header className='w-full p-4 px-10 flex items-center justify-between'>

            <Logo/>

            <nav
                className=" w-max py-3 px-8 border-solid border-dark border-2 rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm ">
                <Link href='/' className="mr-2">Home</Link>

                <Link href='/' className="mx-2">About</Link>

                <Link href='/' className="mr-2">Blog</Link>


                <button>
                    <SunIcon className=''/>

                </button>
            </nav>

            <div className=" hidden sm:flex items-center">
                <a href="#" className="inline-block w-6 h-6 mr-4"
                   aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon
                    className="hover:scale-125 transition-all ease duration-200"/></a>
                <a href="#" className="inline-block w-6 h-6 mr-4"
                   aria-label="Reach out to me via Twitter" target="_blank"><TwitterIcon
                    className="hover:scale-125 transition-all ease duration-200"/></a>
                <a href="#"  className="inline-block w-6 h-6 mr-4"
                   aria-label="Check my profile on Github" target="_blank"><GithubIcon
                    className="hover:scale-125 transition-all ease duration-200"/></a>
                <a href="#"  className="inline-block w-6 h-6 mr-4"
                   aria-label="Check my profile on Dribbble" target="_blank"><DribbbleIcon
                    className="hover:scale-125 transition-all ease duration-200"/></a>
            </div>

        </header>
    );
}

export default Header;