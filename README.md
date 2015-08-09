8/6 	

		Ok so, the angular app is coming along. I had to use Yeoman for a scaffolding. For some reason, they never bother updating their tutorials since a lot of the controller functions weren't working. After checking into the problem, I find that the version of angular that the tutorial uses and the one it loads, are different. 


		My next problem is a bit weird. Currently, the angular is functioning as a REST app. The service "konStores" retrieves 
		json that holds all the data on the stores; address, names, 
		phone numbers, you get the idea. It stores it in a variable called storeId.

		From there, the controller "locdetailCtrl" uses that service
		to retrieve the data associated with that storeId. The view "store-details.html", uses that controller to find that data from the url params to display that info. 

		The data sends but only has a whole json object... So using

				{{store.name}} 

		Won't show anything.... BUT!

				{{store}}



8/7 - 

		So searching on reddit's /r/angularjs and talking to Chris, brough up an interesting point. Since the file is still loading and it's coming in as an array. I can simply put a param in there and search for the index. 

		Now my main problem is that the app doesn't seem to read the params from the link. 

		So if I do {{store[ENTER URL PARAMS]}} I should get the desired object. Nothing comes out though, so something isn't reading the params. 

		{{store[0]}} works though. 


8/6 part 2 - electric boogaloo

		Chris, along with some people over on reddit's /r/angularjs brought up a good point to me. 

		The json is passing as an array, so I can still access the objects inside of it through an index. Now I have to make a filter that checks for that id tag and returns the proper object within the json.

		What's weird is that I followed the same format as the official 
		angular tutorial. I should re check my steps. 



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
