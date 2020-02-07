export const getCookieFromReq = (req, value) => {
    const result = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${value}=`))

    if (!result) return undefined

    return result.split('=')[1]
}