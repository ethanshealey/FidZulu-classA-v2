# ClassA
---
Welcome to the Class A middleware and backend services!

To run the backend and middlware services, run `npm start` in the base directory. This will spin up the ClassA, Foods, Bikes, and Toys services on the following ports:

```
ClassA -> 3021
Bikes -> 3031
Foods -> 3032
Toys -> 3033
```
### Routes
---
The routes you will need to access the data are as follows:

```
localhost:3021/classA/<servicename>/all/<location> -- This will get the list of all objects under the given service name
localhost:3021/classA/<servicename>/team -- This will give information of the team that developed the given service
localhost:3021/classA/<servicename>/add -- This will accept a POST request to add an item to the given servicename
