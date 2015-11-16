
$(function () {
    
    'use strict';
    
    var fixture = $('#qunit-fixture');
    
    QUnit.module('indeterminable.js');
    
    QUnit.test('Regular checkbox cannot be set to "indeterminate"', function(assert) {
        var checkbox = $('<input type="checkbox">');
        
        fixture.append(checkbox);
        
        S(checkbox).click(function () {
            assert.equal(checkbox.prop('indeterminate'), false, 'Radio button should be checked');
        });
    });
    
    QUnit.test('Left click sets unckecked checkbox to "indeterminate"', function(assert) {
        var checkbox = $('<input type="checkbox">');
        
        fixture.append(checkbox);
        
        checkbox.prop('indeterminable', true);
        
        S(checkbox).click(function () {
            assert.equal(checkbox.prop('indeterminate'), true, 'Radio button should be checked');
        });
    });
    
});
