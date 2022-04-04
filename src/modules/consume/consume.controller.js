class ConsumerController{
  constructor(consumeUseCase){
    this.execute = this.execute.bind(this)
    this.consumeUseCase = consumeUseCase
  }
  async execute (req, res){
    const data = req.data
    const dataDecode = await this.consumeUseCase.execute({ data })
    return res.json(dataDecode)
  }
}

export { ConsumerController }
