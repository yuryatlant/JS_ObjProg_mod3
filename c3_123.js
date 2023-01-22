//первое задание

newObj = {a:1,"d":"df","": ""};
function newValue (a) {
  for (let key in a) {
    if (a.hasOwnProperty(key)) console.log(key,a[key])
  }
}
newValue(newObj);

//второе задание
function checkValue (str, obj) {
    return (str in obj);
  }
if (checkValue("d",newObj)) console.log('Ключ такой есть')


//третье задание
function createObjWithoutProto() {
    return Object.create(null);
  }