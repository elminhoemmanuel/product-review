<h1 align="center">Product Review App</h1>

<div align="center">
   A simple Product review page app.
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Notes about my key decisions](#notes-about-my-key-decisions)
- [Further improvements](#further-improvements)
  - [Built With](#built-with)
- [How To Run the application](#how-to-run-the-application)

<!-- OVERVIEW -->


## Notes about my key decisions
Some noteworthy information about the key decisions I took during this project are;

- I decided to be very modular in my approach to writing tests as required of me. Hence I ensured I tested all smaller components seperately so as to eliminate or reduce the need to test larger components where the smaller ones were used.
- I decided to store the comments on the user's local browser storage as opposed to sending the data to a server online to reduce the complexity of the product and focus on handling everything on the frontend. 

<!-- Improvements -->
## Further improvements 
Some further improvements which are still possible on this project include;

- Writing some more test cases even though I have been able to write quite a good number of unit tests already I would have loved to add integration tests and other improved tests.
- With more time I would have loved to  improve the styling and desgin of the app more than what it currently is.
- With more time I would want to add a more stricter validation library to handle validation of the input fields in the comment form in a more stricter way such as using Yup and react-hook-form or formik which I have used before.

<!-- Bult with -->
### Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vercel](https://vercel.com) for deployment
  
<!-- how to run the app -->
## How To Run the application


To clone and run this application locally, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/elminhoemmanuel/product-review.git

# Move into the product review folder
$ cd product-review

# open up your command line and then Install dependencies
$ npm install

# Run the app
$ npm run dev

# Run tests
$ npm run test
```