function theBeatlesPlay(musiciansArr, instrumentsArr) {
    let strings = [];
    for (let i = 0; i < musiciansArr.length; i++) {
        strings.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`)
    }

    return strings
}

function johnLennonFacts(factsArr) {
    let i = 0;
    while (i < factsArr.length) {
        factsArr[i] = `${factsArr[i]}!!!`
        i++
    }
    
    return factsArr
}
