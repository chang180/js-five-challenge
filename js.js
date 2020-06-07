
function gameplay() {
  let name;
  Swal.fire({
    title: '想練練眼力嗎？請先輸入名字：',
    input: 'text',
    inputValue: '路人甲',
    // showLoaderOnConfirm: true,
    confirmButtonText: '輸入',
    cancelButtonText: '略過',
    showCancelButton: true,
    allowOutsideClick: false
  }).then((result) => {
    name = result.value;
    // if (result.dismiss === 'cancel') {
    if (!result.value) {
      Swal.fire({
        title: '其實我也不是這麼想知道你是誰',
        text: '陌生人，遊戲開始了',
        allowOutsideClick: false,
        // imageUrl: 'files/00.jpg',
        // imageHeight: 300
      }).then(start);
    }
    else {
      Swal.fire({
        title: result.value + '，名字取的不錯',
        text: '遊戲開始了',
        allowOutsideClick: false,
        // imageUrl: 'files/01.jpg',
        // imageHeight: 300
      }).then(start);
    }
  });
}

function start() {
  // let mission;
  Swal.fire({
    width: 1000,
    title: name + ' 其實這個挑戰有點難，先來張圖試看一下',
    text: "一旦答錯馬上就出局，你確定要上嗎？",
    confirmButtonText: '上吧！',
    cancelButtonText: '那就算了吧',
    showCancelButton: true,
    allowOutsideClick: false,
    imageUrl: 'img/ex.jpg',
    imageHeight: 600,
    imageWidth: 800,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.dismiss === 'cancel') {
      Swal.fire({
        width: 1000,
        title: "好吧，放棄有時也是一種選擇。",
        allowOutsideClick: false,
        imageUrl: 'img/illusions.jpg',
        imageHeight: 600,
        imageWidth: 800
      }).then(() => location.assign("index.html"));
      return;
    }
    else {
      Swal.fire({
        title: '好樣的！',
        text: `欣賞你的勇氣，開始闖五關吧！`,
        allowOutsideClick: false,
        // imageUrl: 'files/12.gif',
        // imageHeight: 300
      }).then(() => {
        Swal.fire({
          title: "第一張圖片",
          text: "這張圖顯示了什麼？",
          confirmButtonText: "一顆星",
          cancelButtonText: "一顆心",
          showCancelButton: true,
          allowOutsideClick: false,
          imageUrl: 'img/p1.jpg',
          width: 1000,
          imageHeight: 800,
          imageHeight: 600,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        }).then((result) => {
          if (result.dismiss !== 'cancel') {
            Swal.fire({
              //B
              width: 1000,
              title: "錯啦",
              text: "麻煩下次請專心點",
              confirmButtonText: "重新來過",
              allowOutsideClick: false,
              imageUrl: "img/p0.jpg",
              imageHeight: 800,
              imageHeight: 600,
            }).then(() => location.reload());
            return;
          }
          else {
            Swal.fire({ //G
              width: 1000,
              title: "過關",
              text: "就是一顆心",
              allowOutsideClick: false,
              imageUrl: 'img/p6.jpg',
              imageHeight: 800,
              imageHeight: 600,
            }).then(() => {
              Swal.fire({
                title: "第二張圖片",
                text: "這張圖顯示了什麼？",
                confirmButtonText: "e=mc2",
                cancelButtonText: "f=ma",
                showCancelButton: true,
                allowOutsideClick: false,
                imageUrl: 'img/p2.png',
                width: 1000,
                imageHeight: 800,
                imageHeight: 600,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33'
              }).then((result) => {
                if (result.dismiss === 'cancel') {
                  Swal.fire({
                    //B
                    width: 1000,
                    title: "錯啦",
                    text: "麻煩下次請專心點",
                    confirmButtonText: "重新來過",
                    allowOutsideClick: false,
                    imageUrl: "img/p0.jpg",
                    imageHeight: 800,
                    imageHeight: 600,
                  }).then(() => location.reload());
                  return;
                }
                else {
                  Swal.fire({ //G
                    width: 1000,
                    title: "過關",
                    text: "繼續下一關",
                    allowOutsideClick: false,
                    imageUrl: 'img/p6.jpg',
                    imageHeight: 800,
                    imageHeight: 600,
                  }).then(() => {
                    Swal.fire({
                      title: "第三張圖片",
                      text: "這張圖顯示了什麼？",
                      confirmButtonText: "海星",
                      cancelButtonText: "海馬",
                      showCancelButton: true,
                      allowOutsideClick: false,
                      imageUrl: 'img/p3.jpg',
                      width: 1000,
                      imageHeight: 800,
                      imageHeight: 600,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33'
                    }).then((result) => {
                      if (result.dismiss === 'cancel') {
                        Swal.fire({
                          //B
                          width: 1000,
                          title: "錯啦",
                          text: "麻煩下次請專心點",
                          confirmButtonText: "重新來過",
                          allowOutsideClick: false,
                          imageUrl: "img/p0.jpg",
                          imageHeight: 800,
                          imageHeight: 600,
                        }).then(() => location.reload());
                        return;
                      }
                      else {
                        Swal.fire({ //G
                          width: 1000,
                          title: "過關",
                          text: "不錯哦，繼續挑戰",
                          allowOutsideClick: false,
                          imageUrl: 'img/p6.jpg',
                          imageHeight: 800,
                          imageHeight: 600,
                        }).then(() => {
                          Swal.fire({
                            title: "第四張圖片",
                            text: "這張圖顯示了什麼？",
                            confirmButtonText: "PK",
                            cancelButtonText: "OK",
                            showCancelButton: true,
                            allowOutsideClick: false,
                            imageUrl: 'img/p4.jpg',
                            width: 1000,
                            imageHeight: 800,
                            imageHeight: 600,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33'
                          }).then((result) => {
                            if (result.dismiss !== 'cancel') {
                              Swal.fire({
                                //B
                                width: 1000,
                                title: "錯啦",
                                text: "麻煩下次請專心點",
                                confirmButtonText: "重新來過",
                                allowOutsideClick: false,
                                imageUrl: "img/p0.jpg",
                                imageHeight: 800,
                                imageHeight: 600,
                              }).then(() => location.reload());
                              return;
                            }
                            else {
                              Swal.fire({ //G
                                width: 1000,
                                title: "過關",
                                text: "不錯哦，繼續加油",
                                allowOutsideClick: false,
                                imageUrl: 'img/p6.jpg',
                                imageHeight: 800,
                                imageHeight: 600,
                              }).then(() => {
                                Swal.fire({
                                  title: "第五張圖片",
                                  text: "這張圖顯示了什麼？有點難哦。",
                                  confirmButtonText: "XO",
                                  cancelButtonText: "3D",
                                  showCancelButton: true,
                                  allowOutsideClick: false,
                                  imageUrl: 'img/p5.jpg',
                                  width: 1000,
                                  imageHeight: 800,
                                  imageHeight: 600,
                                  confirmButtonColor: '#3085d6',
                                  cancelButtonColor: '#d33'
                                }).then((result) => {
                                  if (result.dismiss !== 'cancel') {
                                    Swal.fire({
                                      //B
                                      width: 1000,
                                      title: "錯啦",
                                      text: "麻煩下次請專心點",
                                      confirmButtonText: "到這裏還錯，不是都用猜的吧？",
                                      allowOutsideClick: false,
                                      imageUrl: "img/p0.jpg",
                                      imageHeight: 800,
                                      imageHeight: 600,
                                    }).then(() => location.reload());
                                    return;
                                  }
                                  else {
                                    Swal.fire({ //G
                                      width: 1000,
                                      title: "過關",
                                      text: "真是厲害",
                                      allowOutsideClick: false,
                                      imageUrl: 'img/p6.jpg',
                                      imageHeight: 800,
                                      imageHeight: 600,
                                    }).then(() => {
                                      Swal.fire({ //破臺
                                        width: 1000,
                                        title: "恭喜，全通關",
                                        text: "歡迎進入3D的世界，看得出這張圖了吧？",
                                        allowOutsideClick: false,
                                        imageUrl: 'img/cong.jpg',
                                        imageHeight: 900,
                                        imageHeight: 700,
                                      }).then(() => location.assign("clear/index.html"));
                                    })
                                  }
                                })
                              });
                            }
                          })
                        });
                      }
                    })
                  });
                }
              })
            });
          }
        })
      });
    }
  });
  return;
}



gameplay();