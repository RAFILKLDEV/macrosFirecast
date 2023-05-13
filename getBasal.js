const basal = [6, 4, 5, 5, 7, 3]

function getBasal(array) {
    const arrayOrd = [...array.sort().reverse()]
    let newArray = []
    let RB = 1
    arrayOrd.map(e, i => {
        if (e === array[i]) {
            newArray.splice(i, 1, RB)
        }

        

    })
    console.log(arrayOrd)
}

getBasal(basal)