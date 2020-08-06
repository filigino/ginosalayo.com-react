import React from 'react'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Projects from './ProjectsComponent'
import Courses from './CoursesComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

const Main = (props) => {
  return (
    <div>
      <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/courses" component={() =>
            <Courses courses={props.courses} />} />
          <Redirect to="/" />
        </Switch>
    </div>
  )
}

export default withRouter(connect(mapStateToProps)(Main))
