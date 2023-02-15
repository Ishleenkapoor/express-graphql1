const headers = {
	'content-type': 'application/json',
    'x-hasura-admin-secret': 'kgxKv2o5D69uBBljV7RCA9YI6D23VE8Y39WPwKZQBU0MUV0ZTEgrY5X4Va3KXsdR'
};

const getAppointmentQuery = {
    "operationName": "MyQuery1",
    "database_name":"public",
    "query": `query MyQuery1 {
        appointment {
          appointment_date
          duration
          id
          time
          user {
            name
            mobile
            email
            role {
              role
            }
          }
          user_id
        }
      }
      `,
    "variables": {}
};

export const optionsForGetAppointment = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(getAppointmentQuery)
};