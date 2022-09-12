# ExpressBlogger

## Class Notes

- .gitignore is th elist of files that will be ignored by git. 
- We want node_modules to be ignored becasue of the large folder size. 
- When we collaborate with other developers, we clone the repository WITHOUT the node_modules installed, and then we run 'nmp i' to install the node_modules

- Generators like express-generator will create the boilerplate framework code for us, and then we run 'npm i' to download th elist of dependencies.

- The package.json comes with a "scripts" config, in there you can define samll blocks of code that can be easily invoked from the command line with 'npm run <scriptName>'

- _Note_: for the 'start' script, you only need to run 'npm start'

- When we run 'npm start' and the command 'node ./bin/www' is invoked, the ./bin/www file will run our app.js file code, which will eventually include all of thye code we will write for Express.

- The 404 status code means that the url/route we requested doies not exist or is not configured properly in Express.

- Every requyest returns a status code that are grouped into blocks
    - 100 status codes are not used anymore
    - 200 status codes mean success
    - 300 status code mean partial success
    - 400 status code means web error
    - 500 status codes mean server errors

- In order to get code from one file into another, we need to use the javascript require() statement.
    - import/export
    - _Quick Aside_: Require is being phased out in favor of import/export syntax. HOWEVER, when we are working in an Express environment we neet ot still use require() because of Node limitations.
    - _Note_: So for express we need to use require() and module.exports syntax
    - require() brings in code from the file we specify in the file path
    - module.exports exports code from a file 
    - _Note_: 
        - node.exports = router; is seding the router variable from the route file
        - var indexRouter = ('./routes/index'); is bringing the router variable in the current file as the variable indexRouter
        - app.use('/', indexRouter); is importing the routers we define on indexRouter into our server so that we are exposed as routes.
        - The First argument is the base url for this router
        - The second argument is the router variable
        - _Important_: All the route paths in our indexRouter are going to append to the base path
            - Example:
                - In users.js:
                    - router.get('/all, function(req, res, next){
                        res.send('respond with a resource');
                    });
                - In app.js:
                    - 