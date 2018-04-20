console.log('github-3')

var url = 'https://api.github.com/users/kabaroos/repos'
fetch(url)
    .then(function (data) {
        return data.json()
    })
    .then(function (repos) {
        // 2.1 get hold of an element in the DOM
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