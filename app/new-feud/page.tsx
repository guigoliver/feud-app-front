'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const NewFeud = () => {
    const handleSubmit = () => {
        console.log('submit')
    }

    return (
        <div>
            <Card className='flex flex-col items-center justify-center gap-4'>
                <CardHeader>
                    <CardTitle>Create New Feud</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-start gap-2">
                    <form className="flex flex-col justify-start gap-2">
                        <div className="grid w-full items-center gap-1.5">
                            <label htmlFor="name">Feud Name</label>
                            <Input id="name" type="text" className="w-full border-none focus:outline-blue-500 focus-visible:outline-none focus-visible:ring-blue-500 focus:ring-none focus:border-blue-500"/>
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="description">Feud Description</label>
                        <Input id="description" type="text" className="w-full border-none focus:outline-blue-500 focus-visible:outline-none focus-visible:ring-blue-500 focus:ring-none focus:border-blue-500"/>

                        </div>
                        <div className="flex flex-row gap-2">
                            <div className="grid w-full items-center gap-1.5">
                            <label htmlFor="width">Width</label>
                            <Input id="width" type="number" className="w-full border-none focus:outline-blue-500 focus-visible:outline-none focus-visible:ring-blue-500 focus:ring-none focus:border-blue-500"/>
                            </div>
                            
                            <div className="grid w-full items-center gap-1.5">
                            <label htmlFor="length">Length</label>
                            <Input id="length" type="number" className="w-full border-none focus:outline-blue-500 focus-visible:outline-none focus-visible:ring-blue-500 focus:ring-none focus:border-blue-500"/>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="w-full flex justify-end">
                    <Button asChild type='submit' onClick={() => handleSubmit()}>
                        <Link href='/feuds-list'>Create</Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default NewFeud