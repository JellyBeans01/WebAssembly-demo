import assert from "assert";
import { square } from "../build/debug.js";

assert.strictEqual(square(3), 9);
assert.strictEqual(square(10), 100);

console.log("All tests ran successfully");