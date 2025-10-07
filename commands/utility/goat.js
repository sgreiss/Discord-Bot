const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goat')
		.setDescription("Who's the goat?"),
	async execute(interaction) {
		if (interaction.user.username == 'le_squeed') {
			await interaction.reply('Squeed_ is the goat! :goat: Hello goat! :squid:');
		} else {
			await interaction.reply(`Squeed_ is the goat! :goat: You are not the goat ${interaction.user.username}! :sob:`);
		}
	},
};