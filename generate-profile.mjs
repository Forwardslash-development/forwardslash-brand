import sharp from 'sharp'
import { readFileSync } from 'fs'

const svg = readFileSync('logo/mark-dark.svg')

await sharp(svg)
  .resize(400, 400)
  .png()
  .toFile('website/public/profile.png')

console.log('// profile.png generated')
