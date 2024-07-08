// Takes speed input from the car
//Compare it with to the recommended value
// If above 70km/s, the programme demerate the driver 1 demerate point for every 5km/s speed

const inputSpeed = prompt("Enter speed of the car: ");

function validateSpeed(inputValue) {
    if(!isNaN(inputValue)) {
        return Math.abs(inputValue);
    } else {
        return "You entered invalid speed. Please click 'OK' and enter valid speed to try again."
    }
};

function speedGovernor(speedFunc) {
    const maxRecommendedSpeed = 70;
    const forEverySpeedAbove70 = 5;
    const actualSpeed = speedFunc(inputSpeed);
    let speedDifference = actualSpeed - maxRecommendedSpeed;

    if(actualSpeed < maxRecommendedSpeed) {
        return "Ok";
    } else {
        let demeritPoints = Math.floor(speedDifference / forEverySpeedAbove70);
        if(demeritPoints <= 1) {
            return `Your total demerit point = ${demeritPoints} point.`;
        } else if(demeritPoints <= 12) {
            return `Your total demerit points = ${demeritPoints} points.`;
        } else if(demeritPoints > 12){
            return "License suspended."
        } else {
            return "You entered invalid speed. Please click 'OK' and enter valid speed to try again."
        };
    }    
}
alert(speedGovernor(validateSpeed));