let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector(".navbar")
let search = document.querySelector("#search-icon")
let closeSearch = document.querySelector("#close")

menu.onclick = () => {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}



window.onscroll = () => {
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
    
    
    // Code For Scrollspy which didn't worked properly:(
        
    //     let section = document.querySelectorAll("section")
    //     let navLinks = document.querySelectorAll("header .navbar")
    // section.forEach(sec =>{

    //     let top = window.scrollY;
    //     let height = sec.offsetHeight;
    //     let offset = sec.offsetTop - 150;
    //     let id = sec.getAttribute("id");

    //     if(top >= offset && top < offset + height){
    //         navLinks.forEach(links =>{
    //             links.classList.remove('active')
    //             document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
    //         });
    //     };
    // });
};

search.onclick = () => {
    document.querySelector("#search-form").classList.toggle("active")
}
closeSearch.onclick = () => {
    document.querySelector("#search-form").classList.remove("active")
};

function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
}

function fadeOut(){
    setInterval(loader, 3000)
}

window.onload = fadeOut;

// Form Validation
    var nameError = document.getElementById('nameMsg');
    var phoneError = document.getElementById('numMsg');
    var orderError = document.getElementById('orderMsg');
    var addressError = document.getElementById("addMsg")
    var submitError = document.getElementById('submit-error');

    function validateName(){
        var name = document.getElementById('name').value;

        if(name.length == 0){
            nameError.innerHTML = 'This Field Is Required*'
            return false;
        }
        // Used For Writing Full Name
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = '*Write Full Name'
            return false;
        }
        nameError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green;font-size:1.6rem;"></i>`
        return true
        }

    function  validatePhone(){
        var phone = document.getElementById("phone").value;

        if(phone.length == 0){
            phoneError.innerHTML = "This Field Is Required*"
        }
        if(phone.length !== 11){
            phoneError.innerHTML =  '*Phone No. Should Be 11 Digits';
            return false;
        }
        if(!phone.match(/^[0-9]{11}$/)){
            phoneError.innerHTML = '*Only Digits Please';
            return false;
        }
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green;font-size:1.6rem;"></i>`
        return true;
    }

    function validateOrder(){
        let order = document.getElementById("order").value;

        if(order.length == 0){
            orderError.innerHTML = "This Field Is Requied*"
            return false;
        }
        orderError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green;font-size:1.6rem;"></i>`
        return true;
        
    }


    function validateAddress(){
        let address = document.getElementById("address").value;

        if(address.length == 0){
            addressError.innerHTML = "This Field Is Required*"
            return false;
        }
        if(address.length >= 20){
        addressError.innerHTML = `<i class="fa-solid fa-circle-check" style="color:green;font-size:1.6rem;"></i>`
        return true;
        }
    }