//delay(somefunction, (waitTime as number in milliseconds), (e is somefunctions params))

export const delay = () => {
    console.log('hits delay');
    var
        initialTime,
        invokeFunc,
        timer,
        checkTime,
        event;

    timer = () => {
      console.log('set timer');
      setTimeout(checkTime, 3000)
    }

    invokeFunc = () => {

      return console.log('hits delayed function' + this.timeLeft)
    }

    let timeLeft = (timeout) => {
      return Math.ceil((timeout._idleStart + timeout._idleTimeout - Date.now()) / 1000);
    }

    checkTime = (timeLeft === 0) ? invokeFunc : clearTimeout( timer )
  };
