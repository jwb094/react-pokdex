import React from 'react'

export default function Pagination({gototnextpage,gotoprevpage}) {
    return (
        <div>
            {gotoprevpage &&<button onClick={gotoprevpage}>Prev</button>}
            {gototnextpage && <button onClick={gototnextpage}>Next</button>}
        </div>
    )
}
