basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    serial.writeValue("x", pins.analogReadPin(AnalogPin.P0))
})
