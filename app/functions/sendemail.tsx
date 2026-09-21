import emailjs from "@emailjs/browser";

const sendEmail = async ({name, email, subject, message}:{name: string, email:string, subject:string, message:string}) => {
    try {
        console.log(name, email, subject, message)
        await emailjs.send(
            "service_k9dyhkm",
            "template_zuh6mzi",
            {
                name: name,
                email: email,
                subject: subject,
                message: message,
                time: new Date().toLocaleString("en-IN"),
            },
            {
                publicKey: "r7p9TLeoG3SiewzH9",
            }
        );

        return 1
    } catch (error) {
        console.error(error);
        return 0
    }
};


export default sendEmail;