const express = require('express')
const router = express.Router()
const portfolioController = require('../controllers/portfolio')

router.post('', portfolioController.savePortfolio)
router.get('', portfolioController.getPortfolio)
router.get('/:id', portfolioController.getPortfolioById)
router.patch('/:id', portfolioController.updatePortfolio)
router.delete('/:id', portfolioController.deletePortfolio)

module.exports = router