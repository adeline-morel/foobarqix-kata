export class FooBarQix {
  private readonly FOO: string = 'Foo';
  private readonly BAR: string = 'Bar';
  private readonly QIX: string = 'Qix';
  private readonly ASTERISK = '*';

  private readonly entry: number;

  constructor(entry: number) {
    this.entry = entry;
  }

  compute() {
    if (this.entry === 0) {
      return this.ASTERISK;
    }

    if (this.containsDigitZero() && this.isNotFooBarQixMultiple()) {
      return this.entry.toString().replace(/0/g, this.ASTERISK);
    }

    if (this.isFooBarQixNumber()) {
      return this.computeMultiple() + this.computeDigits();
    }

    return this.entry.toString();
  }

  private computeMultiple() {
    let result = [];

    if (this.isMultipleOfThree()) result.push(this.FOO);
    if (this.isMultipleOfFive()) result.push(this.BAR);
    if (this.isMultipleOfSeven()) result.push(this.QIX);

    return result.join('');
  }

  private computeDigits() {
    const replacements: { [key: string]: string } = { '3': this.FOO, '5': this.BAR, '7': this.QIX, '0': this.ASTERISK };

    return this.entry.toString().split('')
      .map(digit => replacements[digit] || '')
      .join('');
  }

  private isFooBarQixNumber() {
    return this.isMultipleOfThree() || this.isMultipleOfFive() || this.isMultipleOfSeven() || this.containsDigitsThreeFiveOrSeven();
  }

  private isMultipleOfThree() {
    return this.entry % 3 === 0;
  }

  private isMultipleOfFive() {
    return this.entry % 5 === 0;
  }

  private isMultipleOfSeven() {
    return this.entry % 7 === 0;
  }

  private containsDigitsThreeFiveOrSeven() {
    const specialDigits = ['3', '5', '7', '0'];
    return specialDigits.some(digit => this.entry.toString().includes(digit));
  }

  private containsDigitZero() {
    return this.entry.toString().includes('0');
  }

  private isNotFooBarQixMultiple() {
    return !this.isMultipleOfThree() && !this.isMultipleOfFive() && !this.isMultipleOfSeven();
  }
}
