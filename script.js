function yshj() {
    var texts = [
        "一切力量皆有其代价,一千种权力伴随着一千种责任。", 
        "为了正确之路，人们不断放弃，不断失去。", 
        "见证者，为见证而来。铭记者，因铭记而生。", 
        "欲买桂花同载酒...只可惜故人，何日再见呢?", 
        "朋友，假使有一日不得不同你相别，你在我的记忆中也会如黄金般闪耀。",
        "复白亘古事，诗人起歌喉。众神居尘世，人间几春秋。",

        
    ];
    
    var randomNumber = Math.floor(Math.random() * texts.length);
    var randomText = texts[randomNumber];
    
    document.getElementById("ys").innerText = randomText;
}

window.onload = yshj; // 页面加载时调用 getRandomText 函数
