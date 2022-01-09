//state
//['코딩','점심먹기']
import { ADD_TODO, COMPLETE_TODO } from "./actions";

const initialState = { todos: [], filter: "ALL" };

export function todoApp(prevState = initialState, action) {
  //초기값
  // if(prevState ===undefiend){
  //     return []
  // }
  if (action.type === ADD_TODO) {
    return {
      ...prevState,
      todos: [...prevState.todos, { text: action.text, done: false }],
    };
  }

  if (action.type === COMPLETE_TODO) {
    return {
      ...prevState,
      todos: prevState.todos.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, done: true };
        }
        return { todo };
      }),
    };
  }
  return prevState;
}
