import {describe, expect, it} from "vitest";
import {FooBarQix} from "../src/foobarqix";

describe('Foo Bar Qix', () => {
  it.each([
    [0, '0'],
    [1, '1'],
    [2, '2'],
    [3, 'Foo'],
    //[5, 'Bar'],
    [6, 'Foo']
  ])('should return %s when input is %i', (entry, expected) => {
    const fooBarQix = new FooBarQix();
    expect(fooBarQix.compute(entry)).toEqual(expected);
  });
});
