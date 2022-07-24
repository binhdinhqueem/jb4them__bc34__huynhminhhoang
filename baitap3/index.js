
document.getElementById("btnRead").onclick = function ()
{
    // input
    var numberInput = document.getElementById("numberInput").value*1;
    
    // xu ly
    var tram = Math.floor(numberInput/100);
    var chuc = Math.floor((numberInput/10)%10);
    var donvi = Math.floor(numberInput %10);
    
   var hundred = tram;
   switch (hundred) 
   {
        case 0:
            confirm("Số nhỏ hơn 1");
            break;
        case 1:
            hundred = "một";
            break;
        case 2:
            hundred = "hai";
            break;
        case 3:
            hundred = "ba";
            break;
        case 4:
            hundred = "bốn";
            break;
        case 5:
            hundred = "năm";
            break;
        case 6:
            hundred = "sáu";
            break;
        case 7:
            hundred = "bảy";
            break;
        case 8:
            hundred = "tám";
            break;
        case 9:
            hundred = "chín";
            break;
            default:
                hundred = "Nhập số có 3 chữ số";
   }

   var dozens = chuc;
   switch (dozens) 
   {
        case 0:
            dozens = "lẻ";
            break;
        case 1:
            dozens = "một";
            break;
        case 2:
            dozens = "hai";
            break;
        case 3:
            dozens = "ba";
            break;
        case 4:
            dozens = "bốn";
            break;
        case 5:
            dozens = "năm";
            break;
        case 6:
            dozens = "sáu";
            break;
        case 7:
            dozens = "bảy";
            break;
        case 8:
            dozens = "tám";
            break;
        case 9:
            dozens = "chín";
            break;
        default:
            dozens = "Nhập số có 3 chữ số";
   }

   var unit = donvi;
   switch (unit) 
   {
        case 0:
            unit = "một";
            break;
        case 1:
            unit = "một";
            break;
        case 2:
            unit = "hai";
            break;
        case 3:
            unit = "ba";
            break;
        case 4:
            unit = "bốn";
            break;
        case 5:
            unit = "năm";
            break;
        case 6:
            unit = "sáu";
            break;
        case 7:
            unit = "bảy";
            break;
        case 8:
            unit = "tám";
            break;
        case 9:
            unit = "chín";
            break;
        default:
            unit = "Nhập số có 3 chữ số";
   }

   var sum;
    if (hundred === 0) {
    sum = dozens + " mười " + unit;
    }
    
    else if (unit === 0) {
    sum = hundred + " trăm " + dozens + " mười ";
    }
    
    else if (dozens === 0) {
    sum = hundred + " trăm " + "lẻ " + unit;
    }
    
    else if (dozens === 1) {
    sum = hundred + " trăm " + "mười " + unit;
    }
    
    else if (hundred === 1 && dozens === 0){
    sum = hundred + " lẻ " + unit; 
    }

    else {
    sum = hundred + " trăm " + dozens + " mươi " + unit;
  }

   document.getElementById("notifiCation").innerHTML = sum;
}