// Container component
import React, { Component } from 'react'
import { Card, CardBody, CardHeader, UncontrolledCollapse } from 'reactstrap'
import { Fade } from 'react-animation-components'

class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isComSciOpen: false,
            isEconOpen: false,
            isElecOpen: false,
            isEngOpen: false,
            isScienceOpen: false,
            isMathOpen: false,
            isMechOpen: false,
            isTronOpen: false,
            isSfwrOpen: false,
            isStatsOpen: false
        }
        this.toggleComSci = this.toggleComSci.bind(this)
        this.toggleEcon = this.toggleEcon.bind(this)
        this.toggleElec = this.toggleElec.bind(this)
        this.toggleEng = this.toggleEng.bind(this)
        this.toggleScience = this.toggleScience.bind(this)
        this.toggleMath = this.toggleMath.bind(this)
        this.toggleMech = this.toggleMech.bind(this)
        this.toggleTron = this.toggleTron.bind(this)
        this.toggleSfwr = this.toggleSfwr.bind(this)
        this.toggleStats = this.toggleStats.bind(this)
    }

    toggleComSci() {
        this.setState({
            isComSciOpen: !this.state.isComSciOpen
        })
    }

    toggleEcon() {
        this.setState({
            isEconOpen: !this.state.isEconOpen
        })
    }

    toggleElec() {
        this.setState({
            isElecOpen: !this.state.isElecOpen
        })
    }

    toggleEng() {
        this.setState({
            isEngOpen: !this.state.isEngOpen
        })
    }

    toggleScience() {
        this.setState({
            isScienceOpen: !this.state.isScienceOpen
        })
    }

    toggleMath() {
        this.setState({
            isMathOpen: !this.state.isMathOpen
        })
    }

    toggleMech() {
        this.setState({
            isMechOpen: !this.state.isMechOpen
        })
    }

    toggleTron() {
        this.setState({
            isTronOpen: !this.state.isTronOpen
        })
    }

    toggleSfwr() {
        this.setState({
            isSfwrOpen: !this.state.isSfwrOpen
        })
    }

    toggleStats() {
        this.setState({
            isStatsOpen: !this.state.isStatsOpen
        })
    }

    render() {
        return (
            <Fade in>
                <div className="container text-dark">
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>
                                <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    Coursera
                                </a>
                            </h3>
                        </div>
                        <div className="col-12">
                            <Card>
                                <CardHeader id="comSciHeader" role="tab" onClick={this.toggleComSci} aria-expanded="false" aria-controls="computerScienceCourses">
                                    <h4 className="mb-0">
                                    { this.state.isComSciOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Computer Science
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#comSciHeader">
                                    <CardBody>
                                        <div className="row">
                                            <h5 className="col">Course Name</h5>
                                            <h5 className="col">School</h5>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.coursera.org/learn/algorithms-part1" target="_blank" rel="noopener noreferrer" className="text-dark">
                                                            Algorithms, Part I
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col align-self-center">
                                                <p>Princeton University</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.coursera.org/learn/front-end-react" target="_blank" rel="noopener noreferrer" className="text-dark">
                                                            Front-End Web Development with React
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.coursera.org/learn/bootstrap-4" target="_blank" rel="noopener noreferrer" className="text-dark">
                                                            Front-End Web UI Frameworks and Tools: Bootstrap 4
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.coursera.org/learn/react-native" target="_blank" rel="noopener noreferrer" className="text-dark">
                                                            Multiplatform Mobile App Development with React Native
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.coursera.org/learn/server-side-nodejs" target="_blank" rel="noopener noreferrer" className="text-dark">
                                                            Server-side Development with NodeJS, Express and MongoDB
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col align-self-center">
                                                <p>The Hong Kong University of Science and Technology</p>
                                            </div>
                                        </div>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>
                                <a href="https://www.mcmaster.ca/" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    McMaster University
                                </a>
                            </h3>
                        </div>
                        <div className="col-12">
                            <Card>
                                <CardHeader id="econHeader" role="tab" onClick={this.toggleEcon} aria-expanded="false" aria-controls="econCourses">
                                    <h4 className="mb-0">
                                        { this.state.isEconOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Economics
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#econHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Engineering Economics</li>
                                            <li>Introductory Macroeconomics</li>
                                            <li>Introductory Microeconomics</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="elecEngHeader" role="tab" onClick={this.toggleElec} aria-expanded="false" aria-controls="elecEngineeringCourses">
                                    <h4 className="mb-0">
                                    { this.state.isElecOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Electrical Engineering
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#elecEngHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Analog and Digital Circuits</li>
                                            <li>Biomedical Instrumentation</li>
                                            <li>Electrical Circuits and Power</li>
                                            <li>Electronics and Instrumentation</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="engHeader" role="tab" onClick={this.toggleEng} aria-expanded="false" aria-controls="engineeringCourses">
                                    <h4 className="mb-0">
                                    { this.state.isEngOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} General Engineering
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#engHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Engineering Computation</li>
                                            <li>Engineering Design and Graphics</li>
                                            <li>Engineering Profession and Practice</li>
                                            <li>Inquiry in an Engineering Context I</li>
                                            <li>Sustainability and Ethics in Engineering</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="scienceHeader" role="tab" onClick={this.toggleScience} aria-expanded="false" aria-controls="scienceCourses">
                                    <h4 className="mb-0">
                                    { this.state.isScienceOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} General Sciences
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#scienceHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Electricity and Magnetism</li>
                                            <li>General Chemistry for Engineering I</li>
                                            <li>Introductory Mechanics</li>
                                            <li>Structure and Properties of Materials</li>
                                            <li>Waves, Electricity and Magnetic Fields</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="mathHeader" role="tab" onClick={this.toggleMath} aria-expanded="false" aria-controls="mathCourses">
                                    <h4 className="mb-0">
                                    { this.state.isMathOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Mathematics
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#mathHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Engineering Mathematics I</li>
                                            <li>Engineering Mathematics II-A</li>
                                            <li>Engineering Mathematics II-B</li>
                                            <li>Engineering Mathematics III</li>
                                            <li>Engineering Mathematics IV</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="mechEngHeader" role="tab" onClick={this.toggleMech} aria-expanded="false" aria-controls="mechanicalEngineeringCourses">
                                    <h4 className="mb-0">
                                    { this.state.isMechOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Mechanical Engineering
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#mechEngHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Engineering Mechanics 'A'</li>
                                            <li>Engineering Mechanics: Kinetics and Dynamics</li>
                                            <li>Mechanical Engineering Measurements</li>
                                            <li>Mechanical Vibrations</li>
                                            <li>Thermodynamics</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="tronHeader" role="tab" onClick={this.toggleTron} aria-expanded="false" aria-controls="mechatronicsCourses">
                                    <h4 className="mb-0">
                                    { this.state.isTronOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Mechatronics Engineering
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#tronHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Dynamic Models and Control of Physical Systems</li>
                                            <li>Embedded Systems Design I</li>
                                            <li>Embedded Systems Design II</li>
                                            <li>Mechatronics</li>
                                            <li>Real-Time Systems and Control Applications</li>
                                            <li>Robotics</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="sfwrHeader" role="tab" onClick={this.toggleSfwr} aria-expanded="false" aria-controls="softwareEngineeringCourses">
                                    <h4 className="mb-0">
                                    { this.state.isSfwrOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Software Engineering
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#sfwrHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Communication Skills</li>
                                            <li>Computer Networks and Security</li>
                                            <li>Linear Optimization</li>
                                            <li>Operating Systems</li>
                                            <li>Principles of Programming</li>
                                            <li>Scientific Computation</li>
                                            <li>Signals and Systems</li>
                                            <li>Software Development</li>
                                            <li>Software Engineering Practice and Experience: Software Development Skills</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                            <Card>
                                <CardHeader id="statsHeader" role="tab" onClick={this.toggleStats} aria-expanded="false" aria-controls="statsCourses">
                                    <h4 className="mb-0">
                                    { this.state.isStatsOpen
                                        ? <span className="fa fa-minus-circle" />
                                        : <span className="fa fa-plus-circle" />} Statistics
                                    </h4>
                                </CardHeader>
                                <UncontrolledCollapse role="tabpanel" toggler="#statsHeader">
                                    <CardBody>
                                        <ul>
                                            <li>Probability and Statistics for Engineering</li>
                                        </ul>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}

export default Courses
