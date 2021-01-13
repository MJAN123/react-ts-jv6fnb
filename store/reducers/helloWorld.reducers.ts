import { fromJS } from "immutable";
import ACTIONS from "../../utils/projectName.constants";

const HELLO_WORLD_STATE = fromJS({
  message: "",
  loading: false,
  error: ""
});
export const helloWorldReducer = (state = HELLO_WORLD_STATE, actions: any) => {
  switch (action.type) {
    case ACTIONS.HELLO_WORLD.PENDING:
      return state.set("loading", true);
    case ACTIONS.HELLO_WORLD.SUCCESS:
      return state.set("message", action.message);
    case ACTIONS.HELLO_WORLD.ERROR:
      return state.set("error", action.error);
  }
};
