const Docker = require("dockerode");

function createDockerClient() {
    const opts = {};
    if (process.env.DOCKER_HOST) {
        opts.host = process.env.DOCKER_HOST;
    } else if (process.platform === "win32") {
        opts.socketPath = "\\\\.\\pipe\\docker_engine";
    } else {
        opts.socketPath = "/var/run/docker.sock";
    }
    return new Docker(opts);
}

module.exports = createDockerClient;
