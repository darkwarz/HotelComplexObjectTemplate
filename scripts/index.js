var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}

//console.log(document.getElementById("label").nodeName);

for (var i = 0; i < hotel.rooms.length; i++){
    console.log("start");
    let radioBtn = document.createElement("INPUT");
    let radioLbl = document.createElement("LABEL");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "rooms");
    radioBtn.setAttribute("value", i);
    radioBtn.setAttribute("id", "room" + i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    console.log("stop");

    document.getElementById("radialSection").appendChild(radioBtn);    
    document.getElementById("radialSection").appendChild(radioLbl);
    }


//    html dom setAttribute() Method
    //create input tag 
document.createElement()

//console.log(hotel.rooms[0].name);
//displays rooms as radio options
// on form submission confirm radio was selected
//and checkbox checked