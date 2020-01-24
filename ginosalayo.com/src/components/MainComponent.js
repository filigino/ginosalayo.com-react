// Container component (via class component)
import React, { Component } from 'react'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Courses from './CoursesComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={() =>
              <Courses courses={this.props.courses} />} />
            <Redirect to="/" />
          </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main))
