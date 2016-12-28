(function(){

if(!navigator.geolocation){
    $('#suppportOutput').html('Twoja przeglądarka nie wspiera Geolokalizacji!');
    $('#suppportOutput').addClass('alert-danger');
}else {
    $('#suppportOutput').html('Twoja przeglądarka wspiera Geolakaizacje!');
    $('#suppportOutput').addClass('alert-success');
}

function geoSuccess(position) {
    $('#positionOutput').html('Twoja pozycja to: ' + position.coords.latitude + "," + position.coords.longitude);
    let numb1 = position.coords.latitude
        numb2 = position.coords.longitude;
    $('.option').append("<a class='locButtonMap'>Lokalizacja na mapie</a>");
    $('.locButtonMap').attr("href", "https://www.bing.com/maps?cp=" + numb1 + "~" + numb2);
}
 
function geoError(errorObj) {

    var errorMessage;

    switch(errorObj.code){
        case errorObj.PERMISSION_DENIED :
            errorMessage = "Brak pozwolenia na znalezienie lokalizacji";
         break;

         case errorObj.POSITION_UNAVAILABLE :
            errorMessage = "Brak dostępu do sieci.";
         break;
         
         case errorObj.TIMEOUT :
            errorMessage = "Przekroczono czas oczekiwania";
            break;
    }
     $('#positionOutput').html('<strong>Wystąpił błąd: </strong>' + errorMessage);
}

//Obsługa przycisku pobierz pozycje
$('#findPosition').on("click",function(){

$('#positionOutput').html("Czekaj...");

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);


});
})();