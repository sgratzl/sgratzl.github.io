---
layout: default
modal-id: telegrambots
order: 6
img: telegrambots
imgformat: png
alt: Telegram Bots
source-code: https://github.com/sgratzl/developer_webhook_bot
source-code2: https://github.com/sgratzl/yet_another_rss_bot
demo: https://t.me/developer_webhook_bot
keywords: telegram, bot, rss, webhook, github
project-date: since October 2019
category: Open Source Contributions
technologies: typescript, serverless, netlify, telegraf, mongodb
---

[Telegram](https://telegram.org/) is a sweet instant messenger with various different security features. However, from a developer point of view the most interesting part is the easy development of custom [Telegram Bots](https://core.telegram.org/bots). Bot are really nice especially when it comes to developer information such as Github notifications.

Based on an existing [Github Bot implementation](https://t.me/githubrevisedbot) I created my own version the [Developer Webhook Bot](https://github.com/sgratzl/developer_webhook_bot). It is a stateless bot which acts as a webhook sink. Each message the bot receives via the webhook will be parsed and forwarded to the configured channel. So far Github, Bitbucket, and CircleCI are supported. The bot itself is implemented in a serverless manner, thus when the bot receives a messages from Telegram or an incoming webhook it will trigger a serverless function hosted on [Netlify](https://docs.netlify.com/functions/build-with-javascript/). The advantage of this approach is that it avoid binding ressources that would be used for polling and checking for updates. Moreover, in this case the deployment is for free.

Based on this initial experience I created another Telegram bot for parsing and forwarding RSS messages. The [Yet Another RSS Bot](https://github.com/sgratzl/yet_another_rss_bot) is an experiment for a stateless RSS Bot. Tho, RSS requires polling. I'm using the free [Cron Job](https://cron-job.org/en/) website to trigger my stateless function regularly. Moreover, to store the configuration I use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). The main application of this job is to give me updates on sites like [heise.de](https://heise.de/).
