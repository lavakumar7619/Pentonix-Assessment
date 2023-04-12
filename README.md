# Pentonix-Assessment
Pentonix Front End Web Developer Assignment

Additional services (Optional)


❖ Store the jwt token in session storage and in application memory.

snippet code {implemeted in pages to}

sessionStorage.setItem("jwt", token)

localStorage.setItem("jwt", token)


❖ Report which is better in terms of application security and vulnerability.

Both storage has its advantages and disadvantages 

1.If data stored in session storage it will be present until the window of current site is 
open (short-term caching) but in local storgae the data is stored in computer will be avilable permanentely until 
the devloper impement code for clearing local storage

2.local storage data can be accesed from other sites too but in session storage its not possible

3.if data to be stored permanetly local storage is better but to store sensitive
 information session storgae is prefered or we can use cookies

=> Session storage is slightly more secure then application memory


Login page screenshot 


<img src="https://github.com/lavakumar7619/Pentonix-Assessment/blob/main/images/login.png">


Dashboard page screenshot 


<img src="https://github.com/lavakumar7619/Pentonix-Assessment/blob/main/images/dashboard.png">

Filters applied page screenshot


<img src="https://github.com/lavakumar7619/Pentonix-Assessment/blob/main/images/filter.png">
