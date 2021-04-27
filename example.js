var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.once('ready', () => {
    console.log('Игровая активность запущена!');
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Зайди топ сайт",
state : "Реально",
assets : {
large_image : "profile",
large_text : "Вампус",
},
buttons : [{label : "Сайт" , url : "https:/romoz.ml"}]
},
})
})
client.login({ clientId : "801882941395435551" }).catch(console.error);