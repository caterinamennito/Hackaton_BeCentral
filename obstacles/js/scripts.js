window.onload = () => {

    var currentTab = 'mainCategory'
    var navs = ['mainSection', 'subSection', 'subSection2']
    var currentNav = 0

    var radios = document.querySelectorAll('input[type="radio"]')

    function navigate(e) {
        e.target.removeEventListener('click', navigate)
        document.querySelector(`#${currentTab}`).style.display = 'none'
        currentTab = e.target.tar
        document.querySelector(`#${currentTab}`).style.display = 'inline'

        if (e.target.id == 'mainSection') {
            document.querySelector('#mainSection').innerHTML = ''
            document.querySelector('#subSection').innerHTML = ''
            document.querySelector('#subSection2').innerHTML = ''
            document.querySelector('#message').style.display = 'none'
            currentNav = 0
        } else if (e.target.id == 'subSection') {
            document.querySelector('#subSection').innerHTML = ''
            document.querySelector('#subSection2').innerHTML = ''
            document.querySelector('#message').style.display = 'none'
            currentNav = 1
        } else if (e.target.id == 'subSection2') {
            document.querySelector('#subSection2').innerHTML = ''
            document.querySelector('#message').style.display = 'none'
            currentNav = 2
        }

        console.log('clicked on '+e.target.tar)
    }

    radios.forEach((radio) => {
        radio.addEventListener('click', function (e) {
            if (currentNav < 2) {
                console.log('input clicked', currentTab)
                document.querySelector(`#${currentTab}`).style.display = 'none'
                document.querySelector(`#${e.target.value}`).style.display = 'inline'

                var nav = document.querySelector('#'+navs[currentNav])
                nav.innerHTML = e.target.parentNode.innerText + '&nbsp; >&nbsp;&nbsp;'
                nav.tar = currentTab
                nav.addEventListener('click', navigate)
                currentNav += 1
                currentTab = e.target.value

            } else {
                document.querySelector(`#${currentTab}`).style.display = 'none'
                document.querySelector('#message').style.display = 'inline-block'

                var nav = document.querySelector('#'+navs[currentNav])
                nav.innerHTML = e.target.parentNode.innerText + ' >&nbsp;'
                nav.tar = currentTab
                nav.addEventListener('click', navigate)
            }
        })
    })

    document.querySelector('#regForm').addEventListener('submit', function (e) {
        e.preventDefault()
        document.querySelector('#message').style.display = 'none'
        document.querySelector('#msgSend').style.display = 'block'
        setTimeout(function(){ document.querySelector('#regForm').style.display = 'none' }, 3000);
    })
}
