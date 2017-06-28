import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const decrement = actionCreator('DECREMENT_COUNTER');
export const increment = actionCreator('INCREMENT_COUNTER');


