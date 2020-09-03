import * as glob from 'glob'
import * as dotenv from 'dotenv'
import * as mkdirp from 'mkdirp'
import * as fs from 'fs'

dotenv.config()

const takeout = process.env.TAKEOUT_PATH
const concatFolder = `${takeout}/tracks`

console.log(`looking in ${takeout}`)

glob(`${takeout}/**/*.mp3`, (err, files) => {
    mkdirp.sync(concatFolder)

    files.forEach((path) => {
        const fileName = path.split('/').pop()
        const destination = `${concatFolder}/${fileName}`

        console.log(`copying from ${path} to ${destination}`)

        fs.copyFile(
            path,
            destination,
            (err) => {
                if (err) throw err
            }
        )
    })
})
