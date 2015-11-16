
$(function () {
    
    'use strict';
    
    QUnit.module('indeterminable.js', {
        beforeEach: function () {
            this.checkbox = $('<input type="checkbox">');
            $('#qunit-fixture').append(this.checkbox);
        }
    });
    
    QUnit.test('Regular checkbox cannot be set to "indeterminate"', function(assert) {
        S(this.checkbox).click(function () {
            assert.equal(this.prop('indeterminate'), false, 'Radio button should be checked');
        });
    });
    
    QUnit.test('Left click sets unckecked checkbox to "indeterminate"', function(assert) {
        this.checkbox.prop('indeterminable', true);
        
        S(this.checkbox).click(function () {
            assert.equal(this.prop('indeterminate'), true, 'Radio button should be checked');
        });
    });
    
});
