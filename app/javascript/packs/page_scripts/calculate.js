document.addEventListener("DOMContentLoaded", function (event) {
    calc_init();
})

window.calc_init = function () {
    document.getElementById('rate1').value = 10;
    document.getElementById('rate2').value = 2.25;
    document.getElementById('curLoan').innerHTML = '35,000';
    document.getElementById('loan_range').value = 35000;
    document.getElementById('curMonth').innerHTML = 48;
    document.getElementById('month_range').value = 48;
    current_rate_cal();
}

window.onChangeMonth = function (val) {
    document.getElementById('curMonth').innerHTML = val;
}


window.onChangeLoan = function (val) {
    var test = formatNum(parseInt(val).toFixed(2));
    document.getElementById('curLoan').innerHTML = test.substring(0, test.length - 3);
}

window.isNumberKey = function (evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;
}


window.PMT = function (i, n, p) {
    return (i * p * Math.pow(1 + i, n)) / (1 - Math.pow(1 + i, n));
}

window.current_rate_cal = function () {
    var rate = document.getElementById('rate1').value;
    var loan_amount = document.getElementById('loan_range').value;
    var loan_term = document.getElementById('month_range').value;
    var payment = PMT(rate / 1200, loan_term, -loan_amount)
    var interest = payment * loan_term - loan_amount;
    document.getElementById('interest1').value = interest.toFixed(2);
    new_rate_cal();
}

window.new_rate_cal = function () {
    var rate = document.getElementById('rate2').value;
    var loan_amount = document.getElementById('loan_range').value;
    var loan_term = document.getElementById('month_range').value;
    var payment = PMT(rate / 1200, loan_term, -loan_amount)
    var interest = payment * loan_term - loan_amount;
    document.getElementById('interest2').value = interest.toFixed(2);
    savings();
}

window.savings = function () {
    var interest1 = document.getElementById('interest1').value;
    var interest2 = document.getElementById('interest2').value;
    var savings = interest1 - interest2;
    document.getElementById('saving').innerHTML = formatNum(savings.toFixed(2));
}

window.formatNum = function (n) {
    return n.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}