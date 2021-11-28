import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Navbar: NextPage = () => {
    return (
        <div className="w-screen text-white fixed z-50">
            <p className="space-x-4 flex flex-row content max-w-screen-lg mx-auto">
                <Link href="/">home</Link>
                <Link href="/about">about</Link>
                <Link href="/events">events</Link>
            </p>
        </div>
    )
}

export default Navbar
