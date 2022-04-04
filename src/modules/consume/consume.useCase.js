class ConsumerUseCase{
  constructor(protobufAdapter){
    this.execute = this.execute.bind(this)
    this.protobufAdapter = protobufAdapter
  }
  async execute ({data}){
    const filePathProto = 'src/clients.proto'
    const lookupType = 'listClientsPackage.ListClients'
    const dataDecode = await this.protobufAdapter.execute({ data, filePathProto, lookupType, method:'decode'})
    return dataDecode
  }
}

export { ConsumerUseCase }
