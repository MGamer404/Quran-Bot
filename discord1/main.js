const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('quran is online!');
    client.user.setActivity('$قران', { type: 'PLAYING' });
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'قران'){
        client.commands.get('embed').execute(message,args, Discord);
        client.commands.get('join').execute(message, args);
    } else if (command === 'اقرا') {
        client.commands.get('اقرا').execute(message, args);
    } else if (command === 'اقرا2') {
        client.commands.get('اقرا2').execute(message, args);
    }else if (command === 'اقرا3') {
        client.commands.get('اقرا3').execute(message, args);
    }else if (command === 'اقرا4') {
        client.commands.get('اقرا4').execute(message, args);
    }else if (command === 'اقرا5') {
        client.commands.get('اقرا5').execute(message, args);
    }else if (command === 'اقرا6') {
        client.commands.get('اقرا6').execute(message, args);
    } else if (command === '1') {
        message.channel.send('$اقرا https://www.youtube.com/watch?v=V9UIIsai5E8');
        client.commands.get('join').execute(message, args);
    }else if (command === '2') {
        message.channel.send('$اقرا https://www.youtube.com/watch?v=wwMyn8a_puQ');
        client.commands.get('join').execute(message, args);
    }else if (command === '3') {
        message.channel.send('$اقرا https://www.youtube.com/watch?v=IrwPiwHWhXo');
        client.commands.get('join').execute(message, args);
    }else if (command === '4') {
        message.channel.send('$اقرا https://www.youtube.com/watch?v=pBP3OIRrnFE');
        client.commands.get('join').execute(message, args);
    }else if (command === '5') {
        message.channel.send('$اقرا https://www.youtube.com/watch?v=T3a6ZTbctWw');
        client.commands.get('join').execute(message, args);
    }else if (command === '6') {
        message.channel.send('$اقرا https://www.youtube.com/watch?v=MGEWrAtHFwU');
        client.commands.get('join').execute(message, args);
    }
});

client.login('ODExMTI5MTc1MDc5MTI0OTky.YCts6Q.smO5624q6OTQK5D8QDpRR3heoSo')
