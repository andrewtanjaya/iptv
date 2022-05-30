import React from 'react'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Home.css'

function Home() {
  return (
    <div className='home-wrapper'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default Home