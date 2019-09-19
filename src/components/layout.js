import React from 'react'
import Navbar from './Navbar'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'
const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </main>
    )
}
export default Layout
