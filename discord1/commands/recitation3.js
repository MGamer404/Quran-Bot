const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
 
module.exports = {
    name: '3اقرا',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                message.channel.send('$3اقرا https://www.youtube.com/watch?v=pBP3OIRrnFE');
            });
 
            await message.reply(`جاري تشغيل السورة`)
 
            return
        }
 
    }
}
