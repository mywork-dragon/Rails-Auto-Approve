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