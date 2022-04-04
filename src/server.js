import { App } from "."

const app = new App()
app.expressInstance.listen(3000, () => {
  console.log('>> Server is running!')
})