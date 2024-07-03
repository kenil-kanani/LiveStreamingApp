const NodeMediaServer = require('node-media-server');

const config = {
    rtmp : {
        port : 1935,
        chunk_size : 60000,
        ping : 30, // every 30 seconds obs will send a ping to check if the server is alive
        ping_timeout : 60, // if no ping response, consider the server down after 60 seconds
        gop_cache : true, // this will cache the last 10 seconds of video
    },
    http : {
        port : 8080,
        allow_origin : '*',
    }
}

const server = new NodeMediaServer(config);

server.run();