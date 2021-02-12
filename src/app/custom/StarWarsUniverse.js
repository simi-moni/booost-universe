import Entity from './Entity';

export default class StarWarsUniverse {
    constructor() {
        this.entities = [];
    }

    async init() {
        const response = await fetch('https://swapi.booost.bg/api/');
        const data = await response.json();

        const dataArray = Object.entries(data);
        
        for (const [key, value] of dataArray) {
            const response = await fetch(value);
            const data = await response.json();

            const entity = new Entity(key, data);
            this.entities.push(entity);
        }
    }
}
