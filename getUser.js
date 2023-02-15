const headers = {
	'content-type': 'application/json',
    'x-hasura-admin-secret': 'kgxKv2o5D69uBBljV7RCA9YI6D23VE8Y39WPwKZQBU0MUV0ZTEgrY5X4Va3KXsdR'
};

const getUserQuery = {
    "operationName": "MyQuery",
    "query": `query MyQuery {
        users {
          id
          name
          email
          mobile
        }
      }
      
      `,
    "variables": {}
};

export const optionsForGetUser = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(getUserQuery)
};