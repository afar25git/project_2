const button = document.querySelector('button')
const leagueName = document.querySelector('div')
const leagueInput = document.querySelector('input')

button.addEventListener('click', async () => {
    let leagueOptions = leagueInput.value
    let response = await axios.get(`https://api-football-standings.azharimm.site/leagues`)

    console.log(response.data.data[0].name)
    let laLigaStandings = response.data.data[0].name
    leagueName.innerHTML = `${laLigaStandings}`
})

