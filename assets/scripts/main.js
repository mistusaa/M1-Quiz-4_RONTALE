let config = {
    type: Phaser.AUTO,
    width: 1871,
    height: 980,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [MenuScene, GameScene, CreditsScene, WinScene]
};

let game = new Phaser.Game(config);
