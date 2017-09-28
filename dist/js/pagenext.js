
$(document).ready(function() {
//	alert($("#1").text());

	var par=parseInt($("#indexid").text().toString());
		switch( par ) {

			case 1:
				outClass = 'fade-in-up-sm';
				inClass = 'fade-in-up-sm';
				pagenext(outClass,inClass);
				break;
			case 2:
				outClass = 'rotate-in-sm';
				inClass = 'rotate-out-sm';
				$("body").css("background","#0ac2d2")
				pagenext(outClass,inClass);
				break;
			case 3:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				pagenext(outClass,inClass);
				break;
			case 4:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				pagenext(outClass,inClass);
				break;
			case 5:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 6:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 7:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromBottom pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 8:
				outClass = 'pt-page-fade';
				inClass = 'pt-page-moveFromTop pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 9:
				outClass = 'pt-page-moveToLeftFade';
				inClass = 'pt-page-moveFromRightFade';
				pagenext(outClass,inClass);
				break;
			case 10:
				outClass = 'pt-page-moveToRightFade';
				inClass = 'pt-page-moveFromLeftFade';
				pagenext(outClass,inClass);
				break;
			case 11:
				outClass = 'pt-page-moveToTopFade';
				inClass = 'pt-page-moveFromBottomFade';
				pagenext(outClass,inClass);
				break;
			case 12:
				outClass = 'pt-page-moveToBottomFade';
				inClass = 'pt-page-moveFromTopFade';
				pagenext(outClass,inClass);
				break;
			case 13:
				outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
				inClass = 'pt-page-moveFromRight';
				pagenext(outClass,inClass);
				break;
			case 14:
				outClass = 'pt-page-moveToRightEasing pt-page-ontop';
				inClass = 'pt-page-moveFromLeft';
				pagenext(outClass,inClass);
				break;
			case 15:
				outClass = 'pt-page-moveToTopEasing pt-page-ontop';
				inClass = 'pt-page-moveFromBottom';
				pagenext(outClass,inClass);
				break;
			case 16:
				outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
				inClass = 'pt-page-moveFromTop';
				pagenext(outClass,inClass);
				break;
			case 17:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromRight pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 18:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromLeft pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 19:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromBottom pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 20:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-moveFromTop pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 21:
				outClass = 'pt-page-scaleDown';
				inClass = 'pt-page-scaleUpDown pt-page-delay300';
				pagenext(outClass,inClass);
				break;
			case 22:
				outClass = 'pt-page-scaleDownUp';
				inClass = 'pt-page-scaleUp pt-page-delay300';
				pagenext(outClass,inClass);
				break;
			case 23:
				outClass = 'pt-page-moveToLeft pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				pagenext(outClass,inClass);
				break;
			case 24:
				outClass = 'pt-page-moveToRight pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				pagenext(outClass,inClass);
				break;
			case 25:
				outClass = 'pt-page-moveToTop pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				pagenext(outClass,inClass);
				break;
			case 26:
				outClass = 'pt-page-moveToBottom pt-page-ontop';
				inClass = 'pt-page-scaleUp';
				pagenext(outClass,inClass);
				break;
			case 27:
				outClass = 'pt-page-scaleDownCenter';
				inClass = 'pt-page-scaleUpCenter pt-page-delay400';
				pagenext(outClass,inClass);
				break;
			case 28:
				outClass = 'pt-page-rotateRightSideFirst';
				inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 29:
				outClass = 'pt-page-rotateLeftSideFirst';
				inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 30:
				outClass = 'pt-page-rotateTopSideFirst';
				inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 31:
				outClass = 'pt-page-rotateBottomSideFirst';
				inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
				pagenext(outClass,inClass);
				break;
			case 32:
				outClass = 'pt-page-flipOutRight';
				inClass = 'pt-page-flipInLeft pt-page-delay500';
				pagenext(outClass,inClass);
				break;
			case 33:
				outClass = 'pt-page-flipOutLeft';
				inClass = 'pt-page-flipInRight pt-page-delay500';
				pagenext(outClass,inClass);
				break;
			case 34:
				outClass = 'pt-page-flipOutTop';
				inClass = 'pt-page-flipInBottom pt-page-delay500';
				pagenext(outClass,inClass);
				break;
			case 35:
				outClass = 'pt-page-flipOutBottom';
				inClass = 'pt-page-flipInTop pt-page-delay500';
				pagenext(outClass,inClass);
				break;
		
		}
 	 function pagenext(a,b)
 	 {
 	 	$(".animsition").animsition({
   
    inClass               :  a,
    outClass              :   b,
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
     
    overlay               :   false,
     
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
 	 }

});  

