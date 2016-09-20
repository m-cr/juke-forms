'use strict';

juke.config(function($stateProvider){

	$stateProvider.state('playlist', {
		url: '/playlist',
		templateUrl: 'js/playlist/playlist.html',
		controller: 'PlaylistControl'
	});

});