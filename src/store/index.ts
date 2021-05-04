import { createStore } from 'redux';

// Estado geral
const INITIAL_STATE = {
  data: [
    'ReactJS',
    'React Native'
  ]
};

function courses(state = INITIAL_STATE, action: any) {
  console.log('action', action);
  console.log('state', state);

  switch(action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [ ...state.data, action.title ] }; // retorno o objeto atual mais a nova inserção
    case 'UPDATE_ALL_COURSE':
      return {
        ...state, data: action.updateData // Atualizando array completo e ignorando o antigo
      };
    default: return state;
  }
}

const store = createStore(courses);

export default store;