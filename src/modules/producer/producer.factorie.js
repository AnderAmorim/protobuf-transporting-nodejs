import { ProtobufAdapter } from "../../adapter"
import { ProducerController } from "./producer.controller"
import { ProducerUseCase } from "./producer.useCase"

export const producerHandle = () => {
  const protobufAdapter = new ProtobufAdapter()
  const producerUseCase = new ProducerUseCase(protobufAdapter)
  const producer = new ProducerController(producerUseCase)
  return producer
}