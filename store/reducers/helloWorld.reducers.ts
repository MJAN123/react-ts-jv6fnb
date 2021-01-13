import { fromJS } from "immutable";
import ACTIONS from "../../utils/projectName.constants";

const HELLO_WORLD_STATE = fromJS({
  message: "",
  loading: false,
  error: ""
});
export const helloWorldReducer = (state = HELLO_WORLD_STATE, actions: any) => {
  switch (actions.type) {
    case ACTIONS.HELLO_WORLD.PENDING:
      debugger;
      return state.set("loading", true);
    case ACTIONS.HELLO_WORLD.SUCCESS:
      debugger;
      return state.set("message", actions.message);
    case ACTIONS.HELLO_WORLD.ERROR:
      return state.set("error", actions.error);
  }
};
