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


const NewFeud = () => {
    return (
        <div>
            <Card className='flex flex-col items-center justify-center gap-4'>
                <CardHeader>
                    <CardTitle>Create New Feud</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-start gap-2">
                    <form>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <label htmlFor="name">Feud Name</label>
                            <Input id="name" type="text" className="w-full focus:outline-none focus:ring-none"/>
                        </div>
                        <label>Feud Description</label>
                        <input className='w-full border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <div>
                            <label>Width</label>
                            <input />
                            <label>Length</label>
                            <input />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="w-full flex justify-end">
                    <Button>Save</Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default NewFeud