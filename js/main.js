document
  .getElementById("tinhTienTaxi")
  .addEventListener("click", function (event) {
    var uberX = document.getElementById("uberX").checked;
    var uberSUV = document.getElementById("uberSUV").checked;
    var uberBlack = document.getElementById("uberBlack").checked;

    var distance = document.getElementById("distance").value;
    distance = parseFloat(distance);

    var waitingTime = document.getElementById("waitingTime").value;
    waitingTime = parseFloat(waitingTime);

    /**
     * Tính tiền
     */
    var total = 0;
    if (uberX === true) {
      if (distance == 1) {
        total = 8000 + waitingTime * 2000;
      } else if (distance <= 20) {
        total = 12000 * distance + waitingTime * 2000;
      } else {
        total = 10000 * distance + waitingTime * 2000;
      }
    }

    if (uberSUV === true) {
      if (distance == 1) {
        total = 9000 + waitingTime * 3000;
      } else if (distance <= 20) {
        total = 14000 * distance + waitingTime * 3000;
      } else {
        total = 12000 * distance + waitingTime * 3000;
      }
    }

    if (uberBlack === true) {
      if (distance == 1) {
        total = 0000 + waitingTime * 4000;
      } else if (distance <= 20) {
        total = 16000 * distance + waitingTime * 4000;
      } else {
        total = 14000 * distance + waitingTime * 4000;
      }
    }

    document.getElementById("xuatTien").innerHTML =
      "Tổng tiền chuyến đi là" + " " + total + " " + "vnd";
  });
