/**
 * input: lấy in put ngày tháng năm
 * 
 * process: hôm qua = (ngày -1) / tháng / năm
 *          xử lí ngày đầu tháng và cuối tháng
 *          đầu năm và cuối năm
 * 
 * output: in ra màn hình
 */




document.getElementById("yesterday").onclick = function (){
    // input
    var dayInput = document.getElementById("dayInput").value*1;
    var monthInput = document.getElementById("monthInput").value*1;
    var yearInput = document.getElementById("yearInput").value*1;

    // xu ly
    if(dayInput === 1 && monthInput === 1){
        var result = 31 + "/" + 12 + "/" + (yearInput - 1);
    }

    else if (dayInput === 1 && monthInput == 2){
        var result = 31 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 3){
        var result = 28 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 4){
        var result = 31 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 5){
        var result = 30 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 6){
        var result = 31 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 7){
        var result = 30 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 8){
        var result = 31 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 9){
        var result = 31 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 10){
        var result = 30 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 11){
        var result = 31 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else if (dayInput === 1 && monthInput == 12){
        var result = 30 + "/" + (monthInput - 1) + "/" + yearInput;
    }

    else{
        var result = (dayInput - 1) + "/" + (monthInput - 1) + "/" + yearInput;
    }

    // output
    document.getElementById("notifiCation").innerHTML = result;
}

document.getElementById("tomorrow").onclick = function (){
    // input
    var dayInput = document.getElementById("dayInput").value*1;
    var monthInput = document.getElementById("monthInput").value*1;
    var yearInput = document.getElementById("yearInput").value*1;
    // xu ly
    if (dayInput >= 31 && monthInput >= 12){
        var result = 1 + "/" + 1 + "/" + (yearInput + 1);
    }

    else if(dayInput >= 31 && monthInput === 1){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 28 && monthInput === 2){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 31 && monthInput === 3){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 30 && monthInput === 4){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 31 && monthInput === 5){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 30 && monthInput === 6){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 31 && monthInput === 7){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 31 && monthInput === 8){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 30 && monthInput === 9){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }
    

    else if(dayInput >= 31 && monthInput === 10){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else if(dayInput >= 30 && monthInput === 11){
        var result = 1 + "/" + (monthInput + 1) + "/" + yearInput;
    }

    else{
        var result = (dayInput + 1) + "/" + monthInput + "/" + yearInput;
    }

    document.getElementById("notifiCation").innerHTML = result;
}