Welcome to **chaD**, the ultimate chatting application designed with a touch of superiority and an abundance of simplicity. Whether you are chatting with friends, family, or fellow CHADs, chaD makes every conversation flashier and more efficient!
## Table of Contents
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
## Features
- **Room List Screen:** A screen that lists all the available chat rooms.
- **Chat Screen:** Opens when a user selects a room from the list.
- **Message Polling:** Sends and receives messages in the chat room using polling (not subscriptions, see [Apollo documentation](https://www.apollographql.com/docs/react/data/pagination/#polling)).
- **UI Recreation:** Recreating the UI based on provided mockups to evaluate styling skills.
- **Authentication:** Login and Sign Up screens to get users authenticated.
## Tech Stack
chaD is built using the following technologies:
- **Mobile Development:**
 - React Native
 - Expo
 - React Navigation
 - Reanimated
 - Hooks: React Hook Form
- **GraphQL:**
 - Apollo Client
 - GraphQL
- **State Management:**
 - React useContext
 - React Native Safe Area Context
- **Utilities:**
 - Date-fns
 - React Native UUID
 - Shopify FlashList
 - Shopify Restyle
- **Development Tools:**
 - TypeScript
 - ESLint (with Prettier and Universe configs)
 - Prettier
## Installation
To get started with chaD, follow these steps:
1. **Clone the repository:**
   

    ```
    git clone https://github.com/Dawwie/chaD.git
    cd chaD
    ```

2. **Install dependencies:**
   

    `npm i`

1. **Run the application:**
   

    `npm start`

You can also use the following commands for specific platforms:
```
npm run android
npm run ios
npm run web
```
    
## Usage
1. **Register an account** if you don't already have one.
2. **Sign in** with your credentials.
3. **Start chatting** by selecting a chat room from the list.
