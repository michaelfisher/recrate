	// Gallery Blog Slider //

// Teams Slider
jQuery(window).load(function() {	

	jQuery('.teams-slider[id^="owl-teams"]').each( function() { 	

		var $div = jQuery(this);
		var token = $div.data('token');

		var settingObj = window['dt_teams_' + token];	

		jQuery("#owl-teams-"+settingObj.id+"").owlCarousel({
			autoHeight : true,
			items : settingObj.items_per_row,
			autoPlay: false,
			navigation:true,
			slideSpeed : 1000
		});

	});
});