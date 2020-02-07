import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import withAuth from '../components/hoc/withAuth'

class Owner extends React.Component {
    render() {
        const { user, isAuthenticated } = this.props.auth

        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage>
                    <h1>Page Owner</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(Owner)