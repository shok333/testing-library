export function asyncFuncWithCallback (a, callback) {
  setTimeout(() => {
    callback(a * a * a);
  }, 2000);
}