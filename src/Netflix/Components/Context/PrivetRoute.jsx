import React from 'react'
import { Route, Redirect } from 'react-router-dom' //router
import { useAuth } from './Context' //useAuth from AuthProvider

//using for personal router
const PrivetRoute = ({ component: Component, ...rest}) => { //rest in an object
    const { currentUser } = useAuth()
    return (
       <Route
           {...rest}
           render={props => {
           return currentUser ? <Component {...props} /> : <Redirect to='/login' /> //when a user logout then redirect to login page
           }}
       ></Route>
    )

}

export default PrivetRoute;
