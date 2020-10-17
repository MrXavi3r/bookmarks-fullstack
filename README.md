This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### USER STORIES 
My Bookmarks allows users to pin their favorite website to the app by entering the relevant site information via a form after clicking the addNew button 

Users add the title, a url, a rating(1-5) that will be converted to stars, and a brief description
Form input: 
"title"('a string of at least 3 characters'), 
"url"(htttp or https protocol), 
"rating"(a number 1-5), 
"description"(a string)

On load My Bookmarks will show previously saved bookmarks and the necessary buttons to add new ones. 

Click on the name of a saved bookmark to visit the site attributed to it via a new tab. 

Users may also filter through their bookmarks via the 'filter-by' button to display ratings at or above a desired star rating.

Users may expand a saved bookmark by clicking the carat-down button.
On expand, to un-expand, please click the cancel button.
On expand, to delete a bookmark, click the trash can button

Update bookmarks by first clicking the carat down button to edit the text and rating fields, then click green "update" button.
