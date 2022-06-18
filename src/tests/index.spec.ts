// suite
/*
- api endpoint send back status code 200 ok test
- input vailidation test
- check on the file name input sends back error msg when it is not found
- the image sizer function process sends back the file
*/
import supertest from 'supertest'
import server from '../server'
import path from 'path'
import fs from 'fs'
import imageResizer from '../modules/imageSizer'

const request = supertest(server)

describe('Endpoint Response testing', () => {
  it('should respond with status code 200 Ok when api parmeters exists at route /resize?', async () => {
    const response = await request.get(
      '/resize?name=fjord&width=200&height=100'
    )
    expect(response.status).toBe(200)
  })
  it('should respond with status code 400 bad request when missing any paramter at route /resize?', async () => {
    const response = await request.get('/resize?name=fjord&width=100')
    expect(response.status).toBe(400)
  })
  it('should respond with status code 400 bad request when the file name does not match any of the files in the server', async () => {
    const response = await request.get(
      '/resize?name=unkwon&width=100&height=200'
    )
    expect(response.status).toBe(400)
  })
})

describe('Testing the Image Processing', () => {
  it('shoud create the resize image file successfully', async () => {
    const outputPath = path.join(process.cwd(), '/public/thumbnails/')
    const query = { name: 'fjord', width: '200', height: '100' }
    const thumbPath = `${outputPath}/${query.name}_${query.width}_${query.height}.jpg`

    await imageResizer(query.name, query.width, query.height)
    const image = fs.readFileSync(thumbPath).buffer

    expect(image).toBeInstanceOf(ArrayBuffer)
  })
})
