 $("input[type='number']").inputSpinner();
 var numseient;
 var colortriat;
 var numVerd = 0;
 var numGroc = 0;
 var numVermell = 0;
 var numNegre = 0;
 var numBlau = 0;
 var myModal = new bootstrap.Modal(document.getElementById('triaColor'), {
     keyboard: false
 });

 $(document).ready(function () {
     // iOS web app full screen hacks.
     if (window.navigator.standalone == true) {
         // make all link remain in web app mode.
         $('a').click(function () {
             window.location = $(this).attr('href');
             return false;
         });
     }
 });


 $(".seient").on('click', function (event) {
     numseient = $(this).text();
     $(".modal-title").text('Seient #' + numseient);

     myModal.show();
 });
 $(".color").on('click', function (event) {
     colortriat = $(this).css("background-color");

     funcioComptar();
 });
 var $changedInput = $(".comptExt");
 $changedInput.on("input", function (event) {
     funcioComptar();
 })
 $changedInput.on("change", function (event) {
     funcioComptar();
 })

 function funcioComptar() {
     $(".seient:contains('" + numseient + "')").css("background-color", colortriat);
     if (colortriat == "rgb(245, 245, 245)" || colortriat == "rgb(255, 255, 0)") {
         $(".seient:contains('" + numseient + "')").css("color", "black");
     } else {
         $(".seient:contains('" + numseient + "')").css("color", "white");
     }

     $(".seient").each(function (index) {
         var colorTemp = $(this).css("background-color");
         console.log(colorTemp);

         switch (colorTemp) {
             case "rgb(0, 128, 0)":
                 numVerd++;
                 break;
             case "rgb(255, 255, 0)":
                 numGroc++;
                 break;
             case "rgb(255, 0, 0)":
                 numVermell++;
                 break;
             case "rgb(0, 0, 0)":
                 numNegre++;
                 break;
             case "rgb(0, 0, 205)":
                 numBlau++;
                 break;
             default:
         }
     });

     numGroc = numGroc + parseInt($("#extGroc").val());
     numVermell = numVermell + parseInt($("#extVermell").val());
     numNegre = numNegre + parseInt($("#extNegre").val());
     numBlau = numBlau + parseInt($("#extAteses").val());

     $("#comptarVerd").text(numVerd);
     $("#comptarGroc").text(numGroc);
     $("#comptarVermell").text(numVermell);
     $("#comptarNegre").text(numNegre);
     $("#comptarTotal").text(numVerd + numGroc + numVermell + numNegre);
     $("#comptarAteses").text(numBlau);

     numVerd = 0;
     numGroc = 0;
     numVermell = 0;
     numNegre = 0;
     numBlau = 0;
     myModal.hide();
 };


 $(".rotate").click(function () {
     $(this).toggleClass("down");
     setTimeout(function () {
         window.location.reload(1);
     }, 300);
 })
