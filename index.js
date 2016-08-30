// We import the package that we installed earlier
const SlackBot = require('slackbots');

// We create a new Slack bot using the Token and name from before
const bot = new SlackBot({
  // Replace <SLACK_TOKEN> with the token from step E
  token: process.env.SLACK_TOKEN,
  // Replace <BOT_NAME> with the name from step E
  name: 'Will Grigg\'s On Fire'
});

// Everything above this line from before will be the same
bot.on('start', () => {
  // We will now make the bot post a message to a specific user on startup
  bot.postMessageToUser(
    // The user we want to send a message to
    'gostevning',
    // The message to send
    'Nananananananaaaa'
  );
});

bot.on('message', (data) => {

  if (data.text === 'Will Griggs') {
    bot.postMessage(data.channel, 'WILL GRIGG\'S ON FIRE!');
  }
});
