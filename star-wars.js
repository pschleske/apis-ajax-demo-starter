// import axios from "axios"

const episodeNum = Math.ceil(Math.random() * 6)

axios.get(`https://swapi.dev/api/films/${episodeNum}`).then(res => {
    console.log("this will be logged second");
    document.getElementById("star-wars-movie").innerText = res.data.title;
})

console.log("this will be logged first")

