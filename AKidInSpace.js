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

////////// VARIABLES //////////

var game = new Phaser.Game(config);
var dude;
var cursors

function preload(){
    this.load.image('maya', 'assets/Maya/spr_Maya.png')
}

function create(){
    console.log(this)
    dude = this.physics.add.image(100, 100, 'maya')
    dude.body. collideWorldBounds = true
    cursors = this.input.keyboard.createCursorKeys()
}

function update(){

    dude.setVelocityX(0)

    if(cursors.up.isDown){
        dude.setVelocityY(-300)
    }
    if(cursors.left.isDown){
        dude.setVelocityX(-100)
    }
    if(cursors.right.isDown){
        dude.setVelocityX(100)
    }
}