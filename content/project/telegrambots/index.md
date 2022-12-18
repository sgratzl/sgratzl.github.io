---
title: Telegram Bots
summary: Custom Bots for Telegram Messenger
tags:
  - Open Source
  - JavaScript
  - TypeScript
  - Serverless
  - MongoDB
  - Netlify
  - Telegram

date: "2019-01-01"

# Optional external URL for project (replaces project detail page).
# external_link: 'https://lineup.js.org'

image:
  # caption: Telegram Bots
  focal_point: Smart

links:
  - name: Code (Webhooks)
    # icon: external-link
    # icon_pack: fa
    url: https://github.com/sgratzl/developer_webhook_bot
  - name: Code (RSS Bot)
    # icon: external-link
    # icon_pack: fa
    url: https://github.com/sgratzl/yet_another_rss_bot
  - name: Telegram Bot
    icon: external-link
    icon_pack: fa
    url: https://t.me/developer_webhook_bot
# url_code: 'https://github.com/sgratzl/developer_webhook_bot'
url_pdf: ""
url_slides: ""
url_video: ""
---

[Telegram](https://telegram.org/) is a sweet instant messenger with various different security features. However, from a developer point of view the most interesting part is the easy development of custom [Telegram Bots](https://core.telegram.org/bots). Bot are really nice especially when it comes to developer information such as Github notifications.

Based on an existing [Github Bot implementation](https://t.me/githubrevisedbot) I created my own version the [Developer Webhook Bot](https://github.com/sgratzl/developer_webhook_bot). It is a stateless bot which acts as a webhook sink. Each message the bot receives via the webhook will be parsed and forwarded to the configured channel. So far Github, Bitbucket, and CircleCI are supported. The bot itself is implemented in a serverless manner, thus when the bot receives a messages from Telegram or an incoming webhook it will trigger a serverless function hosted on [Netlify](https://docs.netlify.com/functions/build-with-javascript/). The advantage of this approach is that it avoid binding resources that would be used for polling and checking for updates. Moreover, in this case the deployment is for free.

Based on this initial experience I created another Telegram bot for parsing and forwarding RSS messages. The [Yet Another RSS Bot](https://github.com/sgratzl/yet_another_rss_bot) is an experiment for a stateless RSS Bot. Tho, RSS requires polling. I'm using the free [Cron Job](https://cron-job.org/en/) website to trigger my stateless function regularly. Moreover, to store the configuration I use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). The main application of this job is to give me updates on sites like [heise.de](https://heise.de/).
