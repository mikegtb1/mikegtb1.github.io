$('#btn1').click(adder1);
$('#btn4').click(() => {
    //           $('.currentnumber').text('changed');
    $('.currentnumber').text($('.currentnumber').val() + 1);
});

$('#btn2').click(adder2);
$('#btn3').click(adder3);
function adder2() {
    $.get('https://www.discoveryvip.com/shared/people.json',
        (data) => {
            console.log(data);
            $.each(data.people, (ind, val) => {
                console.log(val.first);
            });
        })
}
function adder3() {
    $.get('books.json', (data) => {
        console.log(data.books);
        let val1 = JSON.stringify(data.books);
        $.each(data.books, (ind, val) => {
            val1 += `<div>(${val.title}) `;
            val1 += `(${val.author})</div>`;
        });
        $('<div>').html(val1).appendTo('.output');
    })
}
function adder1() {
    $.get('file1.json', (res) => {
        console.log(res);
        let html = `${res.firstName} ${res.lastName}`;
        $('<h2>').text(html).appendTo('.output');
        const a = res.address;
        const val1 =
            `${a.city}<br>${a.postalCode}<br>${a.state}
                            <br>${a.streetAddress}`;
        $('<div>').html(val1).appendTo('.output');
        $ul = $('<ul>');
        $ul.appendTo('.output');
        $.each(res.phoneNumbers, (ind, val) => {
            console.log(val);
            const temp = `${ind + 1}. ${val.number} (${val.type})`;
            $('<li>').text(temp).appendTo($ul);
        })
    })
}