let msgCursor = db.messages.find();
while (msgCursor.hasNext()) {
    let msg = msgCursor.next();
    let tmsg = { ...msg, text: msg.text.toUpperCase() };
    printjson(tmsg);
}
