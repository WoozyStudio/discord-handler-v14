const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription('Return an embed.'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
        .setTitle(`Discord v14 new EmbedBuilder`)
        .setDescription('This is a new Structure of Embed in v14!')
        .setColor(0x18e1ee)
        .setImage(client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setTimestamp(Date.now())
        .setAuthor({
            url: `https://discord.com/app`,
            iconURL: interaction.user.displayAvatarURL(),
            name: interaction.user.tag
        })
        .setFooter({
            iconURL: interaction.user.displayAvatarURL(),
            text: client.user.tag
        })
        .setURL(`https://discord.com/app`)
        .addFields([
            {
                name: `Field 1`,
                value: `Field value 1`,
                inline: true
            },
            {
                name: `Field 2`,
                value: `Field value 2`,
                inline: true
            }
        ]);

        await interaction.reply({ embeds: [embed] })
    }
}