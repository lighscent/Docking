const express = require("express");
const createDockerClient = require("../lib/dockerClient");

const router = express.Router();
const docker = createDockerClient();

router.get("/", async (req, res) => {
    const images = await docker.listImages();
    res.json(images);
});

router.post("/pull", async (req, res) => {
    const name = req.query.name || req.body.name;
    if (!name) return res.status(400).json({ error: "Missing image name" });

    const stream = await docker.pull(name);
    await new Promise((resolve, reject) => {
        docker.modem.followProgress(stream, (err) => (err ? reject(err) : resolve()));
    });

    res.json({ ok: true });
});

module.exports = router;
