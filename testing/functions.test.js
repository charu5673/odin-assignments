const functions = require('./functions.js');

// capitalize tests

test('converts hello to Hello',()=>{
    expect(functions.capitalize('hello')).toBe('Hello');
});

test('handles empty strings',()=>{
    expect(functions.capitalize('')).toBe('');
});

test('keeps HELLO the same',()=>{
    expect(functions.capitalize('HELLO')).toBe('HELLO');
});

// reverseString tests

test('converts eloh to hole',()=>{
    expect(functions.reverseString('eloh')).toBe('hole');
});

test('handles empty strings',()=>{
    expect(functions.reverseString('')).toBe('');
});

test('handles capital letters',()=>{
    expect(functions.reverseString('gHoLSmns')).toBe('snmSLoHg');
});

// calculator tests

test('addition',()=>{
    expect(functions.calculator.add(1,6)).toBe(7);
});

test('subtraction',()=>{
    expect(functions.calculator.subtract(9,-5)).toBe(14);
});

test('multiplication',()=>{
    expect(functions.calculator.multiply(1.5,3)).toBeCloseTo(4.5);
});

test('division',()=>{
    expect(functions.calculator.divide(9,3)).toBe(3);
});

// caesarCipher tests

test('converts hello to ifmmp with shift factor 1',()=>{
    expect(functions.caesarCipher('hello',1)).toBe('ifmmp');
});

test('handles punctuation',()=>{
    expect(functions.caesarCipher('hello, there!',3)).toBe('khoor, wkhuh!');
});

test('handles capital letters',()=>{
    expect(functions.caesarCipher('KlMnOp',5)).toBe('PqRsTu');
});

test('handles empty strings',()=>{
    expect(functions.caesarCipher('',5)).toBe('');
});

test('negative shift factors',()=>{
    expect(functions.caesarCipher('shift',-2)).toBe('qfgdr');
});

test('no shift factor/zero',()=>{
    expect(functions.caesarCipher('where',0)).toBe('where');
});

// analyzeArray tests

test('works for [1,2,3]',()=>{
    let o={
        average:2,
        min:1,
        max:3,
        length:3,
    }
    expect(functions.analyzeArray([1,2,3])).toEqual(o);
});

test('negative numbers',()=>{
    let o={
        average:1,
        min:-2,
        max:3,
        length:4,
    }
    expect(functions.analyzeArray([1,2,3,-2])).toEqual(o);
});