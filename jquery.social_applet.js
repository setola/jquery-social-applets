(function($){
	/**
	 * stores the default settings for the plugin 
	 */
	var settings = {
		selectors		:	{
			facebook				:	'.facebook',
			facebook_box		:	'.facebook_box',//TODO
			plusone					:	'.plusone',
			foursquare			:	'.foursquare',
			linkedin				:	'.linkedin',
			tripadvisor			:	'.tripadvisor',
			flickr					:	'.flickr',
			twitter					:	'.twitter',
			twitter_share		:	'.twitter_share',
			twitter_follow	:	'.twitter_follow',
			skype						:	'.skype'
		},
		/**
		 * google plusone options
		 */
		plusone			:	false,
		/**
		 * facebook like options
		 */
		facebook		:	false,
		/**
		 * foursquare options
		 */
		foursquare	:	false,
		/**
		 * linkedin options
		 */
		linkedin		:	false,
		/**
		 * tripadvisor options
		 */
		tripadvisor	:	{},//TODO
		/**
		 * twitter options
		 */
		twitter			:	false,
		skype				:	false,
		/**
		 * flickr options
		 */
		flickr			:	{},//TODO
		/**
		 * bing option
		 */
		bing				:	{},//TODO
		digg				:	{},//TODO
		delicius		:	{},//TODO
		rss					:	{},//TODO
		youtube			:	{},//TODO
		vimeo				:	{}//TODO
	};
	
	//some usefull functions
	/**
	 * Adds the given namespace to the DOM
	 */
	var add_namespace = function(name,value){
		if(document.namespaces){
			document.namespaces.add(name, value);
		} else {
			$('html').attr(
				'xmlns:' + name,	
				value
			);
		}
	};
	
	/**
	 * Adds a javascript to the DOM
	 */
	var add_javascript = function(src, async, text){
		var g = document.createElement('script'),
		s = document.getElementsByTagName('script')[0];
		g.async = (async) ? 'true' : 'false';
		g.src = src;
		g.text = text;
		s.parentNode.insertBefore(g, s);
	};
	
	var methods = {
			init : function(options){
				methods.include_all.apply(this);
				return this.each(function(){
					methods.render_all.apply(this);
				});
			},
			
			/**
			 * This includes all the needed javascript libraries, if not yet loaded
			 */
			include_all : function(){
				if(settings.plusone && typeof(window.___jsl) === 'undefined')	{
					methods.include_plusone.apply(this);
				}
				
				if(settings.facebook && typeof(window.FB) === 'undefined')	{
					methods.include_facebook.apply(this);
				}
				
				if(settings.linkedin && typeof(window.IN) === 'undefined')	{
					methods.include_linkedin.apply(this);
				}
				
				if(settings.twitter && typeof(window.twttr) === 'undefined')	{
					methods.include_twitter.apply(this);
				}
				
				if(settings.skype && typeof(window.SkypeDetection) === 'undefined')		{
					methods.include_skype.apply(this);
				}
			},
			
			/**
			 * This includes the plusone javascript library from google asyncronly
			 */
			include_plusone : function(){
				add_javascript('https://apis.google.com/js/plusone.js', true, '{lang: \'it\'}');
			},
			
			/**
			 * This includes the javascript library needed for facebook like box
			 */
			include_facebook : function(){
				add_javascript('http://connect.facebook.net/'+settings.facebook.lang+'/all.js#xfbml=1', true);
				add_namespace('fb','http://www.facebook.com/2008/fbml');
				add_namespace('og','http://opengraphprotocol.org/schema/');
				$('body').prepend($('<div/>').attr('id', 'fb-root'));
			},
			
			/**
			 * This includes the javascript library for linkedin widget
			 */
			include_linkedin : function(){
				add_javascript('http://platform.linkedin.com/in.js', true);
			},
			
			/**
			 * This includes the javascript library for twitter
			 */
			include_twitter : function(){
				add_javascript('http://platform.twitter.com/widgets.js', true);
			},
			
			/**
			 * This includes the javascript library for skype
			 */
			include_skype : function(){
				add_javascript('http://download.skype.com/share/skypebuttons/js/skypeCheck.js', true);
			},
			
			/**
			 * This render a single plusone widget
			 */
			render_plusone : function(){
				var element = $(this);
				element.append(
					$('<div/>').attr({
						'class'						:	'g-plusone',
						'data-href'				:	(typeof element.attr('data-href')!=='undefined') 
																	? element.attr('data-href')
																	: settings.plusone.href,
						'data-size'				:	(typeof element.attr('data-size')!=='undefined')
																	? element.attr('data-size')
																	: settings.plusone.size,
						'data-count'			:	(typeof element.attr('data-count')!=='undefined')
																	? element.attr('data-count')
																	: settings.plusone.count,
						'data-callback'		:	(typeof element.attr('data-callback')!=='undefined')
																	? element.attr('data-callback')
																	: settings.plusone.callback
					})
				);
			},
			
			render_facebook_like : function(){
				var element = $(this);
				element.append(
					$('<fb:like/>').attr({
						'href'				:	(typeof element.attr('data-href')!=='undefined') 
															? element.attr('data-href')
															: settings.facebook.href,
						'send'				:	(typeof element.attr('data-send')!=='undefined') 
															? element.attr('data-send')
															: settings.facebook.send,
						'layout'			:	(typeof element.attr('data-layout')!=='undefined') 
															? element.attr('data-layout')
															: settings.facebook.layout,
						'width'				:	(typeof element.attr('data-width')!=='undefined') 
															? element.attr('data-width')
															: settings.facebook.width,
						'show_faces'	:	(typeof element.attr('data-show_faces')!=='undefined') 
															? element.attr('data-show_faces')
															: settings.facebook.show_faces,
						'action'			:	(typeof element.attr('data-action')!=='undefined') 
															? element.attr('data-action')
															: settings.facebook.action,
						'colorscheme'	:	(typeof element.attr('data-colorscheme')!=='undefined') 
															? element.attr('data-colorscheme')
															: settings.facebook.color,
						'font'				:	(typeof element.attr('data-font')!=='undefined') 
															? element.attr('data-font')
															: settings.facebook.font
					})
				);
			},
			
			render_foursquare : function(){
				var element = $(this);
				element.find(settings.selectors.foursquare).append(
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
			},
			
			render_linkedin : function(){
				var element = $(this);
				element.find(settings.selectors.linkedin).append(
						$('<script/>').attr({
							'type'					:	'in/share',
							'data-url'			:	settings.linkedin.url,
							'data-counter'	:	settings.linkedin.counter
						})
				);
			},
			
			render_twitter : function(){
				methods.render_twitter_share.apply(this);
				methods.render_twitter_follow.apply(this);
			},
			
			render_twitter_share : function(){
				var element = $(this);
				element.append(
						$('<a/>').attr({
							'class'							:	'twitter-share-button',
							'href'							:	'http://twitter.com/share',
							'data-url'					:	(typeof element.attr('data-url')!=='undefined') 
																		? element.attr('data-url')
																		: settings.twitter.url,
							'data-via'					:	(typeof element.attr('data-via')!=='undefined') 
																		? element.attr('data-via')
																		: settings.twitter.via,
							'data-text'					:	(typeof element.attr('data-text')!=='undefined') 
																		? element.attr('data-text')
																		: settings.twitter.text,
							'data-related'			:	(typeof element.attr('data-related')!=='undefined') 
																		? element.attr('data-related')
																		: settings.twitter.related,
							'data-count'				:	(typeof element.attr('data-count')!=='undefined') 
																		? element.attr('data-count')
																		: settings.twitter.count,
							'data-lang'					:	(typeof element.attr('data-lang')!=='undefined') 
																		? element.attr('data-lang')
																		: settings.twitter.lang,
							'data-counturl'			:	(typeof element.attr('data-counturl')!=='undefined') 
																		? element.attr('data-counturl')
																		: settings.twitter.counturl
						}
					)
				);
			},
			
			render_twitter_follow : function(){
				var element = $(this);
				element.append(
						$('<a/>').attr({
							'class'							:	'twitter-follow-button',
							'href'							:	(typeof element.attr('data-user')!=='undefined') 
																		? 'https://twitter.com/'+element.attr('data-user')
																		: 'https://twitter.com/'+settings.twitter.user,
							'data-show-count'		:	(typeof element.attr('data-show-count')!=='undefined') 
																		? element.attr('data-show-count')
																		: settings.twitter.showcount,
							'data-button'				:	(typeof element.attr('data-button')!=='undefined') 
																		? element.attr('data-button')
																		: settings.twitter.button,
							'data-text-color'		:	(typeof element.attr('data-text-color')!=='undefined') 
																		? element.attr('data-text-color')
																		: settings.twitter.textcolor,
							'data-link-color'		:	(typeof element.attr('data-link-color')!=='undefined') 
																		? element.attr('data-link-color')
																		: settings.twitter.linkcolor,
							'data-lang'					:	(typeof element.attr('data-lang')!=='undefined') 
																		? element.attr('data-lang')
																		: settings.twitter.lang,
							'data-width'				:	(typeof element.attr('data-width')!=='undefined') 
																		? element.attr('data-width')
																		: settings.twitter.width,
							'data-align'				:	(typeof element.attr('data-align')!=='undefined') 
																		? element.attr('data-align')
																		: settings.twitter.align
							}
						)
				);
			},
			//TODO: http://twitter.com/about/resources/widgets
			//TODO: http://developers.facebook.com/docs/plugins/
			
			render_skype : function(){
				var element = $(this);
				element.append(
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
			},
			
			render_all : function(){
				var element = $(this);

				element.find(settings.selectors.plusone).each(function(){
					methods.render_plusone.apply(this);
				});
				
				element.find(settings.selectors.facebook).each(function(){
					methods.render_facebook_like.apply(this);
				});
				
				element.find(settings.selectors.foursquare).each(function(){
					methods.render_foursquare.apply(this);
				});
				
				element.find(settings.selectors.linkedin).each(function(){
					methods.render_linkedin.apply(this);
				});
				
				element.find(settings.selectors.twitter).each(function(){
					methods.render_twitter.apply(this);
				});
				
				element.find(settings.selectors.twitter_share).each(function(){
					methods.render_twitter_share.apply(this);
				});
				
				element.find(settings.selectors.twitter_follow).each(function(){
					methods.render_twitter_follow.apply(this);
				});
				
				element.find(settings.selectors.skype).each(function(){
					methods.render_skype.apply(this);
				});
			}
	};


	/**
	 * jQuery script that manages the inclusion of different social networks widgets
	 */
	$.fn.social = function(method) {
    // Method calling logic
    if(methods[method]){
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }else if(typeof method==='object' || !method){
  		if(method) $.extend(true, settings, method);
      return methods.init.apply(this, arguments);
    }else{
      $.error('Method '+method+' does not exist on jQuery.social');
    }  
			
	};  
})(jQuery); 