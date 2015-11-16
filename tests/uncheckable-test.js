
$(function () {
    
    'use strict';
    
    var fixture = $('#qunit-fixture');
    
    QUnit.module('uncheckable.js');
    
    QUnit.test('Regular radio button cannot be unchecked', function(assert) {
        var radio = $('<input type="radio" checked>');
        
        fixture.append(radio);
        
        S(radio).click(function () {
            assert.equal(radio.prop('checked'), true, 'Radio button should still be checked');
        });
    });
    
    QUnit.test('Left click unchecks radio button', function(assert) {
        var radio = $('<input type="radio" checked>');
        
        fixture.append(radio);
        
        radio.prop('uncheckable', true);
        
        S(radio).click(function () {
            assert.equal(radio.prop('checked'), false, 'Radio button should be unchecked');
        });
    });
    
    QUnit.test('Right click does not uncheck radio button', function(assert) {
        var radio = $('<input type="radio" checked>');
        
        fixture.append(radio);
        
        radio.prop('uncheckable', true);
        
        S(radio).rightClick(function () {
            assert.equal(radio.prop('checked'), true, 'Radio button should not be unchecked');
        });
    });
    
});
