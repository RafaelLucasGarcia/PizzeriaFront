import { App } from '../../module';
import { BaseService } from '../../baseservice';

export class PizzaService extends BaseService {
    constructor(http, resolveUrl) {
        super(http, resolveUrl, 'api/pizzas');
    }

    get(id) {
        return this.http.get(
            super.getRouteById(id)
        );
    }
    getAll() {
        return this.http.get(
            super.getRoute()
        );
    }
    create(pizza) {
        return this.http.post(
            super.getRoute(),
            pizza
        );

    }
}
PizzaService.$inject = ['$http', 'resolveUrl'];
App.service('pizzaService', PizzaService);