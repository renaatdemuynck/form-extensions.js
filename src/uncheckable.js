
(function () {
    
    'use strict';
    
    /**
     * Finds the given label's corresponding radio button
     * 
     * @param {(HTMLLabelElement|HTMLInputElement)} A label or input element
     * @returns {HTMLInputElement} The corresponding radio button or NULL if not found
     */
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
    
    // Listen for the mouseup event
    // This is only time we can know the current checked state of the radio button
    // AND that we can be sure the click event will be fired
    document.addEventListener('mouseup', function (e) {
        var radio = findRadioButton(e.target);
        
        /**
         * Handler that will uncheck the radio button and unregister itself
         * 
         * @param {MouseEvent} e The mouse event object
         */
        function onclick(e) {
            radio.checked = false;
            radio.removeEventListener('click', onclick, false);
        }
        
        // Attach the handler if the radio button's 'uncheckable' property is TRUE
        // and is in a checked state but only when clicked with the left mouse button
        if (radio && radio.uncheckable && radio.checked && e.which === 1) {
            radio.addEventListener('click', onclick, false);
        }
        
    }, true);
    
    // Define the 'uncheckable' property on the input element prototype
    Object.defineProperty(HTMLInputElement.prototype, 'uncheckable', {
        value: false,
        writable: true
    });
    
}());
