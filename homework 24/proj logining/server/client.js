// function ajax({ url, method, data, success, error = () => {} }) {
//     const xhttp = new XMLHttpRequest();
  
//     xhttp.onload = () => {
//       const response =
//         typeof xhttp.response === "string"
//           ? JSON.parse(xhttp.response)
//           : xhttp.response;
  
//       success(response, xhttp.status);
//     };
  
//     xhttp.onerror = error.bind(xhttp);
  
//     xhttp.onprogress = function (event) {
//       if (event.lengthComputable) {
//         console.log(`Получено ${event.loaded} из ${event.total} байт`);
//       } else {
//         console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//       }
//     };
  
//     xhttp.open(method, url);
  
//     method.toLowerCase() === "post"
//       ? xhttp.send(JSON.stringify(data))
//       : xhttp.send();
//   }
  
//   const button = document.querySelector("#foo");
  
//   const user = {
//     login: "pety",
//     password: "aaaaabbbb",
//   };
  
//   button.addEventListener("click", function () {
//     ajax({
//       url: `http://localhost:3005/users`,
//       method: "post",
//       data: user,
//       success: (data, status) => {
//         // createGoods(data);
//         console.log(status, data);
//       },
//       error: (error) => console.log(error, "error"),
//     });
//   });
function ajax({ url, method, data, success, error = () => {} }) {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = () => {
    const response =
      typeof xhttp.response === "string"
        ? JSON.parse(xhttp.response)
        : xhttp.response;

    success(response, xhttp.status);
  };

  xhttp.onerror = error.bind(xhttp);

  xhttp.onprogress = function (event) {
    if (event.lengthComputable) {
      console.log(`Получено ${event.loaded} из ${event.total} байт`);
    } else {
      console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
    }
  };

  xhttp.open(method, url);

  method.toLowerCase() === "post"
    ? xhttp.send(JSON.stringify(data))
    : xhttp.send();
}

const button = document.querySelector("#foo");

const user = {
  login: "pety",
  password: "aaaaabbbb",
};

button.addEventListener("click", function () {
  ajax({
    url: `http://localhost:3005/users`,
    method: "post",
    data: user,
    success: (data, status) => {
      // createGoods(data);
      console.log(status, data);
    },
    error: (error) => console.log(error, "error"),
  });
});