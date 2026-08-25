const WHATSAPP_NUMBER = "919785770641";


/* BUY ROBOT */

function buyRobot(robotName) {

    const message =
        "Hello Himanshi Robotics,%0A%0A" +

        "I am interested in buying:%0A" +

        robotName +

        "%0A%0A" +

        "Please provide me with price, availability " +
        "and ordering details.";


    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;


    window.open(
        whatsappURL,
        "_blank"
    );
}


/* CONTACT FORM */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const phone =
        document.getElementById("phone").value;


    const email =
        document.getElementById("email").value;


    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        "Hello Himanshi Robotics,%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +

        "Email: " +
        encodeURIComponent(email) +
        "%0A" +

        "Message: " +
        encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        whatsappMessage;


    window.open(
        whatsappURL,
        "_blank"
    );


    document
        .querySelector("form")
        .reset();

}
