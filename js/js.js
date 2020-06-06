
function gameplay() {

  Swal.fire({
    title: '請輸入名字：',
    input: 'text',
    inputPlaceholder: '路人甲',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire(text)
  }
  
  
  
  
  // Swal.fire({
  //   title: 'Sweet!',
  //   text: 'Modal with a custom image.',
  //   imageUrl: 'https://unsplash.it/400/200',
  //   imageWidth: 400,
  //   imageHeight: 200,
  //   imageAlt: 'Custom image',
  // })

}
gameplay();