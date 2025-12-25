'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const currentRoute = usePathname()
    return (
        <header className='z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between'>
            <Link className='hover:text-neutral-100' href={`mailto:hrshbrdhnn@gmail.com`}>hrshbrdhnn@gmail.com</Link>
            <nav>
                <ul className='flex flex-row gap-2'>
                    <li><Link href={`/`} className={currentRoute === '/' ? 'text-neutral-100' : 'hover:text-neutral-100 transition-colors duration-150'}>Home</Link></li>
                    <li>/</li>
                    <li><Link href={`/post`} className={currentRoute === '/post' ? 'text-neutral-100' : 'hover:text-neutral-100 transition-colors duration-150'} >Posts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header