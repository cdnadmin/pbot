var Botkit = require('botkit');

var controller = Botkit.slackbot();

controller.hears(["Hey, Professor!", "Hungry?", "just one tho", /^.{0,}professor.{0,}$/],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  // do something to respond to message
  // all of the fields available in a normal Slack message object are available
  // https://api.slack.com/events/message
  console.log(message);
  if (message.text === "Hey, Professor!"){
	  bot.reply(message,'Woof! Woof!');
	}
  else if (message.text === "Hungry?"){
  	bot.reply(message, "Woof! Pup-a-roni please!  :-P");
  }
  else if (message.text === "just one tho"){
  	bot.reply(message, "Grrrr!")
  }
  else {
  	bot.reply(message, "I only speak doggy or key phrases, sorry! * Sigh *");
  }
});

var bot = controller.spawn({
	token:require('./config').token
});

bot.startRTM(function(err, bot, payload) {
	if (err){
		console.log(err);
		throw new Error('Could not connect to slack!');
	}
});

