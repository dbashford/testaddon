// Copy this to tests/dummy/app/middleware and it will work
// but it will not otherwise work in the dummy app

// Notably, reducers do work.

import thunk from 'npm:redux-thunk';

console.log('This isn\'t printed in the dummy app');

var resolved = thunk.default ? thunk.default : thunk;

var double = function() {
  return next => action => {
    if (action.type === "INCREMENT") {
      action.payload = action.payload * 2;
    }
    return next(action);
  };
};

export default [resolved, double];