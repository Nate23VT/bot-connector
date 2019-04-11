module.exports = {
    db: {
        host: 'localhost',
        port: 27017,
        dbName: 'botconnector',
    },
    server: {
        port: 8080,
    },
    redis: {
        port: 6379,
        host: 'localhost',
        auth: '',
        db: 7,
        options: {}, // see https://github.com/mranney/node_redis#rediscreateclient
    },
    mail: {}, // valid object to be passed to nodemail.createTransport()
    base_url: 'http://localhost:8080', // base url of the connector
    facebook_app_id: '',
    facebook_app_secret: '',
    facebook_app_webhook_token: '',
    amazon_client_id: '', // Client ID for use with Login with Amazon (Amazon Alexa channel)
    amazon_client_secret: '', // Client Id for use with Login with Amazon (Amazon Alexa channel)
}
