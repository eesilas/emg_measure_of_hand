basic.showIcon(IconNames.Duck)
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
})
