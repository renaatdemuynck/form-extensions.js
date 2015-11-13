
(function () {
    
    'use strict';
    
    function findRadioButton(el) {
        switch (el.tagName) {
            case 'INPUT':
                return el.type === 'radio' ? el : null;
            case 'LABEL':
                return findRadioButton(el.htmlFor ? document.getElementById(el.htmlFor) : el.querySelector('INPUT'));
            default:
                return null;
        }
    }
    
    document.addEventListener('mouseup', function (e) {
        var radio = findRadioButton(e.target);
        
        function onclick(e) {
            radio.checked = false;
            radio.removeEventListener('click', onclick, false);
        }
        
        if (radio && radio.uncheckable && radio.checked && e.which === 1) {
            radio.addEventListener('click', onclick, false);
        }
    }, true);
    
    Object.defineProperty(HTMLInputElement.prototype, 'uncheckable', {
        value: false,
        writable: true
    });
    
}());
