export class Category {

  private constructor(
    public id: number,
    public name: string) { }

  static fromJson(json: any): Category {
    return new Category(
      json.id,
      json.name
    );
  }

  static fromJsonToList(json: any): Category[] {
    return (json as any[]).map((category: any): Category => Category.fromJson(category));
  }

}
