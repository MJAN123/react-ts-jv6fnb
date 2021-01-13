export const asyncActionType= (type: tring)=>({
  PENDING: `${type}_PENDING`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`
})