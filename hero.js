let movieTitle;

const batmanMovies = ['Batman Begins','Batman vs Superman','Batman 1989','Batman Returns','Batman 2022','Batman vs Robin','Batman Forever','The Lego Batman','Animated Batman','Batman Killing Joker']
const randomNum = Math.floor((Math.random() * batmanMovies.length - 1));
const randomMovies = batmanMovies[randomNum];

function batmanBeg() {
    console.log(data.search);
}


    



fetch (
   'https://www.omdbapi.com/?s=batman&apikey=dad045f0'
)
.then((response) => { 
    return response.json()
})

.then((data) => {
    console.log(data);
    console.log(batmanMovies);
    console.log(data[0].search);
    const batmanBeg = data.search;
    const batmanSup = data.search;
    });

    

