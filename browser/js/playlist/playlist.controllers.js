'use strict';

juke.controller('PlaylistControl', function($scope, $rootScope, PlaylistFactory){
	
	// $rootScope.playlists = PlaylistFactory.fetchAll();

	$scope.create = function(){
		var newList = {
			name: $scope.playlistName
		};
		return PlaylistFactory.create(newList)
		.then(function(newListCreated){
			console.log(newListCreated);
		});
	};

});