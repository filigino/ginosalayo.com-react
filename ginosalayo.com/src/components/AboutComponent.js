// Presentational component (via functional component)
import React from 'react'
import { Fade } from 'react-animation-components'

const About = () => {
    return (
        <Fade in>
            <div className="container text-dark">
                <div className="row row-content">
                    <div className="col-12">
                        <font size="+1">
                            <p>
                                Hello, Gino here! I'm a Mechatronics Engineering graduate from McMaster University. Motivated to take on new challenges with the drive to overcome them, I work hard to ensure that everything I do is done to the best of my ability. My latest challenges include pursuing a career in Software Engineering and learning how to apply my technical knowledge in ways that will help others.
                            </p>
                            <p>
                                If you would like to chat, give me a shout at <a href="mailto:gino.salayo@gmail.com">gino.salayo@gmail.com</a> or connect with me through <a href="https://www.linkedin.com/in/ginosalayo/" target="_">LinkedIn</a>.
                            </p>
                        </font>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default About
