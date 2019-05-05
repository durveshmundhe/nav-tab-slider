$(document).ready(function() {
    $('.right-arrow').on('click', function () {
        var getTabID = $(this)
            .parents('.tab-pane')
            .next('.tab-pane')
            .data('id');
        var tabID = "#tab-" + getTabID;
        if (tabID != "#tab-undefined") {
            $('.nav-tabs a[href="' + tabID + '"]').tab('show');
        }
        else {
            $('.nav-tabs a[href="#tab-1"]').tab('show');
        }
    });
    $(".left-arrow").on("click", function() {
      var getTabID = $(this)
        .parents(".tab-pane")
        .prev(".tab-pane")
        .data("id");
      var tabID = "#tab-" + getTabID;
      if (tabID != "#tab-undefined") {
        $('.nav-tabs a[href="' + tabID + '"]').tab("show");
      } else {
        $('.nav-tabs a[href="#tab-4"]').tab("show");
      }
    });
});