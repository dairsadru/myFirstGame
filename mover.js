let mover = {
    canPlayerMakeStep(nextPoint) {
        return renderer.getSquare(nextPoint) !== null;
    },

    makeStep(event) {
        let newPosition = this.getNewPossition(event);
        if (this.arePositionsEqual(player, newPosition)) {
            return;
        }
        if (!this.canPlayerMakeStep(newPosition)) {
            return;
        }
        renderer.clearUserPosition();
        player.changePosition(newPosition);
        renderer.renderUserPosition(newPosition);
    },
    getNewPossition(event) {
        switch (event.key) {
            case "mouseup":
                return {
                    x: player.x,
                        y: player.y - 1
                };
            case "mouseDown":
                return {
                    x: player.x,
                        y: player.y + 1
                };
            case "mouseLeft":
                return {
                    x: player.x - 1,
                        y: player.y
                };
            case "mouseRight":
                return {
                    x: player.x + 1,
                        y: player.y
                };
            default:
                return {
                    x: player.x, y: player.y
                }
        }
    },
    arePositionsEqual(curPos, newPos) {
        return curPos.x == newPos.x && curPos.y == newPos.y;
    }
}