function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', function () {
    var translateButton = document.getElementById('translateButton');
    var translateElement = document.getElementById('google_translate_element');

    translateButton.addEventListener('click', function () {
        translateElement.style.display = translateElement.style.display === 'none' ? 'block' : 'none';
    });
});
