
const url = `http://www.filltext.com/?rows=6&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true`


function onInit() {
    getAns(renderContacts)
}

function getAns(callback) {
    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const ans = JSON.parse(xhr.responseText)

            callback(ans)
        }
    }
    xhr.open('GET', url, true)
    xhr.send()
}

function renderContacts(contacts) {
    let elContainer = document.querySelector('.container')
    let strHtml = ``

    // contacts.map(contact => {
    contacts.forEach(contact => {
        console.log('contact: ', contact)
        strHtml += `
                <div class="single-contact">
                <p> ${contact.lname}, ${contact.fname} </p>
                <img src="https://robohash.org/${contact.fname}?set=set5" alt="Image of ${contact.fname}">

                <table>
                    <tr>
                        <td>Phone: </td>
                        <td>${contact.tel}</td>
                    </tr>
                    <tr>
                        <td>City: </td>
                        <td>${contact.city}</td>
                    </tr>
                    <tr>
                        <td>State: </td>
                        <td>${contact.state}</td>
                    </tr>
                    <tr>
                        <td>Zip: </td>
                        <td>${contact.zip}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>${contact.address}</td>
                    </tr>
                </table>
                </div>
                `
    })

    elContainer.innerHTML = strHtml + ``
}