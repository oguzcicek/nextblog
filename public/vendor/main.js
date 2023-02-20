

    var openSearchForm = function() {
        document.querySelector('button.search-icon').addEventListener('click', function() {
            document.querySelector('body').classList.toggle("open-search-form");
            document.querySelector('.mega-menu-item').classList.remove("open");
            document.querySelector("html, body").animate({ scrollTop: 0 }, "slow");
        });
        document.querySelector('.search-close').addEventListener('click', function() {
            document.querySelector('body').classList.remove("open-search-form");
        });
    };

    (function() {
        openSearchForm();
    })();






