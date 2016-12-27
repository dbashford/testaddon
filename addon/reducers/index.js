var count = ((state, action) => {
  if (action.type === 'INCREMENT') {
    return state + action.payload;
  }
  return state || 0;
});

export default {
  count
};