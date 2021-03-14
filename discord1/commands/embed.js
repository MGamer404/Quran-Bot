
module.exports = {
    name: 'embed',
    description: 'Embeds!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('اسماء القراء')
        .setDescription('الرجاء كتابة الرمز "$" وبجانبه الرقم الموضح جانب اسم القارئ بالصوره')
        .setImage('image.png');
        
        message.channel.send(newEmbed);
    }
}
