// $('article section').click(function () {
//     $(this).toggleClass('active');
// });

var sidebar = new Waypoint.Sticky({
    element: $('#sidebar')[0]
});

$('.toc-item').click(function () {
    $($(this).attr('href').replace('link','collapse')).collapse();
    location.href = $(this).attr('href');
});
