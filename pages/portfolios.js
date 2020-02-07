import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/BasePage'

import { Col, Row, Button } from 'reactstrap'

import { Router } from '../routes'

import { getPortfolios, detelePortfolio } from '../actions'
import PortfolioCard from '../components/portfolios/PortfolioCard'

class Portfolios extends React.Component {

    static async getInitialProps() {
        let portfolios = []
        try {
            const response = await getPortfolios()
            portfolios = response
        } catch (error) {
            console.error(error)
        }

        return { portfolios }
    }

    navigateToEdit = (portfolioId, e) => {
        e.stopPropagation()
        Router.pushRoute(`/portfolios/${portfolioId}/edit`)
    }

    displayDeleteWarning = (portfolioId, e) => {
        e.stopPropagation()
        const isConfirm = confirm('Are you sure want to delete this portfolio?')

        if (isConfirm) this.deletePortfolio(portfolioId)
    }

    deletePortfolio = async (portfolioId) => {
        try {
            await detelePortfolio(portfolioId)
            Router.pushRoute('/portfolios')
        } catch (error) {
            console.error(error)
        }
    }

    renderPortfolios = portfolios => {
        const { isAuthenticated } = this.props.auth

        return portfolios.map((portfolio, index) => {
            return (
                <Col md="4" key={index}>
                    <PortfolioCard portfolio={portfolio}>
                        {isAuthenticated &&
                            <React.Fragment>
                                <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} color='warning'>Edit</Button>{' '}
                                <Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} color='danger'>Delete</Button>
                            </React.Fragment>
                        }
                    </PortfolioCard>
                </Col>
            )
        })
    }

    render() {
        const { user, isAuthenticated } = this.props.auth
        const { portfolios } = this.props

        return (
            <BaseLayout user={user} isAuthenticated={isAuthenticated}>
                <BasePage className='portfolio-page' title='Portfolio'>
                    {isAuthenticated &&
                        <Button onClick={() => Router.pushRoute('/portfolioNew')} color='success' className='create-port-btn'>Create Portfolio</Button>
                    }
                    <Row>
                        {this.renderPortfolios(portfolios)}
                    </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Portfolios