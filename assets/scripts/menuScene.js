class MenuScene extends Phaser.Scene {
    constructor() {
        super('MenuScene');
    }

    preload() {
        this.load.image('playBtn', 'assets/images/buttonPlay.png');
        this.load.image('creditsBtn', 'assets/images/buttonCredits.png');
        this.load.image('quitBtn', 'assets/images/buttonQuit.png');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0);

        this.add.image(900, 300, 'playBtn')
            .setInteractive()
            .on('pointerdown', () => this.scene.start('GameScene'));

        this.add.image(900, 450, 'creditsBtn')
            .setInteractive()
            .on('pointerdown', () => this.scene.start('CreditsScene'));

        this.add.image(900, 600, 'quitBtn')
            .setInteractive()
            .on('pointerdown', () => alert('You exited the game.'));
    }
}
