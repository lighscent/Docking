const express = require("express");
const createDockerClient = require("../lib/dockerClient");

const router = express.Router();
const docker = createDockerClient();

router.get("/containers", async (req, res) => {
    const containers = await docker.listContainers({ all: true });
    res.render("containers", { containers });
});

router.get("/images", async (req, res) => {
    const images = await docker.listImages();
    res.render("images", { images });
});

module.exports = router;
