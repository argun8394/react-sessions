import React from 'react'

function Header({ number, increment }) {

    console.log('Header component re-rendered!')

    return (
        <div>
            Headr - {number}
            <br />
            <br />

            <button onClick={increment}>Click</button>
        </div>

    )
}

export default React.memo(Header);