function gameplay() {
    let name = prompt("請輸入名字：", "路人甲");
    if (name) alert(name + " ，遊戲開始了！");
    else alert("陌生人，遊戲開始了！");

    if (confirm("其實這個挑戰有點難，你確定要上嗎？")) {
        alert("好樣的，那就開始吧！");

        if (qes("第一個問題", "正確選項", "錯誤選項", false)) return; //選是就結束遊戲
        if (qes("第二個問題", "正確選項", "錯誤選項", true)) return; //取消就結束遊戲
        if (qes("第三個問題", "正確選項", "錯誤選項", false)) return; //選是就結束遊戲
        if (qes("第四個問題", "正確選項", "錯誤選項", true)) return; //取消就結束遊戲
        if (qes("第五個問題", "正確選項", "錯誤選項", false)) return; //選是就結束遊戲
        alert("恭喜，你全過關了！");


    } else alert("好吧，放棄有時也是一種選擇。");
    return;

}

qes = (msg, good, bad, bol) => {
    if (confirm(msg) == bol) alert(good+" 過關");
    else {
        alert(bad + " 失敗\n" + "遊戲已結束，下次再努力").then(()=>location.reload());
    }
    return;
}

gameplay();