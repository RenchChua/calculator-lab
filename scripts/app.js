var Calculator = function(firstNum, secondNum, operator, result){
  this.firstNum = firstNum;
  this.secondNum = secondNum;
  this.operator = operator;
  this.result = result;
  this.basicEval = function(firstNum, secondNum, operator){
    this.firstNum
  }
};

var basicCalc = new Calculator($("#basic-num-1").val(), 15, $('#basic-operation').val(), $("#basic-num-2").val());
$("#basic-calc").click(function(){
  console.log("clicked");
  console.log(basicCalc.firstNum);
}

var calcResults = {
  basicCalcAnswer: 0,
  tripCalcAnswer: 0,
  bmiCalcAnswer: 0,
  mortCalcAnswer: 0
};

// $("#basic-calc").click(function(){
//   $("#basic-answer-alert").html((eval($("#basic-num-1").val() + " " + $('#basic-operation').val() + " " + $("#basic-num-2").val())));
//   calcResults.basicCalcAnswer = eval($("#basic-num-1").val() + " " + $('#basic-operation').val() + " " + $("#basic-num-2").val());
// });
//
// $("#trip-calc").click(function(){
//   var distance = $("#trip-distance").val();
//   var tripMpg = $("#trip-mpg").val();
//   var costPerGallon = $("#trip-cost").val();
//   var speed = $("#trip-speed").val();
//   var totalCost = 0;
//   if(speed < 60){
//     totalCost = distance/tripMpg * costPerGallon;
//   }else{
//     totalCost = distance/(tripMpg - (speed - 60) * 2) * costPerGallon;
//   }
//
//   $("#trip-answer-alert").html(totalCost);
//   calcResults.tripCalcAnswer = totalCost;
//   console.log(calcResults.basicCalcAnswer);
// });
//
// $("#bmi-calc").click(function(){
//   var mass = ($("#bmi-mass").val());
//   var height = $("#bmi-height").val();
//   var bmi = mass/(height * height);
//   bmi = parseFloat(bmi.toFixed(2));
//   $("#bmi-answer-alert").html(bmi);
//   calcResults.bmiCalcAnswer = bmi;
// });
//
// $("#mortgage-calc").click(function(){
//   var loan = $("#mortgage-loan").val();
//   var apr = $("#mortgage-apr").val()/100;
//   var term = $("#mortgage-term").val();
//   var costPerMonth = loan * apr * (Math.pow((1 + apr) , term) / ((Math.pow((1 + apr) , term)) - 1 ) );
//   costPerMonth = parseFloat(costPerMonth.toFixed(2));
//   $("#mortgage-answer-alert").html(costPerMonth);
//   calcResults.mortCalcAnswer = costPerMonth;
// });
