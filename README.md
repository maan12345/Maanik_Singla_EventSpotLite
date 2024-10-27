# Maanik_Singla_EventSpotLite
this is my project made with react and it show various event
I have used React along with js to make project
In this at first i have fetch data from internet and save in a local file Data.js
Then i have set up Routers in my App.js
Then i have wrapped my App js in my UserContext
Then i have made a file named EventList in which i have imported the data from the Data.js then with the help of map function i have made multiple EventCard
Now we have made multiple EventCard which will be shown on route '/event'
but before login we cannot enter the event route
so firstly we have to login and we have to pass the data,the data is not getting saved at a place because i have not linked it to the backend that is why i have not made the sign up page
so we can enter the random data and then we can enter the event page
now we can select any event and by hovering over it we get info about genre
on clicking any event a pop up like card came on the screen which have some extra info
now on clicking close the popup car disappear
now on clicking about us we get a page showing that what out website is about
now we have option to logout also on clicking it we will move to the login page
our route are protected so we cannot go to event page without login
