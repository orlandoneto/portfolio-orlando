import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000
})

const getAxios = async (uri) => await axiosInstance.get(uri).then(response => response.data)
const postAxios = async (uri, portfolioData) => await axiosInstance.post(uri, portfolioData).then(response => response.data)
const updateAxios = async (uri, portfolioData) => await axiosInstance.patch(uri, portfolioData).then(response => response.data)
const deleteAxios = async (id) => await axiosInstance.delete(id).then(response => response.data)

export const getSecretData = async () => await getAxios('/api/v1/secret')
export const getSecretDataServer = async () => await getAxios('/secret')
export const getPortfolioById = async (id) => await getAxios(`/portfolios/${id}`)
export const getPortfolios = async () => await getAxios('/portfolios')
export const createPortfolio = async (portfolioData) => await postAxios('/portfolios', portfolioData)
export const updatePortfolio = async (portfolioData) => await updateAxios(`/portfolios/${portfolioData._id}`, portfolioData)
export const detelePortfolio = async (id) => await deleteAxios(`/portfolios/${id}`)
