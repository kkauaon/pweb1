function newPost() {
    let channelSelect = document.querySelector("#channelSelect")

    if (channelSelect.value == "Escolha o canal")
        return alert("Você deve escolher o canal para enviar sua postagem.")
    else
        return alert("Postagem criada em " + channelSelect.value + "!")
}