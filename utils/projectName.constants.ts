import { asyncActionType } from "./reduxActions"

export const FILTER_ACTIONS={
  HELLO_WORLD_BEGIN: "[PROJECT_NAME}HELLO_WORLD_BEGIN",
  HELLO_WORLD: asyncActionType("[PROJECT_NAME]HELLO_WORLD"),
}

export default {
  ...FILTER_ACTIONS,
}