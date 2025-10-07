const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('boring')
		.setDescription('Use to maintain discord dev badge'),
	async execute(interaction) {
		await interaction.reply("Wassup master, I am here to maintain your discord dev badge. I'll see you again in another month.");
	},
};