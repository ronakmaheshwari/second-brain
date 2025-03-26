export default function RandomLinkGenerator(length) {
    try {
        let randomString = "";
        const letter = 'ABCDEFGHIJKLMNOPGRSTUVWZYZ123456789';
        for (let i = 0; i <= length; i++) {
            randomString += letter.charAt(Math.floor(Math.random() * letter.length));
        }
        return randomString;
    }
    catch (error) {
        console.log("Error At Random Function");
    }
}
