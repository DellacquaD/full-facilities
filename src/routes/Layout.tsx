import React from 'react';
import { Outlet } from 'react-router'
import Header from '../components/AppHeader'
import Footer from '../components/AppFooter'

const Layout = () => {
  return (
    <div className='divContainer' style={{display: 'flex', flexDirection: 'column', marginTop: '12vh', minHeight: '80vh', backgroundImage: "url(https://t3.ftcdn.net/jpg/02/13/56/78/360_F_213567841_SiyyM6H4y067caRy58iLulWazeezPaui.jpg)", backgroundRepeat: 'round', backgroundSize: 'cover'}}>
      <Header/>
        <div>
            <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
export default Layout