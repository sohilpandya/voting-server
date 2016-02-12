import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE,action){
  // Figure out which functions to call and call it
  switch(action.type){
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
    case 'VOTE':
      return state.update('vote', voteState => vote(voteState, action.entry));
  }
    return state;
}

// {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']}
//
// {type: 'NEXT'}
//
// {type: 'VOTE', entry: 'Trainspotting'}
