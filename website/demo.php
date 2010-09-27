<?php

$page = 'Demo';
include_once 'header.php';

?>
<script src="wikibits.js" type="text/javascript"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/javascript"></script>
<script src="http://proveit-js.googlecode.com/hg/ProveIt_Wikipedia.js" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[

function loadArticle()
{
  var articleName = $('#articleName').val();
  var apiURL = 'http://en.wikipedia.org/w/api.php?action=query&prop=revisions&titles=' + encodeURIComponent(articleName) + '&rvprop=content&format=json&callback=?';
  $.getJSON(apiURL, function(response)
  {
    if(response.error)
    {
      throw response.error; 
    }
    var pages = response.query.pages;
    for(var key in pages)
    {
      break; // Get first (only) key.  This is necessary due to odd JSON structure.
    }
    var page = pages[key];
    var content = page.revisions[0]['*'];
    // wg's global 
    wgTitle = page.title;
    wgPageName = page.title.replace(" ", "_");
    $('#wpTextbox1').val(content);
    $('#proveit').remove();
    proveit.createGUI();
  });
  return false;
}

// wg's deliberately global
wgServer="http://en.wikipedia.org",
wgCanonicalNamespace="",
wgCanonicalSpecialPageName=false,
wgNamespaceNumber=0,
wgAction="edit";

$(function()
{
    loadArticle();
    $('#demoForm').submit(loadArticle);
});
//]]>
</script>
<div id="mainBody">
<p><span style="font-size: large;">Pick an article, any article.</span> See that cool-looking gadget in the bottom right corner of this window? <strong>That's ProveIt</strong>, and you can test drive it right here with any Wikipedia article. We've loaded the article on Georgia Tech by default, but if you want to try a different one, just type the article name into the box below and click "Load page."</p>
<label for="articleName">Article name:</label> 
<form id="demoForm">
<input id="articleName" size="35" value="Georgia Institute of Technology"/>
<input id="articleBtn" type="submit" value="Load page"/><br/>
</form>
<span>Article content:</span><br/>
<textarea rows="25" cols="115" style="width: 100%" id="wpTextbox1"></textarea><br/>
</div>
<?php include_once 'footer.php'; ?>