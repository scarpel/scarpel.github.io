const loadImage = src => new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(src)
    img.onerror = err => reject(err)
})

const loadAllImages = (imagesSrc) => Promise.all(imagesSrc.map(src => loadImage(src)))

export { loadImage, loadAllImages }