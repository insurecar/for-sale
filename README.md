## Template: Kurfiss Sothebys 1 - For Sale

Or Kurfiss Sothebys 1 - For Sale

This repository is also upstream for https://github.com/marketertechnologies/template_kurfiss_1_for-sale

## Development

- Clone repository
- Install dependencies using `npm install`
- Run `npm run dev` for live preview/reloading

If changes you're going to make are also applicable to `template_kurfiss_1_for-sale`
- make the changes
- `git push` it
- go back to the `template_ev_1_property`
- and follow readme instructions

## Translations

How to add new locale:
- `npx ttag init uk_UA src/locales/uk_UA.po`
- Update `availableLocales` in ./src/locale.js

How to update existing locale:
- `npx ttag update src/locales/nb_NO.po src`

How to port existing locale to json:
- `npx ttag po2json src/locales/nb_NO.po > src/locales/nb_NO.po.json`

Remember that update-and-port should be done for ALL locales in src/locales.

## Building and publishing

Need M1 walkthrough steps from Jacek.