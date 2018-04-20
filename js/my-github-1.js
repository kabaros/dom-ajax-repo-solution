console.log('github-1')

var url = 'https://api.github.com/users/kabaros/repos'
fetch(url)
    .then(function (data) {
        return data.json()
    })
    .then(function (repos) {
        var reposList = document.querySelector('#repos-list')

        repos.forEach(function (repo) {
            var itemLink = document.createElement('a')
            itemLink.setAttribute('href', repo.html_url)
            itemLink.innerText = repo.name

            var listItem = document.createElement('li')
            listItem.appendChild(itemLink)

            reposList.appendChild(listItem)
        })
    })