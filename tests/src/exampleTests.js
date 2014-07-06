/* Example Tests */

// test( "Boilerplate test for variable initialization", 1, function() {
//    //moduleName.init();
//     var checkExists = false;
//     var initObjectsForTest = [
//       //moduleName.vars.variableName
//     ];

//     _.each(initObjectsForTest, initIteration);

//     function initIteration(initVariable) {
//         checkExists = !(initVariable.length === 0);
//         ok(checkExists, initVariable.selector + ' in the ==Module Name== failed to initialize');
//     }
// });

test( "List of Qunit Assertions", 9, function() {

    /* List of QUnit assertions */

    //Basic Boolean check, false, 0, NAN, "", null, undefined fail the test
    ok( true, "true succeeds" );

    //equal(), non-strict comparisons
    equal( 1, "1", "A non-strict comparison, roughly equivalent to JUnit's assertEquals" );
    notEqual( 1, "2", "A non-strict comparison, checking for inequality." );

    //deepEqual(), checking for values and types
    var object1 = { foo: "bar" };
    deepEqual( object1, { foo: "bar" }, "A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions" );
    var object2 = { foo: "bar" };
    notDeepEqual( object2, { foo: "bla" }, "An inverted deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions");

    //The most strict comparisons
    strictEqual( 1, 1, "A strict type and value comparison." );
    notStrictEqual( 1, "1", "A strict comparison, checking for inequality." );

    //propEqual(), comparing the properties of objects
    function FooPE( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    FooPE.prototype.doA = function () {};
    FooPE.prototype.doB = function () {};
    FooPE.prototype.bar = 'prototype';

    var fooPE = new Foo( 1, "2", [] );
    var barPE = {
        x : 1,
        y : "2",
        z : []
    };
    propEqual( fooPE, barPE, "Strictly the same properties without comparing objects constructors." );

    //notPropEqual(), comparing the properties of objects
    function FooNPE( x, y, z ) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    FooNPE.prototype.doA = function () {};
    FooNPE.prototype.doB = function () {};
    FooNPE.prototype.bar = 'prototype';

    var fooNPE = new FooNPE( 1, "2", [] );
    var barNPE = new FooNPE( "1", 2, {} );
    notPropEqual( fooNPE, barNPE, "A strict comparison of an object's own properties, checking for inequality." );

});