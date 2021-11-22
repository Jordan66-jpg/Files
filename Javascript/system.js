module.exports = function(a){
  var client = a.client
	var prefix = a.prefix
	var message = a.message
	var db = a.db
	var emojis = a.emojis
	if(message.channel.parent === null) return
	if(message.channel.parent.id !== '911769594534965258') return //Specific par
	const {MessageEmbed} = require('discord.js')

	const content = message.content.split(' ')
	const isNumeric = n => !isNaN(n);

	for (var i = 0; i < content.length; i++) {
		if(isNumeric(content[i])){
			if(content[i].length >= 9){
			nextStage(content[i])
		}
	}
  }
   
  function nextStage(userId){
  //For this, you will have to check for the channel and them call finalAction(userId, 'reason'). I removed this part because it gets complicated having custom channels
  }
  
	function finalAction(userID, reason){
		message.channel.send('Successfully banned <@' + userID + '>') //This was just to confirm the user was banned
		
    //You can add a custom embed and have it send to a modlog channel, that was previously in this part but it was removed for reasons
		message.channel.guild.members.ban(userID, {reason: reason})
	}
}
