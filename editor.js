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
    		iframeCss= $('<link rel="stylesheet" type="text/css" />');
    		iframeHead.html(iframeScript[0] + iframeCss[0]);
    	}, 1);
    });
});

function runHtml()
{
    iframeBody.html($("#htmlText").val());
}

function runJavascript()
{
    iframeScript.html($("#jsText").val());
}

function runCss()
{
    iframeCss.html($("#cssText").val());
}