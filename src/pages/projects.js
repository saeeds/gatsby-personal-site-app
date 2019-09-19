import React, { Component } from 'react'
import Layout from '../components/layout'
import Button from '../examples/Button'
export default class projects extends Component {
    render() {
        return (
            <Layout>
                Hello my Projects Page
                <Button big="15rem" color="green">HI from</Button>
                <Button color="green">HI from</Button>
            </Layout>
        )
    }
}
