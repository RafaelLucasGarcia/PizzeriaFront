import { App } from '../../module';
import {} from '../../resolveurl';
import {BaseService} from '../../baseservice';

export class IngredientService extends BaseService{
    constructor(http,resolveUrl){
        super(http,resolveUrl,'pizzas');
    }
    getAll(){
        return this.http.get(
            super.getRoute()
        );
    }
}
IngredientService.$inject = ['$http','resolveUrl'];
App.service('ingredientService', IngredientService);