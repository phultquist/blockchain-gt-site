import React from 'react'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import { draw, setup } from '../p5/base.p5'

const Sketch = dynamic(import('react-p5'), { ssr: false })

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-primary to-primary-dark w-screen h-screen">
        <Navbar />
        <div className="flex w-full h-full">
          <div className='absolute'>
            <Sketch setup={setup} draw={draw} />
          </div>
          <div className="m-auto text-white">
            <h1 className="uppercase text-center font-bold text-5xl tracking-wider">Blockchain</h1>
            <h2 className="uppercase text-center font-light text-2xl">At Georgia Tech</h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 pt-16">
        <h2 className="uppercase font-bold text-3xl text-center">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="text-center">
            test
          </div>
          <div className="text-center">
            test
          </div>
          <div className="text-center">
            test
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
