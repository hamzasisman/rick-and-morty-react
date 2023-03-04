import React from 'react'
import { Episodes } from './Episodes'

export const Dashboard = () => {
  return (
    <section className="min-h-full relative p-5">
      <h1 className="font-bold text-center text-secondary uppercase text-lg">Rick And Morty Projects</h1>

      <Episodes />

      <p className="text-[10px] absolute bottom-3 left-0 right-0 text-center mb-5">© Hamza Şişman | Rick And Morty Project
        with using <b>Tailwind CSS</b> and <b>React</b>

      </p>
    </section>
  )
}