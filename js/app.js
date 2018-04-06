    //Run
$(document).ready(function() {
    // Mobile Nav - Hide on click
    $("label + ul li a").on( "click", function() {
      $('#nav').attr('checked', false);
    });

    // Window Resize - Collapse Nav
    $(window).resize(function() {
        $('#nav').attr('checked', false);
        if ($( window ).width() >= 1024 && $(document).scrollTop() >= 1000) {
            $("footer + div").fadeIn('fast');
        } else {
            $("footer + div").fadeOut('fast');
        }
    });

    // Scroll Window
    $(document).scroll(function() {
        if ($(document).scrollTop() >= 1000 && $(document).width() >= 1024) {
            $("footer + div").fadeIn('fast');
        } else {
            $("footer + div").fadeOut('fast');
        }
    });

    // Smooth Scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 1000);
        return false;
    });

    initMap();
});


function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: -36.9144744, lng: 174.6646562},
        styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#cae2f1"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"color":"#d4a357"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#f03d3d"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"weight":"0.93"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}],
        zoom: 15,
        mapTypeControl: false,
        scrollwheel:  false
    });
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(-36.9144744, 174.6646562),
        map: map,
        url: 'https://www.google.co.nz/maps/place/32+Rua+Rd,+Glen+Eden,+Auckland+0602/',
        title: 'humbug cafe'
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
    });
}
