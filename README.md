## 🌟 MERN Marketplace || E-COMMERCE ZENTACLE🌟

Built a MERN Marketplace enabling users to become sellers, manage shops, and list products for sale. Visitors can search, browse, and add items to their cart for purchasing. Implemented secure non-volatile messaging, JWT authentication, and email verification for communication between sellers and buyers. Integrated Stripe and Paypal payment for seamless transactions.

#### _**IMPORTANT NOTE**_ -

This project does not have a mongoDB connection setup. Set up the connection based on the environments below.

- local development: create a config folder (make sure to name it .env) in the config folder, which exports your db.uri connection.
- (make new folder `uploads`) in the backend.

### How to run frontend

- `cd frontend`
- `yarn install`
- `yarn start`

### How to run backend

- `cd backend`
- `npm install`
- create folder `uploads`
- create `confilg` folder and a `.env` file
- use your Credentials in.env file

```
PORT = 8000
DB_URL = ""
JWT_SECRET_KEY = ""
JWT_EXPIRES = 7d
ACTIVATION_SECRET =
SMPT_HOST = 'smtp.gmail.com'
SMPT_PORT = 465
SMPT_PASSWORD =
SMPT_MAIL =
STRIPE_API_KEY =
STRIPE_SECRET_KEY =
```

- `yarn start`

### How to run socket

- `cd socket`
- `npm install`
- create a `.env` file

```
PORT = 4000
```

- `yarn start`
