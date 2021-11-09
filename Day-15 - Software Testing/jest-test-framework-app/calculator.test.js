const calculator = require('./calculator')
//test case 1 
test('string with a single number should result in the number itself', () => {
    expect(calculator.add('1')).toBe(1);
  });

  //test case 2

  test('string with two numbers separated by comma should result in the sum of the numbers',
   () => {
    expect(calculator.add('100,100')).toBe(200);
  });

  //test case 3
  test('string with three numbers separated by comma should result in the sum of the numbers',
   () => {
    expect(calculator.add('20,80,-40')).toBe(60);
});
 
// test case 4
test('string with four numbers separated by comma should result in the sum of the numbers',
 () => {
    expect(calculator.add('20,10,-10,50')).toBe(10);
});

// test case 5
test('string with - numbers separated by comma should result in the sum of the numbers',
()=>{
  expect(calculator.add('-10,-5')).toBe(-15);
})