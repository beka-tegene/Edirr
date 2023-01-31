import React from 'react'
import SignIn from '../components/Auth/SignIn/SignIn'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'

const LogIn = () => {
  return (
      <Layout>
      <SignIn />
      <Footer />
    </Layout>
  )
}

export default LogIn