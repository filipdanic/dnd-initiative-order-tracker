# dnd-initiative-order-tracker

A React.js app for keeping tracker of turn/initiative order in Dungeons and Dragons.

All of the code was developed during my [🔴 Twitch live stream](https://www.twitch.tv/filipdanic). It’s posted in the [video section](https://www.twitch.tv/filipdanic/videos/all) as we as on my [🎥 YouTube channel.](https://www.youtube.com/watch?v=5Vhbo9Mloew&list=PLtzWdT8JUrMYWlSoXvs4E3SrSEn8W68xN)

You’re welcome to read the code and submit a PR with new features, bugfixes, or code quality improvements.

## Features

### Track Combatants and Roll a D20

Add all combatants to the list as cards. You can manually enter their initiative, or click on the D20 button to roll a die for them. You can also keep track of their health.

### Track Current Turn

To keep track of whose turn it is, just toggle between combatants with `ctrl+k` or `cmd+k` to switch highlighting.

### LocalStorage Sync

Everything is synced with the browser localStorage. If you close the tab and get back to it later, the turn order and all parameters will be saved.

## Links & Thanks

These open source libraries are featured in the project:

- ️[`create-react-app`](https://github.com/facebook/create-react-app)
- [`styled-components`](https://www.styled-components.com/)
- [`react-flip-move`](https://github.com/joshwcomeau/react-flip-move)
- [`mousetrap`](https://craig.is/killing/mice)
- [`store2`](https://github.com/nbubna/store)


You can follow me:

- [YouTube channel](https://www.youtube.com/channel/UClctBvKpOUts0_B_kvooo_w)
- [Twitch page](https://www.twitch.tv/filipdanic/)
- [Twitter @DanicFilip](https://twitter.com/DanicFilip)
