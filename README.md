GL.GamingRap.App
================

## How to Set Up the Local Dev Environment
To get started, install all the required software first and then follow the instructions to set up each software step-by-step.

####Required Software
* [Git Client](https://git-scm.com/downloads)
* [Node.js](http://nodejs.org/)

####Cloning the GamingRap Repository

1. Open **Git Bash** or preferred git utility.
2. Clone the GamingRap repo from GitHub in your local machine.
	`git clone https://github.com/rwhat357/GL.GamingRap.App.git`


####How to Set Up Node.js

1. Open **Node.js Command Prompt**.
2. Navigate inside the **GL.GamingRap.App** folder (i.e. `cd C:\Users\fwhatley\Desktop\GL.GamingRap.App`)
3. Run the commands below in order. 
	* `npm install -g grunt-cli` which installs npm command line interface
	* `npm install` which will bring in all the dependencies 
	* `grunt dev` which will
		* process **.styl** files down to the site.css file required to run the site 
        * watch your files and provide livereload
		* run unit tests with karma
		* kick off a local web server [http://localhost:3000](http://localhost:3000)
