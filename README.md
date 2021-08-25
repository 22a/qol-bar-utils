# [QoL Bar utils](https://qol-bar-utils.netlify.app/)

A web app with a set of utilities for encoding, decoding, and generating (from a proprietary declarative schema) config export strings for the [QoL Bar](https://github.com/UnknownX7/QoLBar) plugin for [XIVLauncher](https://github.com/goatcorp/FFXIVQuickLauncher) for FFXIV.

<img width="1392" alt="Screenshot 2021-08-25 at 19 41 39" src="https://user-images.githubusercontent.com/7144173/130848238-90659972-66cc-43f3-85d0-ad859fc17277.png">

<img width="1392" alt="Screenshot 2021-08-25 at 19 41 45" src="https://user-images.githubusercontent.com/7144173/130848247-d65a9406-9e5e-4b6f-9b8f-b8636c62577c.png">

<img width="1392" alt="Screenshot 2021-08-25 at 19 41 54" src="https://user-images.githubusercontent.com/7144173/130848251-a1b7136a-b405-4ef5-a10b-728614a02152.png">

<img width="1392" alt="Screenshot 2021-08-25 at 19 42 04" src="https://user-images.githubusercontent.com/7144173/130848257-5e391d77-0dfc-4e5c-af40-57784dfb8032.png">


### Why does this exist?
I wanted a way to build the QoL Bar hotbars using a text editor instead of clicking around in game / without needing to relaunch the game after modifying `%appdata%\XIVLauncher\pluginConfigs\QolBar.json`.

It took way longer to build this than it would have taken to have just done it in game but at least now it's trivially extensible for when new jobs/emotes arrive and the bars need to be updated. Having [a way to generate bars programatically](https://github.com/22a/qol-bar-utils/blob/5c22e098eacfb5ef438582e4b8105ff31728ac49/app/lib/personal-schema.js#L60-L78) is nice too.
