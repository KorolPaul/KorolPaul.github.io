const phoneInput = document.getElementById('phone-mask');

if (phoneInput) {
    phoneInput.addEventListener('focus', function(e) {
        phoneInput.setAttribute('placeholder', '+7 999 000 0000')
        phoneMask = IMask(
            phoneInput, {
            mask: '+{7} 000 000 0000'
        });
    })
}

