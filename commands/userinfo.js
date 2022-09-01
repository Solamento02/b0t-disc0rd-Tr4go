module.exports = {
  name: 'userinfo',
  description: 'Pegar info do user',
  options: [
    {
      name: 'user',
      type: 1,
      description: 'O user que você quer a info',
      required: true,
    },
  ],
  execute(interaction, client) {
    const member = interaction.options.get('user').value;
    const user = client.users.cache.get(member);

    interaction.reply({
      content: `Nome: ${user.username}, Avatar: ${user.displayAvatarURL({dynamic: true})}`,
      ephemeral: false // muda para 'true' se você quiser deixar vísivel somente para você
    });
  },
};