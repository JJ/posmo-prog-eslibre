import test from 'node:test';
import assert from 'assert/strict';

import { rock, vamosABailar } from "../src/rock-en-samil.js";

const elRockDonde = "En Samil";
test("Rock", () => {
    assert.equal( rock(),  elRockDonde );
});

test("Vamos a bailar", () => {
    assert.equal( vamosABailar("El Rock"), elRockDonde );
});
