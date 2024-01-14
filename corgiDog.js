class CorgiDog {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./CorgiDog.png"), 25, 0, 114, 150, 3, 0.4);

        this.x = 0;
        this.y = 0;
        this.speed = 50;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
    
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}