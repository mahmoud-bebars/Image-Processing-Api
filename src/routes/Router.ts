import express, { Request, Response } from 'express'
import imageResizer from '../modules/imageSizer'

const Router = express.Router()

// GET Route handling the resize process
// the api takes 3 main queries (filename, width,height)
Router.get('/resize', async (req: Request, res: Response) => {
  const { name, width, height } = req.query as {
    name: string
    width: string
    height: string
  }
  let missdQuery
  // validating the required quries exists on the request
  if (
    !height || ''
      ? (missdQuery = ' height')
      : !width || ''
      ? (missdQuery = ' width')
      : !name || ''
      ? (missdQuery = ' file name')
      : ''
  )
    return res.status(400).send({ msg: `please add a ${missdQuery}` })
  // handling the resizing function
  const sizer = await imageResizer(name, width, height)
  // handling any errors and send back error message
  if (!sizer.sized) return res.status(400).json({ msg: `🚫 ${sizer.err}` })
  // sending back the resized file to the browser
  return res.status(200).sendFile(sizer.file)
})

export default Router
