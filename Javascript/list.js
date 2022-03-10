window.onload = () => {
    document.getElementById("addBtn").addEventListener("click", (e) => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        // let error = "";
        // if (name === null || name === "" || email === null || email === "") {
        //     error += "Your Name and EMail are required"
        // } else {
            let re_name = /^[a-zA-Z/s-]{3,23}/;
            let re_email = /^([a-zA-Z.-\d]+)@([a-zA-Z.-d]+).([a-zA-Z]{2,10})/;

            // let name_valid = re_name.test(name);
            // let email_valid = re_email.test(email)

            if ((!re_name.test(name) || !re_email.test(email))) {
                alert('wrong try agian')
                location.onload();

                //     error += "Your email or Password was invalid"
            // } else {
            //     console.log("Sending to server...");
            //     e.preventDefault();
            }
        // };



        const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist"
        const data = {
            "name": name,
            "email": email
        };
        console.table(data);
        fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 400) {
                    throw "Bad data was sent to the server";
                } else {
                    throw "Something went wrong";
                }
            })
            .then((resJson) => {
                // document.getElementById("formResponse").innerHTML = resJson["signup_name"] + " has been added";
                // document.getElementById("formResponse").innerHTML = resJson["signup_email"] + " has been added";
                // document.getElementById("formResponse").classList = "success";
                document.getElementById("message").innerHTML = Object.data.name + 'has been added'
                alert(resJson["name"] + " has been added");
                // alert(resJson["signup_email"] + "has been added");
    
            })
            .catch((error) => {
                // document.getElementById("message").innerHTML = err
                alert(error);
            })
        // e.preventDefault();
    });
};