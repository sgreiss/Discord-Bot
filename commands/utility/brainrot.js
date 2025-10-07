const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brainrot')
		.setDescription('Replies with Brainrot O_O'),
	async execute(interaction) {
		await interaction.reply('Skibidi, skibidi, on the wall, who is the rizziest of them all?');
	},
};