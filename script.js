(function($)
{
    "use strict";

    $(document).ready(function()
    {
        $('body').on('mouseenter mouseleave','.nav-item', navItemToggle);	

        function navItemToggle(e)
        {
            console.log('navItemToggle');

            if ($(window).width() > 750)
            {
                var _d = $(e.target).closest('.nav-item');
                _d.addClass('show');
                setTimeout(function()
                {
                    _d[_d.is(':hover')?'addClass':'removeClass']('show');
                }, 1);
            }
        }
    })
})(jQuery);