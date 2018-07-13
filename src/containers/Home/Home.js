import React, { Component } from 'react'
import { SideBar } from '../../components/navigation'
import MainContent from '../MainContent/MainContent'

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <MainContent />
      </div>
    </div>
  )
}

export default Home
