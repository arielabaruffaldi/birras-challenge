export function beersPerPerson(temp) {
    let partialBeers;
    if (temp <= 20) {
        partialBeers = .75;
    } else if (temp < 24) {
        partialBeers = 1;
    } else {
        partialBeers = 2;
    }
    return partialBeers;
}