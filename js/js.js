
function gameplay(){
    const { value: text } = await Swal.fire({
        input: 'text',
        inputPlaceholder: 'May I have your name, please?'
      })
      
      if (text) {
        Swal.fire({
        title: "Get bored?",
  text: "Let the games....begin.",
  imageUrl: "./img/illusions.jpg",
  imageWidth: 600,
  imageHeight: 300,
  imageAlt: "Custom image",
});
}
}

gameplay();

//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 1500
//   });
