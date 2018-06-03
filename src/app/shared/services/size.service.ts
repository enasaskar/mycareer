import { Sizes } from '../classes/sizes';

export class SizeService {
    private sizes: Sizes[] = [{
        value : 1,
        text : '50-100',
    },
    {
        value : 2,
        text : '100-300',
    },
    {
        value : 3,
        text : '300+',
    }

];

    public getAll(): Sizes[] {
        return this.sizes;
    }
}
