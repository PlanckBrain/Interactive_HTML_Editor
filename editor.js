// JavaScript File

// GLOBAL VARIABLE DECLARATOINS
var iframeBody;
var iframeHead;
var iframeScript;
var iframeCss;
var $frame;


$(document).ready(function() { 
    $(function() {
    	$frame = $("#iFrame");
    	setTimeout( function() {
    		var doc = $frame[0].contentWindow.document; //Learn about this more
    		iframeBody = $('body',doc);
    		iframeHead = $('head',doc);
    		iframeScript = $('<script type="text/javascript"></script>');
    		iframeHead.append(iframeScript);
    		iframeCss= $('<style id="jsbin-css"></style>');
    		iframeHead.append(iframeCss);
    	}, 1);
    });
});

function runHtml()
{
    iframeBody.html($("#htmlText").val());
}

function runJavascript()
{
    iframeScript[0].innerHTML = ($("#jsText").val());
    //document.getElementById("iFrame").contentWindow.location.reload(); //WHY DOESN'T THIS WORK??!?!?!?!?!?!?!?!?
    $frame.src = $frame.src;
}

function runCss()
{
    iframeCss[0].innerHTML = ($("#cssText").val());
}