export class TextPart {
  value: string;
  hash: string;
  constructor(value: string, index: string) {
    this.value = value;
    this.hash = index;
  }
}
