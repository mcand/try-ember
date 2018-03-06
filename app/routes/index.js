import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
	actions: {
		createPoll(poll){
			this.get('store').savePoll(poll);
			this.transitionTo('polls.poll', poll);
		}
	},
	model(){
		return this.get('store').createPoll();
	},

	store: inject
});