import React from 'react'
import { Switch } from 'react-router-dom'

import { AuthRoute, ProtectedRoute, Route } from '../utils/route_util'

import NavBarContainer from './navbar/NavBarContainer'
import SplashContainer from './splash/SplashContainer'
import Dashboard from './dashboard/Dashboard'
import UserMenuContainer from './users_menu/UserMenuContainer'


function App() {
    
    return (
        <div className='app-container'>
                <NavBarContainer/>
            <div className='content-display'>
                <Switch>
                    <AuthRoute exact path ='/' component={SplashContainer}/>
                    <ProtectedRoute exact path='/dash' component={Dashboard}/>
                    <ProtectedRoute exact path='/user-menu' component={UserMenuContainer}/>
                </Switch>
            </div>
        </div>
    )
}

export default App
