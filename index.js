// WORD SLUG NPM
import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation'

const length = parseInt(process.argv[2])

const bandName = generateSlug(length, {format: 'title'})
console.log(bandName)

//// CHALK NPM


chalkAnimation.rainbow(bandName)
