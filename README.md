8/6 	
		

		...I tend to use this README to help me troubleshoot. It's 
		a version of the rubber ducky method, except I won't be 
		talking to myself outloud. Also, figuring that some of my
		friends might find this repo, I'll detail each part of it;
		so you can follow along with the code. 


		So I shall be addressing this as if I'm talking to you. 

		Yes. 

		You. 

		Lets' continue. 


		Ok so, the angular app is coming along. I had to
		use Yeoman for a scaffolding. For some reason,
		they never bother updating their tutorials since 
		a lot of the controller functions weren't working. 
		After checking into the problem, I find that the 
		version of angular that the tutorial uses and the 
		one it loads, are different. 


		My next problem is a bit weird. Currently, 
		the angular is functioning as a REST app. 
		The service "konStores" retrieves json that 
		holds all the data on the stores; address, names,
		phone numbers, you get the idea. It stores 
		it in a variable called storeId.

		From there, the controller "locdetailCtrl" uses that service
		to retrieve the data associated with that storeId. The view "store-details.html", 
		uses that controller to find that data from the url params to display that info. 

		The data sends but only has a whole json object... So using

				{{store.name}} 

		Won't show anything.... BUT!

				{{store}}



8/7 - 

		So searching on reddit's /r/angularjs and talking 
		to Chris, brough up an interesting point. Since 
		the file is still loading and it's coming in as 
		an array. I can simply put a param in there and 
		search for the index. 

		Now my main problem is that the app doesn't 
		seem to read the params from the link. 

		So if I do {{store[ENTER URL PARAMS]}} 
		I should get the desired object. Nothing 
		comes out though, so something isn't reading 
		the params. 

		{{store[0]}} works though. 


8/6 part 2 - electric boogaloo

		Chris, along with some people over on 
		reddit's /r/angularjs brought up a good 
		point to me. 

		The json is passing as an array, so I can 
		still access the objects inside of it through
		an index. Now I have to make a filter that 
		checks for that id tag and returns the proper 
		object within the json.

		What's weird is that I followed the same format 
		as the official angular tutorial. 
		I should re check my steps. 



8/9 - 

		
		Sup.

		...

		How you been? 

		...

		Awesome. 

		...I gotta stop playing Earthbound.

		Alright, so new/same stuff. It seems that at first, the $scope.
		whichScope kept coming up undefined. I've added the whichStore
		outside of the http.get to make it a bit more of a global 
		variable FOR THAT FUNCTION. 

		It does output the proper array index, oh yeah more 
		about that later, into the console. So, I'm not 
		sure what's the problem. It's probably the way I'm 
		calling it into the {{ }} (<-- completely forgot what
		 that was called again).  

		About the array index, since the json file was being called,
		 and I was able to reference any object within that json array 
		through the index; I've put a .indexOf() to catch that 
		index int. That's part of the whole $scope.whichStore var. 


8/10 - 

		Alright! Awesome! 

		I fixed the routing issue. 

		Making the filter, I was able to now use the id tag in
		the json file to call the info that I need. The way I did
		it was by making a scope variable called storeId in the 
		locdetail.js file. 

		In this storeId, it gets the value of the $routeParams.storeId.
		Back in the loc.html, you can see that the a href tag, that 
		there is an expression (It's these things {{ }} ). When the
		$http.get activates, it searches the directory for the json file;
		when successful, it filters the file. The "entry" parameter
		is an empty variable for the json array objects. The filter
		won't stop until it finds the object containing the EXACT 
		(indicated with the triple equal signs === ). Once it does,
		it returns as an array of objects except that the found object
		will be the first item on the index or index[0]. That's what 
		the [0] at the end of it is for. 

		That all carries over to the store-details.html, which now 
		needs to be styled. 

		Btw, that cat has been giving me the badass look the whole time.


8/14 -

		Wow, okay, where to start.

		First, hola. It's been a while. 

		Been busy with work and working on this,
		and I've put a lot of work on this.
		Instead of my usual winging it, I've made
		mockups on GIMP, which is surprisingly 
		easier to use than photoshop...

		From there, I made mockups of the main
		html, and the locations.

		The locations menu, I took inspiration
		from GTA5, on their multiplayer
		mission vote menu. 

		Most of the desktop version is done,
		still gotta fix up the location profile
		page, add images, and work with the
		instagram API which I've still haven't
		checked out... 

9/2 - 

		So I put in more work, the menu came out
		looking good. Still needs some work but
		all the items that I needed to put in
		is in there. 

		Now I gotta work on the store page,
		along with getting new pictures and 
		using the instagram api. 



11/16 - 

		Annnd now this gets restarted. 

		Got hired as their web dev, going to develop this
		the best I can. 

		Luckily all it needs a basic style change, and make it mobile.

		I was able to salvage a lot of stuff so it didn't hinder my timeline for this. 

		Changed the whole layout
		Added more responsive classes (Must keep watch on bootstrap updates.)
		Added mobile version of VIEWS/MAIN.HTML (With responsive classes)

		Have to do:
		Must fix navbar. (It's not being responsive.)
		Do menu. (Up to debate with siteowners.)
		Redo the whole store locations and details menu. (With responsive.)


11/20 - 


		
		So much work...

		Made it mobile on certain pages. 

		Right now it's colorless/neutral colors (Colours for you foriegners).

		So what's my current objectives? 

		- Update the items database with the description info (...Fuck)

		- Get the color scheme from Per/Ronnie/I don't know who else.

		- Fix the locations page (Using a modified version of the display that I 
									have for the Menu and What's Brewin' content. )



11/28 - 


		Made a lot of progress in the past 2 days. 

		Done - 

			Make About Us Page 
				-Set up routing for the different about us. (Store, Owners, Baristas)
				-Finished up Stores and Owners pages
				-Added Image carousel.

			Changed Color Scheme

			Readjusted Nav Menu for better centering 

			Took out the box blur shadow from the Locations popup blurb. (Might take out blurb all together).


		Still needs to be done

			MAKE THE BACKEND FOR THE EMAIL!!!!!!!!!!!!

			Make a better logo... (The files they gave me are either corrupt or it won't work aestestically).

			Get the gallery up. (Be Ready for social media)

			Add the added descriptions on to the menu json. 

			Pick out better Fonts. 


		So far it looks a lot better than it did before. 