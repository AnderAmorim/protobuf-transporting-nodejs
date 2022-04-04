import { producerHandle } from "../modules/producer/producer.factorie"

export default (router) => {
  router.post('/producer', producerHandle().execute)
}
