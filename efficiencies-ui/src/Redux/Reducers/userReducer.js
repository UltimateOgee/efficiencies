import { ADD_PLAYER, ADD_PLAY } from "../Actions/userActions";

const initialState = {
  plays: [],
  roster: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLAYER: {
      return {...state, roster: state.roster.concat(action.payload)}
    }
    case ADD_PLAY: {
      return {...state, roster: state.plays.concat(action.payload)}
    }
    default: return state
  }
}

export default userReducer;