function ticket(arg) {
    var vasya = 0
    for(var i=0;i<arg.length;i++){
        if(arg[0]!== 25){
           return console.log("NO")
        }
        console.log(vasya)
        if(vasya -arg[i]==25 || vasya - arg[i]==0){
            return console.log("YES")
        }
        vasya += arg[i]
        // console.log("ja")
    }
    return console.log("NO")
}

console.log(ticket([25,100]))
console.log(ticket([25,25,25,100]))
console.log(ticket([25,25,50]))