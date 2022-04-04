import { ProtobufAdapter } from "../../adapter"
import { ConsumerController } from "./consume.controller"
import { ConsumerUseCase } from "./consume.useCase"

export const consumerHandle = () => {
  const protobufAdapter = new ProtobufAdapter()
  const consumeUseCase = new ConsumerUseCase(protobufAdapter)
  const consumer = new ConsumerController(consumeUseCase)
  return consumer
}