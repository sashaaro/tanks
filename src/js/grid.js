var Grid = function(width, height) {
    this.elements = [];
    this.addElements = [];

    this.width = width;
    this.height = height;

    this.document = null;

    this.addElement = function(gridElement, x, y) {
        gridElement.x = x;
        gridElement.y = y;
        gridElement.grid = this;

        this.addElements.push(gridElement);
    }

    this.isSideHit = function (size, otherSize) {
        return utils.isCoverRange(size.begin, size.end, otherSize.begin, otherSize.end)
    }
}