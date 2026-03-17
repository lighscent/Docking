const express = require("express");
const createDockerClient = require("../lib/dockerClient");

const router = express.Router();
const docker = createDockerClient();

router.get("/", async (req, res) => {
    const containers = await docker.listContainers({ all: true });
    res.json(containers);
});

const action = (name) => async (req, res) => {
    const container = docker.getContainer(req.params.id);
    await container[name]();
    res.json({ ok: true });
};

router.post("/:id/start", action("start"));
router.post("/:id/stop", action("stop"));
router.post("/:id/restart", action("restart"));
router.delete("/:id", async (req, res) => {
    const container = docker.getContainer(req.params.id);
    await container.remove({ force: true });
    res.json({ ok: true });
});

module.exports = router;
