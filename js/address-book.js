

function onInit() {
    getAns(renderContacts)
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

                    <div class="image-and-table-container">
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
                </div>
                `
    })

    elContainer.innerHTML = strHtml + ``
}