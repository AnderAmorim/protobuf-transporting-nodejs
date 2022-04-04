class ProducerController{
  constructor(producerUseCase){
    this.producerUseCase = producerUseCase
    this.execute = this.execute.bind(this)
  }
  
  async execute (req, res){
    const dataEncoded = await this.producerUseCase.execute()
    return res.send(dataEncoded)
  }
}

export { ProducerController }
