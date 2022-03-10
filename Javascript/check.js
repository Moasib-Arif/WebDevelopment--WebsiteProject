window.onload = () => {

    document.getElementById("addBtn").addEventListener("click", (e) => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        const url = "https://mudfoot.doc.stu.mmu.ac.uk/node/api/mailinglist";
        const data = {
            "signup_name": name,
            "signup_email": email
        };

        fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                if (response.status === 201) {
                    return response.json();
                } else if (response.status === 400) {
                    throw "Bad data was sent to the server";
                } else {
                    throw "Something went wrong";
                }
            })
            .then((resJson) => {
                document.getElementById("formResponse").innerHTML = resJson["signup_name"] + " has been added";
                document.getElementById("formResponse").innerHTML = resJson["signup_email"] + " has been added";
                document.getElementById("formResponse").classList = "success";
            })
            .catch((error) => {
                alert(error);
            })

        e.preventDefault();
    });

};