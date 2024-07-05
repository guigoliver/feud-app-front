import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const FeudsList = () => {
  return (
    <section className="w-full h-screen flex flex-col py-4 bg-gray-500 items-center justify-center gap-8 ">
        <h1 className="text-white text-2xl font-semibold">CHOOSE THY FEUD</h1>
        <div className="w-2/3 h-3/4 flex flex-col bg-white p-6 rounded-lg">
            <section className="w-full h-full grid grid-cols-2 gap-4 ">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </section>
            <div className="flex flex-row justify-end p-2">
                <Button disabled >See more</Button>
            </div>
        </div>

        
    </section>
  )
}

export default FeudsList