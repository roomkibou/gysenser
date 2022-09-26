basic.showIcon(IconNames.Heart)
pins.i2cWriteNumber(
23,
128,
NumberFormat.Int16LE,
true
)
basic.forever(function () {
    pins.i2cWriteNumber(
    23,
    0,
    NumberFormat.Int8LE,
    true
    )
    serial.writeValue("num", pins.i2cReadNumber(23, NumberFormat.Int16LE, false))
    basic.showIcon(IconNames.Yes)
})
