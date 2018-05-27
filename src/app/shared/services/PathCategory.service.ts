import { IPathCategory } from "../interfaces/ICategory";

export class PathCategoryService {

    private PathCategories: IPathCategory[] = [
        {
            Id: 1,
            IsDeleted: false,
            Name: 'IT'
        },
        {
            Id: 5,
            IsDeleted: false,
            Name: 'Software development'
        },
        {
            Id: 2,
            IsDeleted: false,
            Name: 'Hardware Development'
        },
        {
            Id: 3,
            IsDeleted: false,
            Name: 'Arts'
        },
        {
            Id: 4,
            IsDeleted: false,
            Name: 'Business'
        }
    ];


    public getAll(): IPathCategory[] {
        return this.PathCategories.filter( a => a.IsDeleted === false);
    }
}
