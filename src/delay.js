console.log("===== Start of Task 1 =====");

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const onResolve = (time) => {
  console.log(`Resolved after ${time}ms`);
  return time;
};

const endLog = (ms) => {
  if (ms !== 1000) {
    ms = 1000;
  }
  setTimeout(() => {
    console.log("===== End of Task 1 =====");
  }, ms);
};

delay(1500).then(onResolve);
delay(2000).then(onResolve).then(endLog);
delay(1000).then(onResolve);
