function getRandomDog() {
    fetch(https://dog.ceo/api/breeds/image/random). then((res) =>{})
        console.log(res);
        console.log(res.json())
        return res.json();
    }.then((data)=> {
        console.log(data);
        document.querySelector("dog-image").src = data.mesage;
    });

    function getSpecificDog() {
        
    }

    function getSpecificDog() {
        let breed = document.querySelector("#breed").ariaValueMax;
        fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
            if (!res.ok) {
                // an error has happened; we should do something!!
                alert("Woof, we couldn't find that dog :(Try again");
                return;
            }
            console.log(res);
            return res.json();
        }).then((data) => {
            console.log(data);
            document.querySelector("#dog-image").src = data.message;
        }
   }
