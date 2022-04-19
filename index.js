function newImage(imgSrc, imgHorz, imgVert) {
    let imgName = document.createElement('img')
    imgName.src = imgSrc
    imgName.style.position = 'Fixed'
    imgName.style.left = imgHorz + 'px'
    imgName.style.bottom = imgVert +'px'
    document.body.append(imgName)
    return imgName
}

function newItem(imgSrc, imgHorz, imgVert) {
    let imgName = newImage(imgSrc, imgHorz, imgVert)

    imgName.addEventListener('dblclick', () => {
        imgName.remove()
    })
}

newImage('assets/green-Character.gif', 100, 100);

newImage('assets/pine-tree.png', 450, 200);

newImage('assets/tree.png', 200, 300);

newImage('assets/pillar.png', 350, 100);

newImage('assets/crate.png', 150, 200);

newImage('assets/well.png', 500, 425)


// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

