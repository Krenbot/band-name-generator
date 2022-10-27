
import inquirer from "inquirer"
import chalkAnimation from "chalk-animation"
import { generateSlug } from 'random-word-slugs'

inquirer.prompt([
    {
        type: "number",
        name: "length",
        message: "How long should the band name be?",
        default: 3
    },
    {
        type: "list",
        name: "animationName",
        message: "Which animation would you like to use?",
        default: "rainbow",
        choices: ["rainbow", "pulse", "glitch", "radar", "neon", "karaoke"]
    }
])
    .then((answers) => {
        console.log(answers)

        //Below line is an example of object deconstruction
        const {length, animationName} = answers

        const bandName = generateSlug(length, { format: "title" })

        if (animationName === 'pulse') {
            chalkAnimation.pulse(bandName)
        } else if (animationName === 'rainbow') {
            chalkAnimation.rainbow(bandName)
        } else if (animationName === 'glitch') {
            chalkAnimation.glitch(bandName)
        } else if (animationName === 'radar') {
            chalkAnimation.radar(bandName)
        } else if (animationName === 'neon') {
            chalkAnimation.neon(bandName)
        } else if (animationName === 'karaoke') {
            chalkAnimation.karaoke(bandName)
        }

    })
    .catch(err => console.log(err))