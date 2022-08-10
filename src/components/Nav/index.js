import React from "react";



function Nav() {
    return (
        <nav className="flex-row space-evenly">
            <ul className="spac-evenly">
                <li><a href="#About">About Me</a></li>
                <li><a href="#Projects">Portfolio</a></li>
                <li><a href="https://drive.google.com/file/d/1_17U7NQAgK3Zh6KJ1ZyMAc5zxrivjOlS/view?usp=sharing">Resume</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>

    );
}

export default Nav;