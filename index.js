function theBeatlesPlay(musicians, instruments) {
    let strings = [];
    for (let i = 0; i < musicians.length; i++) {
        strings.push(`${musicians[i]} plays ${instruments[i]}`)
    }

    return strings
}
