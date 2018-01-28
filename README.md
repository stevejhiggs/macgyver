# MacGyver

Building a better mullet.

Inspired by mullet.io it's a combination of react + typescript on the frontend and koa2 on the backend. It started as a simple one off client example but is now growing to encompass a variety of different examples for people to take apart and play with.

# Available examples

## Client side
These operate without any sort of server side rendering

* simpleComponent - the simplest possible implementation of react. Shows how to get the views built and injected client side.
* redux -> simple component - shows how to use the fantastic redux flux implementation
* redux -> connectedComponent - covers splitting components up into stateful and presentational sub-components
* redux -> react-router - adding routing to redux
* redux -> twitterBootstrap - using react-bootstrap to make things prettier
* redux -> async api - shows how to handle async calls to external services

## Universal
Markup is rendered both server and client side.

* redux -> react-router - universal version of the client side react router demo

## Installation

    Install node >= 8

    git clone https://github.com/stevejhiggs/macgyver

    cd macgyver

## running an example

    cd [EXAMPLENAME]

    yarn

    yarn start

Point your browser to wherever the example is running (it will say in the console)

## development

yarn start will give you auto file watching, rebuilding and restarting
