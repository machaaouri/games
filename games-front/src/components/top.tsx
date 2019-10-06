import * as React from "react"

export const Top =  (p: { 
    showModal:() => void,
    trigger: () => void
}) => {
    return (
        <ol className="breadcrumb">
            <li className="breadcrumb-item font-weight-bold">Games</li>
            <li className="ml-auto">
                <button className="btn btn-light" onClick={() => p.showModal()}>New game</button>
                <button className="btn btn-light" onClick={() => p.trigger()} >Trigger process</button>
            </li>
        </ol>
    )
}