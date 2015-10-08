Freighter
================

[Development Process](/DevProcess.md) 



## How to Set Up the Local Dev Environment
To get started, install all the required software first and then follow the instructions to set up each software step-by-step. If you have any problems during the set up, refer to the [Common Set Up Problems & Solutions](####Common) section towards the end of the document.

####Required Software
* [Git Client](https://git-scm.com/downloads)
* [Node.js](http://nodejs.org/)
* Visual Studio 2013
* [IIS Manager](https://www.microsoft.com/en-us/download/details.aspx?id=2299)

####Cloning the Freighter Repository

1. Open **Git Bash** or preferred git utility.
2. Clone the Freighter repo from GitHub in your local machine.
	`git clone https://github.com/FrontlineTechnologies/Freighter.git`


####How to Set Up Node.js

1. Open **Node.js Command Prompt**.
2. Navigate inside the **app** folder (i.e. `cd C:\Users\fwhatley\Desktop\Freighter\Freighter.App\app`)
3. Run the commands below in order. 
	* `npm install -g grunt-cli`
	* `npm install` which will bring in all the dependencies 
	* `grunt server` which will
		* process **.styl** files down to the site.css file required to run the site 
        * watch your files and provide livereload
		* run unit tests with karma
		* kick off a local web server [http://localhost:3000](http://localhost:3000)