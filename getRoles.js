const headers = {
	'content-type': 'application/json',
    'x-hasura-admin-secret': 'kgxKv2o5D69uBBljV7RCA9YI6D23VE8Y39WPwKZQBU0MUV0ZTEgrY5X4Va3KXsdR'
};

const getRolesQuery = {
    "operationName": "MyQuery2",
    "database_name":"public",
    "query": `query MyQuery2 {
        roles {
          role
          id
        }
      }
      `,
    "variables": {}
};

export const optionsForGetRoles = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(getRolesQuery)
};