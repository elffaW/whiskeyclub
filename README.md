# whiskeyclub

#Install
`npm install`

#Build
`npm run build` - runs JS through babel and bundles with webpack, outputs into build dir

`npm run watch` - does a build and then starts a mini express server for dev purposes
    - go to localhost:8080 to see the dev server
    - changes to code are picked up on the fly and page is auto-refreshed

Notes:
- starting out with a web form to enter survey results about different whiskeys
    - data should be stored to a database (see diagram)
- some way to view the data would be cool too

https://github.com/christianalfoni/formsy-react
    - might be useful for the forms
