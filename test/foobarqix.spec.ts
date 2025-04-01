import {describe, expect, it} from "vitest";
import {FooBarQix} from "../src/foobarqix";

describe('Foo Bar Qix', () => {
  it.each([
    [0, '*'],
    [1, '1'],
    [2, '2'],
    [3, 'FooFoo'],
    [4, '4'],
    [5, 'BarBar'],
    [6, 'Foo'],
    [7, 'QixQix'],
    [8, '8'],
    [9, 'Foo'],
    [10, 'Bar*'],
    [13, 'Foo'],
    [15, 'FooBarBar'],
    [21, 'FooQix'],
    [33, 'FooFooFoo'],
    [35, 'BarQixFooBar'],
    [51, 'FooBar'],
    [53, 'BarFoo'],
    [101, '1*1'],
    [105, 'FooBarQix*Bar'],
    [303, 'FooFoo*Foo'],
    [10101, 'FooQix**'],
  ])('For %i, should return %s', (entry, expected) => {
    const fooBarQix = new FooBarQix(entry);
    expect(fooBarQix.compute()).toEqual(expected);
  });
});
