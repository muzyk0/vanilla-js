import React from 'react'
import {mult, splitIntoWords, sum} from './01';

let a: number
let b: number
let c: number


// Default
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    // Action
    let result1 = sum(a, b)
    let result2 = sum(b, c)

    // Expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})
test('Multiply should be correct', () => {
    // Action
    let result1 = mult(a, b)
    let result2 = mult(b, c)

    // Expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('Spliting into words should be correct', () => {
    //Data
    const sent1 = 'Hello my friend!';
    const sent2 = 'JS - the best  programing language.';

    // Action
    let result1 = splitIntoWords(sent1)
    let result2 = splitIntoWords(sent2)

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programing')
    expect(result2[4]).toBe('language')

})