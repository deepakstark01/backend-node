// const admin = require('./initialize.js');
import admin from 'firebase-admin';

import  serviceAccount from './automartz-demo-firebase-adminsdk-uwg2h-6d76b5a45e.json'  assert { type: 'json' };
console.log(serviceAccount)
// const firebaseConfig = {
//   apiKey: "AIzaSyBcj72MKElFyPjyfxVuiIddkyWzjgQSRN4",
//   authDomain: "automartz-demo.firebaseapp.com",
//   projectId: "automartz-demo",
//   storageBucket: "automartz-demo.appspot.com",
//   messagingSenderId: "806161703728",
//   appId: "1:806161703728:web:008d42d7c05dbc259b1ef5"
// };
// admin.initializeApp(firebaseConfig);
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
});

// This registration token comes from the client FCM SDKs.
const registrationToken = 'eNomykZvRci6VQqe_fM20w:APA91bE_XJesrAb-2sPpDdMG-e52yS-Uvkcz3DoqFXzZZz-fmHvPYos-l86iSelcLaFZ2dHuvjhts9GcNM8Bf-7Fp3JBPnFKbYuYJk5YZiJ3CsDwWDyaooK8ZifbZ7wtGolpKOeDZPaI';
// const registrationToken = 'co9_4_YVzcYNmg9vDB4ii8:APA91bFfeZfYoqCKQXWG2bLbwAqL2lsezbY9Tyf98fXFUIN94z45IUPS6E9M0HroCWibxRB9zGxS3SBlXg0n0MFd1czsIE2DqXbRf-nlYDHamI7VQSPxaa73687agDYkvEhCQhdD-H0q';
const message = {
  notification: {
    title: 'Sparky says hello!'
  },
  android: {
    notification: {
      body: 'This is a new notification',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_960_720.jpg'
    }
  },
  apns: {
    payload: {
      aps: {
        'mutable-content': 1
      }
    },
    fcm_options: {
      image: 'https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_960_720.jpg'
    }
  },
  webpush: {
    headers: {
      image: 'https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_960_720.jpg'
    }
  },
  token: registrationToken
};

//normal message
// const message = {
//   notification: {
//     title: 'New Notification',
//     body: 'This is a new notification',
//     image: 'https://cdn.pixabay.com/photo/2018/01/21/01/46/architecture-3095716_960_720.jpg'
//     },
   
//   token: registrationToken
// };


/*

android
{
  "title": string,
  "body": string,
  "icon": string,
  "color": string,
  "sound": string,
  "tag": string,
  "click_action": string,
  "body_loc_key": string,
  "body_loc_args": [
    string
  ],
  "title_loc_key": string,
  "title_loc_args": [
    string
  ],
  "channel_id": string,
  "ticker": string,
  "sticky": boolean,
  "event_time": string,
  "local_only": boolean,
  "notification_priority": enum (NotificationPriority),
  "default_sound": boolean,
  "default_vibrate_timings": boolean,
  "default_light_settings": boolean,
  "vibrate_timings": [
    string
  ],
  "visibility": enum (Visibility),
  "notification_count": integer,
  "light_settings": {
    object (LightSettings)
  },
  "image": string,
}
*/




// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });