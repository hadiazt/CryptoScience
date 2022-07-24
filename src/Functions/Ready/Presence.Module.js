module.exports = (client) => {
    client.user.setPresence({
        status: 'dnd',
        activities: [{
            type: 'WATCHING',
            name: 'Crypto Prices',
        }]
    });
}