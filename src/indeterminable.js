
(function () {
    
    'use strict';
    
    /**
     * Finds the given label's corresponding checkbox
     * 
     * @param {(HTMLLabelElement|HTMLInputElement)} A label or input element
     * @returns {HTMLInputElement} The corresponding checkbox or NULL if not found
     */
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
    
    // Listen for the mouseup event
    // This is only time we can know the current checked state of the checkbox
    // AND that we can be sure the click event will be fired
    document.addEventListener('mouseup', function (e) {
        var checkbox = findCheckbox(e.target);
        
        /**
         * Handler that will set the checkbox to the indeterminate state and unregister itself
         * 
         * @param {MouseEvent} e The mouse event object
         */
        function onclick(e) {
            checkbox.indeterminate = true;
            checkbox.checked = false;
            checkbox.removeEventListener('click', onclick, false);
        }
        
        /**
         * Handler that will set the checkbox to the checked state and unregister itself
         * 
         * @param {MouseEvent} e The mouse event object
         */
        function onclickIndeterminate(e) {
            checkbox.checked = true;
            checkbox.removeEventListener('click', onclickIndeterminate, false);
        }
        
        
        // Attach the handler if the radio button's 'uncheckable' property is TRUE
        // when the checkbox is clicked with the left mouse button
        if (checkbox && e.which === 1) {
            // Fix for IE's non-standard behaviour when clicking an indeterminate checkbox
            if (checkbox.indeterminate) {
                checkbox.addEventListener('click', onclickIndeterminate, false);
            } else if (checkbox.indeterminable && !checkbox.checked) {
                checkbox.addEventListener('click', onclick, false);
            }
        }
        
    }, true);
    
    // Define the 'indeterminable' property on the input element prototype
    Object.defineProperty(HTMLInputElement.prototype, 'indeterminable', {
        value: false,
        writable: true
    });
    
}());
