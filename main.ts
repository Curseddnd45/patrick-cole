namespace SpriteKind {
    export const Map = SpriteKind.create()
}
namespace StatusBarKind {
    export const loluguys = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 f 2 f f 2 f 2 2 f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f 2 f 2 f 5 5 f 2 f 2 f f . 
        . f 2 2 f f 5 5 5 5 f f 2 2 f . 
        . . f 2 4 5 5 5 5 5 5 4 2 f . . 
        . . . f 4 5 5 5 5 5 5 4 f . . . 
        . . 3 3 f f f f f f f f 3 3 . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 f 2 f f f 2 f 2 f . . 
        . . f f f 2 f 5 5 2 2 f f f . . 
        . . f 4 2 f f 5 5 2 f 4 4 f . . 
        . f f 4 f f 5 5 5 f 4 4 4 f f . 
        . f f 4 4 4 5 5 5 5 5 5 4 f f . 
        . . . f 5 5 5 5 5 5 5 5 f . . . 
        . . . 3 f f f f f f f f 3 3 . . 
        . . . 3 f b b b b b b 3 3 3 . . 
        . . . 3 f f f f f f 3 3 3 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 2 f 2 f f 2 f 2 2 f . . 
        . . f f f 2 2 2 2 2 2 f f f . . 
        . f f 2 f 2 f 5 5 f 2 f 2 f f . 
        . f 2 2 f f 5 5 5 5 f f 2 2 f . 
        . . f 2 4 5 5 5 5 5 5 4 2 f . . 
        . . . f 4 5 5 5 5 5 5 4 f . . . 
        . . 3 3 f f f f f f f f 3 3 . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 2 2 2 2 f f . . . . 
        . . . f 2 2 2 f f 2 2 2 f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f 2 2 2 2 2 2 2 2 f f . . 
        . . f 2 f 2 f f f 2 f 2 2 f . . 
        . . f f f 2 2 5 5 f 2 f f f . . 
        . . f 2 2 f 2 5 5 f f 2 2 f . . 
        . f f 2 2 2 f 5 5 5 f f 2 f f . 
        . f f 2 5 5 5 5 5 5 5 5 2 f f . 
        . . . 2 5 5 5 5 5 5 5 5 f . . . 
        . . 3 3 f f f f f f f f 3 . . . 
        . . 3 3 3 2 2 2 2 2 2 f 3 . . . 
        . . . 3 3 3 f f f f f f 3 . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myMinimap = minimap.minimap(MinimapScale.Half, 2, 0)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.Map)
    controller.moveSprite(mySprite, 0, 0)
    mySprite2.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.MinimapScale)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        minimap.includeSprite(myMinimap, value, MinimapSpriteScale.MinimapScale)
        value.follow(mySprite, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . c . . 
        . c c c . 
        . c d c . 
        . c d c . 
        . c d c . 
        . c d c . 
        . c d c . 
        c c c c c 
        . . d . . 
        . . d . . 
        `, mySprite, 100, 100)
    projectile.follow(sprites.allOfKind(SpriteKind.Enemy)._pickRandom())
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    blockSettings.remove("Sx")
    blockSettings.remove("Sy")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava1, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 2000)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 2 2 2 2 f f . . . . 
        . . f 2 4 2 f 2 5 5 2 f f . . . 
        . . 2 4 4 4 4 2 f 5 5 5 f . . . 
        . f 2 4 5 5 5 5 5 f f f f . . . 
        . f 2 4 f f f f 5 5 5 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 4 4 3 3 6 3 4 3 3 4 f f . . 
        . . f 4 3 3 6 3 3 a 3 4 4 f . . 
        . . . f 3 3 3 3 3 5 4 4 f . . . 
        . . . f 3 3 3 3 5 5 f f . . . . 
        . . . f b b b b b b 4 . . . . . 
        . . . f b b b b b b e . . . . . 
        . . . f 5 5 8 f 8 8 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . 2 2 f 2 2 2 2 f f . . . . 
        . . f 2 2 2 f 5 5 5 5 f f . . . 
        . . f 4 4 4 2 f f 5 5 5 f . . . 
        . f 2 4 4 4 4 4 4 f f 5 f . . . 
        . f 4 4 f f f f 4 4 5 5 f . . . 
        . f f f 4 4 4 f f f f f f f . . 
        . f 4 4 3 3 6 6 a 3 3 4 4 f . . 
        . . f 4 3 3 6 6 3 a 3 4 4 f . . 
        . . . f 3 3 3 5 5 5 5 4 f . . . 
        . . . f b b b b b b f . . . . . 
        . . . f b b b b b b f . . . . . 
        . . f f 5 5 f 8 8 f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 2 2 2 2 f f . . . . 
        . . f 2 4 2 f 2 5 5 5 f f . . . 
        . . f 4 4 4 4 2 f 5 5 5 f . . . 
        . f 2 4 5 5 5 5 5 f f f f . . . 
        . f 2 4 f f f f 5 5 5 5 f . . . 
        . f f f 5 5 5 f f f f f f f . . 
        . f 4 4 3 3 6 3 4 3 3 4 f f . . 
        . . f 4 3 3 6 3 3 a 3 4 4 f . . 
        . . . f 3 3 3 3 3 5 4 4 f . . . 
        . . . f 3 3 3 3 5 5 f f . . . . 
        . . . f b b b b b b b . . . . . 
        . . . f b b b b b b b . . . . . 
        . . . f 5 5 8 f 8 8 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f 4 4 4 4 f f . . . . 
        . . f 2 2 2 f 4 4 5 5 f f . . . 
        . . f 5 5 5 5 f f 2 2 2 f . . . 
        . f 2 2 2 2 2 4 4 f f f f . . . 
        . f 2 4 f f f f 4 4 4 4 f . . . 
        . f f f 4 4 4 f f f f f f f . . 
        . f 4 4 3 3 6 3 a 3 3 4 f f . . 
        . . f 4 3 3 6 3 3 a 3 4 4 f . . 
        . . . f 3 3 3 3 3 5 5 5 f . . . 
        . . . f b b b b b b b b . . . . 
        . . . f b b b b b b b b . . . . 
        . . f f 5 5 8 8 f 8 8 f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava0, function (sprite, location) {
    sprites.destroy(sprite, effects.disintegrate, 2000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 5 5 2 f 2 4 2 f . . 
        . . . f 5 5 5 f 2 4 4 4 4 2 . . 
        . . . f f f f 5 5 5 5 5 4 2 f . 
        . . . f 5 5 5 5 f f f f 4 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 4 3 3 4 3 6 3 3 4 4 f . 
        . . f 4 4 3 a 3 3 6 3 3 4 f . . 
        . . . f 4 4 5 3 3 3 3 3 f . . . 
        . . . . f f 5 5 3 3 3 3 f . . . 
        . . . . . 4 b b b b b b f . . . 
        . . . . . e b b b b b b f . . . 
        . . . . . f 8 8 f 8 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 2 5 5 2 f 2 4 2 f . . 
        . . . f 5 5 5 f 2 4 4 4 4 2 . . 
        . . . f f f f 5 5 5 5 5 4 2 f . 
        . . . f 5 5 5 5 f f f f 4 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 4 3 3 4 3 6 3 3 4 4 f . 
        . . f 4 4 3 a 3 3 6 3 3 4 f . . 
        . . . f 4 4 5 3 3 3 3 3 f . . . 
        . . . . f f 5 5 3 3 3 3 f . . . 
        . . . . . 4 b b b b b b f . . . 
        . . . . . e b b b b b b f . . . 
        . . . . . f 8 8 f 8 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 2 . . . 
        . . . f f 5 5 5 5 f 2 2 2 f . . 
        . . . f 5 5 5 f f 2 4 4 4 f . . 
        . . . f 5 f f 4 4 4 4 4 4 2 f . 
        . . . f 5 5 4 4 f f f f 4 4 f . 
        . . f f f f f f f 4 4 4 f f f . 
        . . f 4 4 3 3 a 6 6 3 3 4 4 f . 
        . . f 4 4 3 a 3 6 6 3 3 4 f . . 
        . . . f 4 5 5 5 5 3 3 3 f . . . 
        . . . . . f b b b b b b f . . . 
        . . . . . f b b b b b b f . . . 
        . . . . f f f 8 8 f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f 2 2 2 2 f 2 f . . . 
        . . . f f 5 5 5 2 f 2 4 2 f . . 
        . . . f 5 5 5 f 2 4 4 4 4 f . . 
        . . . f f f f 5 5 5 5 5 4 2 f . 
        . . . f 5 5 5 5 f f f f 4 2 f . 
        . . f f f f f f f 5 5 5 f f f . 
        . . f f 4 3 3 4 3 6 3 3 4 4 f . 
        . . f 4 4 3 a 3 3 6 3 3 4 f . . 
        . . . f 4 4 5 3 3 3 3 3 f . . . 
        . . . . f f 5 5 3 3 3 3 f . . . 
        . . . . . b b b b b b b f . . . 
        . . . . . b b b b b b b f . . . 
        . . . . . f 8 8 f 8 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f 4 4 4 4 f 2 f . . . 
        . . . f f 5 5 4 4 f 2 2 2 f . . 
        . . . f 2 2 2 f f 5 5 5 5 f . . 
        . . . f f f f 4 4 2 2 2 2 2 f . 
        . . . f 4 4 4 4 f f f f 4 2 f . 
        . . f f f f f f f 4 4 4 f f f . 
        . . f f 4 3 3 a 3 6 3 3 4 4 f . 
        . . f 4 4 3 a 3 3 6 3 3 4 f . . 
        . . . f 5 5 5 3 3 3 3 3 f . . . 
        . . . . b b b b b b b b f . . . 
        . . . . b b b b b b b b f . . . 
        . . . . f 8 8 f 8 8 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    blockSettings.remove("Sx")
    blockSettings.remove("Sy")
    game.gameOver(false)
})
info.onScore(61, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 4 2 2 f f f . . . 
        . . f f f 2 2 4 4 2 2 f f f . . 
        . . f 2 2 2 4 4 4 4 2 2 2 f . . 
        . . f 2 2 5 5 5 5 5 5 2 2 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f 4 5 3 6 3 3 6 3 5 4 f f . 
        . f 2 4 3 1 6 3 3 6 1 3 4 2 f . 
        . . f 4 5 3 3 3 3 3 3 5 4 f . . 
        . . . f 5 5 3 3 3 3 5 5 f . . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . 3 3 f 8 8 5 5 8 8 f 3 3 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 4 2 2 f f f . . . 
        . . f f f 2 2 4 4 2 2 f f f . . 
        . . f 2 2 2 4 4 4 4 2 2 2 f . . 
        . f f 2 2 4 4 4 4 4 4 2 2 f f . 
        . f f 4 4 5 5 5 5 5 5 4 4 f f . 
        . . f 4 5 3 6 3 3 6 3 5 4 f . . 
        . . f 5 3 1 6 3 3 6 1 3 5 f . . 
        . . . f 5 5 3 3 3 3 5 5 f 3 . . 
        . . 3 3 f b b b b 3 3 3 3 3 . . 
        . . 3 3 f b b b b 3 3 3 3 . . . 
        . . . . f 8 8 5 5 f 3 3 . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 4 2 2 f f f . . . 
        . . f f f 2 2 4 4 2 2 f f f . . 
        . . f 2 2 2 4 4 4 4 2 2 2 f . . 
        . . f 2 2 5 5 5 5 5 5 2 2 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f 4 5 3 6 3 3 6 3 5 4 f f . 
        . f 2 4 3 1 6 3 3 6 1 3 4 2 f . 
        . . f 4 5 3 3 3 3 3 3 5 4 f . . 
        . . . f 5 5 3 3 3 3 5 5 f . . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . 3 3 f b b b b b b f 3 3 . . 
        . . 3 3 f 8 8 5 5 8 8 f 3 3 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 4 2 f f f . . . 
        . . f f f 2 2 4 4 2 2 f f f . . 
        . . f 2 2 2 4 4 4 4 2 2 2 f . . 
        . f f 2 2 4 4 4 4 4 4 2 2 f f . 
        . f f 4 4 5 5 5 5 5 5 4 4 f f . 
        . . f 4 5 3 6 3 3 6 3 5 4 f . . 
        . . f 5 3 1 6 3 3 6 1 3 5 f . . 
        . . 3 f 5 5 3 3 3 3 5 5 f . . . 
        . . 3 3 3 3 3 b b b b f 3 3 . . 
        . . . 3 3 3 3 b b b b f 3 3 . . 
        . . . . 3 3 f 5 5 8 8 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.ask("Reset the game?")) {
        blockSettings.remove("Sx")
        blockSettings.remove("Sy")
        game.reset()
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite2) {
        sprites.destroy(mySprite2)
        controller.moveSprite(mySprite, 71, 71)
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(mySprite, 20)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    sprites.destroy(sprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 2000)
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let myMinimap: minimap.Minimap = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(7)
info.setLife(3)
let Win = 0
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 4 2 2 f f f . . . 
    . . f f f 2 2 4 4 2 2 f f f . . 
    . . f 2 2 4 4 4 4 4 2 2 2 f . . 
    . . f 2 2 5 5 5 5 5 5 2 2 f . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f f 4 5 3 6 3 3 6 3 5 4 f f . 
    . f 2 4 3 1 6 3 3 6 1 3 4 2 f . 
    . . f 4 5 3 3 3 3 3 3 5 4 f . . 
    . . . f 5 5 3 3 3 3 5 5 f . . . 
    . . 3 3 f b b b b b b f 3 3 . . 
    . . 3 3 f b b b b b b f 3 3 . . 
    . . 3 3 f 8 8 5 5 8 8 f 3 3 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
if (blockSettings.exists("Sx")) {
    mySprite.x = blockSettings.readNumber("Sx")
    mySprite.y = blockSettings.readNumber("Sy")
}
controller.moveSprite(mySprite, 71, 71)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(sprites.swamp.swampTile0)) {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite3, value)
    mySprite3.follow(mySprite, 20)
}
for (let value of tiles.getTilesByType(sprites.swamp.swampTile1)) {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite3, value)
    mySprite3.follow(mySprite, 20)
}
for (let value of tiles.getTilesByType(sprites.swamp.swampTile2)) {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite3, value)
    mySprite3.follow(mySprite, 20)
}
forever(function () {
    if (false) {
        blockSettings.remove("Sx")
        blockSettings.remove("Sy")
        game.gameOver(true)
    }
})
game.onUpdateInterval(500, function () {
    blockSettings.writeNumber("Sx", mySprite.x)
    blockSettings.writeNumber("Sy", mySprite.y)
})
