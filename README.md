# google-auth-helper

Add google auth

<script src="https://apis.google.com/js/platform.js" async defer></script>

<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">

Client ID: 800765811446-v21c0j29t4sr8mai5a9ib4rnte91fpo0.apps.googleusercontent.com

Sign in button: <div class="g-signin2" data-onsuccess="onSignIn"></div>

Get and display user info:

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/google-auth-helper.git
cd google-auth-helper
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
