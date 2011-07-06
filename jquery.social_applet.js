(function($){
	/**
	 * jQuery script that manages the inclusion of different social networks widgets
	 */
  $.fn.social = function(options) {
		var settings = {
			selectors		:	{
				facebook		:	'#facebook',
				plusone			:	'#plusone',
				foursquare	:	'#foursquare',
				linkedin		:	'#linkedin',
				tripadvisor	:	'#tripadvisor',
				flickr			:	'#flickr',
				twitter			:	'#twitter',
				twitter_share		:	'#twitter_share',
				twitter_follow	:	'#twitter_follow',
				skype				:	'#skype'
			},
			/**
			 * google plusone options
			 */
			plusone			:	{
				lang				:	'it',
				href				:	false,
				size				:	'tall',
				count				:	'true',
				callback		:	false
			},
			/**
			 * facebook like options
			 */
			facebook		:	{
				lang				:	'it_IT',
				href				:	'http://www.facebook.com/TOP.Hotel.Park.Bologna',
				layout			:	'box_count',
				show_faces	:	'true',
				action			:	'recommend',
				color				:	'light',
				font				:	'',
				width				:	'450'
			},
			/**
			 * foursquare options
			 */
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
			/**
			 * tripadvisor options
			 */
			tripadvisor	:	{},
			/**
			 * twitter options
			 */
			twitter			:	{ //TODO verificare questi parametri sarebbe una buona idea
				count				:	'vertical',
				via					:	'',
				lang				:	'it',
				//text				:	'',
				href				:	'http://twitter.com/#!/HotelBolognaTHP',
				show_screen_name : 'false'
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
			digg				:	{},
			delicius		:	{},
			rss					:	{},
			youtube			:	{},
			vimeo				:	{}
		};
		
		if(options) $.extend(settings,options);
		
		var that = $(this);

		//include plusone.js from google asyncronly
		if(settings.plusone){
			(function(d, t) {
				var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
				g.async = 'true';
				g.src = 'https://apis.google.com/js/plusone.js';
				g.text = '{lang: \'it\'}';
				s.parentNode.insertBefore(g, s);
			})(document, 'script');
			
			//nice piece of code but not so much compatible
			/*$('head').append(
				$('<script/>').attr({
					'async'				:	'true',
					'src'					:	'https://apis.google.com/js/plusone.js',
					'text'				:	'{lang: \'it\'}'
				})	
			);*/
		}
		
		//include facebook js
		if(settings.facebook){
			//$('<script/>') doesn't work, idk why :(
			(function(d, t) {
				var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
				g.async = 'true';
				g.src = 'http://connect.facebook.net/'+settings.facebook.lang+'/all.js#xfbml=1';
				s.parentNode.insertBefore(g, s);
			})(document, 'script');
			
			$('body').prepend(
				$('<div/>').attr({
					'id'					:	'fb-root'
				})	
			);
		}
		
		//include linkedin js
		if(settings.linkedin){
			(function(d, t) {
				var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
				g.async = 'true';
				g.src = 'http://platform.linkedin.com/in.js';
				s.parentNode.insertBefore(g, s);
			})(document, 'script');
		}
		
		if(settings.twitter){
			(function(d, t) {
				var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
				g.async = 'true';
				g.src = 'http://platform.twitter.com/widgets.js';
				s.parentNode.insertBefore(g, s);
			})(document, 'script');
		}
		
		if(settings.skype){
			(function(d, t) {
				var g = d.createElement(t),
				s = d.getElementsByTagName(t)[0];
				g.async = 'true';
				g.src = "http://download.skype.com/share/skypebuttons/js/skypeCheck.js";
				s.parentNode.insertBefore(g, s);
			})(document, 'script');
		}
		
		return this.each(function(){
			var each_that = $(this);
			var plusone_div = each_that.find(settings.selectors.plusone);
			//todo this check for every widget
			if(typeof plusone_div.attr('data-href')!='undefined')
				settings.plusone.href = plusone_div.attr('data-href');
			if(typeof plusone_div.attr('data-size')!='undefined')
				settings.plusone.size = plusone_div.attr('size-size');
			if(typeof plusone_div.attr('data-count')!='undefined')
				settings.plusone.count = plusone_div.attr('size-count');
			if(typeof plusone_div.attr('data-callback')!='undefined')
				settings.plusone.callback = plusone_div.attr('size-callback');
			plusone_div.append(
				$('<g:plusone/>').attr({
					'size'				:	settings.plusone.size,
					'count'				:	settings.plusone.count,
					'href'				:	settings.plusone.href,
					'callback'		:	settings.plusone.callback
				})
			);
			each_that.find(settings.selectors.facebook).append(
				$('<fb:like/>').attr({
					'href'				:	settings.facebook.href,
					'send'				:	true,
					'layout'			:	settings.facebook.layout,
					'width'				:	settings.facebook.width,
					'show_faces'	:	settings.facebook.show_faces,
					'action'			:	settings.facebook.action,
					'colorscheme'	:	settings.facebook.color,
					'font'				:	settings.facebook.font
				})
			);
			each_that.find(settings.selectors.foursquare).append(
					$('<a/>').attr({
						'href'			:	'https://'+ 
							settings.foursquare.lang + 
						'.foursquare.com/remote_todo?tid=' + 
							settings.foursquare.tid + 
						'&color=' +
							settings.foursquare.color,
						'target'		:	'_blank'
					}).append($('<img/>').attr({
						'src'					:	settings.foursquare.img_src,
						'alt'					:	settings.foursquare.alt
					})
				)
			);
			each_that.find(settings.selectors.linkedin).append(
					$('<script/>').attr({
						'type'					:	'in/share',
						'data-url'			:	settings.linkedin.url,
						'data-counter'	:	settings.linkedin.counter
					})
			);
			each_that.find(settings.selectors.twitter).append(
				$('<a/>').attr({
					'href'					:	settings.twitter.href,
					'class'					:	'twitter-share-button',
					'data-count'		:	settings.twitter.count,
					'data-via'			:	settings.twitter.via,
					'data-lang'			:	settings.twitter.lang
				})
			).append(
				$('<a/>').attr({
					'href'					:	settings.twitter.href,
					'class'					:	'twitter-follow-button',
					'data-lang'			:	settings.twitter.lang,
					//'text'					:	settings.twitter.text,
					//http://dev.twitter.com/pages/follow_button <-- lol?
					'show_screen_name'	:	settings.twitter.show_screen_name
				})	
			);
			each_that.find(settings.selectors.twitter_follow).append(
				$('<a/>').attr({
					'href'					:	settings.twitter.href,
					'class'					:	'twitter-follow-button',
					'data-lang'			:	settings.twitter.lang,
					//'text'					:	settings.twitter.text,
					//http://dev.twitter.com/pages/follow_button <-- lol?
					'show_screen_name'	:	settings.twitter.show_screen_name
				})	
			);
			each_that.find(settings.selectors.twitter_share).append(
				$('<a/>').attr({
					'href'					:	settings.twitter.href,
					'class'					:	'twitter-share-button',
					'data-count'		:	settings.twitter.count,
					'data-via'			:	settings.twitter.via,
					'data-lang'			:	settings.twitter.lang
				})
			);
			each_that.find(settings.selectors.skype).append(
				$('<a/>').attr({
					'href'					:	'skype:'+settings.skype.name+'?'+settings.skype.action
				}).append(
					$('<img/>').attr({
						'src'					:	'http://mystatus.skype.com/smallclassic/'+settings.skype.name,
						'style'				:	'border:none;',
						'alt'					:	'skype status'
					})	
				)
			);

			
		});
	};  
})(jQuery); 
