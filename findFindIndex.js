//FindFindIndex
//
//
//findUserByUsername
//
function findUserByUsername(array, str) {
    return array.find(function (val) {
        return val['username'] == str;
    });
}
const users = [{ username: 'mlewis' }, { username: 'akagen' }, { username: 'msmith' }];
console.log(findUserByUsername(users, 'mlewis'));
//
//removeUser
//
function removeUser(array, str) {
    let found = array.findIndex(function (val) {
        return val['username'] === str;
    });

    if (found != -1) return array.splice(found, 1);
    else {
        return;
    }
}

console.log(removeUser(users, 'akagen'));
console.log(removeUser(users, 'mlewis'));
console.log(removeUser(users, 'akagen'));
console.log(removeUser(users, 'mlewis'));
