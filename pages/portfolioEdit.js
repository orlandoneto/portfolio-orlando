import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'
import { Row, Col } from 'reactstrap'

import { updatePortfolio, getPortfolioById } from '../actions'
import { Router } from '../routes'

class PortfolioEdit extends React.Component {

    state = {
        error: undefined
    }

    static async getInitialProps({ query }) {
        let portfolio = {}
        try {
            portfolio = await getPortfolioById(query.id)
        } catch (error) {
            console.error(error)
        }

        return { portfolio }
    }

    editPortfolio = async (portfolioDate, { setSubmitting }) => {
        setSubmitting(true)
        try {
            await updatePortfolio(portfolioDate)
            setSubmitting(false)
            this.setState({ error: undefined })
            Router.pushRoute('/portfolios')
        } catch (error) {
            setSubmitting(false)
            this.setState({ error: error.message })
        }
    }

    render() {
        const { error } = this.state
        const { portfolio } = this.props

        const { user, isAuthenticated } = this.props.auth
        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage className='portfolio-create-page' title='Update Portfolio'>
                    <Row>
                        <Col md="6">
                            <PortfolioCreateForm
                                initialValues={portfolio}
                                error={error}
                                onSubmit={this.editPortfolio} />
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioEdit)