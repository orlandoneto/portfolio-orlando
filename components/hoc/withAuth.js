import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import BasePage from '../BasePage'

const namespace = 'http://localhost:3000'

export default role => Component =>
    class withAuth extends React.Component {

        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps &&
                await Component.getInitialProps(args)

            return { ...pageProps }
        }

        renderProtectedPage = () => {
            const { user, isAuthenticated } = this.props.auth

            const userRole = user && user[`${namespace}/roles`]
            let isAuthorized = false

            if (role)
                if (userRole && userRole === role) isAuthorized = true
                else isAuthorized = false

            if (!isAuthenticated) {
                return (
                    <BaseLayout>
                        <BasePage className='base-page'>
                            <h1>You are not authenticated. Please login to access this page</h1>
                        </BasePage>
                    </BaseLayout >
                )
            } else if (!isAuthorized) {
                return (
                    <BaseLayout>
                        <BasePage className='base-page'>
                            <h1>You are not authorized. You dont have a permission to visit this page</h1>
                        </BasePage>
                    </BaseLayout >
                )
            } else return <Component {...this.props} user={user} isAuthenticated={isAuthenticated} />
        }

        render() {
            return this.renderProtectedPage()
        }
    }
