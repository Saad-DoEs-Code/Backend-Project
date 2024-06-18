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

### Connecting Database

1. Set up Mongo DB Atlas and connect it with Mongo DB Compass using Connection String.
2. Inside .env, create MONGODB_URI variable and PORT variables. Pass each variable its value. Remember to remove the last slash in the connection string.
3. Set up the DB_NAME Variable inside constants.js. Since its not a system specific variable, we will not place it in the .env file.
4. Remember these rules for the Database:

    - To manage errors, wrap the code inside `try catch` or `promises`
    - Database is always in another continent. i.e. It will take some time to be saved and retreived. Therefore, try using `async await` for parallel distribution.
5. We will connect the Database in `index.js` using either of the following approaches:
  
    - <b>Fisrt Approach:</b> <br>
    i. Write the connection code in a seaparate file within a function. <br>
    ii. Call this function in `index.js`.
    - <b>Second Approach:</b> <br>
    i. Create an `index.js` file inside `src/db` folder. <br>
    ii. Write the connection code in this file into a single function. <br>
    iii. Import this file in `index.js` of `src` folder and call that function.<br>
    iv. Also configure `dotenv` while maintaining the code consistency and update the `package.json` file as required.

    
### Custom API Response and Error Handling
1. Create an Express App in `app.js`.
2. Since we have written the `connectDB` function using `async`, it would return a promise. Therefore, we will handle errors using `connectDB().then().catch()` methods.
      - Inside `.then()`, we will listen to the `app` while inside `.catch()`, we will handle/display the errors.
3. Install `cors` and `cookie-parser`. Configure both of them inside `app.js`. These are the two <b>Middlewares</b>, to help us with various things.
4. Configure the middlewares for various purposes inside `app.js`.
      - Configure JSON Data Response by limiting it using `express.json()`.
      - Configure URL Encoded Data Response by limiting it using `express.urlencoded()`.
      - Configure storage for the static assets (PDF, Images etc) using `express.static()`.

#### Middleware
5. Middleware are used to check data while managing `requests` and `response`. For example: if we are serving on an ecommerce website and the user places an order, we must ensure that the user is logged in. This duty will be done by a Middleware. We may also use multiple Middlewares, one after another.
      - For Example: First check if the user is Logged In and later checking if the user is Admin.
      - These multiple Middlewares are made/arranged in a sequence and uses `next` flag in `(err, req, res, next)` to let the next middleware know that the Task Has Been Done.

#### Utilities