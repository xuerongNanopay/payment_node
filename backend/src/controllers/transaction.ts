import { RequestHandler } from "express"

export const quoteTransaction: RequestHandler = async (req, resp, next) => {
  resp
    .status(600)
    .json({
      message: 'TODO'
    })
}

export const submitTransaction: RequestHandler = async (req, resp, next) => {
  resp
    .status(600)
    .json({
      message: 'TODO'
    })
}

export const getTransactions: RequestHandler = async (req, resp, next) => {
  resp
    .status(600)
    .json({
      message: 'TODO'
    })
}

export const getTransaction: RequestHandler = async (req, resp, next) => {
  resp
    .status(600)
    .json({
      message: 'TODO'
    })
}