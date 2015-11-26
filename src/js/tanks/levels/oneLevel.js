function OneLevel()
{
    Level.apply(this, arguments);
}

OneLevel.prototype = Object.create(Level);
OneLevel.prototype.constructor = OneLevel;

OneLevel.prototype.init = function()
{
    var border = new Well();
    border.x = this.grid.width - 10;
    this.grid.addElement(border);
    border.height = this.grid.height;

    border = new Well();
    this.grid.addElement(border, 0, 0);
    border.height = this.grid.width;

    border = new Well();
    this.grid.addElement(border, 0, 0);
    border.width = this.grid.width;

    border = new Well();
    border.y = this.grid.height-10;
    this.grid.addElement(border);
    border.width = this.grid.width;

    border = new Well();
    border.x = 20;
    border.y = 130;
    this.grid.addElement(border);

    border = new Well();
    border.x = 20;
    border.y = 120;
    this.grid.addElement(border);

    border = new Well();
    border.x = 20;
    border.y = 110;
    this.grid.addElement(border);

    border = new Well();
    border.x = 30;
    border.y = 110;
    this.grid.addElement(border);
    border = new Well();
    border.x = 40;
    border.y = 110;
    this.grid.addElement(border);


    border = new Well();
    border.x = 130;
    border.y = 120;
    this.grid.addElement(border);
    border.document.className = 'steel grid-element'; //move to out
    border = new Well();
    border.x = 120;
    border.y = 120;
    this.grid.addElement(border);
    border.document.className = 'steel grid-element'; //move to out



    var myTank = new Tank();
    utils.extend(myTank, GridElement.behavior.embedable);

    var weapon = new Weapon();
    myTank.addElement(weapon);

    myTank.x = 10;
    myTank.y = 130;
    myTank.nextMoveDirection = 'up';
    this.grid.addElement(myTank);
//myTank.moveSpeed = 3;

    var enemyTank = new Tank();
    enemyTank.x = 100;
    enemyTank.y = 100;
    this.grid.addElement(enemyTank);

    var gridControl = new GridElementControl();

    gridControl.take(myTank);
    gridControl.computer(enemyTank);
    this.enemyTank = enemyTank;
}

OneLevel.prototype.time = function(game)
{
    var that = this;
    var has = false;
    game.grid.elements.forEach(function(element){
        if(that.enemyTank == element) {
            has = true;
        };
    })
    if(!has) {
        game.over();
        alert('win'); //next level
    }
}