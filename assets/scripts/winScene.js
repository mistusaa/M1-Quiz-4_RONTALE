class WinScene extends Phaser.Scene {
    constructor() {
        super('WinScene');
    }

    create() {
        this.add.text(750, 300, 'YOU WON THE GAME!', { fontSize: '48px', fill: '#00FF00' });

        const retryBtn = this.add.text(800, 400, 'RETRY', { fontSize: '36px', fill: '#FFFFFF' });
        retryBtn.setInteractive().on('pointerdown', () => this.scene.start('GameScene'));

        const mainMenuBtn = this.add.text(800, 500, 'MAIN MENU', { fontSize: '36px', fill: '#FFFFFF' });
        mainMenuBtn.setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
}
