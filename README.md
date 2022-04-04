## What's the idea?

The idea is to use the data in the protobuf format to reduce the load of data transported in a Rest API, still using HTTP.

## How do we do it?

We will use the Protobufjs library to perform the necessary conversions. The Rest API will be done through the server using Express.js

## Initializing project

To start the project, follow these steps:

 - Install dependencies with `yarn`

 - Start the server with the `yarn start`

## Producer

Producer's idea is to return a protobuf from a fake database.
To do this, follow these steps:

 - Create an HTTP POST request: ```localhost:3000/api/producer```

 - Check the output in Protobuf of the fake database produced

## Consumer

The consumer's idea is to receive data in JSON and produce an output in Protobuf. For decoding to be possible, the parameters of the .proto file must be respected. Follow the steps below:

 - Create an HTTP POST request: ```localhost:3000/api/consumer```

 - Pass a payload that respects the schema of the .proto file. An example of this file is:

 ```
 [
    {"name":"Anderson Amorim", "email":"andersonamorim939@gmail.com", "type":"Premium","cash":12750.50},
    {"name":"Anderson Santos", "email":"andersonasantos@gmail.com", "type":"Basic","cash":120}
  ]
 ```

 - Check the protobuf created from the consumed paylaod

### References
 
 - https://www.npmjs.com/package/protobufjs

 - https://thecodebarbarian.com/working-with-protobufs-in-node-js.html