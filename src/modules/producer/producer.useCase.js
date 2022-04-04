class ProducerUseCase{
  constructor(protobufAdapter){
    this.execute = this.execute.bind(this)
    this.protobufAdapter = protobufAdapter
    this.fakeDB = [
      {"name":"Anderson Amorim", "email":"andersonamorim939@gmail.com", "type":"Premium","cash":12750.50},
      {"name":"Anderson Santos", "email":"andersonasantos@gmail.com", "type":"Basic","cash":120}
    ]
  }
  
  async execute (){
    const filePathProto = 'src/clients.proto'
    const lookupType = 'listClientsPackage.ListClients'
    const dataEncoded = await this.protobufAdapter.execute({ data:this.fakeDB, filePathProto, lookupType, method:'encode'})
    return dataEncoded
  }
}

export { ProducerUseCase }
