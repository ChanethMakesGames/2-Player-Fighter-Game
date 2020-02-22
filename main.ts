namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    while (controller.player1.isPressed(ControllerButton.Right)) {
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 2 f . . . . . . . . . . . . 
. . f f e e e e f 2 2 2 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 2 2 2 2 e f . . . . . . . . . . 
. . f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f . . . . . . . . . . . 
. . f e e e e e d d d f . . . . . . . . . . . . 
. . . . f 4 d d e 4 e f . . . . . . . . . . . . 
. . . . f e d d e 2 2 f . . . . . . . . . . . . 
. . . f f f e e f 5 5 f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += 2
        pause(1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 2 f . . . . . . . . . . . . 
. . f f e e e e f 2 2 2 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 2 2 2 2 e f . . . . . . . . . . 
. . f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f f . . . . . . . . . . 
. . f e e e 4 d d d d f d d f . . . . . . . . . 
. . . . f e e 4 e e e f b b f . . . . . . . . . 
. . . . f 2 2 2 4 d d e b b f . . . . . . . . . 
. . . f f 4 4 4 e d d e b f . . . . . . . . . . 
. . . f f f f f f e e f f . . . . . . . . . . . 
. . . . f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += 2
        pause(1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 2 f . . . . . . . . . . . . 
. . f f e e e e f 2 2 2 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 2 2 2 2 e f . . . . . . . . . . 
. . f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f . . . . . . . . . . . 
. . f e e e e e d d d f . . . . . . . . . . . . 
. . . . f 4 d d e 4 e f . . . . . . . . . . . . 
. . . . f e d d e 2 2 f . . . . . . . . . . . . 
. . . f f f e e f 5 5 f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += 2
        pause(1)
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 2 f . . . . . . . . . . . 
. . . f f e e e e f 2 2 2 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 2 2 2 2 e f . . . . . . . . . 
. . . f e 2 2 2 f f f f e 2 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e 4 d d d d f . . . . . . . . . . . 
. . . . f f e e 4 4 4 e f . . . . . . . . . . . 
. . . . . 4 d d e 2 2 2 f . . . . . . . . . . . 
. . . . . e d d e 2 2 2 f . . . . . . . . . . . 
. . . . . f e e f 4 5 5 f . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += 2
        pause(1)
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 2 f . . . . . . . . . . . 
. . . f f e e e e f 2 2 2 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 2 2 2 2 e f . . . . . . . . . 
. . . f e 2 2 2 f f f f e 2 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e 4 d d d d f . . . . . . . . . . . 
. . . . f f e e 4 4 4 e f . . . . . . . . . . . 
. . . . . 4 d d e 2 2 2 f . . . . . . . . . . . 
. . . . . e d d e 2 2 2 f . . . . . . . . . . . 
. . . . . f e e f 4 5 5 f . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += 2
        pause(1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 2 f . . . . . . . . . . . 
. . . f f e e e e f 2 2 2 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 2 2 2 2 e f . . . . . . . . . 
. . . f e 2 2 2 f f f f e 2 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e e e d d d f . . . . . . . . . . . 
. . . . . f 4 d d e 4 e f . . . . . . . . . . . 
. . . . . f e d d e 2 2 f . . . . . . . . . . . 
. . . . f f f e e f 5 5 f f . . . . . . . . . . 
. . . . f f f f f f f f f f . . . . . . . . . . 
. . . . . f f . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += 2
        pause(1)
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    while (controller.player1.isPressed(ControllerButton.Up)) {
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        mySprite.y += -2
        pause(1)
        mySprite.vy += 10
    }
    mySprite.setVelocity(0, 100)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    while (controller.player1.isPressed(ControllerButton.B)) {
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        mySprite.y += -2
        pause(1)
        mySprite.vy += 10
    }
    mySprite.setVelocity(0, 100)
})
info.player2.onLifeZero(function () {
    game.over(true, effects.confetti)
    game.reset()
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    while (controller.player2.isPressed(ControllerButton.Left)) {
        mySprite2.setFlag(SpriteFlag.StayInScreen, true)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 6 f e e e e f f . . . . . . . . . . . 
. . . f 6 6 6 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 6 6 6 6 e e f f f f . . . . . . . . . . 
. . f 6 e f f f f 6 6 6 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . . f e d d f 1 4 d 4 e e f . . . . . . . . . 
. . . . f d d d e e e e e f . . . . . . . . . . 
. . . . f e 4 e d d 4 f . . . . . . . . . . . . 
. . . . f 6 6 e d d e f . . . . . . . . . . . . 
. . . f f 9 9 f e e f f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f f . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += -2
        pause(1)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 6 f e e e e f f . . . . . . . . . . . 
. . . f 6 6 6 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 6 6 6 6 e e f f f f . . . . . . . . . . 
. . f 6 e f f f f 6 6 6 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . f f e d d f 1 4 d 4 e e f . . . . . . . . . 
. f d d f d d d d 4 e e e f . . . . . . . . . . 
. f b b f e e e 4 e e f . . . . . . . . . . . . 
. f b b e d d 4 6 6 6 f . . . . . . . . . . . . 
. . f b e d d e 4 4 4 f f . . . . . . . . . . . 
. . . f f e e f f f f f f . . . . . . . . . . . 
. . . . f f f . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += -2
        pause(1)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 6 f e e e e f f . . . . . . . . . . . 
. . . f 6 6 6 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 6 6 6 6 e e f f f f . . . . . . . . . . 
. . f 6 e f f f f 6 6 6 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . . f e d d f 1 4 d 4 e e f . . . . . . . . . 
. . . . f d d d e e e e e f . . . . . . . . . . 
. . . . f e 4 e d d 4 f . . . . . . . . . . . . 
. . . . f 6 6 e d d e f . . . . . . . . . . . . 
. . . f f 9 9 f e e f f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f f . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += -2
        pause(1)
        mySprite2.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 6 f e e e e f f . . . . . . . . . . . . 
. . f 6 6 6 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 6 6 6 6 e e f f f f . . . . . . . . . . . 
. f 6 e f f f f 6 6 6 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d d 4 e e e f . . . . . . . . . . . 
. . . f e 4 4 4 e e f f . . . . . . . . . . . . 
. . . f 6 6 6 e d d 4 . . . . . . . . . . . . . 
. . . f 6 6 6 e d d e . . . . . . . . . . . . . 
. . . f 9 9 4 f e e f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += -2
        pause(1)
        mySprite2.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 6 f e e e e f f . . . . . . . . . . . . 
. . f 6 6 6 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 6 6 6 6 e e f f f f . . . . . . . . . . . 
. f 6 e f f f f 6 6 6 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d d 4 e e e f . . . . . . . . . . . 
. . . f e 4 4 4 e e f f . . . . . . . . . . . . 
. . . f 6 6 6 e d d 4 . . . . . . . . . . . . . 
. . . f 6 6 6 e d d e . . . . . . . . . . . . . 
. . . f 9 9 4 f e e f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += -2
        pause(1)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 6 f e e e e f f . . . . . . . . . . . . 
. . f 6 6 6 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 6 6 6 6 e e f f f f . . . . . . . . . . . 
. f 6 e f f f f 6 6 6 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d e e e e e f . . . . . . . . . . . 
. . . f e 4 e d d 4 f . . . . . . . . . . . . . 
. . . f 6 6 e d d e f . . . . . . . . . . . . . 
. . f f 9 9 f e e f f f . . . . . . . . . . . . 
. . f f f f f f f f f f . . . . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += -2
        pause(1)
        mySprite2.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 6 f e e e e f f . . . . . . . . . . . . 
. . f 6 6 6 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 6 6 6 6 e e f f f f . . . . . . . . . . . 
. f 6 e f f f f 6 6 6 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d d 4 e e e f . . . . . . . . . . . 
. . . f e 4 4 4 e e f f . . . . . . . . . . . . 
. . . f 6 6 6 e d d 4 . . . . . . . . . . . . . 
. . . f 6 6 6 e d d e . . . . . . . . . . . . . 
. . . f 9 9 4 f e e f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    while (controller.player2.isPressed(ControllerButton.Up)) {
        mySprite2.setFlag(SpriteFlag.StayInScreen, true)
        mySprite2.y += -2
        pause(1)
        mySprite2.vy += 10
    }
    mySprite2.setVelocity(0, 37)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    while (controller.player2.isPressed(ControllerButton.B)) {
        mySprite2.setFlag(SpriteFlag.StayInScreen, true)
        mySprite2.y += -2
        pause(1)
        mySprite2.vy += 10
    }
    mySprite2.setVelocity(0, 37)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    while (controller.player2.isPressed(ControllerButton.Right)) {
        mySprite2.setFlag(SpriteFlag.StayInScreen, true)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 6 f . . . . . . . . . . . . 
. . f f e e e e f 6 6 6 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 6 6 6 6 e f . . . . . . . . . . 
. . f e 6 6 6 f f f f e 6 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f . . . . . . . . . . . 
. . f e e e e e d d d f . . . . . . . . . . . . 
. . . . f 4 d d e 4 e f . . . . . . . . . . . . 
. . . . f e d d e 6 6 f . . . . . . . . . . . . 
. . . f f f e e f 9 9 f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += 2
        pause(1)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 6 f . . . . . . . . . . . . 
. . f f e e e e f 6 6 6 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 6 6 6 6 e f . . . . . . . . . . 
. . f e 6 6 6 f f f f e 6 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f f . . . . . . . . . . 
. . f e e e 4 d d d d f d d f . . . . . . . . . 
. . . . f e e 4 e e e f b b f . . . . . . . . . 
. . . . f 6 6 6 4 d d e b b f . . . . . . . . . 
. . . f f 4 4 4 e d d e b f . . . . . . . . . . 
. . . f f f f f f e e f f . . . . . . . . . . . 
. . . . f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += 2
        pause(1)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 6 f . . . . . . . . . . . . 
. . f f e e e e f 6 6 6 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 6 6 6 6 e f . . . . . . . . . . 
. . f e 6 6 6 f f f f e 6 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f . . . . . . . . . . . 
. . f e e e e e d d d f . . . . . . . . . . . . 
. . . . f 4 d d e 4 e f . . . . . . . . . . . . 
. . . . f e d d e 6 6 f . . . . . . . . . . . . 
. . . f f f e e f 9 9 f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f . . . f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += 2
        pause(1)
        mySprite2.setImage(img`
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 6 f . . . . . . . . . . . 
. . . f f e e e e f 6 6 6 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 6 6 6 6 e f . . . . . . . . . 
. . . f e 6 6 6 f f f f e 6 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e 4 d d d d f . . . . . . . . . . . 
. . . . f f e e 4 4 4 e f . . . . . . . . . . . 
. . . . . 4 d d e 6 6 6 f . . . . . . . . . . . 
. . . . . e d d e 6 6 6 f . . . . . . . . . . . 
. . . . . f e e f 4 9 9 f . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += 2
        pause(1)
        mySprite2.setImage(img`
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 6 f . . . . . . . . . . . 
. . . f f e e e e f 6 6 6 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 6 6 6 6 e f . . . . . . . . . 
. . . f e 6 6 6 f f f f e 6 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e 4 d d d d f . . . . . . . . . . . 
. . . . f f e e 4 4 4 e f . . . . . . . . . . . 
. . . . . 4 d d e 6 6 6 f . . . . . . . . . . . 
. . . . . e d d e 6 6 6 f . . . . . . . . . . . 
. . . . . f e e f 4 9 9 f . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += 2
        pause(1)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 6 f . . . . . . . . . . . 
. . . f f e e e e f 6 6 6 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 6 6 6 6 e f . . . . . . . . . 
. . . f e 6 6 6 f f f f e 6 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e e e d d d f . . . . . . . . . . . 
. . . . . f 4 d d e 4 e f . . . . . . . . . . . 
. . . . . f e d d e 6 6 f . . . . . . . . . . . 
. . . . f f f e e f 9 9 f f . . . . . . . . . . 
. . . . f f f f f f f f f f . . . . . . . . . . 
. . . . . f f . . . f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite2.x += 2
        pause(1)
        mySprite2.setImage(img`
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . f f e e e e f 6 f . . . . . . . . . . . 
. . . f f e e e e f 6 6 6 f . . . . . . . . . . 
. . . f e e e f f e e e e f . . . . . . . . . . 
. . . f f f f e e 6 6 6 6 e f . . . . . . . . . 
. . . f e 6 6 6 f f f f e 6 f . . . . . . . . . 
. . f f f f f f f e e e f f f . . . . . . . . . 
. . f f e 4 4 e b f 4 4 e e f . . . . . . . . . 
. . f e e 4 d 4 1 f d d e f . . . . . . . . . . 
. . . f e e e 4 d d d d f . . . . . . . . . . . 
. . . . f f e e 4 4 4 e f . . . . . . . . . . . 
. . . . . 4 d d e 6 6 6 f . . . . . . . . . . . 
. . . . . e d d e 6 6 6 f . . . . . . . . . . . 
. . . . . f e e f 4 9 9 f . . . . . . . . . . . 
. . . . . . f f f f f f . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
})
info.player1.onLifeZero(function () {
    game.over(true, effects.confetti)
    game.reset()
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    while (controller.player1.isPressed(ControllerButton.Left)) {
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 2 f e e e e f f . . . . . . . . . . . 
. . . f 2 2 2 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 2 2 2 2 e e f f f f . . . . . . . . . . 
. . f 2 e f f f f 2 2 2 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . . f e d d f 1 4 d 4 e e f . . . . . . . . . 
. . . . f d d d e e e e e f . . . . . . . . . . 
. . . . f e 4 e d d 4 f . . . . . . . . . . . . 
. . . . f 2 2 e d d e f . . . . . . . . . . . . 
. . . f f 5 5 f e e f f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f f . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += -2
        pause(1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 2 f e e e e f f . . . . . . . . . . . 
. . . f 2 2 2 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 2 2 2 2 e e f f f f . . . . . . . . . . 
. . f 2 e f f f f 2 2 2 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . f f e d d f 1 4 d 4 e e f . . . . . . . . . 
. f d d f d d d d 4 e e e f . . . . . . . . . . 
. f b b f e e e 4 e e f . . . . . . . . . . . . 
. f b b e d d 4 2 2 2 f . . . . . . . . . . . . 
. . f b e d d e 4 4 4 f f . . . . . . . . . . . 
. . . f f e e f f f f f f . . . . . . . . . . . 
. . . . f f f . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += -2
        pause(1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 2 f e e e e f f . . . . . . . . . . . 
. . . f 2 2 2 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 2 2 2 2 e e f f f f . . . . . . . . . . 
. . f 2 e f f f f 2 2 2 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . . f e d d f 1 4 d 4 e e f . . . . . . . . . 
. . . . f d d d e e e e e f . . . . . . . . . . 
. . . . f e 4 e d d 4 f . . . . . . . . . . . . 
. . . . f 2 2 e d d e f . . . . . . . . . . . . 
. . . f f 5 5 f e e f f f . . . . . . . . . . . 
. . . f f f f f f f f f f . . . . . . . . . . . 
. . . . f f f . . . f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += -2
        pause(1)
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 2 f e e e e f f . . . . . . . . . . . . 
. . f 2 2 2 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 2 2 2 2 e e f f f f . . . . . . . . . . . 
. f 2 e f f f f 2 2 2 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d d 4 e e e f . . . . . . . . . . . 
. . . f e 4 4 4 e e f f . . . . . . . . . . . . 
. . . f 2 2 2 e d d 4 . . . . . . . . . . . . . 
. . . f 2 2 2 e d d e . . . . . . . . . . . . . 
. . . f 5 5 4 f e e f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += -2
        pause(1)
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 2 f e e e e f f . . . . . . . . . . . . 
. . f 2 2 2 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 2 2 2 2 e e f f f f . . . . . . . . . . . 
. f 2 e f f f f 2 2 2 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d d 4 e e e f . . . . . . . . . . . 
. . . f e 4 4 4 e e f f . . . . . . . . . . . . 
. . . f 2 2 2 e d d 4 . . . . . . . . . . . . . 
. . . f 2 2 2 e d d e . . . . . . . . . . . . . 
. . . f 5 5 4 f e e f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += -2
        pause(1)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 2 f e e e e f f . . . . . . . . . . . . 
. . f 2 2 2 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 2 2 2 2 e e f f f f . . . . . . . . . . . 
. f 2 e f f f f 2 2 2 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d e e e e e f . . . . . . . . . . . 
. . . f e 4 e d d 4 f . . . . . . . . . . . . . 
. . . f 2 2 e d d e f . . . . . . . . . . . . . 
. . f f 5 5 f e e f f f . . . . . . . . . . . . 
. . f f f f f f f f f f . . . . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(1)
        mySprite.x += -2
        pause(1)
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . f 2 f e e e e f f . . . . . . . . . . . . 
. . f 2 2 2 f e e e e f f . . . . . . . . . . . 
. . f e e e e f f e e e f . . . . . . . . . . . 
. f e 2 2 2 2 e e f f f f . . . . . . . . . . . 
. f 2 e f f f f 2 2 2 e f . . . . . . . . . . . 
. f f f e e e f f f f f f f . . . . . . . . . . 
. f e e 4 4 f b e 4 4 e f f . . . . . . . . . . 
. . f e d d f 1 4 d 4 e e f . . . . . . . . . . 
. . . f d d d d 4 e e e f . . . . . . . . . . . 
. . . f e 4 4 4 e e f f . . . . . . . . . . . . 
. . . f 2 2 2 e d d 4 . . . . . . . . . . . . . 
. . . f 2 2 2 e d d e . . . . . . . . . . . . . 
. . . f 5 5 4 f e e f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.showLongText("P1: W,A,S,D,Q            P2: I,J,K,L,U            Hope You Enjoy!          Also Please email me any bugs or glitches!       My Email:              chaneth07@gmail.com      Tip: You can press X or ENTER (P1) or O (P2) to escape a fight by double jumping after pressing W (P1) or I (P2)", DialogLayout.Full)
info.player1.setLife(10)
info.player2.setLife(10)
mySprite = sprites.create(img`
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . f f e e e e f 2 f . . . . . . . . . . . . 
. . f f e e e e f 2 2 2 f . . . . . . . . . . . 
. . f e e e f f e e e e f . . . . . . . . . . . 
. . f f f f e e 2 2 2 2 e f . . . . . . . . . . 
. . f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
. f f f f f f f e e e f f f . . . . . . . . . . 
. f f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 1 f d d e f f . . . . . . . . . . 
. . f e e e 4 d d d d f d d f . . . . . . . . . 
. . . f f e e 4 e e e f b b f . . . . . . . . . 
. . . . f 2 2 2 4 d d e b b f . . . . . . . . . 
. . . . e 2 2 2 e d d e b f . . . . . . . . . . 
. . . . f 4 4 4 f e e f f . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite2 = sprites.create(img`
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . f 6 f e e e e f f . . . . . . . . . . . 
. . . f 6 6 6 f e e e e f f . . . . . . . . . . 
. . . f e e e e f f e e e f . . . . . . . . . . 
. . f e 6 6 6 6 e e f f f f . . . . . . . . . . 
. . f 6 e f f f f 6 6 6 e f . . . . . . . . . . 
. . f f f e e e f f f f f f f . . . . . . . . . 
. . f e e 4 4 f b e 4 4 e f f . . . . . . . . . 
. . f f e d d f 1 4 d 4 e e f . . . . . . . . . 
. f d d f d d d d 4 e e e f . . . . . . . . . . 
. f b b f e e e 4 e e f f . . . . . . . . . . . 
. f b b e d d 4 6 6 6 f . . . . . . . . . . . . 
. . f b e d d e 6 6 6 e . . . . . . . . . . . . 
. . . f f e e f 4 4 4 f . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite2.setKind(SpriteKind.Player)
mySprite.setKind(SpriteKind.Player)
mySprite.setPosition(18, 108)
mySprite2.setPosition(147, 108)
scene.setBackgroundImage(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 c c c c c c c c c c c c c c c c c c c c c c c c c c c 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 c c c c c c c c c c c c c c c c c c c c c 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 c c c c c c c c c c c c c c 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
5 5 5 f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f f f f d d d d f f f f f f f f f f f f f f f f f f f f f f f f f 
5 5 f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 f f f f f f f d d d d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d f f f f f f f f f f f f f f f f f f f f f f 
5 f f f f f f f f f f f f f f f f f f f f 5 5 5 5 5 5 5 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f f d d d d d d d d d d d d d d d d d d d f f f f f f f f f f f f f d d d d d d 
f f f f f f d d d d d d d d d f f f f f f f f f 5 5 5 f f f f f f f f d d d d d d f f f f f f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
f f f f f d d d d d d d d d d d d f f f f f f f f f f f f f f f f d d d d d d d d d d d d f f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
f f f d d d d d d d d d d d d d d d d f f f f f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d f f f f f f f f f d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
`)
forever(function () {
    if (mySprite2.overlapsWith(mySprite) && controller.player1.isPressed(ControllerButton.A)) {
        info.player2.changeLifeBy(-1)
        scene.cameraShake(4, 500)
    }
    if (mySprite2.overlapsWith(mySprite) && controller.player2.isPressed(ControllerButton.A)) {
        info.player1.changeLifeBy(-1)
        scene.cameraShake(4, 500)
    }
})
forever(function () {
    if (controller.player1.isPressed(ControllerButton.A)) {
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 2 2 2 2 e f . . . . . . . . . . . 
. f e 2 2 2 f f f f e 2 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 2 2 c c c . . . . . . . . . . . . . 
. . . e e f 2 2 c d c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c d d c . . . . . . . . . . . . 
. . . . f f f f f c d d c . . . . . . . . . . . 
. . . . . f f f . . c d d c . . . . . . . . . . 
. . . . . . . . . . . c d c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . f f f f f 2 f . . . . . . . . . . . . . 
. . f f e e e e e 2 2 f f . . . . . . . . . . . 
. f f e e e e e e 2 2 2 f f . . . . . . . . . . 
. f e e e e f f f e e e e f . . . . . . . . . . 
. f f f f f e e e 2 2 2 2 e f . . . . . . . . . 
f f f e 2 2 2 f f f f f e 2 f . . . . . . . . . 
f f f f f f f f f e e e f f f . . . . . c c . . 
f e f e 4 4 e b b f 4 4 e e f . . . c c d c . . 
. f e e 4 d 4 b b f d d e f . . c c d d c c . . 
. . f e e e 4 d d d d d f e e c d d d c . . . . 
. . . f 2 2 2 2 2 2 2 e e d d c d c c . . . . . 
. . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
. . . f f f f f f f f e e e e . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . c c . . . . . . . 
. f f f f e e 2 2 2 2 e f . c d c . . . . . . . 
. f e 2 2 2 f f f f e 2 f c d d c . . . . . . . 
f f f f f f f e e e f f c d d c . . . . . . . . 
f f e 4 4 e b f 4 4 e c d d c . . . . . . . . . 
f e e 4 d 4 1 f d d e c d c . . . . . . . . . . 
. f e e e 4 d d d e d c c c . . . . . . . . . . 
. . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
. . . f 2 2 2 2 4 4 e e . . . . . . . . . . . . 
. . . f 2 2 2 2 e 2 f . . . . . . . . . . . . . 
. . . f 4 4 4 4 5 5 f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . f 2 f f f f f . . . . 
. . . . . . . . . . . f f 2 2 e e e e e f f . . 
. . . . . . . . . . f f 2 2 2 e e e e e e f f . 
. . . . . . . . . . f e e e e f f f e e e e f . 
. . . . . . . . . f e 2 2 2 2 e e e f f f f f . 
. . . . . . . . . f 2 e f f f f f 2 2 2 e f f f 
. . c c . . . . . f f f e e e f f f f f f f f f 
. . c d c c . . . f e e 4 4 f b b e 4 4 e f e f 
. . c c d d c c . . f e d d f b b 4 d 4 e e f . 
. . . . c d d d c e e f d d d d d 4 e e e f . . 
. . . . . c c d c d d e e 2 2 2 2 2 2 2 f . . . 
. . . . . . c c c d d 4 4 e 5 4 4 4 4 4 f . . . 
. . . . . . . . . e e e e f f f f f f f f . . . 
. . . . . . . . . . . . . f f . . . f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . f f 2 f f f f . . . . 
. . . . . . . . . . . . f f 2 f e e e e f f . . 
. . . . . . . . . . . f f 2 2 f e e e e e f f . 
. . . . . . . . . . . f e e e e f f e e e e f . 
. . . . . . . . . . f e 2 2 2 2 e e f f f f f . 
. . . . . . . . . . f 2 e f f f f 2 2 2 e f f f 
. . . . . . . . . . f f f e e e f f f f f f f f 
. . . . . . . . . . f e e 4 4 f b e 4 4 e f e f 
. . . . . . . . . . . f e d d f b 4 d 4 e e f . 
. . . . . . . . . . c . e e d d d 4 e e e f . . 
. . . . c c c c c c c e d d e e 2 2 2 2 f . . . 
. . . . . d d d d d c e d d 4 4 e 4 4 4 f . . . 
. . . . . . c c c c c . e e e e f f f f f . . . 
. . . . . . . . . . c . . . f f f f f f f f . . 
. . . . . . . . . . . . . . . f f . . f f f . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . . . . . . f e e e e f f e e e f . 
. . . . . . . . . . . f e 2 2 2 2 e e f f f f . 
. . . . . . . . . . . f 2 e f f f f 2 2 2 e f . 
. . . . . . . . . . . f f f e e e f f f f f f f 
. . . . . . . . . . . f e e 4 4 f b e 4 4 e f f 
. . . . . . . . . . . . f e d d f 1 4 d 4 e e f 
. . . . . . . . . . . . . f d d d d 4 e e e f . 
. . . . . . . . . . . . . f e 4 4 4 e d d f . . 
. . . . . . . . . . . . . c c c 2 2 e d d f . . 
. . . . . . . . . . . . . c d c 2 2 f e e . . . 
. . . . . . . . . . . . c d d c 4 4 4 4 f . . . 
. . . . . . . . . . . c d d c f f f f f . . . . 
. . . . . . . . . . c d d c . . f f f . . . . . 
. . . . . . . . . . c d c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f f 2 2 f f f . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f e e e e e e f f f . . . . . . . . . . 
. . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
. . f e 2 f f f f f f 2 e f . . . . . . . . . . 
. . f f f f e e e e f f f f . . . . . . . . . . 
. f f e f b f 4 4 f b f e f f . . . . . . . . . 
. f e e 4 1 f d d f 1 4 e e f . . . . . . . . . 
f d f e e d d d d d 4 e f f . . . . . . . . . . 
f b f f e e 4 4 4 e d d 4 e . . . . . . . . . . 
f b f 4 f 2 2 2 2 e d d e . . . . . . . . . . . 
f c f . f 2 2 c c c e e . . . . . . . . . . . . 
. f f . f 4 4 c d c 4 f . . . . . . . . . . . . 
. . . . f f f d d c f f . . . . . . . . . . . . 
. . . . . f d d c f f . . . . . . . . . . . . . 
. . . . c d d c . . . . . . . . . . . . . . . . 
. . . . c d c . . . . . . . . . . . . . . . . . 
. . . . c c . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . f f 2 2 f f . . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f e e e e e e e e e e f f . . . . . . . . . 
. f f e 2 2 2 2 2 2 2 2 e f f . . . . . . . . . 
. f f f f f e e e e f f f f f . . . . . . . . . 
f d f e f b f 4 4 f b f e f f . . . . . . . . . 
f b f e 4 1 f d d f 1 4 e f . . . . . . . . . . 
f b f f e 4 d d d d 4 e f e . . . . . . . . . . 
f c f e f 2 2 2 2 2 f 4 e . . . . . . . . . . . 
. f f 4 f 4 4 5 5 4 f 4 e . . . . . . . . . . . 
. . . . f f f f f f d d e . . . . . . . . . . . 
. . . . . f f f f e d d e . . . . . . . . . . . 
. . . . . . . . . . e e . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c 1 c c . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
`)
        pause(50)
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 2 2 2 2 e f . . . . . . . . . . . 
. f e 2 2 2 f f f f e 2 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 2 2 c c c . . . . . . . . . . . . . 
. . . e e f 2 2 c d c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c d d c . . . . . . . . . . . . 
. . . . f f f f f c d d c . . . . . . . . . . . 
. . . . . f f f . . c d d c . . . . . . . . . . 
. . . . . . . . . . . c d c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
})
forever(function () {
    if (controller.player2.isPressed(ControllerButton.A)) {
        mySprite2.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 6 f . . . . . . . . . . . . . 
. f f e e e e f 6 6 6 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 6 6 6 6 e f . . . . . . . . . . . 
. f e 6 6 6 f f f f e 6 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 6 6 c c c . . . . . . . . . . . . . 
. . . e e f 6 6 c d c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c d d c . . . . . . . . . . . . 
. . . . f f f f f c d d c . . . . . . . . . . . 
. . . . . f f f . . c d d c . . . . . . . . . . 
. . . . . . . . . . . c d c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 6 f f . . . . . . . . . . . . . 
. . f f e e e e f 6 f f . . . . . . . . . . . . 
. f f e e e e e f 6 6 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 6 6 6 6 e f . . . . . . . . . . 
f f f e 6 6 6 f f f f e 6 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 6 6 6 6 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . f f f f f 6 f . . . . . . . . . . . . . 
. . f f e e e e e 6 6 f f . . . . . . . . . . . 
. f f e e e e e e 6 6 6 f f . . . . . . . . . . 
. f e e e e f f f e e e e f . . . . . . . . . . 
. f f f f f e e e 6 6 6 6 e f . . . . . . . . . 
f f f e 6 6 6 f f f f f e 6 f . . . . . . . . . 
f f f f f f f f f e e e f f f . . . . . c c . . 
f e f e 4 4 e b b f 4 4 e e f . . . c c d c . . 
. f e e 4 d 4 b b f d d e f . . c c d d c c . . 
. . f e e e 4 d d d d d f e e c d d d c . . . . 
. . . f 6 6 6 6 6 6 6 e e d d c d c c . . . . . 
. . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
. . . f f f f f f f f e e e e . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 6 f . . . . . . . . . . . . . 
. f f e e e e f 6 6 6 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . c c . . . . . . . 
. f f f f e e 6 6 6 6 e f . c d c . . . . . . . 
. f e 6 6 6 f f f f e 6 f c d d c . . . . . . . 
f f f f f f f e e e f f c d d c . . . . . . . . 
f f e 4 4 e b f 4 4 e c d d c . . . . . . . . . 
f e e 4 d 4 1 f d d e c d c . . . . . . . . . . 
. f e e e 4 d d d e d c c c . . . . . . . . . . 
. . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
. . . f 6 6 6 6 4 4 e e . . . . . . . . . . . . 
. . . f 6 6 6 6 e 6 f . . . . . . . . . . . . . 
. . . f 4 4 4 4 9 9 f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . f 6 f f f f f . . . . 
. . . . . . . . . . . f f 6 6 e e e e e f f . . 
. . . . . . . . . . f f 6 6 6 e e e e e e f f . 
. . . . . . . . . . f e e e e f f f e e e e f . 
. . . . . . . . . f e 6 6 6 6 e e e f f f f f . 
. . . . . . . . . f 6 e f f f f f 6 6 6 e f f f 
. . c c . . . . . f f f e e e f f f f f f f f f 
. . c d c c . . . f e e 4 4 f b b e 4 4 e f e f 
. . c c d d c c . . f e d d f b b 4 d 4 e e f . 
. . . . c d d d c e e f d d d d d 4 e e e f . . 
. . . . . c c d c d d e e 6 6 6 6 6 6 6 f . . . 
. . . . . . c c c d d 4 4 e 9 4 4 4 4 4 f . . . 
. . . . . . . . . e e e e f f f f f f f f . . . 
. . . . . . . . . . . . . f f . . . f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . f f 6 f f f f . . . . 
. . . . . . . . . . . . f f 6 f e e e e f f . . 
. . . . . . . . . . . f f 6 6 f e e e e e f f . 
. . . . . . . . . . . f e e e e f f e e e e f . 
. . . . . . . . . . f e 6 6 6 6 e e f f f f f . 
. . . . . . . . . . f 6 e f f f f 6 6 6 e f f f 
. . . . . . . . . . f f f e e e f f f f f f f f 
. . . . . . . . . . f e e 4 4 f b e 4 4 e f e f 
. . . . . . . . . . . f e d d f b 4 d 4 e e f . 
. . . . . . . . . . c . e e d d d 4 e e e f . . 
. . . . c c c c c c c e d d e e 6 6 6 6 f . . . 
. . . . . d d d d d c e d d 4 4 e 4 4 4 f . . . 
. . . . . . c c c c c . e e e e f f f f f . . . 
. . . . . . . . . . c . . . f f f f f f f f . . 
. . . . . . . . . . . . . . . f f . . f f f . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 6 f e e e e f f . . 
. . . . . . . . . . . . f 6 6 6 f e e e e f f . 
. . . . . . . . . . . . f e e e e f f e e e f . 
. . . . . . . . . . . f e 6 6 6 6 e e f f f f . 
. . . . . . . . . . . f 6 e f f f f 6 6 6 e f . 
. . . . . . . . . . . f f f e e e f f f f f f f 
. . . . . . . . . . . f e e 4 4 f b e 4 4 e f f 
. . . . . . . . . . . . f e d d f 1 4 d 4 e e f 
. . . . . . . . . . . . . f d d d d 4 e e e f . 
. . . . . . . . . . . . . f e 4 4 4 e d d f . . 
. . . . . . . . . . . . . c c c 6 6 e d d f . . 
. . . . . . . . . . . . . c d c 6 6 f e e . . . 
. . . . . . . . . . . . c d d c 4 4 4 4 f . . . 
. . . . . . . . . . . c d d c f f f f f . . . . 
. . . . . . . . . . c d d c . . f f f . . . . . 
. . . . . . . . . . c d c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f f 6 6 f f f . . . . . . . . . . . . 
. . . f f f 6 6 6 6 f f f . . . . . . . . . . . 
. . f f f e e e e e e f f f . . . . . . . . . . 
. . f f e 6 6 6 6 6 6 e e f . . . . . . . . . . 
. . f e 6 f f f f f f 6 e f . . . . . . . . . . 
. . f f f f e e e e f f f f . . . . . . . . . . 
. f f e f b f 4 4 f b f e f f . . . . . . . . . 
. f e e 4 1 f d d f 1 4 e e f . . . . . . . . . 
f d f e e d d d d d 4 e f f . . . . . . . . . . 
f b f f e e 4 4 4 e d d 4 e . . . . . . . . . . 
f b f 4 f 6 6 6 6 e d d e . . . . . . . . . . . 
f c f . f 6 6 c c c e e . . . . . . . . . . . . 
. f f . f 4 4 c d c 4 f . . . . . . . . . . . . 
. . . . f f f d d c f f . . . . . . . . . . . . 
. . . . . f d d c f f . . . . . . . . . . . . . 
. . . . c d d c . . . . . . . . . . . . . . . . 
. . . . c d c . . . . . . . . . . . . . . . . . 
. . . . c c . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . f f 6 6 f f . . . . . . . . . . . . . 
. . . f f f 6 6 6 6 f f f . . . . . . . . . . . 
. . f f f 6 6 6 6 6 6 f f f . . . . . . . . . . 
. . f f f 6 6 6 6 6 6 f f f . . . . . . . . . . 
. . f e e e e e e e e e e f f . . . . . . . . . 
. f f e 6 6 6 6 6 6 6 6 e f f . . . . . . . . . 
. f f f f f e e e e f f f f f . . . . . . . . . 
f d f e f b f 4 4 f b f e f f . . . . . . . . . 
f b f e 4 1 f d d f 1 4 e f . . . . . . . . . . 
f b f f e 4 d d d d 4 e f e . . . . . . . . . . 
f c f e f 6 6 6 6 6 f 4 e . . . . . . . . . . . 
. f f 4 f 4 4 9 9 4 f 4 e . . . . . . . . . . . 
. . . . f f f f f f d d e . . . . . . . . . . . 
. . . . . f f f f e d d e . . . . . . . . . . . 
. . . . . . . . . . e e . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c 1 c c . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
`)
        pause(50)
        mySprite2.setImage(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 6 f . . . . . . . . . . . . . 
. f f e e e e f 6 6 6 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 6 6 6 6 e f . . . . . . . . . . . 
. f e 6 6 6 f f f f e 6 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 6 6 c c c . . . . . . . . . . . . . 
. . . e e f 6 6 c d c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c d d c . . . . . . . . . . . . 
. . . . f f f f f c d d c . . . . . . . . . . . 
. . . . . f f f . . c d d c . . . . . . . . . . 
. . . . . . . . . . . c d c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    }
})
