import Ember from 'ember';
import connect from 'ember-redux/components/connect';
import layout from './template';

const stateToComputed = ({ count }) => ({
  count
});

const dispatchToActions = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT", payload: 1 })
});

const CounterComponent = Ember.Component.extend({
  layout
});

export default connect(stateToComputed, dispatchToActions)(CounterComponent);