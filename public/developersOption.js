var devId;
const onClick = (e) => {
    var t = e.target;
    while (t && !t.id) 
        t = t.parentNode;
    if (t) {
        console.log("You clicked element #" + t.id);
        devId = t.id;
        window.open(
            "./developerProfile/?id=" + t.id,
            "_blank",
            "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=800,height=800"
        );
    }
}
window.addEventListener('click', onClick);

// Initialize and add the map
function initMap() {

    // The location of Geeksforgeeks office
    const gfg_office = {
        lat: 28.50231,
        lng: 77.40548
    };

    // Create the map, centered at gfg_office
    const map = new google
        .maps
        .Map(document.getElementById("map"), {

            // Set the zoom of the map
            zoom: 17.56,
            center: gfg_office
        });
}