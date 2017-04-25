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
    model.currentEvents.forEach(function(coEvent) {
        var eventSection = $("<section></section>").attr('class', "event");
        var title = $("<h3></h3>").text("Cowork @ " + coEvent.location_name);
        var when = $("<p></p>").text(coEvent.date + " @ " + coEvent.time.startTime + " - " + coEvent.time.endTime);
        eventSection.append(title, when);
        $(".upcoming").append(eventSection);
        console.log(eventSection);
    });
}

$(document).ready(function() {
    console.log("ready")
    render();
});
