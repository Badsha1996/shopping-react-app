import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Idata } from "../types/Idata"


export default function Details() {
    const [details, setDetails]  = useState<Idata>()
    const location = useLocation()
    return (
        <div>

        </div>
    )
}
