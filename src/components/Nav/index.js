import React from "react";



function Nav() {
    return (
        <nav className="flex-row space-evenly">
            <ul className="spac-evenly">
                <li><a href="#About">About Me</a></li>
                <li><a href="#Projects">Portfolio</a></li>
                <li><a href="https://docs.google.com/document/d/1R9JLYGuUCZSFg6oAhmfvxJIXrdvQFCxlgH1KJJ7IXNI/edit?usp=sharing">Resume</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>

    );
}

export default Nav;