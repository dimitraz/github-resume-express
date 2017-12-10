import _ from 'lodash';
import colours from './colours';

class coloursAPI {
    constructor() {
        this.colours = colours;
    }

    find(name) {
        let colour = _.find(this.colours, { 'id': name });
        if (colour !== undefined) {
            return colour;
        }
        return { id: 'undefined', colour: '#ddd' };
    }

    add(name, hex) {
        this.colours.push({
            id: name, colour: hex
        });
        return this.colours;
    }

    getAll() {
        return this.colours;
    }
}

export default (new coloursAPI());