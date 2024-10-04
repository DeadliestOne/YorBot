const { readFileSync } = require('fs')
require('dotenv').config({path: './mongo.env'});
require('dotenv').config({path: './owner.env'});
require('dotenv').config({path: './session.env'});
require('dotenv').config({path: './bot.env'});

module.exports = {
    /**
     * bot details and parameters
     */
    botname: process.env.BotName || "Yᴏʀ Fᴏʀɢᴇʀ xD",
    footer: process.env.Footer || "© 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 Yᴏʀ Fᴏʀɢᴇʀ xD",
    prefa: process.env.Prefix || "-",
    themeemoji: process.env.ThemeEmoji || "🥺",

    /**
     * owner details and parameters
     */
    ownername: process.env.Owner_Name || "Pika~Kun",
    ownernumber: process.env.Owner_Number || "918158821400",
    instagramId: process.env.Insta || "administrator.ae",

    /**
     * other details and parameters
     */
    author: process.env.Author || "ᴛʜᴜɴᴅᴇʀʙᴏʟᴛ ғᴀɴᴛᴀsʏ",
    packname: process.env.PackName || "sᴛɪᴄᴋᴇʀ ᴘᴀᴄᴋ ᴏғ ʏᴏʀ ғᴏʀɢᴇʀ xᴅ",
    socialLink: process.env.Web || "www.adminxott.store",
    groupLink: process.env.GcLink || "https://chat.whatsapp.com/Eij7WbOgTcY3V44xFKRIZ8",
    warns: Number(process.env.Warn_Limits) || 3,
    cooldown: Number(process.env.Cooldown_Timer_Seconds) || 5, // default cooldown time per command in seconds
    mongoUrl: process.env.MongoDB || "mongodb+srv://jc07cv9k3k:bEWsTrbPgMpSQe2z@cluster0.nfbxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    sessionId: process.env.SESSION_ID || "cGwxcHR_Queen-Anya_jMDQ=",

    /**
     * thumbnails and medias
     */
    image_1: "https://telegra.ph/file/24d982891899cfe9bd41a.jpg"// primary image
    image_2: "https://telegra.ph/file/24d982891899cfe9bd41a.jpg" // secondry image
    imageUrl: "https://telegra.ph/file/c28268e126572fa70c1b1.jpg", // image url, to replace to your url upload your image to https://imgbb.com
    imageMentionUrl: "https://telegra.ph/file/24d982891899cfe9bd41a.jpg", // image for mention reply audio media
    aliveMedia: "https://envs.sh/WfE.me.mp4"
    menuMedia: "https://telegra.ph/file/6f507524d8f4f6f66867c.mp4"
    ownerMentionMp3: "https://telegra.ph/file/f3d15634b671416a68cef.mp3",  // audio for mention reply audio media

    /**
     * core parameters and values
     */
    ownercon: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...({ remoteJid: 'status@broadcast' }), }, message: { contactMessage: { displayName: this.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${this.ownername},;;;\nFN:${this.ownername}\nitem1.TEL;waid=${this.ownernumber}:${this.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: this.image_2, thumbnail: this.image_2, sendEphemeral: true } } },
    fakeshop: { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { orderMessage: { itemCount: 1234, status: 200, thumbnail: this.image_1, surface: 200, message: this.botname, orderTitle: this.ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: { forwardingScore: 999, isForwarded: true}, sendEphemeral: true },
    message: {
        success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
        admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
        botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
        owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
        group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
        private: 'This command is only for private chats.',
        wait: '🔄 Processing request...',
        error: "❌ Oops! An error occurred while processing your request. Please try again later.",
        ban: `You're banned from using this bot!`,
        nsfw: 'This group is not *NSFW* enabled.',
        banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
    },
    Port: process.env.Port || "8080",

    /**
     * external APIs
     */
    api: {
        api1: "https://www.guruapi.tech" // Guru's API
    }
}

global.connectionMessageSent = false;
global.game = {
    tictactoe: {}
}
