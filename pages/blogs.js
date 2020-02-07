import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

class Blogs extends React.Component {
    render() {
        const { user, isAuthenticated } = this.props.auth

        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage>
                    <h1>Page Blogs</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Blogs