export class User {
  id: number;
  name: string;
  score: number;

  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
