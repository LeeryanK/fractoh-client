class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  clone() {
    return new Fraction(this.numerator, this.denominator);
  }
  
  reciprocal() {
    return new Fraction(this.denominator, this.numerator);
  }
  
  compare(otherFraction) {
    const [commonizedThis, commonizedOther] = Fraction.commonizeDenominators(this, otherFraction);
    
    if (commonizedThis.numerator > commonizedOther.numerator) {
      return 1;
    } else if (commonizedThis.numerator === commonizedOther.numerator) {
      return 0;
    } else {
      return -1;
    }
  }
  
  add(otherFraction) {
    const [commonizedThis, commonizedOther] = Fraction.commonizeDenominators(this, otherFraction);
    
    const sumNumerator = commonizedThis.numerator + commonizedOther.numerator;
    const sumDenominator = commonizedThis.denominator + commonizedOther.denominator;
    
    return new Fraction(sumNumerator, sumDenominator);
  }
  
  subtract(otherFraction) {
    const [commonizedThis, commonizedOther] = Fraction.commonizeDenominators(this, otherFraction);
    
    const differenceNumerator = commonizedThis.numerator - commonizedOther.numerator;
    const differenceDenominator = commonizedThis.denominator - commonizedOther.denominator;
    
    return new Fraction(differenceNumerator, differenceDenominator);
  }
  
  multiply(otherFraction) {
    return new Fraction(this.numerator * otherFraction.numerator, this.denominator * otherFraction.denominator);
  }
  
  divide(otherFraction) {
    return new Fraction(this.numerator * otherFraction.denominator, this.denominator * otherFraction.numerator);
  }
  
  // RIP Grammar
  static commonizeDenominators(...fractions) {
    const newFractions = fractions.map(fraction => fraction.clone());
    
    for (let newFraction of newFractions) {
      for (let fraction of fractions) {
        // Ensure fraction and newFraction are not equal
        if (!(newFraction.numerator === fraction.numerator && newFraction.denominator === fraction.denominator)) {
          newFraction.numerator *= fraction.denominator;
          newFraction.denominator *= fraction.denominator;
        }
      }
    }
    
    return newFractions;
  }
}
