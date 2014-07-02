$(function(){

    $(this).find(".attending").on('click', function (evt) {

        evt.preventDefault();

        var dataAttr = $(this).data();
        var getUrl = localUrl + '/event/xhr-attend/' + dataAttr.friendlyName;

        $.ajax({
            "type": "GET",
            "url": getUrl,
            "success": function (result) {
                if (result.success) {
                    var eventName = $(this).data().friendlyName;
                    var eventAttendingCountSpan = $('.' + eventName + '-attending-count');
                    var eventAttendingCount = parseInt(eventAttendingCountSpan.text());
                    eventAttendingCountSpan.html(++eventAttendingCount);
                    this.remove();
                    $('.' + eventName + '-user-attending').html('including you');
                    $('.' + eventName + '-user-attending').addClass('label label-success');
                }
            }.bind(this),
            "dataType": "json"
        });
    });
});
