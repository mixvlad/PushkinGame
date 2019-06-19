export class BlogPost {
  id: number;
  title: string;
  body: string;

  public constructor(init?: Partial<BlogPost>) {
    Object.assign(this, init);
  }
}
