
const images_arr=["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/43/caption.jpg?w=600&h=-1&s=1", 
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/7d/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/b6/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/e5/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/3a/2b/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/43/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/7d/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/b6/caption.jpg?w=600&h=-1&s=1",
"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/f7/39/e5/caption.jpg?w=600&h=-1&s=1"];

const p_arr=["Top Destination","Trending Destination","Top Destination","Top Destination","Top Destination","Top Destination","Top Destination","Top Destination","Top Destination"];

let flex_container = document.querySelector('.flex-container');
images_arr.forEach((element,index) => {
    let card = document.createElement('div');
    card.className="card";

    let img_elem = document.createElement('img');
    img_elem.setAttribute("src",element);
    let p_elem = document.createElement('p');
    p_elem.className = "card-p";
    p_elem.innerHTML = p_arr[index];
    
    card.appendChild(img_elem);
    card.appendChild(p_elem);
    flex_container.appendChild(card);
});

function left()
{
    const conent = document.querySelector('#content');
    conent.scrollLeft -= 2000;
}

function right()
{
    const conent = document.querySelector('#content');
    conent.scrollLeft += 2000;
}


async function fetch()
{
    try 
    {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        console.log(res.data);
        let len = res.data.length;
        let table = document.getElementById("table-data"); 

        for(let i=0;i<len;i++)
        {
            
            let name = res.data[i].name;
            let address = res.data[i].address.street + ', ' + res.data[i].address.city;
            let email = res.data[i].email;
            let phone = res.data[i].phone;
            let username = res.data[i].username;
            let website = res.data[i].website;
            let company = res.data[i].company.name + '(' + res.data[i].company.bs;

            let row = table.insertRow();

            let cell1 = row.insertCell();
            cell1.innerHTML = name;
            let cell2 = row.insertCell();
            cell2.innerHTML = address;
            let cell3 = row.insertCell();
            cell3.innerHTML = email;
            let cell4 = row.insertCell();
            cell4.innerHTML = phone;
            let cell5 = row.insertCell();
            cell5.innerHTML = username;
            let cell6 = row.insertCell();
            cell6.innerHTML = website;
            let cell7 = row.insertCell();
            cell7.innerHTML = company;

            let data = document.getElementsByClassName('card-p');
            data[res.data[i].id-1].innerHTML=name;
        } 
    } 
    catch (error) 
    {
        console.log("Errors fetching the data");
    }
}
let data = document.getElementsByClassName('card-p');
console.log(data[1].innerHTML);




