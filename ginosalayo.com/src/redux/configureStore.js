import { createStore, combineReducers } from 'redux'
import { Courses } from './courses'

export const ConfigureStore = () => {
    const store = createStore (
        combineReducers({
            courses: Courses
        })
    )

    return store;
}
