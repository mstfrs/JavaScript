// Write a JavaScript function to split a string and convert it into an array of words.

function convert_array(text) {
    console.log(text.split(" "))    
    console.log(text.split(""))    
}
convert_array("Mustafa Örs Nalan Azra ÖRS")

// Write a JavaScript function to extract a specified number of characters from a string.

function extract(text2, number) {
    console.log(text2.substring(number,0))
    
}

extract("Mustafa ÖRS",5)

// Write a JavaScript function to convert a string in abbreviated form.

function abbreviate(name) {
    var splitname= name.split(" ")
    if (splitname.length >1) {
        return splitname[0] +" "+ splitname[1].charAt(0) + "."        
    }    
}
console.log(abbreviate("Mustafa ÖRS"))

// Write a JavaScript function to hide email addresses to protect from unauthorized user.

function hideEmail(mail) {
    return mail.substring(3,0)+"...."+mail.substr(mail.search("@"))    
}
console.log(hideEmail("danny_brown@hotmail.com"))


function hideEmail2(mail) {
    return mail.replace(mail.substring(mail.search("@"),3),".....")   
}
console.log(hideEmail2("danny_brown@hotmail.com"))


