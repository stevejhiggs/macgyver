import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const decrement = actionCreator<{incrementBy: number; }>('DECREMENT_COUNTER');
export const increment = actionCreator<{incrementBy: number; }>('INCREMENT_COUNTER');
