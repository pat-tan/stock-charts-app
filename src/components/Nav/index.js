import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    

    // Below we will use Link from react router to replace all of our anchor tags. We replace the href from <a> to "to"
    return (
        <nav>
            {/* React router dom way of doing anchor tags <a> */}
            <Link to='/'>Home</Link>
            {/* <Link to='stock'>Stock</Link> */}
            {/* <Link to='giphy'>Giphy</Link> */}
        </nav>
    );
}

export default Nav;
