scene.setBackgroundColor(10)
let BfBody = sprites.create(img`
    .................................f.......
    ................................f3f......
    ...............................f311f.....
    ..............................f3111f.....
    ...................fffffffffff311111f....
    ...................f33333333333f1111f....
    ...................f111111111133ffff.....
    ...................f111222111113f44f.....
    ..................f1112111211113f44f.....
    ..................f1121211121111fdddf....
    .................f11121121121111fdddf....
    .................f11121112121111fdddf....
    .................f1111211121111fdfdf.....
    ...........ff....f1111122211111ff6ff.....
    ...........f6ffff1111111111111ff6666f....
    ...........f66666fffffffffffff6f6666f....
    ...........f66668888888888866666668fff...
    ............ffff88888f666666668668f22f...
    ...........f2222f88ffff66666ff8888f2ff...
    ...........f222cfff222fffffff2f88fcccf...
    ......ffffff22cf2222fcf2222f22cffccfff...
    ...fff1f1f1ffcccccccccfccc22ffffff22f....
    ..f22ff3f3f3fccccccccffcfc2f113333f22f...
    .f2222fffffffccccccccccfff22ffffff2222f..
    .f222222cccccccccccccccf222f111331f222f..
    .f2222ccccccccccccccccff2222ffffff2222f..
    f1f222ccccccccfcccccccf22ccf111111fcc22f.
    f11fffffffffff3fffffff22ccccffffffcccc2f.
    .f1111333333333333333ffccccccccccccccccf.
    ..ffffffffffffffffffff1fccccccccccccccf3f
    .....................f31ffffffffffffff13f
    ......................f3111111111113333f.
    .......................ffffffffffffffff..
    `, SpriteKind.Player)
BfBody.setPosition(120, 80)
let BfMic = sprites.create(img`
    . . f f f f f f . . 
    . f f b f b f b f . 
    f f c f b f b f b f 
    f c f c f b f b f f 
    f f c f c f b f c f 
    f c f c f c f c f f 
    . f c f c f c f f . 
    . . f f f f f f . . 
    . f c b b c b c f . 
    . . f f f f f f . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c b f . . . 
    . . . f c c f . . . 
    . . . f f f f . . . 
    `, SpriteKind.Player)
BfMic.setPosition(0, 0)
let BfArm = sprites.create(img`
    . . . . f f f f 
    . . . f 3 3 3 f 
    . . f 3 3 3 3 f 
    . f 3 3 3 3 3 f 
    . f 3 3 3 3 f . 
    . f f f f 3 f . 
    f 4 4 4 4 f . . 
    f 4 4 4 4 f . . 
    f 4 4 4 4 f . . 
    f 4 4 4 4 f . . 
    . f f f f . . . 
    `, SpriteKind.Player)
BfArm.setPosition(115, 75)
let BfFist = sprites.create(img`
    . . f f f f f f . . 
    . f d d d d f d f f 
    f 4 d d d d f d d f 
    f 4 d d d d d f d f 
    f 4 4 d d d d f d f 
    f f 4 4 f f f d d f 
    . f 4 4 4 4 d f d f 
    . f 4 4 d d d f f . 
    . f f 4 f f f f . . 
    . . f 4 d d d f . . 
    . . f 4 4 4 d f . . 
    . . . f f f f . . . 
    `, SpriteKind.Player)
BfFist.setPosition(0, 0)
let BfHead = sprites.create(img`
    .......fffffffffff.............
    ......f22222222222f............
    ......f2222f22222fcf...........
    .....ff222f9f222fcccf..........
    ....f99f2f99f22fcccccf.........
    ...f9999f996f22fccccccf........
    ..f9966999666f2fcccccccf.......
    .f99666666666f2fcccccccf.......
    f996666666666f2fcccccccff......
    .f99666666666f2fccccccfddffffff
    ..f99666666666ffffffffdfdf6666f
    .f99666fffff66f966666ff4ff8888f
    f99666f4444f6fff96666ff4ffffff.
    .ffffffddd44f44ff6f66f4f4f.....
    ......fddddd44444f4f6ff44f.....
    ......fddddd4dddd4d4ff.ff......
    ......fddddddddddddddf.........
    ....ffddddddddddddddf..........
    ...fdddddddddddddddf...........
    ...fddddddddddddddf............
    ....ffffffffffffff.............
    `, SpriteKind.Player)
BfHead.setPosition(0, 0)
let BfFace = sprites.create(img`
    . . . . . . . . . . . f 
    . . . . . . . . . . f . 
    f . . . . . . . . f . . 
    . f . . . . . . f . . . 
    . . f . . . . f . . . . 
    . f f f . . . f . . . . 
    . f f . f . f f f . . . 
    . f f . . f . f f . . . 
    . f f . . . . f f . . . 
    . f f . . . . f f . . . 
    . . . . . . . . . f f f 
    . . . . . . . . f 1 1 f 
    . . f f f f f f f f f . 
    `, SpriteKind.Player)
BfFace.setPosition(0, 0)
