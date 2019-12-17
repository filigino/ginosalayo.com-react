// Presentational component (via functional component)
import React from 'react'
import Header from './HeaderComponent'
import Home from './HomeComponent'
import About from './AboutComponent'
import Courses from './CoursesComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

const Main = () => {
    return (
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/courses" component={Courses} />
            <Redirect to="/" />
          </Switch>
      </div>
    )
}

export default Main
