# Backend Course - Chai Aur Code (Youtube)

This is my backend course project in which I will make a video platform app's backend.

[Model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## Lecture Notes

<li> <b> Saving Files and Images:</b> <br>
In order to save files or images, we will use a third party supported application (AWS, Azure, Cloudnary etc). <br> Initially, the images will be uploaded to our backend server (in a temp folder, to hold temporary files) and later, on the 3rd party app, so that if any case of "Connection Loss" occurs, the user have had uploaded the files or images. <br>
We can also upload the files directly to the 3rd party service. </li>
<br>
<li> <b>Keeping and Ignirong Files:</b><br><br>
<ul><b>Keeping Files: </b>Git only keeps the track record of the files and not the folders. So, keeping this in view, it is understood that the "Temp" folder will remain untracked but we need it during the whole developmental period. For this purpose, we use <b>.gitkeep</b> file, that tracks the empty folder.
<br><br>
<b>Ignoring Files: </b> We can ignore the files that we don't want to track by using <b>.gitignore</b>. There are also git ignore generators that help us in writing the code for the files that needs to be ignored. </ul> </li>


## Steps 
### Setting Project Up

1. Create a new project and initialize git.
2. Add public and temp folder to manage public data (images, videos, pdf etc).
3. Add .gitkeep file to keep the temp folder and .gitignore to ignore the node_modules folder. 
4. Add src folder and create app.js, index.js and constants.js files.
5. Change the project type to "module" and install nodemon to keep server running. Also make changes to the package.json file as follows: <br>
`"scripts": {
    "dev":"nodemon src/index.js"
  }, `
6. Add the following folders inside src folder:
    - `controllers`: contains data logic and functionality
    - `db`: contains the script for connection to db
    - `routes`: contains URL routes of the application
    - `utils`: contains utilities like video/file uploading etc.
    - `models`: contains the models of data
    - `middlewares`: contains the scripts that run in between the whole functionality
7. Install Prettier using NPM: as we are working in a team, it happens sometimes that one developer has added semicolons and the other has not. This creates conflicts and needs to be resolved. For this purpose, we will install prettier and add a few files mentioned below:
    - `.prettierrc`: contains the configuration of prettier
    - `.prettierignore`: contains the files that need to be ignored by prettier




