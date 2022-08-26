# Fullstack-Typescript-Project

## API TechStack

NodeJs, Express, TypeScript, MongoDB

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

## Client side will update soon
