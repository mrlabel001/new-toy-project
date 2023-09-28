

function speedCalc(speed) {                    //function called speedCalc that receives speed as entry//
    const speedLimit = 70;                     //allowed speed of limit is set as constant//
    let = kmOverSpeed = 5;                     //a point is deducted every batch of 5km above speed limiy//
  
    if (speed < speedLimit + kmOverSpeed) {    //if speed is upto 70 then its ok//
      console.log("Ok");
      return;
    }
  
    const points = Math.floor((speed - speedLimit) / kmOverSpeed);
    if (points >= 12) console.log("License suspended");
    else console.log("Points:", points);                          //if more than 12 points deducted, licence is suspended//
  }                                                              //for every 5km above, a point is deducted//
  speedCalc(75);