'use strict';
function init() {
    const request = new XMLHttpRequest();
    request.onload = () => {
        if (request.status === 200) {
            const xmlDoc = request.responseXML;
            const table = initTable();
            // 1.) Select all <artist> elements
            const artists = xmlDoc.getElementsByTagName('artist');
            for (let i = 0; i < artists.length; i++) {
                const artist = artists[i];
                // 2.) Select the <album> elements
                const albums = artist.getElementsByTagName('album');
                for (let j = 0; j < albums.length; j++) {
                    const album = albums[j];
                    // 3.) Create a new table row
                    const row = createRow(
                        artist.getAttribute('name'),
                        album.getElementsByTagName('title')[0].childNodes[0].nodeValue,
                        album.getElementsByTagName('year')[0].childNodes[0].nodeValue
                    );
                    table.tBodies[0].appendChild(row);
                }
            }
            document.getElementById('artists-container').appendChild(table);
        }
    };
    request.open('GET', 'artists.xml', true);
    request.responseType = 'document';
    request.setRequestHeader('Accept', 'text/xml');
    request.send();
}
function initTable() {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headerColumnArtistName = document.createElement('th');
    const headerColumnAlbumTitle = document.createElement('th');
    const headerColumnAlbumYear = document.createElement('th');
    const tableBody = document.createElement('tbody');
    headerColumnArtistName.appendChild(document.createTextNode('Name'));
    headerColumnAlbumTitle.appendChild(document.createTextNode('Title'));
    headerColumnAlbumYear.appendChild(document.createTextNode('Year'));
    headerRow.appendChild(headerColumnArtistName);
    headerRow.appendChild(headerColumnAlbumTitle);
    headerRow.appendChild(headerColumnAlbumYear);
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    table.className = 'table table-striped';
    return table;
}
function createRow(artistName, albumTitle, albumYear) {
    const row = document.createElement('tr');
    const columnName = document.createElement('td');
    const columnTitle = document.createElement('td');
    const columnYear = document.createElement('td');
    columnName.appendChild(document.createTextNode(artistName));
    columnTitle.appendChild(document.createTextNode(albumTitle));
    columnYear.appendChild(document.createTextNode(albumYear));
    row.appendChild(columnName);
    row.appendChild(columnTitle);
    row.appendChild(columnYear);
    return row;
}
window.addEventListener('DOMContentLoaded', init);