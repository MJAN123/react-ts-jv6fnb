import ACTIONS from '../../utils/projectName.constants'

export const setMessage={
  pending: ()=>({
    type: ACTIONS.HELLO_WORLD.PENDING
  }),
  success: (message: string)=>({
    type: ACTIONS.HELLO_WORLD.SUCCESS,
    response,
  }),
  error: (error: string)=>({
    type: ACTIONS.HELLO_WORLD.ERROR,
    error
  }),
}

export const setMessageBegin=()=>({
  type: ACTIONS.HELLO_WORLD_BEGIN
})