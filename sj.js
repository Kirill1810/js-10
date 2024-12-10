// const displayMessage = (message) => message;
//  const message = alert("Hello World");
//  console.log(displayMessage(message));




//  const guessNumber = (number) => {
//        const message = prompt("вгадай число");
//       if (message === number) {
//          return alert("да");

//      } 
     
//      else {
//        return alert(`Неправильно: ${number}`);
//       }
//      };

//      let randomNumber = Math.round(Math.random (100 - 1) + 1);
//      console.log(guessNumber(randomNumber));




    //  const clickMessage = (clicks) => {
    //     for (let i = 0; i < 10; i++) {
    //       if (clicks === 9) {
    //         alert("ну все ліміт капець");
    //         break;
    //       } else {
    //         clicks = i;
    //         console.log(clicks);
    //         alert(`Ви зробили ${clicks} кліків`);
    //         continue;
    //       }
    //     }
    //   };
    //   const message = alert("Клікніть кліків");
    //   const totalClicks = 0;
    //   console.log(clickMessage(message, totalClicks));




      // const arr =  [1, 2, 3, 4, 5]

      const arr = (a, b, c) => a + b + c;

     const makeMessage = (arrCallBack, a, b, c) => arrCallBack(a, b, c);
      
       console.log(makeMessage(arr, 1, 2, 3, 4, 5));
      const callback = 0;
      

