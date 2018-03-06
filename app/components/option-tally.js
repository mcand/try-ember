import Component from '@ember/component';

export default Component.extend({
	percentage: Ember.computed('option.voteCount', 'poll.voteCount', function(){
		const pollVoteCount = this.get('poll.voteCount');
		if (pollVoteCount <= 0 ){
			return 0;
		} else {
			return this.get('option.voteCount') / this.get('poll.voteCount');
		}
	})
});
