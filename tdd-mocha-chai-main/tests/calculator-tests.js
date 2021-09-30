const chai = require('chai');
const expect = chai.expect;
const Calculator = require('../src/calculator.js')

describe('The Calculator', () => {
  
    before(() => {
        calculator = new Calculator
    });

    it('Should sum two positive integers', () => {
      expect(calculator.sum(2, 3)).to.equal(5);
    });

    it('Deve somar um positivo e um negativo', () => {
      expect(calculator.sum(-2, 3)).to.equal(1);
    });

    it('Multiplicar dois positivos', () => {
      expect(calculator.vezes(10, 3)).to.equal(30);
    });

    it('Multiplicar dois negativos', () => {
      expect(calculator.vezes(-9, -7)).to.equal(63);
    });

    it('Dividir dois positivos', () => {
      expect(calculator.dividir(20, 2)).to.equal(10);
    });

});
