# [adiguno.net](http://adiguno.net)

# notes

- react hook cannot be called in a class component
  - must be called in a React function component or custom React Hook function

# gcloud notes

- service accounts, used for API comms

  - service account key needed to authenticate with google cloud buckets

  ## We follow the following steps in order to create a service account.

1.         Open the Identity Access Management ( IAM ) section of the Google Cloud Console
2.  From the left side navigation bar, click on Service Accounts and when there click on the Create Service Account button.
3.  Enter a preferred name and a description and click the Create button. We would see a service account ID being auto generated using characters from our typed in name.
4.  Next, click the Select Role dropdown menu to select a role for this service account.
5.  Type “Storage Admin” and click the Storage Admin role. This role gives our Node server a full control over stored resources in our storage buckets.
6.  Leave the remaining fields blank and click on the Done button.

After being created, we would be redirected to a list of all Service Accounts within our project, including the default created ones and the newly created service account.

# gcp buckets vs firestore

- gcp buckets requires backend
- firestore doesn't ?

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
