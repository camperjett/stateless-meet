Features

Google OAuth
Multi-user Video Call
Live Chat
Call recording
Screenshare {TBI}
Mic on/off and Cam on/off
Leave/Join Meet
QR Code for Sharing Link
Responsive
Easy to remember Slug

# Stateless

We have built this full-stack video meeting app keeping one goal in mind: "Joining meet an effortless experience". We connect people through frictionless video, voice, chat, and content sharing and enable face-to-face video experiences for thousands of people in a single meeting across disparate devices and locations.<br>
We help people join the app seamlessly through Google OAuth! <br>
You can mute/ unmute your mic and turn on/ off your cam! <br>

## Live Website

https://stateless-meet.vercel.app/

## Run Locally

Clone the project

```bash
  git clone https://github.com/camperjett/stateless-meet
```

Go to the project directory

```bash
  cd stateless-meet
```

Install dependencies on client and backend

```bash
  cd client
  npm install
```

```bash
  cd backend
  npm install
```

Adding Firebase

- Go to [Firebase console](https://console.firebase.google.com/).
- Crete a new project in Firebase.
- Enable Firesbase Authentication and FireStore.
- Go to the setting of the project and copy your credentials.
- Change [Firebase config](/client/src/firebase/config.js) and use your own.

[firebase/config.js](/client/src/firebase/config.js)

```js
const firebaseConfig = {
  apiKey: "xxxxxxx-xxxxxxxxx-xxxxxxxxxx-xxxxxxxxxxxx",
  authDomain: "xxxxxxx-xxxxxxxxx-xxxxxx",
  databaseURL: "xxxxxxx-xxxxxxxxx-xxxxxx",
  projectId: "xxxxxxx-xxxxxxxxx-xxxxxx",
  storageBucket: "xxxxxxx-xxxxxxxxx-xxxxxx",
  messagingSenderId: "xxxxxxx-xxxxxxxxx-xxxxxx",
  appId: "xxxxxxx-xxxxxxxxx-xxxxxx",
};
```

Start the client server

```bash
  npm run start # on client folder and it will run on localhost:3000
```

Start the backend server

```bash
  npm run start # on backend folder and it will run a server on localhost:5000
  npm run dev # on backend folder and it will run a development server on localhost:5000
```

And you are ready to go!

## Tech Stack

React, Firebase 9, TailwindCSS 3, simple-peer, Node JS, Socket IO

## Feedback

If you have any feedback, please reach out to us at jaideep.sharma.cse20@iitbhu.ac.in
