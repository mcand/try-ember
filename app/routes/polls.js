import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
	model(){
		return this.get('store').findAllPolls(); 
	},

	store: inject
});
