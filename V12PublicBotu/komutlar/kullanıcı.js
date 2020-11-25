const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("TITAN v12 sürümüyle yeniden sizlerle.")
.setTitle("<<a:titanok:775416011499241533> TITAN Kullanıcı Komutları <a:titanok:775416011499241533>")
 .setTimestamp()
.setDescription(" <a:titan_17:773903629236961340> **!avatar** = Avatarınıza bakarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **!yetkilerim** = Yetkilerini görürsün. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **!profil** = Profilini görürsün. <a:titan_17:773903629236961340> \n  **!sunucuresmi** = Sunucu resmini gösterir. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **!ping** = Botun Pingine Bakarsın. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **!id** = Birisinin id'sine Bakarsın. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **!davet** = Beni Sunucuna Ekle. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **!botbilgi** = Bot istatistiklerini görürsünüz. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. <a:titan_17:773903629236961340>")
.setImage("https://cdn.discordapp.com/attachments/744536225230094360/751100899836821534/Night_Sky_Mountain_Decorative_Border_Youtube_Thumbnail.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}