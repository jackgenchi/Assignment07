//STEP 1
// let faveMovies = ["Princess Bride", "Megamind", "Howl's Moving Castle", "Your Name", "Singing in the Rain"];
// console.log(faveMovies[1]);

//STEP 2
// let movieArray = new Array(5);
// movieArray[0] = "Princess Bride";
// movieArray[1] = "Megamind";
// movieArray[2] = "Howl's Moving Castle";
// movieArray[3] = "Your Name";
// movieArray[4] = "Singing in the Rain";
// console.log(movieArray[0]);

//STEP 3
// let movieArray = new Array(5);
// movieArray[0] = "Princess Bride";
// movieArray[1] = "Megamind";
// movieArray[2] = "IT";
// movieArray[3] = "Howl's Moving Castle";
// movieArray[4] = "Your Name";
// movieArray[5] = "Singing in the Rain";

// console.log(movieArray.length);


//STEP 4
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain"];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// for (let film in movies) {
//     console.log(movies[film]);
// }

//STEP 6
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// for (let film of movies) {
//     console.log(film);
// }

//STEP 7
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// movies.sort();
// for (let film of movies) {
//     console.log(film);
// }

//STEP 8
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// let leastFavMovies = ["Nightmare before Christmas","Avatar the last airbender", "Percy Jackson"];
// console.log(" ");
// console.log("Movies I like:");
// console.log(" ");
// for (let film of movies) {
//     console.log(film);
// }
// console.log(" ");
// console.log("Movies I regret watching: ");
// console.log(" ");
// for (let jokes of leastFavMovies) {
//     console.log(jokes);
// }
// console.log(" ");

//STEP 9
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// let leastFavMovies = ["Nightmare before Christmas","Avatar the last airbender", "Percy Jackson"];
// let allMovies = movies.concat(leastFavMovies);
// console.log("Movies I dislike followed by movies I like:");
// allMovies.reverse();
// for (let frames of allMovies) {
//     console.log(frames);
// };


//STEP 10
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// let leastFavMovies = ["Nightmare before Christmas","Avatar the last airbender", "Percy Jackson"];
// let allMovies = movies.concat(leastFavMovies);
// console.log("Last movie in reverse sort:");
// allMovies.reverse();
// console.log(allMovies.pop());


//STEP 11
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// let leastFavMovies = ["Nightmare before Christmas","Avatar the last airbender", "Percy Jackson"];
// let allMovies = movies.concat(leastFavMovies);
// console.log("First movie in reverse sort:");
// allMovies.reverse();
// console.log(allMovies.shift());

//STEP 12
// let movies = ["Princess Bride", "Megamind", "IT", "Howl's Moving Castle", "Your Name", "Singing in the Rain", "Parasite"];
// let leastFavMovies = ["Nightmare before Christmas","Avatar the last airbender", "Percy Jackson"];
// let allMovies = movies.concat(leastFavMovies);
// leastFavMovies.sort();
// let badMovieIndices = [allMovies.indexOf("Nightmare before Christmas"),allMovies.indexOf("Avatar the last airbender"), allMovies.indexOf("Percy Jackson")];
// console.log("Indices of bad movies: "+ badMovieIndices[0] + " + " + badMovieIndices[1] + " + " + badMovieIndices[2]);
// allMovies.splice(badMovieIndices[0],1, "Emperor's New Groove");
// allMovies.splice(badMovieIndices[1],1, "Kung Foo Panda");
// allMovies.splice(badMovieIndices[2],1, "Joe Dirt"); 
// allMovies.sort();
// console.log("I have removed all of the bad movies: " + allMovies);

//STEP 13
// let movies = [["Princess Bride",1], ["Megamind",2], ["Emperor's New Groove", 5], ["Howl's Moving Castle",3], ["Your Name",4]];
// for (let frames of movies) {
//     let movieName = frames.filter((item) => {
//         return typeof item === 'string'
//     });
//     console.log(movieName);
// };

//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// function showEmployee(a) {
//     //console.log("running showEmployee")
//     for (let b of a) {
//         console.log(b);
//     }
// };
// console.log("Employees: ");
// showEmployee(employees);

//STEP 15
// let filterValues = (a) => {
//     for (let i of a){
//         if(i !== false && i !== null && i !== 0 && i !== "0" && i !== "" && i !== " "){
//             console.log(i + " at index: " + a.indexOf(i));
//         }
// }};
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// let randomReturn = (a) => {
//     let randNum = Math.floor(Math.random()*a.length);
//     console.log("random number index: " + randNum);
//     return a[randNum];
// }
// let numberArray = [10, 1, 3, 5, 9]
// let result = randomReturn(numberArray);
// console.log(result);


//STEP 17
// let highestReturn = (a) => {
//     console.log("highest return running")
//     let temp = 0; 
//     for (let iter of a) {     
//         if(iter > temp) 
//             {temp = iter};
//         console.log("current highest value: "+temp+" \narray value: " + iter);
//     } 
//     return temp;
// }
// let numberArray = [ 1, 3, 2, 5, 4, 10]
// let result = highestReturn(numberArray);
// console.log("Highest value from array: "+result);