import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
const Layout = props => {
  return (
    <div>
      <Header register={props.show} />
      {props.children}
      <Footer />
    </div>
  )
}
export default Layout
