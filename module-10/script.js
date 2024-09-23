function displayKittenDetails(kittenId) {
    const details = document.getElementById('kittenDetails');
    let kittenInfo = '';

    switch (kittenId) {
        case 'kitten1':
            kittenInfo = 'This is Ernest Tobias Hemingway!';
            break;
        case 'kitten2':
            kittenInfo = 'Ernie is a seven week old, polydactyl Maine Coon!';
            break;
        case 'kitten3':
            kittenInfo = 'Ernie loves his banana bed!';
            break;
        default:
            kittenInfo = 'Click on a picture of the kitten to read about him!';
    }

    details.innerHTML = `<p>${kittenInfo}</p>`;
}
