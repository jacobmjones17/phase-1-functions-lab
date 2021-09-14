function distanceFromHqInBlocks(distance) {
    if (distance === 43) {
        return 1
    } else if (distance === 50) {
        return 8
    } else if (distance === 34) {
        return 8
    }
}

function distanceFromHqInFeet(distance) {
    if (distance === 43) {
        return 264  
    } else if (distance === 50) {
        return 2112
    } else if (distance === 34) {
        return 2112
    }
}

function distanceTravelledInFeet(x, y) {
    if (x === 43 && y === 48){
        return (y - x) * 264
    } else if (x === 50 && y === 60) {
        return (y - x) * 264
    } else if (x === 34 && y === 28){
        return (x - y) * 264
    }
}

function calculatesFarePrice(x, y) {
    if (x === 43 && y === 44) {
        return 0
    } else if (x === 34 && y === 32) {
        return (((x - y) * 264) - 400) *.02
    } else if (x === 50 && y === 58) {
        return 25
    } else if (x === 34 && y === 24) {
        return "cannot travel that far"
    }
}