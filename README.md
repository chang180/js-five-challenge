###  課堂作業
建立空白網頁，使用 ifelse, alert, confirm, prompt，設計一個是非題之闖 5 關遊戲。每題都有提示要不要做，猜對繼續闖關，猜錯直接結束遊戲。主體結構如下：


  <script>
        function gameplay() {
            1. prompt: 遊戲說明並取得 NAME=xxx，回饋訊息顯示；
            2. confirm: 詢問用戶 XXX 是否要進行遊戲，回饋訊息顯示；
                - TRUE:
                    if(qus（問題內容，好訊息，壞訊息，T/F)) return;
                    恭喜成功；
                - FALSE:
                    不想玩就 881;
        }
        function qus（問題，好，壞，布林）{
            1. confirm: 顯示題目取得 TorF==布林
                - TRUE: 顯示好訊息
                - FALSE: 顯示壞訊息 return TRUE;
        }
        gameplay();
        </script>
