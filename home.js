document.addEventListener("DOMContentLoaded", () => {
     //dummy data
     const data = [
        {
            "item": "head-Phone",
            "price": 12000,
            "company": "boat",
            "rating": 4.5,
            "type": "electronics",
            "featured": false
        },
        {
            "item": "iphone",
            "price": 18000,
            "company": "apple",
            "rating": 4.5,
            "type": "electronics",
            "featured": true
        },
        {
            "item": "T-shirt",
            "price": 20000,
            "company": "jocky",
            "rating": 3.5,
            "type": "clothes",
            "featured": true
        },
        {
            "item": "jeans pant",
            "price": 8000,
            "company": "ramraj",
            "rating": 1.5,
            "type": "clothes",
            "featured": true
        },
        {
            "item": "laptop",
            "price": 100000,
            "company": "dell",
            "rating": 2.5,
            "type": "electronics",
            "featured": false
        },
        {
            "item": "Phone",
            "price": 11000,
            "company": "boat",
            "rating": 4.5,
            "type": "electronics",
            "featured": true
        },
        {
            "item": "Phone",
            "price": 85000,
            "company": "boat",
            "rating": 4.5,
            "type": "electronics",
            "featured": false
        }, {
            "item": "Phone",
            "price": 72000,
            "company": "boat",
            "rating": 4.5,
            "type": "electronics",
            "featured": true
        },
        {
            "price": 400,
            "item": "rice",
            "company": "xyz",
            "rating": 3,
            "type": "grocery",
            "featured": true
        }
    ]
    //routes defining
    function showPage(page) {
        window.location.href = `${page}.html`
    }

    //getting token from seesiion storgae to check login validity
    const jwt = sessionStorage.getItem("jwt");
    const application_jwt = localStorage.getItem("jwt");
    console.log(application_jwt);
    if (jwt != null) {
        const user_name = localStorage.getItem("user_name").split(".")[0]
        if (user_name != null) {
            const name = document.getElementById("user_name")
            name.innerHTML = user_name
        }
    }
    else {
        showPage("/login")
        return
    }

    //logout and remove token
    const logout = document.getElementById("logout")
    logout.addEventListener("click", () => {
        sessionStorage.removeItem("jwt")
        localStorage.removeItem("user_name")
        localStorage.removeItem("jwt")
        showPage("/login")
    })

    const form = document.getElementsByTagName('form')
    //showing the range price
    const range = document.querySelector('#range')
    range.addEventListener("input", (e) => {
        const showValue = document.querySelector(".showValue")
        showValue.innerHTML = `$0- $${e.target.value}`
    })
    //show featured
    const checkbtn = document.querySelector("#flexCheckChecked")
    checkbtn.addEventListener("click", (e) => {
        let filterData = []
        if (checkbtn.checked) {
            filterData = data.filter(item => {
                return (
                    item.featured === true
                )
            })
        }
        else {
            filterData = data.filter(item => {
                return (
                    item.featured === false
                )
            })
        }
        if (filterData.length > 0) {
            const tbody = document.getElementsByTagName("tbody")[0]
            tbody.remove()
            const tbodyElement = document.createElement('tbody');
            filterData.forEach((item, i) => {
                const row = createTable(item, i);
                tbodyElement.appendChild(row)
            })
            table.appendChild(tbodyElement)
        }
        else {
            alert(`no featured items`)
            // form[0].querySelector('input').innerHTML=""
        }
    })
    //reset filter
    const reset=document.querySelector("#reset")
    reset.addEventListener("reset",()=>{
        console.log("reset code not implemeted");
    })
    //showing the rating
    const rating = document.querySelector('#star')
    rating.addEventListener("input", (e) => {
        const showrating = document.querySelector(".showStar")
        showrating.innerHTML = `${e.target.value}`
    })

    //filter
    const filter = document.querySelector("#filter")
    filter.addEventListener("click", (e) => {
        const ratings = document.querySelector("#star").value
        const price = document.querySelector("#range").value
        const company = document.querySelector("#company").value.toLowerCase()
        const type = document.querySelector("#type").value.toLowerCase()
        console.log(company, type, price, ratings);

        let filterData = []
        filterData = data.filter(item => {
            return (
                item.type.toLowerCase() === type ||
                item.company.toLowerCase() === company ||
                (item.price > 0 && item.price < Number(price)) ||
                item.rating === Number(ratings)
            )
        })

        if (filterData.length > 0) {
            const tbody = document.getElementsByTagName("tbody")[0]
            tbody.remove()
            const tbodyElement = document.createElement('tbody');
            filterData.forEach((item, i) => {
                const row = createTable(item, i);
                tbodyElement.appendChild(row)
            })
            table.appendChild(tbodyElement)
        }
        else {
            alert(`filter resulted no data`)
            // form[0].querySelector('input').innerHTML=""
        }

    })
    //search operation and data injecting
    const search = document.querySelector('#search-btn')
    const table = document.getElementsByTagName("table")[0]
    search.addEventListener("click", function (e) {
        e.preventDefault();

        const value = form[0].querySelector('input').value.toLowerCase();
        if (!value.length > 0) return alert("enter the value")
        const searchData = data.filter((item) => {
            return (item.item.toLowerCase() === value)
        })

        if (searchData.length > 0) {
            const tbody = document.getElementsByTagName("tbody")[0]
            tbody.remove()
            const tbodyElement = document.createElement('tbody');
            searchData.forEach((item, i) => {
                const row = createTable(item, i);
                tbodyElement.appendChild(row)
            })
            table.appendChild(tbodyElement)
        }
        else {
            alert(`no data avilbale on your search ${value}`)
            // form[0].querySelector('input').innerHTML=""
        }
    })
    function getData() {
        const tbody = document.getElementsByTagName("tbody")[0]
        data.forEach((item, i) => {
            const row = createTable(item, i);
            tbody.appendChild(row)
        })
    }
    function createTable(data, i) {
        const trElement = document.createElement('tr');
        trElement.setAttribute('class', 'data');
        let tableTemplate = `
    <th scope="row">
             ${i}
            </th>
            <td>
              ${data.item}
            </td>
            <td>
              ${data.company}
            </td>
            <td>
              ${data.price}
            </td>
            <td>
              ${data.type}
            </td>
            <td>
              <i class="fa-solid fa-star" style="color: #fa8e29;"></i> ${data.rating}
            </td>
      </th>
    `;

        trElement.innerHTML = tableTemplate;
        return trElement;
    }
    getData()
})