const admin = require('firebase-admin');
const { Op } = require('sequelize');
const db = require('./models');
const serviceAccount = require('./footbet-2d3b7-firebase-adminsdk-e1wcx-7e697e213d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function sendPushNotification(payload) {
  try {
    const users = await db.User.findAll({ where: { registrationToken: { [Op.not]: null } } });
    const registrationTokens = users.map(user => user.registrationToken);
    const messages = registrationTokens.map(token => ({
      notification: {
        title: payload.title,
        body: payload.body,
      },
      token,
    }));
    const response = await admin.messaging().sendEach(messages);
    console.log('Successfully sent message:', response);
  } catch (error) {
    console.log('Error sending message:', error);
  }
}

module.exports = sendPushNotification;
