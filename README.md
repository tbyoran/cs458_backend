# CS458 Backend Server

Check product [documentation](ENDPOINTS.md) for more details. [Server url](https://cs458-backend.herokuapp.com)

## Installation

1. Fork this repo
2. Click on ``Code`` and copy the url
3. Run the following commands:

```bash
# Replace FORK_URL with what you just copied
git clone FORK_URL
cd backend
```

## 1. Install app dependencies
```bash
yarn install
```
or
```bash
npm install
```

``yarn`` is the recomended package manager. Therefore, next instructions will be demonstrated via ``yarn``. You can install it with this [guide](https://yarnpkg.com/getting-started/install).

## 2. Setup the environment file
```bash
echo "JWT_SECRET='SECRET_KEY'" >> .env
```
For the rest of the environment variables, check [this file](CONFIG_VARS.md).

## 3. Start the container
```bash
yarn container:start
```
Now, you should see the server ready message:
```bash
web | 🔷 NODE_ENV: development
web | 🚀 Server ready at http://localhost:5000
web | Executing (default): SELECT 1+1 AS result
web | 📚 Database connection has been established successfully
```

## 4. Setup database
In a separate terminal, run:
```bash
yarn container:setup
```
You should see:
```bash
>>> DB SETUP COMPLETE!
```
All set! Go to [http://localhost:5000/](http://localhost:5000/) -- you should see:
```js
{
  status: 1
}
```

## 5. Create a database model
```bash
yarn sequelize-cli model:generate --name Sample --attributes name:string,surname:string,email:string
yarn sequelize-cli seed:generate --name Sample
```
You can use the [link](https://sequelize.org/v5/manual/data-types.html) for the data types of sequelize.

## 6. Deploy
* All set! Go to [heroku dashboard](https://dashboard.heroku.com) -- you should see list of your apps.
* Open the control panel of the app that corresponding to qrder_web project.
* Enter to the `Settings` menu.
* Setup `Config Vars` of the project properly. [For details](CONFIG_VARS.md)
* Enter to the `Deploy` menu.
* Check whether automatic deploy is enabled. -- if not:
* * Choose a branch that you want to deploy to heroku and press `Enable Automatic Deploys` button. Or,
* * Use the `Manual deploy` option.
