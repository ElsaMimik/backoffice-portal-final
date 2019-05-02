(function($) {
    $.fn.menu = function(opts) {
        // default configuration
        var config = $.extend({}, {
            opt1: null
        }, opts);
        // main function
        function init(obj) {
            var dObj = $(obj);
            var dMenulink = dObj.find('.sidebar__btn');
            var dAllLink = dObj.find('.nav-menu a');
            var linkk = dObj.find('.nav-body a');

            linkk.click(function() {
                dObj.toggleClass('active');
            });

            dMenulink.click(function() {
                dObj.toggleClass('active');
            });

            dAllLink.click(function() {
                dObj.removeClass('active')
            });
        }
        // initialize every element
        this.each(function() {
            init($(this));
        });
        return this;
    };
    // start
    $(function() {
        $(".sidebar").menu();
    });
})(jQuery);
