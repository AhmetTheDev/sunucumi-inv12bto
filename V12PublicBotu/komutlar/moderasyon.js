const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("TITAN v12 sürümüyle sizlerle.")
.setTitle("<a:titan_17:773903629236961340> TITAN Moderasyon Komutları <a:titan_17:773903629236961340>")
 .setTimestamp()
.setDescription("<a:titan_17:773903629236961340> **-sil** = Yazdığınız miktarda mesajı siler. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-ban** = Etiketlediğiniz kişiyi banlarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-kick** = Etiketlediğiniz kişiyi atarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-duyuru** = Bota duyuru yaptırırsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-küfür** = Küfür engel sistemini açarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-reklam** = Reklam engel sistemi açarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340>**-slowmode** = Yavaş modu ayarlarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-forceban** = Birisine id ban atarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-unban** = Birisinin banını açarsınız. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-sa-as** = Bot biri sa dedimi cevap verir. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-sunucubilgi** = Sunucu bilgilerini görürsün. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-üyedurum** = Üyelerin durumlarını görürsün. <a:titan_17:773903629236961340> \n <a:titan_17:773903629236961340> **-çekiliş** = Çekiliş başlatırsınız. <a:titan_17:773903629236961340>")





.setImage("https://cdn.glitch.com/e094d4aa-0922-4502-a647-283850b722b4%2Fezgif-4-c9df40749912.gif?v=1605104262848")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}