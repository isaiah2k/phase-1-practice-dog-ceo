console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = "https://dog.ceo/api/breeds/list/all"
  
  // Challenge 1
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
      const imageContainer = document.getElementById('dog-image-container')
      data.message.forEach(imageUrl => {
        const img = document.createElement('img')
        img.src = imageUrl
        imageContainer.appendChild(img)
      })
    })

  // Challenge 2
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      const breedList = document.getElementById('dog-breeds')
      const breeds = data.message
      for (const breed in breeds) {
        const li = document.createElement('li')
        li.textContent = breed
        breedList.appendChild(li)
      }
    })

  // Challenge 3
  document.getElementById('dog-breeds').addEventListener('click', event => {
    if (event.target.tagName = 'LI') {
      event.target.style.color = 'blue'
    }
  })

  // Challenge 4
  const breedDropdown = document.getElementById('breed-dropdown')
  breedDropdown.addEventListener('change', event => {
    const selectedLetter = event.target.value
    const breedList = document.getElementById('dog-breeds')
    const breeds = breedList.getElementsByTagName('li')

    for (const breed of breeds) {
      if (breed.textContent.startsWith(selectedLetter)) {
        breed.style.display = ''
      } else {
        breed.style.display = 'none'
      }
    }
  })
})