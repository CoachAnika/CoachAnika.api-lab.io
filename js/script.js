
//  let randomValue = defaultTitles[Math.floor(Math.random() *defaultTitles.length)]
     
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
    $("#score").html(((data.Ratings)[2]).Value);
    $("#money").html(data.BoxOffice); 
    $("#genre").html(data.Genre); 
    
}

$("form").on("submit", getMovieData);

async function getRandom(e) {
	e.preventDefault();

  const userInput = $('input[type="text"]').val();
  const apiKey = "cd6b998";
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${userInput}`;

	
	const response = await fetch(url);
	const data = await response.json();

	
	const objectParam = ['Actors: ' + data.Actors, 'Director: ' + data.Director, 'Writer: ' + data.Writer, 'Plot: ' + data.Plot];
	let randomParam = '';

	function getRandomParam () {
		let randomIndex = Math.floor(Math.random() * objectParam.length);
		randomParam = objectParam[randomIndex];
	};

	getRandomParam();
	$('.rmovie').html('Random Movie Info: ' + randomParam);

};

$(".boxTwo").on('click', getRandom);


// async function getMovieData(e) {
//     e.preventDefault();

//     const userInput = $('input[type="text"]').val();
//     const apiKey = "cd6b998";
//     const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${userInput}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     $("#title").html(data.Title);
//     $("#year").html(data.Year);
//     $("#rated").html(data.Rated);
//     $("#score").html(((data.Ratings)[2]).Value);
//     $("#money").html(data.BoxOffice); 
//     $("#genre").html(data.Genre); 
    
// }

// $("form").on("submit", getMovieData);



// HOW CAN THE ABOVE CODE BE APPLIED TO SEARCH MOVIES BY GENRE//
// HOW CAN THE URL MEDIA IMAGE TIED TO POSTERS SHOW UP//

// MORE CODE//
// $("#plot").html(data.Plot);
// $("#poster").html(data.Poster);
//$('#photo').append('<li><img src="data:image/jpeg;base64,'
//+ result.split(",")[1] +'"/></li>');


// How to add images of the poster dynamically
// $(document).ready(function() {
//     $('#searchBox').click(function() {
//        $.ajax({
//          url : 'DisplayImage',
//          data : {
//            opration : 'next',
//            username : 'user1'
//          },
//          success : function(result) {
//            $('#photo').append('<li><img src="data:image/jpeg;base64,'
//            + result.split(",")[1] +'"/></li>');
//          }
//        });
//      });
//    });

//----

// TEST WAS ABLE TO GET MOVIE DATA AND CONSOLE LOG FROZEN INFO//
$.ajax({
    url: "http://www.omdbapi.com/?i=tt3896198&apikey=cd6b998",
    success: function (movieData) {
      console.log(movieData);
    },
    error: function (error) {
      console.log("bad request: ", error);
    },
  });

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


 