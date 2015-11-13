
(function () {
    
    'use strict';
    
    function findCheckbox(el) {
        switch (el.tagName) {
            case 'INPUT':
                return el.type === 'checkbox' ? el : null;
            case 'LABEL':
                return findCheckbox(el.htmlFor ? document.getElementById(el.htmlFor) : el.querySelector('INPUT'));
            default:
                return null;
        }
    }
    
    document.addEventListener('mouseup', function (e) {
        var checkbox = findCheckbox(e.target);
        
        function onclick(e) {
            checkbox.indeterminate = true;
            checkbox.checked = false;
            checkbox.removeEventListener('click', onclick, false);
        }
        
        if (checkbox && checkbox.indeterminable && !checkbox.checked && !checkbox.indeterminate && e.which === 1) {
            checkbox.addEventListener('click', onclick, false);
        }
    }, true);
    
    Object.defineProperty(HTMLInputElement.prototype, 'indeterminable', {
        value: false,
        writable: true
    });
    
}());
