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

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
