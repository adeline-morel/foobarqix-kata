export class FooBarQix {
  compute(entry: number): string {
    if(entry === 0) {
      return '0';
    }
    if(entry %3 === 0) {
      return 'Foo';
    }
    return entry.toString();
  }
}
