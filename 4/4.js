// created a makeshift "Database" for the purpose of example
let record_1 = {
    userId: 1,
    action: "start",
    dateActioned: 100,
}

let record_2 = {
    userId: 2,
    action: "start",
    dateActioned: 200,
}

let record_3 = {
    userId: 1,
    action: "start",
    dateActioned: 250
}

let record_4 = {
    userId: 1,
    action: "stop",
    dateActioned: 370
}

let record_5 = {
    userId: 1,
    action: "stop",
    dateActioned: 410
}

let record_6 = {
    userId: 2,
    action: "stop",
    dateActioned: 490
}

let record_7 = {
    userId: 3,
    action: "start",
    dateActioned: 700
}

// Array with with all records "database"
let allRecords = [record_1, record_2, record_3, record_4, record_5, record_6, record_7];



var getPlaybackTime = (userIdNumber, allRecords) => {

    var enteredUserId = userIdNumber
    var startTotal = 0;
    var endTotal = 0;
 
    //loop through all the data entries
    for (i = 0; i < allRecords.length; i++) {

        //if the entered user id matches the user id in the database and the record has the action value
        if (enteredUserId === allRecords[i].userId && allRecords[i].action === "start" && startTotal === 0) {
            // make the start total = the date actioned in the database
            startTotal = allRecords[i].dateActioned
            
        }

        //this is to find the final time the user had the value off, records the time in the endTotal 
        if (enteredUserId === allRecords[i].userId && allRecords[i].action === "stop") {
            endTotal = allRecords[i].dateActioned
        }
    }

    //the total time is the startTime - EndTime, we use Math.abs() to always return a positive value
    var totalSeconds = Math.abs(startTotal - endTotal)

    //log the time to the console
    console.log(totalSeconds)

    //retun the total time
    return totalSeconds;
}


//call our function
getPlaybackTime(1, allRecords)


//I could have used a different method, instead of if else statements. The if else statements have more code. 
//This code could be refractered to be more consise