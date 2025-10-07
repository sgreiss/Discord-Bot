const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jonkler')
		.setDescription('Replies with Feinious!'),
	async execute(interaction) {
		await interaction.reply('Why so feinious?! HA HA HA HAHAHAHAHAHAHA! HA HA HA HAHAHAHAHAHAHA!');
	},
};