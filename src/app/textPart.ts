export class TextPart {
  value: string;
  hash: string;
  constructor(value: string, index = '') {
    this.value = value;
    this.hash = index;
  }
}
