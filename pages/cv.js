import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Cv extends React.Component {
    render() {
        const { user, isAuthenticated } = this.props.auth

        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage>
                    <h1>Page Cv</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Cv