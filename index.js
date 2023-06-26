// This registration token comes from the client FCM SDKs.
const registrationToken = 'eNomykZvRci6VQqe_fM20w:APA91bE_XJesrAb-2sPpDdMG-e52yS-Uvkcz3DoqFXzZZz-fmHvPYos-l86iSelcLaFZ2dHuvjhts9GcNM8Bf-7Fp3JBPnFKbYuYJk5YZiJ3CsDwWDyaooK8ZifbZ7wtGolpKOeDZPaI';

const message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
getMessaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });