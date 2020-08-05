
// Assignment-1 - Convert Feet to Mile

function feetToMile(feet) {
    const oneFeetToMile = 0.000189394;
    const result = feet < 0 ? "Distance can't be negative" : Number((feet * oneFeetToMile).toFixed(5));
    return result;
};

// Assignment-2- Wood Calculator

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const woodForOneChair = 1;
    const woodForOneTable = 3;
    const woodForOneBed = 5;
    if (chairQuantity < 0 || tableQuantity < 0 || bedQuantity < 0) {
        return "Furniture's Quantity can't be negative";
    }
    const totalWood = woodForOneChair * chairQuantity + woodForOneTable * tableQuantity + woodForOneBed * bedQuantity;
    return totalWood;
};

// Assignment-3- Calculate Brick

function brickCalculator(floors) {
    const bricksPerFeet = 1000;
    let totalBricks = 0;
    if (floors < 0) {
        return "Number of floors can't be negative";
    }
    if (floors <= 10) {
        totalBricks = (floors * 15) * bricksPerFeet;
    } 
    else if (floors <= 20) {
        const firstTenFloors = (10 * 15) * bricksPerFeet;
        const lastRemaining = (floors - 10) * 12 * bricksPerFeet;
        totalBricks = firstTenFloors + lastRemaining;
    } 
    else {
        const firstTenFloors = (10 * 15) * bricksPerFeet;
        const nextTenFloors = (10 * 12) * bricksPerFeet;
        const remainingFloors = (floors - 20) * 10 * bricksPerFeet;
        totalBricks = firstTenFloors + nextTenFloors + remainingFloors;
    }
    return totalBricks;
};

// Assignment-4 - get the smallest name from friends Array.

function tinyFriend(friendsArray) {

    if (friendsArray.length === 0 || typeof friendsArray !== 'object') {
        return "Friend list is Empty, Provide friends Array."
    }
    let tinyfriend = friendsArray[0];
    for (let i = 0; i < friendsArray.length; i++){
        if (friendsArray[i].length < tinyfriend.length) {
            tinyfriend = friendsArray[i];
        }
    }
    return tinyfriend;
};
