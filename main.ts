input.onButtonPressed(Button.A, function () {
    Zahl_A += 1
    basic.showNumber(Zahl_A)
})
input.onButtonPressed(Button.B, function () {
    Zahl_B += 1
    basic.showNumber(Zahl_B)
})
let Zahl_A = 0
let Zahl_B = 0
Zahl_B = 0
Zahl_B = 0
let Ergebnis = 0
basic.forever(function () {
    Ergebnis = Zahl_A + Zahl_B
    basic.showNumber(Ergebnis)
})
