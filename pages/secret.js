import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import withAuth from '../components/hoc/withAuth'
import { getSecretData, getSecretDataServer } from '../actions'

class Secret extends React.Component {

    static async getInitialProps({req}) {
        const anotherSecretData = process.browser ?
            await getSecretData() :
            await getSecretDataServer(req)

        return { anotherSecretData }
    }

    state = {
        secretData: []
    }

    async componentDidMount() {
       const secretData = this.props.anotherSecretData

        this.setState({ secretData })
    }

    displaySecretData = () => {
        const { secretData } = this.state
        if (secretData && secretData.length > 0) {
            return secretData.map((data, index) => {
                return (
                    <div key={index}>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                    </div>
                )
            })
        }

        return null
    }

    render() {
        debugger
        console.log(this.state);


        return (
            <BaseLayout>
                <BasePage>
                    <h1>You are page secret</h1>
                    <p>Secret Content Here</p>
                    {this.displaySecretData()}
                </BasePage>
            </BaseLayout >
        )
    }
}

export default withAuth('siteOwner')(Secret)