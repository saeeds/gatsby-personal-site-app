import React, { Component } from 'react'
import { Link } from 'gatsby';
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
