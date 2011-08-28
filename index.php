<script src='jquery-1.6.2.js'></script>
<script src='jquery.social_applet.js'></script>
<script type="text/javascript">
	var maui_runtime = { theme_url : ''};
	$(document).ready(function(){
		$('.social').social({
			/**
			 * google plusone options
			 */
			plusone			:	{
				lang				:	'it',
				href				:	'http://www.androidiani.com/news/androidiani-desfo-il-raduno-ufficiale-della-comunita-a-jesolo-il-2-settembre-64141',
				size				:	'tall',
				count				:	'true',
				callback		:	false
			},
			/**
			 * facebook like options
			 */
			facebook		:	{
				lang				:	'it_IT',
				href				:	'http://www.androidiani.com/news/androidiani-desfo-il-raduno-ufficiale-della-comunita-a-jesolo-il-2-settembre-64141',
				layout			:	'box_count',
				show_faces	:	'true',
				action			:	'like',
				color				:	'light',
				font				:	'',
				wclassth		:	'450'
			},
			twitter			: {
				lang				:	'it',
				url					:	'http://www.androidiani.com/news/ifa-2011-samsung-presentera-il-galaxy-s2-lte-65187',
				via					:	'setoloso',
				text				:	'',
				related			:	'',
				count				:	'vertical',
				counturl		:	'',
				user 				: 'androidiani'
			},
			foursquare	:	{
				tid					:	'4e020f89315175a7f3fa726c',
				img_src			:	maui_runtime.theme_url+'/images/foursquare.png',
				lang				:	'it',
				alt					:	'add to my foursquare'
			},
			/**
			 * linkedin options
			 */
			linkedin		:	{
				counter			:	'top',
				url					:	'http://www.linkedin.com/company/2251407',
				color				:	'light'
			},
			skype				:	{
				name				:	'top.hotel.park.ufficio.booking',
				action			:	'call'// call add chat userinfo voicemail sendfile
			},
			/**
			 * flickr options
			 */
			flickr			:	{},
			/**
			 * bing option
			 */
			bing				:	{},
			tripadvisor	:	{},
			digg				:	{},
			delicius		:	{},
			rss					:	{},
			youtube			:	{},
			vimeo				:	{}
		});
	});
</script>
<style>
	.social{margin:10px;border:1px solclass red;}
	.social div{margin:10px;border:1px solclass green;}
</style>

<h2>Defaults</h2>
<div class='social'>
	<div class='facebook'></div>
	<div class='plusone'></div>
</div>

<h2>Customs</h2>
<div class='social'>
	<div 
			class='plusone' 
			data-href='http://www.androidiani.com/news/ifa-2011-samsung-presentera-il-galaxy-s2-lte-65187'
			data-size='small'
			data-count='true'
			data-callback=''
	></div>
	<div 
			class='facebook' 
			data-href='http://www.androidiani.com/news/ifa-2011-samsung-presentera-il-galaxy-s2-lte-65187'
			data-send='true'
			data-layout='standard'
			data-width='600'
			data-show_faces='true'
			data-action='recommend'
			data-colorscheme='dark'
			data-font='verdana'
	></div>
</div>
<?php /** ?>
<h2>Multiples</h2>
<div class='social'>
	<div class='facebook'></div>
	<div class='plusone'></div>
	<div class='facebook'></div>
	<div 
			class='plusone' 
			data-href='http://www.androidiani.com/news/ifa-2011-samsung-presentera-il-galaxy-s2-lte-65187'
			data-size='small'
			data-count='true'
			data-callback=''
	></div>
	<div class='plusone'></div>
	<div class='facebook'></div>
	<div class='plusone'></div>
</div>
<?php /**/ ?>

<h2>All Widgets</h2>
<div class='social's>
	<div class='facebook'></div>
	<div class='plusone'></div>
	<div class='twitter'></div>
	<div class='foursquare'></div>
	<div class='linkedin'></div>
	<div class='skype'></div>
	<div class='youtube'></div>

</div>