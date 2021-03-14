
module.exports = {
    name: 'embed',
    description: 'Embeds!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('اسماء القراء')
        .setDescription('الرجاء كتابة الرمز "$" وبجانبه الرقم الموضح جانب اسم القارئ بالصوره')
        .setImage('https://cdn.discordapp.com/attachments/592728588273582091/820703974407667712/mgmr2.png');
        
        message.channel.send(newEmbed);
    }
}
