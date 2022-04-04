import { consumerHandle } from "../modules/consume/consume.factorie"

export default (router) => {
  router.post('/consume', consumerHandle().execute)
}