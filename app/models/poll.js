import Ember from 'ember';
import { sort, alias } from '@ember/object/computed';


export default Ember.Object.extend({
	optionsSorting: ['voteCount:desc'],
	sortedOptions: sort('options', 'optionsSorting'),
	voteCount: alias('votes.length')
});

