const getStartedButton = document.querySelector('button')
const leagueName = document.querySelector('div')

getStartedButton.addEventListener('click', async () => {
    let response = await axios.get(`https://api-football-standings.azharimm.site/leagues`)

    console.log(response.data.data[0].name)
    console.log(response.data.data[0].logos.dark)
    console.log(response.data)
    let laLigaStandings = response.data.data[3].name
    leagueName.innerHTML = `${laLigaStandings}`
})
