@AddAbility('biubiu')
class SuperMan {

}

// function AddAbility(target) {
//   target.fly = true;
//   return target;
// }

function AddAbility(ability) {
  return function (target) {
    target.fly = true;
    return target;
  };

}

console.log(SuperMan['biubiu']);
console.log(SuperMan['fly']);
