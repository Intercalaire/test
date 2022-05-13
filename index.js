const Discord = require("discord.js");
const { Permissions } = require('discord.js');

const Client = new Discord.Client({  
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTcxNDI5NjcwNDQ2ODI1NDgy.YnKYYQ.KOeBxJfP_wI--n5ovCaQY1rtQ4Y")

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if(message.content === prefix + "tatakae"){
        message.reply("tatakae à toi aussi mon frère") 
        
    }
    //U!help
    else if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            //met une couleur su la barre de l'embed a gauche
            .setColor("#e59313")
            // titre de l'embed
            .setTitle("Liste des commandes")
            //met le nom de l'embed en un lien 
            .setURL("https://youtu.be/iik25wqIuFo")
            .setAuthor("Intercalaire", "https://cdn.discordapp.com/attachments/946181429363085323/971840591753261056/unknown.png")
            .setDescription("Y'a la liste des commandes du bot (c tro bi1 nn ? )")
            .setThumbnail("https://cdn.discordapp.com/attachments/946181429363085323/971840585608618004/vjbfenq.png")
            .addField("U!help", "Affiche la liste des commandes")
            .addField("U!tatakae","vous reponds 'tatakae à toi aussi mon frère'")
            .setImage("https://i.pinimg.com/474x/65/e6/e7/65e6e76099aa9c7321ac432b2d555953.jpg")
            .setTimestamp()
            .setFooter("ce bot fais des trucs, ... oui fin bon c'est déjà bien oké!")


            
        message.channel.send({ embeds: [embed]});
    }
});
/*permet de ban les membres*/
Client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(message.member.permissions.has("ADMINISTRATOR")){
      if(message.content.startsWith(prefix + "ban")){
        let mention = message.mentions.members.first();

        if(mention ==undefined){
          message.reply(",Membre non ou mal mentionné, re test frero")
        }
        else{
          if(mention.bannable){
            mention.ban();
            message.channel.send(mention.displayName + ",et hop à pu");

          }
          else{
            message.reply(",ptdr il est pas bannable")
          }
        }
      }
  }
});
/*permet de kick les membres*/
Client.on("message", message => {
  if(message.author.bot) return;
  if(message.channel.type == "dm") return;
  if(message.member.permissions.has("ADMINISTRATOR")){
      if(message.content.startsWith(prefix + "kick")){
        let mention = message.mentions.members.first();

        if(mention ==undefined){
          message.reply(",Membre non ou mal mentionné, re test frero")
        }
        else{
          if(mention.kick){
            mention.kick();
            message.channel.send(mention.displayName + ",1,2,3 disparitus maximus");

          }
          else{
            message.reply(",ptdr il est pas kickable")
          }
        }
      }
  }
});
//crée un onglet pour y faire des choix
Client.on("messageCreate", message => {
  if(message.author.bot) return;
  if(message.content === prefix + "choix"){

    var row = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageSelectMenu()
          .setCustomId("select")
          .setPlaceholder("Selectionnez une commande cooooool ;)")
          .addOptions([
            {
                label: "première option",
                description:"première desciption",
                value:"option1",              
            },
            {
              label: "seconde option",
              description: "seconde desciption",
              value: "option2"
            }
          ])
      );

    message.channel.send({content: "menu de selection", components: [row]});

}});

//complément de l'onglet crée
Client.on("interactionCreate", interaction => {
    if(interaction.isSelectMenu()){
      if(interaction.customId === "select"){
        console.log(interaction.values);

        if(interaction.values == "option1"){
          interaction.reply({content: "Vous avez séléctionné l'option une" + ", pff quelle choix de merde" , ephemeral: true})        
        }
        else if(interaction.values == "option2"){
          interaction.reply({content: "Vous avez séléctionné l'option deux" + ", wow tro bi1 ton choix perso je pense aussi c'etait le meilleur", ephemeral: true});
        }
    }
  }});
/* permet de give un role quand on met 'give @nom du joueur' (plus mettre l'id du role dans le code*/
Client.on('message', (message) => {
    if (message.content.startsWith(`give`)){
    let mention = message.mentions.members.first();
     
    if(mention == undefined){
    message.reply(`Veuillez mentionner un membre.`)
    }else{
    mention.roles.add("971807532983124038")
    }
    }
    });

    Client.on('message', (message) => {
      if (message.content.startsWith(`prendre`)){
      let mention = message.mentions.members.first();
       
      if(mention == undefined){
      message.reply(`Veuillez mentionner un membre.`)
      }else{
      mention.roles.remove("971807532983124038")
      }
      }
      });
