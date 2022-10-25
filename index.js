import inquirer from "inquirer";
import { generateSlug } from 'random-word-slugs'
import chalkAnimation from 'chalk-animation'

inquirer.prompt([
    {
        type: 'number',
        name: 'length',
        message: 'How long should the band name be?',
        default: 3
    },
    {
        type: 'list',
        name: 'animationName',
        message: 'Which animation would you like to use?',
        default: 'rainbow',
        choices: ['rainbow', 'pulse', 'radar', 'karaoke']
    }
])
    .then((answers) => {
        console.log(answers)
        const bandName = generateSlug(answers.length, { format: 'title' })
        (bandName)

        chalkAnimation.rainbow(bandName)

        if (answers.animationName === 'pulse')
    })
    .catch(err => console.log(err));