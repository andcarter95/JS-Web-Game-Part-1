function newImage(imgName, imgSrc, imgPosition, imgHorz, imgVert) {
    let imgName = document.createElement('img')
    imgName.src = imgSrc
    imgName.style.position = imgPosition
    imgName.style.left = imgHorz
    imgName.style.bottom = imgVert
    document.body.append(imgName)
    return imgName
}

newImage(greenCharacter, assets/green-Character.gif, fixed, 100px, 100px);

newImage(pineTree, 'assets/pine-tree.png', 'fixed', '450px', '200px');

newImage(greenTree, 'assets/tree.png', 'fixed', '200px', '300px');

newImage(pillar, 'assets/pillar.png', 'fixed', '350px', '100px');

newImage(crate, 'assets/crate.png', 'fixed', '150px', '200px');

newImage(well, 'assets/well.png', 'fixed', '500px', '425px')


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

