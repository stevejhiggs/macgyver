import Marty from 'marty';

export default class Application extends Marty.Application {
    constructor(options) {
        super(options);

        this.register('counterStore', require('./stores/counterStore'));
    }
}