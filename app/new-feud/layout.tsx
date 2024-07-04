import { ReactNode } from "react"

const NewFeudLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="bg-red-500 bg-no-repeat bg-cover bg-center w-full h-screen" style={{backgroundImage: 'url(/images/parchment-bg.jpg)' }}>
            <section className="flex flex-col items-center justify-between p-24">
                {children}

            </section>
        </main>
    )
}

export default NewFeudLayout