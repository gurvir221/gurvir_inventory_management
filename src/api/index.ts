export const getData = async () => {
    const response = await fetch('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory',{
        method: 'GET',
    })
    return await response.json()
}