import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
	model(params) {
		return this.get('store').findPoll(params.poll_id)
	},

	store: inject
});
