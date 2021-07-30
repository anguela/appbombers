 var numfloorplant;
 var codifloorplant;
 var colortriat;
 var numVermell = 0;
 var numGris = 0;
 var numConfi = 0;
 var myModal = new bootstrap.Modal(document.getElementById('triaOpcions'), {
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


 $(document).on('click', '.floorplant', function () {
     // Si no ha estat assignat un codi mostra el Modal
     codifloorplant = $(this).text();
     console.log(codifloorplant);
     if (codifloorplant != "∅" && codifloorplant != "E" && codifloorplant != "C" && codifloorplant != "X") {
         numfloorplant = $(this).text();
         $(".modal-title").text('Planta - Pis #' + numfloorplant);
         myModal.show();
     }
 });

 // Assigna el color de fons que toqui
 $(".color").on('click', function (event) {
     colortriat = $(this).css("background-color");
     funcioComptar();
     console.log(colortriat);
 });

 // Afegeix un pis més
 $("#masPisito").on('click', function (event) {
     var textpis = $(".pisito .floorplant").first().text().trim()
     var numultimpis = textpis.substr(0, textpis.indexOf('e'));
     var pisoaponer = parseInt(numultimpis) + 1;
     console.log(pisoaponer);

     $(`<div class="pisito row justify-content-around">
                    <div class="floorplant col-2">
                        ` + pisoaponer + `e 1a
                    </div>
                    <div class="floorplant col-2">
                        ` + pisoaponer + `e 2a
                    </div>
                    <div class="floorplant col-2">
                        ` + pisoaponer + `e 3a
                    </div>
                    <div class="floorplant col-2">
                        ` + pisoaponer + `e 4a
                    </div>
                    <div class="floorplant col-2">
                        ` + pisoaponer + `e 5a
                    </div>
                    <div class="floorplant col-2">
                        ` + pisoaponer + `e 6a
                    </div>
        </div>`).insertBefore($(".pisito").first());

 });


 function funcioComptar() {
     $(".floorplant:contains('" + numfloorplant + "')").css("background-color", colortriat);
     if (colortriat == "rgb(245, 245, 245)") {
         $(".floorplant:contains('" + numfloorplant + "')").css("color", "black");
         $(".floorplant:contains('" + numfloorplant + "')").html("&empty;");
     } else if (colortriat == "rgb(165, 0, 0)") {
         $(".floorplant:contains('" + numfloorplant + "')").css("color", "white");
         $(".floorplant:contains('" + numfloorplant + "')").css("font-weight", "bold");
         $(".floorplant:contains('" + numfloorplant + "')").html("X");
         $(".floorplant:contains('" + numfloorplant + "')").hover(function () {
             $(this).css("background-color", "rgb(165, 0, 0) !important");
         });
         $("#filaColorInici").hide();
     } else if (colortriat == "rgb(143, 188, 143)") {
         $(".floorplant:contains('" + numfloorplant + "')").css("font-weight", "bold");
         $(".floorplant:contains('" + numfloorplant + "')").html("C");
         $(".floorplant:contains('" + numfloorplant + "')").hover(function () {
             $(this).css("background-color", "rgb(143, 188, 143) !important");
         });
     } else if (colortriat == "rgb(143, 188, 143)") {
         $(".floorplant:contains('" + numfloorplant + "')").css("font-weight", "bold");
         $(".floorplant:contains('" + numfloorplant + "')").html("C");
         $(".floorplant:contains('" + numfloorplant + "')").hover(function () {
             $(this).css("background-color", "rgb(143, 188, 143) !important");
         });
     } else if (colortriat == "rgb(255, 0, 0)") {
         $(".floorplant:contains('" + numfloorplant + "')").css("font-weight", "bold");
         $(".floorplant:contains('" + numfloorplant + "')").html("E");
         $(".floorplant:contains('" + numfloorplant + "')").hover(function () {
             $(this).css("background-color", "rgb(255, 0, 0) !important");
         });
     } else if (colortriat == "rgb(128, 128, 128)") {
         $(".floorplant:contains('" + numfloorplant + "')").css("font-weight", "bold");
         $(".floorplant:contains('" + numfloorplant + "')").html("E");
         $(".floorplant:contains('" + numfloorplant + "')").hover(function () {
             $(this).css("background-color", "rgb(128, 128, 128) !important");
         });
     } else {
         $(".floorplant:contains('" + numfloorplant + "')").css("color", "white");
     }

     $(".floorplant").each(function (index) {
         var colorTemp = $(this).css("background-color");

         switch (colorTemp) {
             case "rgb(255, 0, 0)":
                 numVermell++;
                 break;
             case "rgb(165, 0, 0)":
                 numVermell++;
                 break;
             case "rgb(128, 128, 128)":
                 numGris++;
                 break;
             case "rgb(143, 188, 143)":
                 numConfi++;
                 break;
             default:
         }
     });

     $("#comptarFum").text(numGris);
     $("#comptarFoc").text(numVermell);
     $("#comptarConfi").text(numConfi);

     numVermell = 0;
     numGris = 0;
     numConfi = 0;
     myModal.hide();
 };


 $(".rotate").click(function () {
     $(this).toggleClass("down");
     setTimeout(function () {
         window.location.reload(1);
     }, 300);
 })
