document.getElementById("tinhSV").onclick = function () {
    // input
    var name1 = document.getElementById("name1").value;
    var x1 = document.getElementById("x1").value * 1;
    var y1 = document.getElementById("y1").value * 1;

    var name2 = document.getElementById("name2").value;
    var x2 = document.getElementById("x2").value * 1;
    var y2 = document.getElementById("y2").value * 1;

    var name3 = document.getElementById("name3").value;
    var x3 = document.getElementById("x3").value * 1;
    var y3 = document.getElementById("y3").value * 1;

    var x4 = document.getElementById("x4").value * 1;
    var y4 = document.getElementById("y4").value * 1;
    
    // Xử lý
    var sv1 = Math.pow(x1 - x4, 2) + Math.pow(y1 - y4, 2);
    var sv2 = Math.pow(x2 - x4, 2) + Math.pow(y2 - y4, 2);
    var sv3 = Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2);
  
    var svXaNhat;
    if (sv1 > sv2 && sv1 > sv3) {
      svXaNhat = "Sinh viên xa trường nhất: " + name1;
    } else if (sv2 > sv1 && sv2 > sv3) {
      svXaNhat = "Sinh viên xa trường nhất: " + name2;
    } else if (sv3 > sv1 && sv3 > sv2) {
      svXaNhat = "Sinh viên xa trường nhất: " + name3;
    } else {
      confirm("Vui lòng nhập số");
    }

    // output
    document.getElementById("thongBaoSV").innerHTML = svXaNhat;
  };