import ACTIONS from "../../utils/projectName.constants";

export const setMessage = {
  pending: () => ({
    type: ACTIONS.HELLO_WORLD.PENDING
  }),
  success: (message: string) => ({
    type: ACTIONS.HELLO_WORLD.SUCCESS,
    message
  }),
  error: (error: string) => ({
    type: ACTIONS.HELLO_WORLD.ERROR,
    error
  })
};

export const setMessageBegin = (message: string) => ({
  type: ACTIONS.HELLO_WORLD_BEGIN,
  message
});
