# WASMTables

Here we will explain what WASM tables are.

WASM Tables allows us to call funcitons dynamically (on runtime)

How do we create a table?
1. We need to specify its size (how many items of a specific type it will hold)
2. Initialize the names of the elements
    - `(i32.const 0)` is the offset, an offset of 0 indicates that we will have an amount of elements equal to the size of the table specified, if we were to define 1 here, we needed to increase the size of our table with 1 as well
    - `$f1 $f2` are the function names

Line 11 means: we create a function called "call_by_index" that accepts an i32 parameter and returns an i32 value

Note that on line 10 in our WAT file, we made a named type so we can re-use it when we want to.