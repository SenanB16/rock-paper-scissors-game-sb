let score = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    score += randint(0, 1)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Square)
    score += randint(0, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(score)
    if (score < 3) {
        basic.showString("Win!")
    } else {
        basic.showString("Lose!")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Scissors)
    score += randint(0, 1)
})
