import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Cv extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props}>
                <BasePage>
                    <h1>Page Cv</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Cv