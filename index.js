var handleFulfilled = (success) => {
  console.log("Callback de sucesso: " + success);
  return success;
};

var handleRejected = (error) => {
  console.log("Callback de erro: " + error);
  return error;
};

const myPromise = new Promise((resolve, reject) => {
  console.log("Promise instanciada\n");

  if (true) {
    setTimeout(resolve("Promise resolvida\n"), 3000);
  } else {
    setTimeout(reject("Promise rejeitada\n"), 3000);
  }
});




// ---------- Introdução ----------
/*
myPromise
  .then(handleFulfilled, handleRejected);

myPromise
  .then(handleFulfilled)
  .catch(handleRejected);

myPromise
  .then(function () {
    console.log("Callback de sucesso: Promise resolvida\n");
  })
  .catch(function () {
    console.log("Callback de erro: Promise rejeitada\n");
  })

console.log("\noi\n")
*/




// ---------- Encadeamento ----------
/*
var handleFulfilledA = (success) => {
  console.log("Callback de sucesso A: " + success);
  return success;
};

var handleFulfilledB = (success) => {
  console.log("Callback de sucesso B: " + success);
  return success;
};

var handleFulfilledC = (success) => {
  console.log("Callback de sucesso C: " + success);
  return success;
};

var handleRejectedA = (error) => {
  console.log("Callback de erro A: " + error);
  return error;
};

var handleRejectedB = (error) => {
  console.log("Callback de erro B: " + error);
  return error;
};

var handleRejectedC = (error) => {
  console.log("Callback de erro C: " + error);
  return error;
};

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC);

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch((error) => {
    console.log(error);
  });

myPromise
  .then(function (result) {
    console.log("Callback de sucesso A: " + result);
    return result;
  })
  .then(function (newResult) {
    console.log("Callback de sucesso B: " + newResult);
    return newResult;
  })
  .then(function (finalResult) {
    console.log("Callback de sucesso C: " + finalResult);
    return finalResult;
  })
  .catch((error) => {
    console.log(error);
  });
*/