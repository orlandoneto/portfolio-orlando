import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import withAuth from '../components/hoc/withAuth'
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm'
import { Row, Col } from 'reactstrap'

import { createPortfolio } from '../actions'
import { Router } from '../routes'

const INITIAL_VALUES = {
    title: '',
    company: '',
    location: '',
    description: '',
    startDate: '',
    endDate: ''
}

class PortfolioNew extends React.Component {

    state = {
        error: undefined
    }

    savePortfolio = async (portfolioDate, { setSubmitting }) => {
        setSubmitting(true)
        try {
            await createPortfolio(portfolioDate)
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

        const { user, isAuthenticated } = this.props.auth
        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage className='portfolio-create-page' title='Create New Portfolio'>
                    <Row>
                        <Col md="6">
                            <PortfolioCreateForm
                                initialValues={INITIAL_VALUES}
                                error={error}
                                onSubmit={this.savePortfolio} />
                        </Col>
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioNew)