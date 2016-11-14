export class Category {

    private constructor(
        public id: number,
        public name: string
    ) { }

    static fromJson(json: any): Category {
        return new Category(
            json.id,
            json.name
        );
    }

    static fromJsonToList(json: any): Category[] {
        return (json as any[]).reduce((categories: Category[], category: Category) => {
            categories.push(Category.fromJson(category));
            return categories;
        }, []);
    }
}
