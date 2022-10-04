import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Catalog from './pages/Catalog'
import Detail from './pages/Detail'
import Home from './pages/Home'
import './style/Global.scss'

const App = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/:category/search/:keyword'><Catalog /></Route>
                <Route path='/:category/:id'><Detail /></Route>
                <Route path='/:category'><Catalog /></Route>
            </Switch>
            <Footer />
        </>
    )
}

export default App