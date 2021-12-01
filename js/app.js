// Console Logging for Debt Amount
//$.ajax({
//             url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_date,tot_pub_debt_out_amt,src_line_nbr",
//             success: function (fiscalData) {
//               console.log(((fiscalData.data)[0].tot_pub_debt_out_amt));
//             },
//             error: function (error) {
//               console.log("bad request: ", error);
//             },
//           });

// Console Logging for Date 

          // $.ajax({
          //   url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_date,tot_pub_debt_out_amt,src_line_nbr",
          //   success: function (fiscalData) {
          //     console.log(((fiscalData.data)[0].record_date));
          //   },
          //   error: function (error) {
          //     console.log("bad request: ", error);
          //   },
          // });
// THIS IS THE MAIN CODE APPLIED. HOW DO I MAKE IT DYNAMIC. WHAT DO I ADD IN THE [0] FIELD?

            async function getfiscalData(e) {
            e.preventDefault();
            const userInput = $('input[type="text"]').val();
            const url =`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_date=${userInput}`;
            
            const response = await fetch(url);
            const data = await response.json();

            $("#date").html(((fiscalData.data)[i]).record_date);
            $("#amount").html(((fiscalData.data)[i]).tot_pub_debt_out_amt);
            };
          $('form').on('submit',(getfiscalData));

          // CORS WORKAROUND//
          // fetch('http://catfacts-api.appspot.com/api/facts?number=99', { mode: 'no-cors'})
          // .then(blob => blob.json())
          // .then(data => {
          //   console.table(data);
          //   return data;
          // })
          // .catch(e => {
          //   console.log(e);
          //   return e;
          // });

//TRYING TO CONSOLE LOG, BUT I WILL HAVE TO DIG INTO THE DETAIL//
    

//https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny//
//FOR TOTAL U.S. OUTSTANDING DEBT// AS HOW TO CONSOLE LOG AND SHOW THIS ON THE DOM

//THIS IS SORTED FOR THE MOST RECENT DATA UP TOP//
// $.ajax({
//         url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_calendar_year&sort=-record_calendar_year",
//         success: function (fiscalData) {
//           console.log(fiscalData);
//         },
//         error: function (error) {
//           console.log("bad request: ", error);
//         },
//       });

//  THIS IS QUERYING JUST CERTAIN FIELD, fields=record_date,tot_pub_debt_out_amt,src_line_nbr//OTHER FIELDS TO SEE DATA BY//
// $.ajax({
//           url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_date,tot_pub_debt_out_amt,src_line_nbr",
//           success: function (fiscalData) {
//             console.log(fiscalData);
//           },
//           error: function (error) {
//             console.log("bad request: ", error);
//           },
//         });

// FOR POPULATING DATA TO THE DOM// NO ERRORS// THIS WAS LOOKING AT JUST ONE DATE// BUT CAME OUT EMPTY// HOW CAN I SEE THIS ON THE DOM//
    //   $.ajax({
    //     url:"https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?filter=record_date:eq:11/24/2021",
    //     }).then(
    //       (data) => {
    //       $('#debtOut').html(data.tot_pub_debt_out_amt);
    //       $('#recordDate').html(data.record_date);
       
    //     },
    //       (error) => {
    //      console.log('bad request: ', error);
    //     }
    //   );

    //WORKING CODE, BUT I WILL HAVE TO DIG INTO THE DETAIL//
    // console.log(data);
    // console.log(data[1].record_calendar_year);

    // $.ajax({
    //     url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny",
    //     success: function (fiscalData) {
    //       console.log(fiscalData);
    //     },
    //     error: function (error) {
    //       console.log("bad request: ", error);
    //     },
    //   });

  




 //https://fiscaldata.treasury.gov/api-documentation/
    // $.ajax({
    //     url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange",
    //     success: function (fiscalData) {
    //       console.log(fiscalData);
    //     },
    //     error: function (error) {
    //       console.log("bad request: ", error);
    //     },
    //   });







// OTHER APIs FOR LATER//



// TRIED WALLSTREET BETS BUT DID NOT WORK DUE TO CORS POLICY//
// / $.ajax({
//     url: "https://dashboard.nbshare.io/api/v1/apps/reddit",
//     success: function (movieData) {
//       console.log(movieData);
//     },
//     error: function (error) {
//       console.log("bad request: ", error);
//     },
//   });



// TRIED YAHOO FINANCE WITH ACTIVATED API KEY, BUT DID NOT WORK//
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://yfapi.net/ws/screeners/v1/finance/screener/predefined/saved?count=25&scrIds=day_gainers',
//   params: {modules: 'defaultKeyStatistics,assetProfile'},
//   headers: {
//     'x-api-key': 'ZVidnqUyq1W73lj6T3Sn7GVFwO3wQHf8PCr6A3P'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });





// async function getYahooData(e) {
//   e.preventDefault();

//   const userInput = $('input[type="text"]').val();
//   const apiKey = "ZVidnqUyq1W73lj6T3Sn7GVFwO3wQHf8PCr6A3P";
//   const url = `ttps://yfapi.net/ws/screeners/v1/finance/screener/predefined/saved?count=25&scrIds=day_gainers=${apiKey}&t=${userInput}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   $("#title").html(data.Title);
//   $("#year").html(data.Year);
//   $("#rated").html(data.Rated);
// }

// $("form").on("submit", getYahooData);



