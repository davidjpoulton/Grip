
// created a makeshift "Database" for the purpose of example
let record_1 = {
    userId: 1,
    action: "start",
    dateActioned: 100
}

let record_2 = {
    userId: 2,
    action: "start",
    dateActioned: 200
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



var getUsers = (allRecords, action, startTime, endTime) => {
    // Array to store all the user ID's
    let totalUsers = []
    
    // for loop to iterate through the allRecords array
    for (i = 0; i < allRecords.length; i++) {
        
        // if the function parameter is "start" the if statement checks if the current record has the stored value of start and if it has then it 
        // checks to see if it also has the same value in its startTime and Endtime parameter
        if (action ==="start" && allRecords[i].action === "start" && allRecords[i].dateActioned >= startTime && allRecords[i].dateActioned <= endTime) {
            
            // if the totalUsers array already includes the user ID then skip
            if (totalUsers.includes(allRecords[i].userId)) {
                continue;
            //otherwise add the user ID to the totalUsers array
            } else {
                totalUsers.push(allRecords[i].userId);
            }
        } 

        // if the function parameter is "stop" the if statement checks if the current record has the stored value of start and if it has then it 
        // checks to see if it also has the same value in its startTime and Endtime parameter
        else if (action ==="stop" && allRecords[i].action === "stop" && allRecords[i].dateActioned >= startTime && allRecords[i].dateActioned <= endTime) {

            // if the totalUsers array already includes the user ID then skip
            if (totalUsers.includes(allRecords[i].userId)) {
                continue;

            //otherwise add the user ID to the totalUsers array
            } else {
                totalUsers.push(allRecords[i].userId);
            }
        } 
    }

    //log the results to the console
    return console.log(`User ID's = ${totalUsers}`);
}

// run our function
getUsers(allRecords, "start", 250, 500); // will output [1]
getUsers(allRecords, "stop", 200, 700); // will output [1,2]


//I could have used a different method, instead of if else statements. The if else statements have more code. 
//This code could be refractered to be more consise

 