var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var max_name = friends[0]; 
for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > max_name.length) { 
        max_name = friends[i]; 
    }
}
console.log(max_name);