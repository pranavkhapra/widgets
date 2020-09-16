import React from 'react'
import Link from './Link'

function Header() {
    return (
        <div className='ui secondary pointing menu'>
            <Link href='/' className='item'>
                accordion
            </Link>
            <Link href='/list' className='item'>
                Search
            </Link>
            <Link href='/dropdown' className='item'>
                dropdown
            </Link>
            <Link href='/translate' className='item'>
                translate
            </Link>
        </div>
    )
}

export default Header
