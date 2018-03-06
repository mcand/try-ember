import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
	actions: {
		castVote(vote){
			this.get('store').saveVote(vote);
			this.transitionTo('polls.poll.results');
		},
		toggleOption(vote, option) {
			vote.toggleOption(option);
		}
	},
	model() {
		const poll = this.modelFor('polls.poll');
		return this.get('store').createVote(poll);
	},

	store: inject()
});
