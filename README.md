### Summary

Img_ie is a mobile app developed on the React Native framework.

This app allows the user to select an image from a set list of images and modify it with different adjustments through consuming the IMGX endpoint.

### Libraries

Img_ie uses libraries such as @reduxjs/toolkit and redux-persist as to store certain data like the selected images or user action history on memory and make it persist through the app. When it comes to the UI side, the app uses libraries such as react-native-fast-image as to have a better performance caching the images and not doing unnecessary network requests.

### Installation

- [React Native environment needs to be set up](https://reactnative.dev/docs/set-up-your-environment)
- Node v18.12.0 is needed (preferably by nvm as to make the setup easier)

Using the specified Node version and having the React Native environment set up, we need to run the command

```jsx
npm i -f
```

To install the required dependencies of the project.

After the dependencies are installed, using the following command will allow us to start the app

```jsx
npm run start
npm run android
```

### UI Design Pattern

For the UI side, I decided to go with the Atomic Design pattern. Although it is a small project, I went for this approach of having templates as to showcase the benefits of having clean and reusable code, this also improves times when developing as the developer knows where every component is located based on the category of the component, low-level components as buttons and inputs will be located on the atoms folder, whereas more complex components as views that use titles, inputs and buttons will be categorized higher, like an organism for example.

Personally, I think that starting a project with this pattern is a must, as it makes the code much more scalable and, if done well, the developers will save time on future refactors on the UI part.

### Reusable utils and validations

From the logic side, something that may seem like a solution that it’s intentionally harder for this small project is the use of many reusable utils, this has been made this way as to take out the logic from the components and to not make the files extensive. For the validations side, something that may raise an eyebrow is the quantity of validations through the entire repo, although they may seem unnecessary at first, this has been made this way thinking on a production environment, where data from the backend could be not what we were expecting for.
