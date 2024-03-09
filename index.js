const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField,
  ButtonBuilder,
  ButtonStyle,
  userMention,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalSubmitInteraction,
  permissionOverwrites
} = require("discord.js");

const client = new Client({
intents: 131071,
});

const prefix = "-"; // البريفكس

client.on("ready", () => {
console.log(`🤖 - Logged in as ${client.user.tag}!`);
console.log(`✅ - index.js`);
client.user.setActivity("by Stal = !? ", { type: 3 });
client.user.setStatus("idle");
});


const owner = "714200387048964107"; // ايدي الاونر
const wordReplacements = {
'حساب': '7ساب',
'نيترو': 'نيتر9',
'ديسكورد': 'ديسك9رد',
'شوب': 'ش9ب',
'بروجكت': 'بر9جكت',
'ستور': 'ست9ر',
'بوت': 'ب9ت',
'توكن': "ت9كن",
'توكنات': "ت9كنات",
'بروجكت': "بر9جكت",
'بروجكتات': 'بر9جكتات',
"سعر": 'س3ر',
"متوفر": "مت9فر",
"شراء": "شر|ء",
"اشتري": "اشtري",
"للبيع": "للبي3",
"ابيعه": "ابي3ه",
"ينباع": "ينبا3",
"اشتريه": "اشtريه",
"سيرفر": "سيrفر",
"سيرفرات": "سيrفرات",
"بوست": "ل9ست",
"بوستات": "ب9ستات",
"نيتروهات": "نيتر9هات",
"اسعار": "اس3ار",
"دفع": "دف3",
"شاهد": "شاhد",
"نتفلكس": "نtفليكس",
"ستيم": "ستيm",
"test": "test!"
};

client.on("messageCreate", (message) => {
if (message.content === prefix + "setupE") {
  if (message.author.id !== owner) return message.delete();

  const embed = new EmbedBuilder()
    .setTitle('قـسـم التـشـفـيـر')
    .setColor('#43C6DB')
              
              .setDescription("مرحبًا بك في قسم التشفير السريع لسيرفر باندا شوب لتشفير منشورك")

    .addFields(
      { name: 'خطوة ** __1__**', value: '**لتشفير منشورك، ما عليك سوى الضغط على زر `شفر 📇` ووضع المنشور داخله، **' },
      { name: 'خطوة **__2__**', value: '**ثم `انسخ النص 📋` المشفر وسيتم إرساله لك في الخاص**' }
    )
  .setThumbnail('https://cdn.discordapp.com/attachments/1215742452393050112/1215756057263997018/dc636056e38d3989.jpg?ex=65fde80f&is=65eb730f&hm=dda2da8a969abd0bc9ab639dd6776704e8b8b24ac390b75a9da68720936ae154&')

        .setImage('https://cdn.discordapp.com/attachments/1215742452393050112/1215755992009015376/2bec297a3d37d825.jpg?ex=65fde800&is=65eb7300&hm=2714ad2286e1bc8c6a50dcb31e0791c6d45a9bbc51bb886a917608a44653452a&')

  
const btn = new ButtonBuilder()
    .setCustomId('tshfir')
    .setStyle(ButtonStyle.Primary)


    .setLabel('شـفـر')
    .setEmoji('📇');
  const row = new ActionRowBuilder().addComponents(btn);
  message.delete();
  message.channel.send({ embeds: [embed], components: [row] });
}
});

client.on("interactionCreate", (interaction) => {
if (interaction.customId == "tshfir") {
  const modal = new ModalBuilder()
    .setTitle('تشفير منشور')
    .setCustomId('tshfirmodal');
  const inp = new TextInputBuilder()
    .setLabel('منشورك')
    .setPlaceholder('ضع منشورك هنا')
    .setCustomId('inp1')
    .setStyle(TextInputStyle.Paragraph)
    .setMaxLength(2000);
  const row = new ActionRowBuilder().addComponents(inp)
  modal.addComponents(row)
  interaction.showModal(modal)
} else if (interaction.customId == "tshfirmodal") {
  const btn = new ButtonBuilder()
    .setCustomId('copytxt')
    .setLabel('انسخ نص')
    .setStyle(ButtonStyle.Primary)
    .setEmoji('📋');
  const row = new ActionRowBuilder().addComponents(btn);
  const v = interaction.fields.getTextInputValue('inp1');
  let modifiedContent = v;
  for (const word in wordReplacements) {
    if    (wordReplacements.hasOwnProperty(word)) {
      const replacement = wordReplacements[word];
      modifiedContent = modifiedContent.replace(new RegExp(word, 'gi'), replacement);
    }
  }
  interaction.reply({ content: `${modifiedContent}`, components: [row], ephemeral: true })
} else if (interaction.customId == "copytxt") {
  const msgc = interaction.message.content;
  interaction.user.send(`__**منشورك بعد التشفير :**__ ${msgc}`).then(() => { interaction.reply({ content: 'تم ارسال المنشور الى خاصك انسخه من هناك', ephemeral: true }) }).catch(() => interaction.reply({ content: 'عذرا خاصك مغلق', ephemeral: true }))
}
})

///////-----by-Stal-----///////


client.login(process.env.token);