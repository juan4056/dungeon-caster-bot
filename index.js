require("dotenv").config(); // Importa y configura dotenv

const { Client, Intents } = require("discord.js");
const {
  joinVoiceChannel,
  createAudioResource,
  createAudioPlayer,
} = require("@discordjs/voice");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES],
});

// Utiliza el token del bot desde las variables de entorno
const BOT_TOKEN = process.env.BOT_TOKEN;

client.once("ready", () => {
  console.log("Bot is ready!");
});

client.on("messageCreate", async (message) => {
  if (message.content === "!join") {
    // Comando para unirse al canal
    if (message.member.voice.channel) {
      const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      });

      // Aquí iría la lógica para grabar el audio
      console.log("El bot se ha unido al canal de voz!");
    } else {
      message.reply("Necesitas estar en un canal de voz!");
    }
  }
});

client.login(BOT_TOKEN);
