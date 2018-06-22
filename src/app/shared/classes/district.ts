export class District {
    id: number;
    name: string;
    cityName: string;
    cityId: number;
    constructor(id: number, name: string, cityName: string, cityId: number) {
        this.id = id;
        this.name = name;
        this.cityName = cityName;
        this.cityId = cityId;
    }
}
