//Business Logic
function Account (name, amount){
  this.name = name;
  this.amount = [];
/*  deposit: function(balance){
    this.balance = this.balance + amount;
  }
  withdrawal: function(balance){
    this.amount = this.blance - amount;
  }*/
};

var add = function(a, b){
  return a + b;
}

var newTotal = function(){
  Account.amount.reduce(add);
}


//User Interface Logic
$("form#signup").submit(function(event) {
  event.preventDefault();

  var userName = $("input#name").val();
  var userInitDeposit = parseInt($("input#initial-deposit").val());

  var newAccount = new Account(userName, userInitDeposit);

  newAccount.amount.push(userInitDeposit);

  $("#signup").hide();
  $("#transaction").show();
  $("#account-balance").append("<li>" + newAccount.amount + "</li>");
  $("#balance").show();

    $("form#transaction").submit(function(event) {
      event.preventDefault();

      var userDeposit = parseInt($("input#deposit").val());
      var userWithdrawal = parseInt($("input#withdrawal").val());

      newAccount.amount.push(userDeposit);
      newAccount.amount.push(userWithdrawal);

      console.log(newAccount.amount);

      newTotal(newAccount.amount);

      $("#account-balance").prepend("<li>" + newAccount.amount + "</li>");
      $("#balance").show();

    });
});
