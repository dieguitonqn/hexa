import React from "react"
import Link from "next/link"

export default function CaseC (){
    return (
        <div>
            <h1> Caso C</h1>
            <Link
                href={"/exitos"}
                className="bg-blue-500 px-4 py-2 rounded-md m-2"

            >Volver</Link>
        </div>

    )
}