class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image("player", "assets/images/knight.png");
        this.load.image("goal", "assets/images/chest.png");
        this.load.image("background", "assets/images/background.jpg");
    }

    create() {
        this.add.image(0, 0, "background").setOrigin(0, 0);

        this.player = this.physics.add.sprite(250, 600, "player").setCollideWorldBounds(true);
        this.goal = this.physics.add.sprite(1500, 700, "goal");

        this.score = 0;
        this.textScore = this.add.text(50, 50, "Score: " + this.score, { font: "50px Arial", fill: "#FFFB03" });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.overlap(this.player, this.goal, this.winGame, null, this);
    }

    update() {
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.flipX = false;
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.flipX = true;
        }
    }

    winGame() {
        this.score += 100;
        this.textScore.setText("Score: " + this.score);
        this.goal.disableBody(true, true);
        this.scene.start('WinScene');
    }
}
