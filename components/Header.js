import React from 'react'
import Image from 'next/image'
import Logo from "../Images/logo-removebg.png"
import { useRouter } from 'next/router'
import { useRef } from 'react'
import {XIcon, MicrophoneIcon,SearchIcon} from '@heroicons/react/outline'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'


function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (event) => {
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex p-4 sm:p-6  w-full  items-center'>
            <Image className="cursor-pointer hidden sm:flex" src={Logo} width={75} height={45} onClick={() => router.push("/")}  />

            <form onSubmit={search} className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
                <input ref={searchInputRef} className="flex-grow w-full focus:outline-none" type="text" />

                <XIcon className="h-7 sm:mr-3 text-gray-S88 cursor-pointer transition duration-180 transform hover:scale-125"
                onClick={() => searchInputRef.current.value = ''} 
                />

                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>

                <SearchIcon onClick={search} className="h-6 mr-3 hidden sm:inline-flex text-blue-500 pl-4 border-gray-300 cursor-pointer" />
            </form>
            <Avatar className="ml-auto hidden sm:flex"/>
            </div>

            <HeaderOptions/>
        </header>


    )
}

export default Header;