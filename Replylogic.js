function replyLogic(msg) {
    const m = msg.toLowerCase().trim();

    if (m.includes('habari')) return "Habari yako pia!";
    if (m.includes('jina')) return "Mimi ni WhatsApp bot wako.";
    if (m.includes('bye')) return "Tutaonana!";

    return "Samahani, sikuelewa. Tafadhali andika tena.";
}

module.exports = replyLogic;
