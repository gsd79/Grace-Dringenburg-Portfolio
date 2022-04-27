
import React, { useState } from 'react'


function Projects() {
    const [isShown, setIsShown] = useState(false);

    return (
        <section id="Projects" className="my-5" >
            <h1 id="projects">Portfolio</h1> 
            {/* look into some scrolling animation */}

            <div className="projectBlurb flex-row space-evenly">               
                <div className="project-card"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>            
                        <img src="https://i.postimg.cc/nF990QFb/Screenshot-2022-03-28-16-19-19.png" alt="butler station landing page"/>
                        {isShown && (                
                        <div className="project-info">Mystery of Butler Station (Fullstack browser game) --
                            <a href="https://github.com/gsd79/Mystery-of-Butler-Station">GitHub</a> -- <a href="https://mystery-of-butler-station.herokuapp.com/">Live</a>
                            </div>
                        )}
                </div>
                <div className="project-card"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>            
                        <img src="https://i.postimg.cc/7HF0bQJw/tiny-Note-Google-Chrome-23-Jan-22-10-36-29-PM.png" alt="tiny-note landing page"/>
                        {isShown && (                
                        <div className="project-info">TinyNote (Tailwind + Javascript + Client side) --
                            <a href="https://github.com/gsd79/tiny-note">GitHub</a> -- <a href="https://gsd79.github.io/tiny-note/">Live</a>
                            </div>
                        )}
                </div>
                <div className="project-card"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>            
                        <img src="https://i.postimg.cc/gdz453f9/02-run-buddy-1.jpg" alt="run buddy landing page"/>
                        {isShown && (                
                        <div className="project-info">Run Buddy (CSS + HTML)  --
                            <a href="https://github.com/gsd79/run-buddy">GitHub</a> -- <a href="https://gsd79.github.io/run-buddy/">Live</a>
                            </div>
                        )}
                </div>
                <div className="project-card"
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>            
                        <img src="https://i.postimg.cc/pxsktpHm/robot-gladiator.jpg" alt="robot gladiator landing page"/>
                        {isShown && (                
                        <div className="project-info">Robot Gladiator (Javascript)  --
                            <a href="https://github.com/gsd79/robot-gladiators">GitHub</a>
                            </div>
                        )}
                </div>



            </div>           
        </section>
    )
}

export default Projects