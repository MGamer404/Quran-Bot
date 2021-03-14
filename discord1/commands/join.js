const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'join',
    description: 'Joins and plays a video from youtube',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
        const  connection = await voiceChannel.join();
    } }