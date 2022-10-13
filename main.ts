basic.showLeds(`
    # . . # .
    . . . . .
    . . . # .
    . # # . .
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playMelody("F - A D F G E - ", 120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . # . . .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playMelody("F A E D F - C5 E ", 120)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # .
            . # . . .
            . . . . .
            `)
    }
})
