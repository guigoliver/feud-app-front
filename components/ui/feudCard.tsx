import React from 'react'

type FeudCardProps = {
    feudName: string
    feudSize: number
    feudImageUrl: string
}

const FeudCard = ({feudName, feudSize, feudImageUrl}: FeudCardProps) => {
  return (
    <div className="rounded-lg border cursor-pointer bg-card text-card-foreground shadow-sm justify-center align-center bg-no-repeat bg-cover bg-center text-center" style={{backgroundImage: feudImageUrl}}>
        <h2 className="p-4 text-white font-semibold text-lg text-left">
            {feudName}
        </h2>
        <p className="px-4 text-white font-semibold text-sm text-left">{feudSize}</p>
    </div>
  )
}

export default FeudCard