const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackground = ()=>{
    switch (zodiac.value) {
            case "aries":
            body.style.backgroundColor = "#FF0000";
            alert("Your Lucky Color is Red");
            break;
            case "taurus":
            body.style.backgroundColor="#00FF00";
            alert("Your Lucky Color is Green");
            break;
            case "gemini":
            body.style.backgroundColor="#FFFF00";
            alert("Your Lucky Color is Yellow");
            break;
            case "cancer":
            body.style.backgroundColor="#71706E";
            alert("Your Lucky Color is White and silver");
            break;
            case "leo":
            body.style.backgroundColor="#DAA520";
            alert("Your Lucky Color is Gold");
            break;
            case "virgo":
            body.style.backgroundColor="#964B00";
            alert("Your Lucky Color is Green and brown");
            break;
            case "libra":
            body.style.backgroundColor="#62aec5";
            alert("Your Lucky Color is Pink and blue");
            break;
            case "scorpio":
            body.style.backgroundColor="#000000";
            alert("Your Lucky Color is Black");
            break;
            case"sagittarius":
            body.style.backgroundColor="#BF40BF";
            alert("Your Lucky Color is Purple");
            break;
            case"capricorn":
            body.style.backgroundColor="#3D3635";
            alert("Your Lucky Color is Brown and grey");
            break;
            case"aquarius":
            body.style.backgroundColor="#0000FF";
            alert("Your Lucky Color is Blue");
            break;
            case"pisces":
            body.style.backgroundColor="#90EE90";
            alert("Your Lucky Color is Light green");
            break;
            default:
                body.style.backgroundColor="#F9F6EE";
                alert("Choose Your Zodic");
                break;
    }
                            


};