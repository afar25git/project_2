const leagueStandings = document.querySelector('.standings table tbody')
const championBox = document.querySelector('.champion')

const laLiga = async () => {
    let response = await axios.get('https://api-football-standings.azharimm.site/leagues/esp.1/standings?season=2020')
    console.log(response.data.data.standings)
    let laLigaArray = response.data.data.standings
    
    laLigaArray.forEach((teamparameter) => {
        let newTeam = document.createElement('tr')

        let teamName = document.createElement('td')
        teamName.innerText = teamparameter.team.name

        let pointsTeam = document.createElement('td')
        pointsTeam.innerText = teamparameter.stats[6].value
    
        leagueStandings.append(newTeam)
        newTeam.append(teamName, pointsTeam)
    });

    let championLogo = document.createElement('img')
    championLogo.src = response.data.data.standings[0].team.logos[0].href
    let championName = document.createElement('h1')
    championName.innerText = response.data.data.standings[0].team.name
    championBox.append(championLogo, championName)

    
}
laLiga()
