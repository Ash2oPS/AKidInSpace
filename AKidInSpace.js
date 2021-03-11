////////// CONFIG //////////

const config = {
    width: 1920,
    height: 1080,
    type: Phaser.AUTO,
    physics:{
        default: 'arcade',
        arcade:{
            gravity: {y: 450},
            debug: false
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update
    }
}

function noscroll(){
window.scrollTo(0, 0)
document.body.style.overflow = 'hidden';
}

window.addEventListener("scroll", noscroll)

////////// VARIABLES //////////

var game = new Phaser.Game(config)
var background
var maya
var cursors

////////// PRELOAD //////////

function preload(){

    // Backgrounds

    this.load.image('background', 'assets/spr_Background.png')

    // Acteurs actifs

    this.load.image('maya', 'assets/Maya/spr_Maya.png')

}

////////// CREATE //////////

function create(){
    // Backgrounds

    background = this.add.image(0, 0, 'background')
    background.setOrigin(0, 0)



    // Maya
    maya = this.physics.add.image(100, 100, 'maya')
    maya.body. collideWorldBounds = true
    cursors = this.input.keyboard.createCursorKeys()
}

////////// UPDATE //////////

function update(){

    maya.setVelocityX(0)

    if(cursors.up.isDown){
        maya.setVelocityY(-300)
    }
    if(cursors.left.isDown){
        maya.setVelocityX(-100)
    }
    if(cursors.right.isDown){
        maya.setVelocityX(100)
    }
}
