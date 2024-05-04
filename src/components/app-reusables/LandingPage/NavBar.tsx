import React from 'react'
import data from "@/app/constants/navbar"
import Link from 'next/link'


const NavBar = () => {

    const firstPart = data.filter(item => item.id >= 1 && item.id <= 5);
    const secondPart = data.filter(item => item.id === 6 || item.id === 7);

    return (
        <div className='bg-primary h-[calc(100vh-70px)] w-[136px] fixed py-3'>

            <nav className='text-white text-sm h-full'>
                <ul className="flex flex-col flex-1 justify-between h-full">
                    <div className="flex flex-col items-center gap-4">
                        {/* Render the first part of the data */}
                        {firstPart.map((item) => (
                            <li key={item.id} >
                                <Link href={item.to} className="flex flex-col items-center text-center gap-1">
                                    <p className="text-2xl">{item.icon}</p>
                                    <p className='text-xs'>{item.name}</p>
                                </Link>
                            </li>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        {/* Render the second part of the data */}
                        {secondPart.map((item) => (
                            <li key={item.id}>
                                <Link href={item.to} className="flex flex-col items-center text-center gap-1">
                                    <p className="text-2xl">{item.icon}</p>
                                    <p className='text-xs'>{item.name}</p>
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar