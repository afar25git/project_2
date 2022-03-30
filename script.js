const leagueName = document.getElementById('home')
let leagueArray = []

const initial = async () => {
    let response = await axios.get('https://api-football-standings.azharimm.site/leagues')
    leagueArray = [response.data.data[5], response.data.data[9], response.data.data[16]]
    
    leagueArray.forEach((leaguetitle) => {
        let newArticle = document.createElement('a')
        newArticle.className = 'leagues'
        newArticle.href = leaguetitle.slug+'.html'
        // League Logo
        let newImage = document.createElement('img')
        newImage.src = leaguetitle.logos.light
        newImage.alt = leaguetitle.name
        // League Name
        let newText = document.createElement('h4')
        newText.innerText = leaguetitle.name

        leagueName.append(newArticle)
        newArticle.append(newImage, newText)
    });

    console.log(response.data) 
}
initial()