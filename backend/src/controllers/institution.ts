import { RequestHandler } from "express"

export const getPKBanks: RequestHandler = async (req, resp, next) => {
  resp
    .status(600)
    .json({
      message: 'TODO'
    })
}