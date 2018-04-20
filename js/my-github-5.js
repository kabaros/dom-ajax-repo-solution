console.log('github-5')

var url = 'https://api.github.com/users/kabaros/repos'
fetch(url)
    .then(function (data) {
        console.log('github-5: inside the first "then"')
        return data.json()
    })
    .then(function (repos) {
        var reposList = document.querySelector('#repos-list')
        console.log('github-5: inside the second "then"')
        repo.forEach(function (repo) {
            var itemLink = document.createElement('a')
            itemLink.setAttribute('href', repo.html_url)
            itemLink.innerText = repo.name

            var listItem = document.createElement('li')
            listItem.appendChild(itemLink)

            reposList.appendChild(listItem)
        })
    })

console.log('github-5 end of file')