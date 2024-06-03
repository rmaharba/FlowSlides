# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Add the environment variables:

In the project there is a .env.example, you can use this file to create a .env. 
Within that .env you're gonna set the corresponding api token for each variable.

```
BASE_GRAPHQL_URL=https://graphql.contentful.com/content/v1/spaces/
SLIDER_API_TOKEN=slider-api-token
ANNOUNCEMENT_API_TOKEN=announcement-api-token
```

## Step 2: Install the packages:

Open a _new_ terminal from the _root_ of the React Native project. Run the following command to install the packages:

```bash
yarn install
```

Note: The project was developed using Yarn, if you use npm be aware of this.

## Step 3: Start the Application

Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### If everything works correctly, you should see an application like this:

https://github.com/rmaharba/FlowSlides/assets/32307933/2f13656f-710f-4940-a27a-d270492b1c49
