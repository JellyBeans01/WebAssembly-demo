(module
    (func $return20 (result i32)
        i32.const 20
    )
    (func $echo (param i32) (result i32)
        local.get 0
    )
    (func $square (param i32) (result i32)
        local.get 0
        local.get 0
        i32.mul
    )
    (func $add (param i32) (param i32) (result i32)
        local.get 0
        local.get 1
        i32.add
    )
    (func $multiply (param $p1 i32) (param $p2 i32) (result i32)
        local.get $p1
        local.get $p2
        i32.mul
    )
    (export "return20" (func $return20))
    (export "echo" (func $echo))
    (export "square" (func $square))
    (export "add" (func $add))
    (export "multiply" (func $multiply))
)