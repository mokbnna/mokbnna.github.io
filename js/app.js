// 这是我们的玩家要躲避的敌人 
var Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x=this.stx = 7;
    this.y=this.sty = 5;
    this.width = 45;
    this.height = 45;
    this.locx = this.x+this.width/2;
    this.locy = this.y+this.height/2;
    this.speed = 100;


    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};
//var speed = 100;

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    if(this.x>505){
    	this.x=-100;
    };
    this.x = this.x+dt*this.speed;

};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function() {
	Enemy.call(this);
	this.x=200;
	this.y=400;
	this.sprite = 'images/char-boy.png';
};

Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.update =function(){

};
Player.prototype.reset =function(){
	this.x=200;
	this.y=400;
};


Player.prototype.handleInput = function(input){
	var PLAYER_STEP = 17;
	var ASIDE = 410;
	switch(input){
		case 'up':
			if(this.y>0){
				this.y-=PLAYER_STEP;
			};
			break;
		case 'down':
			if(this.y<ASIDE){
				this.y+=PLAYER_STEP;
			};
			break;
		case 'right':
			if(this.x<ASIDE){
				this.x+=PLAYER_STEP;
			};
			break;
		case 'left':
			if(this.x>5){
				this.x-=PLAYER_STEP;
			};
			break;
	};
};

// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var e1 = new Enemy;
var e2 = new Enemy;
var e3 = new Enemy;
e1.y=50;
e1.x=150;
e2.y=150;
e3.x=150;
e3.y=300;
var allEnemies = [e1,e2,e3];
var player = new Player();


var distance=function(one,two){

	return ((one.x+one.width)>two.x)&&
		(one.x<(two.x+two.width))&&
		((one.y+one.height)>two.y)&&
		(one.y<(two.y+two.height));
};




//var dis = [distance(player,e1),distance(player,e2)];//store distance between player and enemy





// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
