import React from "react"



export default function Check({ text }: { text: string }) {
    return (
        <div className="flex flex-row items-center text-left">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

            {text}
        </div>

    )
}
