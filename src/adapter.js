import protobuf from 'protobufjs'
import CONSTANTS from './constants'
import { protobufMethodValidations } from './validations'

class ProtobufAdapter{
  async execute ({ data, filePathProto, lookupType, method}){
    protobufMethodValidations(method)
    try {
      const root = await protobuf.load(filePathProto)
      const ProtoParse = root.lookupType(lookupType)
      const outputProtobuf = ProtoParse[method](data).finish()
      return outputProtobuf
    } catch (error) {
      console.log(`${CONSTANTS.ERROR_CONVERT} : ${error.message}. ${method}`)
    }
  }
}

export { ProtobufAdapter }
