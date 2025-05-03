class CreditsScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }

    create() {
        this.add.text(650, 300, 'FULL NAME: Rovil Jesus Rontale', { fontSize: '32px', fill: '#FFFFFF' });
        this.add.text(650, 350, 'SECTION: A224', { fontSize: '32px', fill: '#FFFFFF' });
        this.add.text(650, 400, 'PROGRAM: EMC', { fontSize: '32px', fill: '#FFFFFF' });

        const backBtn = this.add.text(700, 500, 'BACK', { fontSize: '36px', fill: '#FF0000' });
        backBtn.setInteractive().on('pointerdown', () => this.scene.start('MenuScene'));
    }
}
