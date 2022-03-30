const leagueName = document.getElementById('home')
let leagueArray = []

const initial = async () => {
    let response = await axios.get(`https://api-football-standings.azharimm.site/leagues`)
    leagueArray = [response.data.data[5], response.data.data[9], response.data.data[16]]
    
    leagueArray.forEach((leaguetitle) => {
        let newArticle = document.createElement('a')
        newArticle.className = 'leagues'
        newArticle.href = leaguetitle.slug+'.html'
        let newText = document.createElement('h2')
        newText.innerText = leaguetitle.name
        
        let newImage = document.createElement('img')
        newImage.src = leaguetitle.logos.light
        newImage.alt = leaguetitle.name
        
        leagueName.append(newArticle)
        newArticle.append(newText, newImage)
    });

    console.log(response.data) 
}
initial()

//Premier League
    // let premierLeagueName = response.data.data[5].name
    // let premierLeagueLogo = response.data.data[5].logos.light
    // leagueName.innerHTML = `<article class='leagues'><h2>${premierLeagueName}</h2><img src='${premierLeagueLogo}' alt='${premierLeagueName}' /></article>`
    // //La Liga
    // let ligaLeagueName = response.data.data[16].name
    // let ligaLeagueLogo = response.data.data[16].logos.light
    // leagueName.innerHTML = `<article class='leagues'><h2>${ligaLeagueName}</h2><img src='${ligaLeagueLogo}' alt='${ligaLeagueName}' /></article>`