const url = ''

async function getRecipes() {
    const request = `${url}/receitas`

    try {
        const response = await fetch(request,{
            method: 'GET'
        })
        const data = response.json()
        console.log(data)
        
    } catch (e) {
        
    }
}