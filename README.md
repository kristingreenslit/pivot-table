### Overview

The purpose of this challenge was to create a mockup of office supply sales data in a pivot table format. Use of the [Create React App](https://github.com/facebook/create-react-app) was a requirement and no external libraries were permitted.

### Installation

1.  Check that Node and NPM are installed. Run `node -v` and then `npm -v` from the command line (Windows) or Terminal app (Mac). If a version number does not print to the console, follow [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac) or [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows) installation instructions.

2.  Open the ZIP file, install dependencies, then navigate to the project's root directory to start the development server (from the command line or Terminal app). Commands are as follows:

  ```
    > cd pivot-table
    > npm install
    > npm start
  ```

3.  Visit http://localhost:3000 to view the app in your browser of choice. This app was optimized for Chrome, Safari and Firefox only. Note: Running `npm start` and entering the keyboard shortcut `CTRL + C` from the project's root directory will start and stop the server.

### Architecture

Major components are outlined with different border colors in the image below. Each state (Delaware, Maine, etc.) is an object and was rendered as an individual column within its component.

<p align='center'>
  <img src='./public/components.png' width='750' height='500' />
</p>

### Approach

Given the code challenge was a non-production ready proof of concept, the following simplifications were made:

1. The sample data set contained too much data for one API call to populate the entire table in a production scenario. In the absence of a controlled flow of data, or a middleware/back end solution that could process some of the data before sending it to the front end, a smaller sample set was created based on the original data set (about 15,000 lines vs. 113,000 lines).
2. The data needed to be refactored to create easier groupings for rendering data by geographical state in the browser. Select states were chosen and data was manually regrouped.

Additional considerations if the app was intended for production:

1. Optimize page layout for both desktop and mobile browsers
2. Better align code with [W3C accessibility standards](https://www.w3.org/standards/webdesign/accessibility)
3. Follow company branding guidelines regarding use of colors, fonts, logos, etc.
4. Partner with DevOps and/or security specialists to pinpoint any security issues or vulnerabilities (such as restricting access to content based on a user's permission level, or by country in which the data is accessed, etc.)

### Next steps
1. Create a menu of controls in the UI to filter and manipulate data (similar to a pivot table menu in Excel)
2. Incorporate Redux to control the flow of data when filter selection changes are prompted by the user
3. Refactor code for scalability
