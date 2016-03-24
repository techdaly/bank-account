//Business Logic
function Account (name, amount){
  this.name = name;
  this.amount = [];
};

var add = function(a, b){
  return a+b;
}



//User Interface Logic

//User Name and Initial Deposit Form
$("form#signup").submit(function(event) {
  event.preventDefault();

  //Event Listeners, get info from user fields
  var userName = $("input#name").val();
  var userInitDeposit = parseInt($("input#initial-deposit").val());

  //Create new Account object with the user input and push the initialDeposit to the amount array
  var newAccount = new Account(userName);
  newAccount.amount.push(userInitDeposit);

  //Manipulate the CSS to now show the Deposit and Withdrawal form and hide the signup form, as well as show the initialDeposit amount under Balance
  $("#signup").hide();
  $("#transaction").show();
  $("#account-balance").append("<li>" + newAccount.amount + "</li>");
  $("#balance").show();


    //Deposit and Withdrawal Forms
    $("form#transaction").submit(function(event) {
      event.preventDefault();

      //Event Listeners, get input from user in deposit and withdrawal fields

      //Push the withdrawal and deposit amounts into the newAccount object amount value
      $("#transaction").each(function() {
        var userDeposit = $(this).find("input#deposit").val();
        var userWithdrawal = $(this).find("input#withdrawal").val();

        newAccount.amount.push(parseInt(userDeposit));
        newAccount.amount.push(parseInt(userWithdrawal));
      });

      //Add all of the values in the amount array and return a single value, using the add function in the business logic section

      console.log(newAccount.amount.reduce(add));

      console.log(newAccount.amount);

      //Clears the withdrawal and deposit fields to allow for new entries
      $("input#deposit").val("");
      $("input#withdrawal").val("");

    });
});
