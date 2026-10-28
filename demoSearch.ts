import { type Request, type Response } from 'express'
import * as models from '../models'

export function demoSearch() {
  return (req: Request, res: Response) => {
  const q = req.query.q
  models.sequelize.query(`SELECT * FROM Products WHERE name LIKE '%${q}%'`)
      .then(([products]: any) => res.json(products))
      .catch((err: Error) => res.status(500).json({ error: err.message }))
  }
}
