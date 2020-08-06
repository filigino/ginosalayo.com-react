// Presentational component (via functional component)
import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Fade } from 'react-animation-components'

class Projects extends Component {
    render() {
        return (
            <Fade in>
                <div className="container text-dark">
                    <div className="row row-content">
                        <div className="col-12">
                            <font size="+1">
                                <p>
                                    Check out these projects and more at my <a href="https://github.com/filigino" target="_">GitHub</a>!
                                </p>
                            </font>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12 col-sm">
                            <Card>
                                <CardHeader>
                                    <h4 className="mb-0">
                                        Trace - COVID-19 Contact Tracing App
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="col-12 row-content text-center">
                                        <a href="https://github.com/filigino/trace-app" target="_blank">
                                            <img src="img/trace.png" className="img-fluid" alt="Trace Logo"/>
                                        </a>
                                    </div>
                                    <p>
                                        iOS app for COVID-19 contact tracing that uses Bluetooth to detect proximity to other users.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm">
                            <Card>
                                <CardHeader>
                                    <h4 className="mb-0">
                                        8-Bit Image Pixelator
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="col-12 row-content text-center">
                                    <a href="https://github.com/filigino/8-bit-img-pixelator" target="_blank">
                                        <img src="img/8-bit.png" className="img-fluid" alt="Pixelate Image"/>
                                    </a>
                                    </div>
                                    <p>
                                        Java program that uses object-oriented programming, recursion, and the median cut algorithm to generate an 8-bit style pixelized version of a selected image.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12 col-sm">
                            <Card>
                                <CardHeader>
                                    <h4 className="mb-0">
                                        Pathfinding Visualizer
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="col-12 row-content text-center">
                                        <a href="https://github.com/filigino/pathfinder" target="_blank">
                                            <img src="img/a-star.gif" className="img-fluid" alt="Pathfinder Screenshot"/>
                                        </a>
                                    </div>
                                    <p>
                                        Python program that implements depth-first search, breadth-first search, and A* search in a graphical user interface that allows for visualization of the algorithms.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-sm">
                            <Card>
                                <CardHeader>
                                    <h4 className="mb-0">
                                        Peer-to-Peer File Sharer
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <div className="col-12 row-content text-center">
                                    <a href="https://github.com/filigino/p2p-file-sharer" target="_blank">
                                        <img src="img/p2p.jpg" className="img-fluid" alt="P2P Sharer"/>
                                    </a>
                                    </div>
                                    <p>
                                        Python peer-to-peer (P2P) file sharing application that synchronizes files among peers (similar to Dropbox).
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <Card>
                                <CardHeader>
                                    <h4 className="mb-0">
                                        AgriBoost - Smart Farm System
                                    </h4>
                                </CardHeader>
                                <CardBody>
                                    <img src="img/agriboost.png" className="img-fluid row-content" alt="AgriBoost"/>
                                    <p>
                                        Precision agriculture prototype that collects and processes real-time farm data to help to optimize resource usage and maximize crop yields.
                                    </p>
                                    <ul>
                                        <li>
                                            Data collection unit with sensors on farm collects data -> sent to cloud for processing and storage -> data and analytics presented to user (farmer) through web app with user interface
                                        </li>
                                        <li>
                                            Collaborated in a group of 7 using agile development methodologies
                                        </li>
                                        <li>
                                            Won 1st place in McMaster Software Engineering Department Capstone Expo
                                        </li>
                                        <li>
                                            <a href="https://www.eng.mcmaster.ca/cas/news/software-and-mechatronics-students-create-device-farmers-and-museum-world" target="_blank">McMaster University news article</a> about the project
                                        </li>
                                        <li>
                                            Primary contribution was designing the solar-powered chassis that housed the data collection unit
                                        </li>
                                    </ul>
                                    <div className="row row-content">
                                        <div className="col-12 col-sm">
                                            <img src="img/chassis.gif" className="img-fluid" alt="Chassis CAD Model"/>
                                        </div>
                                        <div className="col-12 col-sm">
                                            Technologies used:
                                            <ul>
                                                <li>Solar panel</li>
                                                <li>Power bank (portable phone charger)</li>
                                                <li>PVC piping</li>
                                                <li>Laser-cut fibreglass</li>
                                                <li>CAD 3D modeling for design</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <img src="img/chassis.png" className="img-fluid" alt="Chassis"/>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

export default Projects
