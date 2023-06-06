import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function Featured() {
    return (
        <div>
            <nav>
                <NavLink to={'latest'}>Latest</NavLink>
                <NavLink to={'famous'}>Famous</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Featured