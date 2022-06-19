import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

const imageResizer = async (
  name: string,
  width: string,
  height: string
): Promise<{ sized: boolean; file: string; err: string }> => {
  try {
    // the input & output file paths
    const input = path.join(process.cwd(), `/public/assets/${name}.jpg`)
    const output = path.join(process.cwd(), '/public/thumbnails')

    // check if the file name exists in the assests folder with the same params
    if (fs.existsSync(`${output}/${name}_${width}_${height}.jpg`))
      return {
        sized: true as boolean,
        file: (output + `/${name}_${width}_${height}.jpg`) as string,
        err: '' as string,
      }

    // check if the output folder doesn't exists
    if (!fs.existsSync(output)) fs.mkdirSync(output)

    // init the sharp function to resiza the image file
    await sharp(input)
      .resize(+width, +height)
      .toFile(output + `/${name}_${width}_${height}.jpg`)

    // retruns the resized file to the browser
    return {
      sized: true as boolean,
      file: (output + `/${name}_${width}_${height}.jpg`) as string,
      err: '' as string,
    }
  } catch (err) {
    // return any error happens during the resizing process
    return {
      sized: false as boolean,
      file: '' as string,
      err: err as string,
    }
  }
}

export default imageResizer
