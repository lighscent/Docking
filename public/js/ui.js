async function actionContainer(id, action) {
    const method = action === "remove" ? "DELETE" : "POST";
    const res = await fetch(`/api/containers/${id}/${action}`, { method });
    if (!res.ok) {
        const error = (await res.json().catch(() => ({}))).error || res.statusText;
        return alert(`Failed: ${error}`);
    }
    location.reload();
}

async function pullImage() {
    const name = document.getElementById("imageName").value.trim();
    if (!name) return alert("Enter an image name");

    const res = await fetch(`/api/images/pull?name=${encodeURIComponent(name)}`, { method: "POST" });
    if (!res.ok) {
        const err = (await res.json().catch(() => ({}))).error || res.statusText;
        return alert(`Pull failed: ${err}`);
    }

    alert("Image pulled");
    location.reload();
}
