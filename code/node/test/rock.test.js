import test from 'node:test';
import assert from 'assert/strict';

import { rock, vamosABailar } from "../src/rock-en-samil.js";
test("Rock", () => {
    assert.equal( rock(), "En Samil" );
}
