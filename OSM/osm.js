var greenIcon = L.icon({
    iconUrl: 'green_landmark.png',
    shadowUrl: 'shadow.png',
    iconSize: [32, 32], // size of the icon
    shadowSize: [14, 4], // size of the shadow
    iconAnchor: [2, 14], // point of the icon which will correspond to marker's location
    shadowAnchor: [14, 4], // the same for the shadow
    popupAnchor: [+13, -24] // point from which the popup should open relative to the iconAnchor
});

var blueIcon = L.icon({
    iconUrl: 'blue_landmark.png',
    shadowUrl: 'shadow.png',
    iconSize: [32, 32], // size of the icon
    shadowSize: [14, 4], // size of the shadow
    iconAnchor: [2, 24], // point of the icon which will correspond to marker's location
    shadowAnchor: [14, 4], // the same for the shadow
    popupAnchor: [+13, -24] // point from which the popup should open relative to the iconAnchor
});

var orangeIcon = L.icon({
    iconUrl: 'orange_landmark.png',
    shadowUrl: 'shadow.png',
    iconSize: [32, 32], // size of the icon
    shadowSize: [14, 4], // size of the shadow
    iconAnchor: [2, 14], // point of the icon which will correspond to marker's location
    shadowAnchor: [14, 4], // the same for the shadow
    popupAnchor: [+13, -24] // point from which the popup should open relative to the iconAnchor
});

function getIcon(num) {
    return num > 100 ? greenIcon :
        num > 50 ? blueIcon :
        orangeIcon;
}

function csvToArray(input) {

    const headers = input.slice(0, input.indexOf("\n")).split(","); // slice -> substring
    const rows = input.slice(input.indexOf("\n") + 1).split("\n");
    let arr = []
    for (var r = 0; r < rows.length; r++) {
        const values = rows[r].split(",");
        var data = {}
        for (var i = 0; i < values.length; i++) {
            data[headers[i]] = values[i]
        }
        arr.push(data)
    }
    // const arr = rows.map(function(row) {
    //     const values = row.split(",");
    //     const el = headers.reduce(function(data, header, index) {
    //         data[header] = values[index];
    //         return data;
    //     }, {}); // 預設值為dict
    //     return el;
    // });
    return arr;
}

function getLedgend() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function(map) {

        var div = L.DomUtil.create('div', 'info legend'),
            leave_num = [0, 50, 100],
            labels = [];
        div.innerHTML += '<div align="center"><b>剩餘快篩數量</b></div>'

        for (var i = 0; i < leave_num.length; i++) {
            console.log(getIcon(leave_num[i]).options['iconUrl'])
            div.innerHTML += '<img src="' + getIcon(leave_num[i] + 1).options['iconUrl'] + '" alt="" width="10%" height="50%">&nbsp;' +
                leave_num[i] + (leave_num[i + 1] ? '&nbsp;&ndash;&nbsp;' + leave_num[i + 1] + '<br>' : '&nbsp;+');
        }

        return div;
    };
    return legend
}