const numRuns: number = 5
let currRun: number = 1
let beginSprite: Sprite = sprites.create(sprites.castle.skellyFront, 1)
let endSprite: Sprite = sprites.create(sprites.food.smallBurger, 2)
resetBoard()

sprites.onOverlap(1, 2, function (sprite: Sprite, otherSprite: Sprite) {
    sprite.say(":)")
    sprite.vx = 0
    sprite.vy = 0
    loops.pause(1000)
    currRun++
    if (currRun <= numRuns) {
        resetBoard()
    }   // if (currRun <= numRuns)
})  // sprites.onOverlap(1, 2, ...)

function resetBoard() {
    beginSprite.say("")
    beginSprite.x = Math.randomRange(0, screen.width)
    beginSprite.y = Math.randomRange(0, screen.height)
    endSprite.x = Math.randomRange(0, screen.width)
    endSprite.y = Math.randomRange(0, screen.height)
    let vector: vectorMath.Vector =
        vectorMath.createVectorFromSprites(beginSprite, endSprite)
    beginSprite.vx = vector.x
    beginSprite.vy = vector.y
}   // resetBoard()