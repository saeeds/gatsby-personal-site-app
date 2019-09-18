import React, { Component } from 'react'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
export default class index extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero />
      </Layout>
    )
  }
}
