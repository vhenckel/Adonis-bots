'use strict'

const { MessengerBot, withTyping } = require('bottender');

class BulaController {

  async index ({ request, response }) {
    const bot = new MessengerBot({
      accessToken: 'EAAI2HJfbhYsBAAbCldbfMIZCSyvZAWX0AcJuls0heGBdiZBlJMuIcgxxw9Fj6K7s5ZCUdjDH2SJVN0LbhiHjpT6HnvJpKVb6nZBmHLzbKWzbEuxBLWBtmxzWpg7jvvBRfmDVZByl1ZAx8ZCWbS9Q25UaGZBM8H2B4qPZCOA6awZCBjEPAUak4ZB4txy9',
      appSecret: 'ae283bcf5ad5057cbcd001e6d651398d',
    })

    bot.use(withTyping({ delay: 2000 }));

    bot.onEvent(async context => {
      //await context.sendSenderAction('typing_on');
      console.log(context);

      if (context.event.isText) {
        await context.markSeen()
        switch (context.event.text) {
          case 'start':
            await context.sendText('Running....')
            break
          case 'help':
            await context.sendText(`
    start   start to run
    help    quick help on <command>
            `)
            break
          default:
            await context.sendText(`${context.event.text} is not a valid command.`)
        }
      }
    })
  }

}

module.exports = BulaController
