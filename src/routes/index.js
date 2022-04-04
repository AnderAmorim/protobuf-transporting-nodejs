import { Router } from 'express'
import path from 'path'
import { readdirSync } from 'fs'

export default async (app) => {
  const router = Router()
  const __dirname = path.resolve()
  const filesInDir = readdirSync(__dirname+'/src/routes')
  for (const file of filesInDir) {
    if (!file.endsWith('index.ts') && !file.endsWith('index.js')) {
      (await import(`./${file}`)).default(router)
    }
  }

  app.use('/api', router)

  app.post('*', (req, res) => res.status(501).json())
  app.get('*', (req, res) => res.status(501).json())
  app.put('*', (req, res) => res.status(501).json())
  app.delete('*', (req, res) => res.status(501).json())
}
