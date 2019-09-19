import React, { Component } from 'react'
import Layout from '../components/layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import { Link } from 'gatsby'
import About from '../components/Home/About'
export default class index extends Component {
  render() {
    return (
      <Layout>
        <SimpleHero>
          <Banner 
            title="continue exploring" 
            info="Independent - Software Architect /Technical Consultant."
          >
            <Link to="/projects" className="btn-white">
               explore projects
            </Link>
          </Banner>
        </SimpleHero>
        <About/>
      </Layout>
    )
  }
}
