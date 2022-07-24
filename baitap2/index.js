/**
 * input : lấy input tháng năm
 * 
 * process: xử lí các tháng 31 ngày
 *          tháng 2 năm nhuận === 2 && yearInput %4 === 0 && yearInput % 400 !==0
 */




document.getElementById("calcDay").onclick = function (){
    // input
    var monthInput = document.getElementById("monthInput").value*1;
    var yearInput = document.getElementById("yearInput").value*1;

    // xu ly
    if (monthInput === 1 || monthInput === 3 || monthInput === 5 || monthInput === 7 || monthInput === 8 || monthInput === 10 || monthInput === 12){
        var result = "Tháng " + monthInput + " năm " + yearInput + " có 31 ngày";
    }

    else if(monthInput === 2 && yearInput %4 !==0){
        var result = "Tháng " + monthInput + " năm " + yearInput + " có 28 ngày";
    }

    else if(monthInput === 2 && yearInput %4 === 0 && yearInput % 400 !==0){
        var result = "Tháng " + monthInput + " năm " + yearInput + " có 29 ngày";
    }

    else{
        var result = "Tháng " + monthInput + " năm " + yearInput + " có 30 ngày";
    }

    // out put
    document.getElementById("notifiCation").innerHTML = result;
}