
async function getMovieData(e) {
    e.preventDefault();

    const userInput = $('input[type="text"]').val();
    const apiKey = "cd6b998";
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${userInput}`;

    const response = await fetch(url);
    const data = await response.json();

    $("#title").html(data.Title);
    $("#year").html(data.Year);
    $("#rated").html(data.Rated);
    $("#ratings").html(data.Ratings[1].Value);
}

$("form").on("submit", getMovieData);

//----

// TEST WAS ABLE TO GET MOVIE DATA AND CONSOLE LOG FROZEN INFO//
// $.ajax({
//     url: "http://www.omdbapi.com/?i=tt3896198&apikey=cd6b998",
//     success: function (movieData) {
//       console.log(movieData);
//     },
//     error: function (error) {
//       console.log("bad request: ", error);
//     },
//   });

// Console Logging for Rotten Tomatoes Rating//
// $.ajax({
//     url: "http://www.omdbapi.com/?i=tt3896198&apikey=cd6b998",
//     success: function (data) {
//       console.log(data.Ratings[1]);
//     },
//     error: function (error) {
//       console.log("bad request: ", error);
//     },
//   });
     
//POPULATING THE DOM, THIS WAS A SUCCESS//
// $.ajax({
//     url:'http://www.omdbapi.com/?i=tt3896198&apikey=cd6b998&t=Frozen'
//     }).then(
//       (data) => {
//       $('#title').html(data.Title);
//       $('#year').html(data.Year);
//       $('#rated').html(data.Rated);
//     },
//       (error) => {
//      console.log('bad request: ', error);
//     }
//   );


// MAKING THE AJAX REQUEST DYNAMIC
    // $('form').on('submit', (event) => {
    // event.preventDefault();
    // const userInput = $('input[type="text"]').val();
    // $.ajax({
    //   url:'http://www.omdbapi.com/?i=tt3896198&apikey=cd6b998&t=Frozen'
    //   }).then(
    //     (data) => {
    //       $('#title').html(data.Title);
    //       $('#year').html(data.Year);
    //       $('#rated').html(data.Rated);
    //     },
    //     (error) => {
    //       console.log('bad request: ', error);
    //     }
    //   );
    // });


 