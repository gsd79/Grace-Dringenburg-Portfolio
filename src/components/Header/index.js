import React from 'react';
import Nav from '../../components/Nav';

function Header() {


    return (
        <header className='flex-row p-5 space-between'>
            <h1>
                <a data-testid="link" href="/">
                    Grace Dringenburg
                </a>
            </h1>
            <Nav />
        </header>
    )
}

export default Header;