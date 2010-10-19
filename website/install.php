<?php

$page = 'Install';

include_once 'header.php';

?>
			<!-- Main Content Table -->

				<div id="leadInPic">
					<img src="img/install.jpg" alt="Install" height="167" width="940" />
				</div>

				<table id="mainTable">
					<tr>
						<td id="mainContent">

							<div id="mainPic" class="install">
								<h1>Lock and Load</h1>
							</div><!-- end #mainPic -->
							<div id="mainBody"> 
							
								<p>Installing ProveIt is a piece of cake. Just follow these simple instructions:</p>

								<ol>								
									<li>Log in to Wikipedia. Currently, you must have a Wikipedia account to use ProveIt.</li>
									<li>Go to <a href="http://en.wikipedia.org/w/index.php?title=Special:MyPage/skin.js&action=edit">Special:MyPage/skin.js&action=edit</a>.</li>
									<li>Copy and paste this line of code:
									 <code>importScript('User:ProveIt GT/ProveIt.js');</code>
									 </li>
									<li>Save. You may have to <a href="http://en.wikipedia.org/wiki/Wikipedia:Bypass_your_cache">bypass your cache</a> to see the changes.</li>
								</ol>

								<p>That's it! You can start using ProveIt immediately. Just go to any Wikipedia article and click the Edit tab.</p>

   
							</div><!-- end #mainBody -->
						</td>
						<td id="sideTableofContents">
							<h2> Features </h2>
							
							<h3> Open-Source</h3>
							<ul>
								<li><a href="#">Get ProveIt Now for Free </a></li>
								<li><a href="#">Contribute and ImproveIt</a></li>
							</ul>
							

					  </td>
					</tr>
				</table> 

<?php include_once 'footer.php'; ?>