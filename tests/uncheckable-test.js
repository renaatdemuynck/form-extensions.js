
$(function () {
    
    'use strict';
    
    QUnit.module('uncheckable.js', {
        beforeEach: function () {
            this.radio = $('<input type="radio" checked>');
            $('#qunit-fixture').append(this.radio);
        }
    });
    
    QUnit.test('Regular radio button cannot be unchecked', function(assert) {
        S(this.radio).click(function () {
            assert.equal(this.prop('checked'), true, 'Radio button should still be checked');
        });
    });
    
    QUnit.test('Left click unchecks radio button', function(assert) {
        this.radio.prop('uncheckable', true);
        
        S(this.radio).click(function () {
            assert.equal(this.prop('checked'), false, 'Radio button should be unchecked');
        });
    });
    
    QUnit.test('Right click does not uncheck radio button', function(assert) {
        this.radio.prop('uncheckable', true);
        
        S(this.radio).rightClick(function () {
            assert.equal(this.prop('checked'), true, 'Radio button should not be unchecked');
        });
    });
    
});
