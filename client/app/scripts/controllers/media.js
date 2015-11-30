'use strict';

/**
 * @ngdoc function
 * @name tempGitApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the tempGitApp
 */
angular.module('tempGitApp')
  .controller('MediaCtrl', function ($scope,$http,instagram) {
   
  		$scope.gallery = [
  		{
  			image:'images/galleryImages/gallery/kondiPhoto.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto2.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto3.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto4.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto5.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto6.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto7.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto8.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto9.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto10.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto11.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto12.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto13.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto14.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto15.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto16.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto17.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto18.jpg'
  		},
  		{
  			image:'images/galleryImages/gallery/kondiPhoto19.jpg'
  		}


  		];

  		$scope.data = {};
  		$scope.pics = [];

  		instagram.fetchPhotos(function(data){
  			$scope.pics = data;
  		});


  });
