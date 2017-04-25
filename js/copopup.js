var model = {
    currentEvents: [
        {
            "date":"May 2, 2017",
            "owner":"Mimi",
            "location_name":"Ruby Jean Juicery",
            "address": {
                "streetAddress":"4100 Main",
                "city": "Kansas City",
                "state": "MO",
                "postalCode": "64131"
            },
            "time": {
                "startTime": "0900",
                "endTime": "1200"
            }
        },{
            "date":"May 2, 2017",
            "owner":"Reggie",
            "location_name":"MCC",
            "address": {
                "streetAddress":"4100 Main",
                "city": "Kansas City",
                "state": "MO",
                "postalCode": "64131"
            },
            "time": {
                "startTime": "0900",
                "endTime": "1200"
            }
        }
    ],
    myEvents: []
}



function render () {
    //for each event in currentEvents, display in the event section
    model.currentEvents.forEach(function(coEvent) {
        var eventSection = $("<section></section>").attr('class', "event");
        var title = $("<h3></h3>").text("Cowork @ " + coEvent.location_name);
        var when = $("<p></p>").text(coEvent.date + " @ " + coEvent.time.startTime + " - " + coEvent.time.endTime);
        var button = $("<button></button>").text("I'm In!").click(function() {
            model.myEvents.push(coEvent);
            render();
        });
        eventSection.append(title, when, button);
        $(".upcoming").append(eventSection);
        console.log(eventSection);
    });

    //for each event in myEvents, display in your-events section
    model.myEvents.forEach(function(myEvent) {
        var yourEvent = $("<section><section)").attr('class', 'side-event');
        var yourTitle = $("<h4></h4>").text("Cowork @" + myEvent.location_name);
        var yourWhen = $("<p></p>").text(myEvent.date + " @ " + myEvent.time.startTime + " - " + myEvent.time.endTime);
        yourEvent.append(yourTitle, yourWhen);
        $(".your-events").append(yourEvent);
    });
}

$(document).ready(function() {
    console.log("ready")
    render();
});
