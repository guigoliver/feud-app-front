import { ReactNode } from "react"

const NewFeudLayout = ({children}: { children: ReactNode}) => {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            {children}
        </main>
    )
}

export default NewFeudLayout