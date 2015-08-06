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

		Gives out the whole json file. 
