function findMatching(array, string){
    return array.filter(n => 
        n.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(array, string){
    return array.filter(n => 
       n[0] === string[0]
    )
}

function matchName(array, string){
    return array.filter(n =>
        n.name === string
    )
}