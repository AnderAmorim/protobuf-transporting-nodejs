import CONSTANTS from "./constants"

export const protobufMethodValidations = (method) => {
  if(!CONSTANTS.ACCEPT_METHODS_PROTOBUFJS.includes(method)){
    throw new Error(CONSTANTS.ERROR_ACCEPT_METHODS_PROTOBUFJS);
  }
}