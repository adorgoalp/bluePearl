function PopupCenter(url, title, w, h) {
//    // Fixes dual-screen position                         Most browsers      Firefox
//    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
//    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
//
//    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
//    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
//
//    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
//    var top = ((height / 2) - (h / 2)) + dualScreenTop;
//    var newWindow = window.open(url, title, 'menubar=0,resizable=1, scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
//
//    // Puts focus on the newWindow
//    if (window.focus) {
//        newWindow.focus();
//    }
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}
$(document).on('ready', function () {
    $(".single-item").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
    $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
    });
    //logo
    $(".logoLauncer").on("click", function () {
        $(".logo").eq(0).trigger("click");
        return false;
    });
    $(".logo").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //banners
    $(".bannerLauncer").on("click", function () {
        $(".banners").eq(0).trigger("click");
        return false;
    });
    $(".banners").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //cards
     $(".businessCardLauncher").on("click", function () {
        $(".bussinessCard").eq(0).trigger("click");
        return false;
    });
    $(".bussinessCard").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //calender
     $(".calenderLauncher").on("click", function () {
        $(".calender").eq(0).trigger("click");
        return false;
    });
    $(".calender").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //brochure
     $(".brochureLauncher").on("click", function () {
        $(".brochure").eq(0).trigger("click");
        return false;
    });
    $(".brochure").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //cover
     $(".coverLauncher").on("click", function () {
        $(".cover").eq(0).trigger("click");
        return false;
    });
    $(".cover").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //bannerWithAds
     $(".bannerWithAdsLauncher").on("click", function () {
        $(".bannerWithAds").eq(0).trigger("click");
        return false;
    });
    $(".bannerWithAds").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    
    //desigh and effect
     $(".designEffectLauncher").on("click", function () {
        $(".designEffect").eq(0).trigger("click");
        return false;
    });
    $(".designEffect").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //retouch
     $(".retouchLauncher").on("click", function () {
        $(".retouch").eq(0).trigger("click");
        return false;
    });
    $(".retouch").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //fbAds
     $(".fbAdsLauncher").on("click", function () {
        $(".fbAds").eq(0).trigger("click");
        return false;
    });
    $(".fbAds").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //ads
     $(".adsLauncher").on("click", function () {
        $(".ads").eq(0).trigger("click");
        return false;
    });
    $(".ads").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
     //icon
     $(".iconLauncher").on("click", function () {
        $(".icon").eq(0).trigger("click");
        return false;
    });
    $(".icon").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //invCard
     $(".invCardLauncher").on("click", function () {
        $(".invCard").eq(0).trigger("click");
        return false;
    });
    $(".invCard").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //mobileAd
     $(".mobileAdLauncher").on("click", function () {
        $(".mobileAd").eq(0).trigger("click");
        return false;
    });
    $(".mobileAd").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
     //printBanner
     $(".printBannerLauncher").on("click", function () {
        $(".printBanner").eq(0).trigger("click");
        return false;
    });
    $(".printBanner").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //social media Banner
     $(".smBannerLauncher").on("click", function () {
        $(".smBanner").eq(0).trigger("click");
        return false;
    });
    $(".smBanner").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //textEffect
     $(".textEffectLauncher").on("click", function () {
        $(".textEffect").eq(0).trigger("click");
        return false;
    });
    $(".textEffect").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
    
    //web Template
     $(".webTemplateLauncher").on("click", function () {
        $(".webTemplate").eq(0).trigger("click");
        return false;
    });
    $(".webTemplate").attr('rel', 'gallery').fancybox({padding: 0,title:'Scroll mouse to change'});
});