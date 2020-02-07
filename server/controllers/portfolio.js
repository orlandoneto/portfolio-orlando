const Portfolio = require('../models/portfolio')

exports.getPortfolio = (req, res) => {
    Portfolio.find({})
        .sort({ 'startDate': 1 })
        .exec((err, allPortfolio) => {
            if (err) return res.status(422).send(err)

            return res.json(allPortfolio)
        })
}

exports.getPortfolioById = (req, res) => {
    const portfolioId = req.params.id

    Portfolio.findById(portfolioId)
        .select('-__v')
        .exec((err, foundPortfolio) => {
            if (err) return res.status(422).send(err)

            return res.json(foundPortfolio)
        })
}

exports.savePortfolio = (req, res) => {
    const portfolioData = req.body

    const portfolio = new Portfolio(portfolioData)
    portfolio.save((err, createPortfolio) => {
        if (err) return res.status(422).send(err)

        return res.json(createPortfolio)
    })
}

exports.updatePortfolio = (req, res) => {
    const portfolioId = req.params.id
    const portfolioData = req.body

    Portfolio.findById(portfolioId, (err, foundPortfolio) => {
        if (err) return res.status(422).send(err)

        foundPortfolio.set(portfolioData)
        foundPortfolio.save((err, savePortfolio) => {
            if (err) return res.status(422).send(err)

            return res.json(savePortfolio)
        })
    })
}

exports.deletePortfolio = (req, res) => {
    const portfolioId = req.params.id

    Portfolio.deleteOne({ _id: portfolioId }, (err, deletePortfolio) => {
        if (err) return res.status(422).send(err)

        return res.json({ status: 'DELETED' })
    })
}
