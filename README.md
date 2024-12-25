## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   ```

2. Navigate to the [Backend](http://_vscodecontentref_/12) directory:

   ```sh
   cd Backend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Create a `.env` file in the [Backend](http://_vscodecontentref_/13) directory and add your environment variables:
   ```
   DB_CONNECT=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

## Running the Server

1. Start the server:

   ```sh
   npm start
   ```

2. The server will run on [http://localhost:3000](http://_vscodecontentref_/14).

## API Endpoints

### User Routes

- **Register User**

  - `POST /users/register`
  - Body:
    ```json
    {
      "phone": "1234567890",
      "college": "XYZ College",
      "email": "user@example.com",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "password": "password123"
    }
    ```

- **Login User**

  - `POST /users/login`
  - Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```

- **Get User Profile**

  - `GET /users/profile`
  - Headers:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

- **Logout User**
  - `GET /users/logout`
  - Headers:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```

## Middleware

- **Auth Middleware**: [auth.middleware.js](http://_vscodecontentref_/15)
  - [authUser](http://_vscodecontentref_/16): Authenticates the user using JWT.
  - [authCaptain](http://_vscodecontentref_/17): Authenticates the captain using JWT.

## Models

- **User Model**: [user.model.js](http://_vscodecontentref_/18)

  - Schema for user data.
  - Methods for generating auth tokens, comparing passwords, and hashing passwords.

- **Blacklist Token Model**: [blacklistToken.model.js](http://_vscodecontentref_/19)
  - Schema for blacklisted tokens to handle logout functionality.

## Services

- **User Service**: [user.service.js](http://_vscodecontentref_/20)
  - [createUser](http://_vscodecontentref_/21): Creates a new user in the database.

## Database

- **Database Connection**: [db.js](http://_vscodecontentref_/22)
  - Connects to MongoDB using Mongoose.

## Controllers

- **User Controller**: [user.controller.js](http://_vscodecontentref_/23)
  - [registerUser](http://_vscodecontentref_/24): Handles user registration.
  - [loginUser](http://_vscodecontentref_/25): Handles user login.
  - [getUserProfile](http://_vscodecontentref_/26): Retrieves the user's profile.
  - [logoutUser](http://_vscodecontentref_/27): Handles user logout.

## License

This project is licensed under the MIT License.
