## London-Living-Users-API
This NodeJS app provides an api to fetch the users living in london and around 50 miles from the data provided by https://bpdts-test-app.herokuapp.com/users api.

### Run:
Run the following commands to start the service:

`npm install`
`npm start` 
The app will then be available with a URL like this: http://localhost:3000/london/users 
### Test:

#### Unit Test:
Run the following command to test.
 `npm test`

#### Manual Testing using Tools:  Web browser, Postman

Go to Chrome and enter http://localhost:3000/london/users 
Lists the people living whose current coordinates are within 50 miles of London

#### To Test the Json Format in response:

Go to Postman and click File -> New -> Request
Enter the  Request Name as Test API and give a collection name as RequestCall.
Select the method as Get and enter the url http://localhost:3000/london/users  and then click send.
Json format response will be displayed in the body.




