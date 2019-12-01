### Overview

The purpose of this challenge was to create a mockup of office supply sales data in a pivot table format using the [Create React App](https://github.com/facebook/create-react-app).

### Installation

1.  Check that Node and NPM are installed. Run `node -v` and then `npm -v` from the command line (Windows) or Terminal app (Mac). If a version number does not print to the console, follow [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac) or [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows) installation instructions.

2.  Clone the repository, install dependencies, then start the development server (from the command line or Terminal app). For those not familiar with Git, download the ZIP file (instead of cloning the repository) and skip the first line in the instruction block below:

  ```
    > git clone git@github.com:kristingreenslit/pivot-table.git
    > cd pivot-table
    > npm install
    > npm start
  ```

3.  Visit http://localhost:3000 to view the app in your browser of choice. Note: Running `npm start` and entering the keyboard shortcut `CTRL + C` from the project's root directory will start and stop the server.

### Approach

Given the code challenge was a non-production ready proof of concept, and exists solely for the purpose of demonstrating a web developer's knowledge and capability to render large sets of data in reusable components, the following assumptions were made about the deliverable:

1. The sample data set contained too much data for one API call to populate the entire table in a production scenario, and the data needed to be refactored to create easier groupings for rendering data by geographical state in the browser. In the absence of a database or back end that could process some of the data before an API call was made, a smaller sample set was created based on the original data set and was regrouped to eliminate the problem.
2. Browser support includes Chrome, Safari and Firefox (but not Internet Explorer or Edge)
3. The mockup is optimized for desktop vs. mobile browsers
4. There was not a consideration in the code to align with W3C accessibility standards other than what is included natively in the Create React App
5. There are no company branding guidelines to follow regarding use of colors, fonts, logos, etc.
6. The mock data was provided didn't present security issues (such as restricting access to content based on a user's permission level or by country in which the code reviewer accessed the data)

### Architecture


### Next steps
1. Create a menu of controls in the UI to filter and manipulate data (similar to a pivot table menu in Excel)
2. Incorporate Redux to control the flow of data when the user prompts different choices in the filter menu
