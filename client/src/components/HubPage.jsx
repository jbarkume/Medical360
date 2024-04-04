import React from 'react'
import Banner from './Banner'
import Sidebar from './Sidebar'

function HubPage() {
  return (
    <>
        <Banner goBackPath={"/home"}></Banner>
        <Sidebar></Sidebar>
    </>
  )
}

export default HubPage