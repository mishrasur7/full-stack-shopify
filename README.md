# Fullstack-Typescript-Project

## API deployment home url
https://vast-wave-18172.herokuapp.com/

## API Project Structure
<pre>

├── Procfile
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── sort-arrow-sprite.png
│   │   ├── sorter.js
│   │   ├── src
│   │   │   ├── app.ts.html
│   │   │   ├── controllers
│   │   │   │   ├── index.html
│   │   │   │   └── movie.ts.html
│   │   │   ├── helpers
│   │   │   │   ├── apiError.ts.html
│   │   │   │   └── index.html
│   │   │   ├── index.html
│   │   │   ├── middlewares
│   │   │   │   ├── apiContentType.ts.html
│   │   │   │   ├── apiErrorHandler.ts.html
│   │   │   │   └── index.html
│   │   │   ├── models
│   │   │   │   ├── Movie.ts.html
│   │   │   │   ├── Product.ts.html
│   │   │   │   ├── User.ts.html
│   │   │   │   └── index.html
│   │   │   ├── routers
│   │   │   │   ├── index.html
│   │   │   │   └── movie.ts.html
│   │   │   ├── services
│   │   │   │   ├── index.html
│   │   │   │   ├── movie.ts.html
│   │   │   │   └── productService.ts.html
│   │   │   └── util
│   │   │       ├── index.html
│   │   │       └── logger.ts.html
│   │   └── test
│   │       ├── db-helper.ts.html
│   │       ├── fixutes
│   │       │   ├── index.html
│   │       │   ├── products.ts.html
│   │       │   └── users.ts.html
│   │       └── index.html
│   └── lcov.info
├── debug.log
├── dist
│   ├── src
│   │   ├── app.js
│   │   ├── app.js.map
│   │   ├── config
│   │   │   ├── passport.js
│   │   │   └── passport.js.map
│   │   ├── controllers
│   │   │   ├── addressController.js
│   │   │   ├── addressController.js.map
│   │   │   ├── cartController.js
│   │   │   ├── cartController.js.map
│   │   │   ├── categoryController.js
│   │   │   ├── categoryController.js.map
│   │   │   ├── movie.js
│   │   │   ├── movie.js.map
│   │   │   ├── productController.js
│   │   │   ├── productController.js.map
│   │   │   ├── productReviewController.js
│   │   │   ├── productReviewController.js.map
│   │   │   ├── userController.js
│   │   │   ├── userController.js.map
│   │   │   ├── userReviewController.js
│   │   │   └── userReviewController.js.map
│   │   ├── helpers
│   │   │   ├── apiError.js
│   │   │   └── apiError.js.map
│   │   ├── middlewares
│   │   │   ├── apiContentType.js
│   │   │   ├── apiContentType.js.map
│   │   │   ├── apiErrorHandler.js
│   │   │   └── apiErrorHandler.js.map
│   │   ├── models
│   │   │   ├── Address.js
│   │   │   ├── Address.js.map
│   │   │   ├── Cart.js
│   │   │   ├── Cart.js.map
│   │   │   ├── Category.js
│   │   │   ├── Category.js.map
│   │   │   ├── Image.js
│   │   │   ├── Image.js.map
│   │   │   ├── Movie.js
│   │   │   ├── Movie.js.map
│   │   │   ├── Product.js
│   │   │   ├── Product.js.map
│   │   │   ├── ProductReview.js
│   │   │   ├── ProductReview.js.map
│   │   │   ├── User.js
│   │   │   ├── User.js.map
│   │   │   ├── UserReview.js
│   │   │   └── UserReview.js.map
│   │   ├── routers
│   │   │   ├── addressRoute.js
│   │   │   ├── addressRoute.js.map
│   │   │   ├── cartRoute.js
│   │   │   ├── cartRoute.js.map
│   │   │   ├── categoryRoute.js
│   │   │   ├── categoryRoute.js.map
│   │   │   ├── movie.js
│   │   │   ├── movie.js.map
│   │   │   ├── productReviewRoute.js
│   │   │   ├── productReviewRoute.js.map
│   │   │   ├── productRoute.js
│   │   │   ├── productRoute.js.map
│   │   │   ├── userReviewRoute.js
│   │   │   ├── userReviewRoute.js.map
│   │   │   ├── userRoute.js
│   │   │   └── userRoute.js.map
│   │   ├── server.js
│   │   ├── server.js.map
│   │   ├── services
│   │   │   ├── addressService.js
│   │   │   ├── addressService.js.map
│   │   │   ├── cartService.js
│   │   │   ├── cartService.js.map
│   │   │   ├── categoryServices.js
│   │   │   ├── categoryServices.js.map
│   │   │   ├── imageServices.js
│   │   │   ├── imageServices.js.map
│   │   │   ├── movie.js
│   │   │   ├── movie.js.map
│   │   │   ├── multerServices.js
│   │   │   ├── multerServices.js.map
│   │   │   ├── productReviewService.js
│   │   │   ├── productReviewService.js.map
│   │   │   ├── productService.js
│   │   │   ├── productService.js.map
│   │   │   ├── userReviewService.js
│   │   │   ├── userReviewService.js.map
│   │   │   ├── userService.js
│   │   │   └── userService.js.map
│   │   └── util
│   │       ├── logger.js
│   │       ├── logger.js.map
│   │       ├── secrets.js
│   │       ├── secrets.js.map
│   │       ├── squareNumber.js
│   │       └── squareNumber.js.map
│   └── test
│       ├── db-helper.js
│       ├── db-helper.js.map
│       ├── fixutes
│       │   ├── products.js
│       │   ├── products.js.map
│       │   ├── users.js
│       │   └── users.js.map
│       └── services
│           ├── productService.test.js
│           └── productService.test.js.map
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── config
│   │   └── passport.ts
│   ├── controllers
│   │   ├── addressController.ts
│   │   ├── cartController.ts
│   │   ├── categoryController.ts
│   │   ├── movie.ts
│   │   ├── productController.ts
│   │   ├── productReviewController.ts
│   │   ├── userController.ts
│   │   └── userReviewController.ts
│   ├── helpers
│   │   └── apiError.ts
│   ├── middlewares
│   │   ├── apiContentType.ts
│   │   ├── apiErrorHandler.ts
│   │   └── authenticationMiddleware.ts
│   ├── models
│   │   ├── Address.ts
│   │   ├── Cart.ts
│   │   ├── Category.ts
│   │   ├── Image.ts
│   │   ├── Movie.ts
│   │   ├── Product.ts
│   │   ├── ProductReview.ts
│   │   ├── User.ts
│   │   └── UserReview.ts
│   ├── routers
│   │   ├── addressRoute.ts
│   │   ├── cartRoute.ts
│   │   ├── categoryRoute.ts
│   │   ├── homePageRoute.ts
│   │   ├── movie.ts
│   │   ├── productReviewRoute.ts
│   │   ├── productRoute.ts
│   │   ├── userReviewRoute.ts
│   │   └── userRoute.ts
│   ├── server.ts
│   ├── services
│   │   ├── addressService.ts
│   │   ├── cartService.ts
│   │   ├── categoryServices.ts
│   │   ├── imageServices.ts
│   │   ├── movie.ts
│   │   ├── multerServices.ts
│   │   ├── productReviewService.ts
│   │   ├── productService.ts
│   │   ├── userReviewService.ts
│   │   └── userService.ts
│   ├── types
│   │   ├── express-flash.d.ts
│   │   └── fbgraph.d.ts
│   └── util
│       ├── logger.ts
│       ├── secrets.ts
│       └── squareNumber.ts
├── test
│   ├── controllers
│   ├── db-helper.ts
│   ├── fixutes
│   │   ├── products.ts
│   │   └── users.ts
│   └── services
│       └── productService.test.ts
└── tsconfig.json

</pre>

## Prerequisites

1. Install mongodb or use MongoDB Atlas (cloud version) or:
2. Install postgresql or use heroku (or any cloud-host psql database)
2. Install nodejs (if you don't have it already)

## Setting Up for `API folder`

1. Create a `.env` file in the root directory and copy the content from `.env.example`

2. Make sure mongodb is running (if you are using local MongoDB)
3. Install dependencies: `yarn`
4. Use this command for development mode: `yarn run start:dev`
5. If you need to customize your env, take a look at `secrets.ts` file

## Requirements

Below are the steps that you need to finish in order to finish this module

1. Explore the code base of the api folder, start with `server.ts` and `app.ts`
2. Client folder is for the react frontend. Start with `api` first before moving on to `client`
3. Create all the schema for your ERD
4. Create CRUD endpoints for all the schema
5. Separate the routers and controller, controller goes into the controller folders. Controllers only handles request and response, and will call service to process business logics.
6. Create more controller for your app if needed. Eg: borrow books, add product to order
7. For business logic like saving data to database, filtering, searching or updating, these are services and goes into services folder
8. Add authentication middleware using passport, google and jwt strategy
9. Add tests for your controllers and services. Remember to create the jwt token for your tests, because if your controller is protected, then the test should send the token also
