# whiskeyclub

This is a Phoenix backend that provides a REST-ful API and renders a React frontend.

#Install

Follow the Phoenix installation guide to get Erlang (runtime), Elixir
(language), and finally Phoenix (framework) installed.

http://www.phoenixframework.org/docs/installation
- Noted on the installation page, but Erlang was installed automatically with Elixir installer (on Windows)

#Build

Run a Phoenix dev server with `mix phoenix.server` and it will watch for
changes to both the Phoenix and React components and re-render them.
- Note: might encounter some errors here, just do what the error message suggests and that should resolve it

#Other Info
`npm run lint` - runs linting with a simple set of style guidelines/rules

Notes:
- starting out with a web form to enter survey results about different whiskeys
    - data should be stored to a database (see diagram)
- some way to view the data would be cool too

https://github.com/christianalfoni/formsy-react
    - might be useful for the forms
