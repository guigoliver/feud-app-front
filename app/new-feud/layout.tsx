import { ReactNode } from "react"

const NewFeudLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="bg-red-500 bg-no-repeat bg-cover bg-center w-full h-screen" style={{backgroundImage: 'url(/images/parchment-bg.jpg)' }}>
            <div className="flex flex-col items-center justify-between p-24">
                {children}

            </div>
        </section>
    )
}

export default NewFeudLayout