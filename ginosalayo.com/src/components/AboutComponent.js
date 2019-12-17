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
                            <p>Hi there! I’m Gino. I recently graduated from McMaster University with a degree in Mechatronics Engineering. I’m excited by new challenges and put 100% effort into everything I do. My latest challenge includes pursuing a career in software development and learning how to apply my technical knowledge in ways that will help others.
                                <br /><br />If you would like to chat, feel free to send me an email at <a href="mailto:gino.salayo@gmail.com">gino.salayo@gmail.com</a> or connect with me through <a href="https://www.linkedin.com/in/ginosalayo/" target="_">LinkedIn</a>.
                            </p>
                        </font>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default About
