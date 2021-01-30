// $(document).on('turbolinks:load', function () {
$(document).ready(function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");

  // Init values
  $("#myRange").val(35000);
  $("#month_range").val(48);
  $("#rate2").val(2.25);

  output.innerHTML = slider.value;

  slider.oninput = function() {
    output.innerHTML = this.value;
  }

  var slider2 = document.getElementById("month_range");
  var output2 = document.getElementById("month_demo");
  output2.innerHTML = slider2.value;

  slider2.oninput = function() {
    output2.innerHTML = this.value;
  }

  $(document).ready(function () {
      current_rate_cal();
  } );


  window.PMT = function(i,n,p){
    return i*p*Math.pow((1+i),n)/(1-Math.pow((1+i),n));
  }

  window.current_rate_cal = function() {
    var rate=$("#rate1").val();
    var loan_amount=$("#myRange").val();
    var loan_term=$("#month_range").val();
    var payment=PMT(rate/1200,loan_term,-loan_amount);
    var interest=payment*loan_term-loan_amount;
    $("#interest1").val(interest.toFixed(2));
    new_rate_cal();
  }

  window.new_rate_cal = function(){
    var rate=$("#rate2").val();
    var loan_amount=$("#myRange").val();
    var loan_term=$("#month_range").val();
    var payment=PMT(rate/1200,loan_term,-loan_amount);
    var interestt=payment*loan_term-loan_amount;
    $("#interest2").val(interestt.toFixed(2));
    savings();
  }

  window.savings = function(){
    var interest1=$("#interest1").val();
    var interest2=$("#interest2").val();
    var savings=interest1-interest2;
    document.getElementById("saving").innerHTML=savings.toFixed(2);
  }
});