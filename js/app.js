
    //https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/avg_interest_rates//
    //DATA FOR EXCHANGE RATES//
    // $.ajax({
    //     url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?
    //     success: function (fiscalData) {
    //       console.log(fiscalData);
    //     },
    //     error: function (error) {
    //       console.log("bad request: ", error);
    //     },
    //   });


    //DATA FOR EXCHANGE RATES// WITH FILTER FOR DATE
    // $.ajax({
    //     url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange",
    //     success: function (fiscalData) {
    //       console.log(fiscalData);
    //     },
    //     error: function (error) {
    //       console.log("bad request: ", error);
    //     },
    //   });


//TRYING TO CONSOLE LOG, BUT I WILL HAVE TO DIG INTO THE DETAIL//
    

//https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny//
//FOR TOTAL U.S. OUTSTANDING DEBT// AS HOW TO CONSOLE LOG AND SHOW THIS ON THE DOM
// fields=record_date,tot_pub_debt_out_amt,src_line_nbr//OTHER FIELDS TO SEE DATA BY//
$.ajax({
        url: "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny",
        success: function (fiscalData) {
          console.log(fiscalData);
        },
        error: function (error) {
          console.log("bad request: ", error);
        },
      });

  

// FOR POPULATING DATA TO THE DOM// NO ERRORS//
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

    //TRYING TO CONSOLE LOG, BUT I WILL HAVE TO DIG INTO THE DETAIL//
    // console.log(data);
    // console.log(data[1].record_calendar_year);




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





      
