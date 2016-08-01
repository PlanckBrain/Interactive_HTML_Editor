// JavaScript File

// GLOBAL VARIABLE DECLARATOINS
var iframeBody;
var iframeHead;
var iframeScript;
var iframeCss;


$(document).ready(function() { 
    $(function() {
    	var $frame = $('<iframe style="width:99%; height:100%;" >');
    	$("#htmlHolder").html( $frame );
    	setTimeout( function() {
    		var doc = $frame[0].contentWindow.document;
    		iframeBody = $('body',doc);
    		iframeHead = $('head',doc);
    		iframeScript = $('<script type="text/javascript"></script>');
    		iframeCss= $('<link rel="stylesheet" type="text/css">');
    		iframeHead.html(iframeScript + iframeCss);
    	}, 1);
    });
});

function runHtml()
{
    iframeBody.html($("#htmlText").val());
}

function runJavascript()
{
    iframeScript[0].html($("#jsText").val());
}

function runCss()
{
    iframeCss[0].html($("#cssText").val());
}