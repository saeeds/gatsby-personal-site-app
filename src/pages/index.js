import React, { Component } from 'react'
import Layout from '../components/layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
export default class index extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero>
          <Banner title="continue exploring" info="Lorem ispum dolor site amet consecture adipiscicing elit. Eiu, offficies.">
            <Link to="/projects" className="btn-white">explore projects</Link>
          </Banner>
        </SimpleHero>
      </Layout>
    )
  }
}
