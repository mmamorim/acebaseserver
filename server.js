const { AceBaseServer } = require('acebase-server');
const dbname = 'withwit_db01';

const settings = {
    host: 'localhost',
    port: 5757,
    authentication: {
        enabled: true,
        allowUserSignup: false,
        defaultAccessRule: 'auth',
        defaultAdminPassword: 'super'
    }
};
const server = new AceBaseServer(dbname, settings);

server.on("ready", () => {
    console.log("SERVER ready");
});