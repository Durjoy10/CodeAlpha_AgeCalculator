document.getElementById("calculateAgeForm").addEventListener("submit", function(event){
    event.preventDefault();
    calculateAge();
});

function calculateAge(){
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);

    let dob = new Date(year, month -1, day);

    let today = new Date();
    let ageYear = today.getFullYear() - dob.getFullYear();
    let ageMonth = today.getMonth() - dob.getMonth();

    if (today.getDate() < dob.getDate()){
        ageMonth--;
    }

    if (ageMonth < 0){
        ageYear--;
        ageMonth = 12 + ageMonth;
    }

    document.getElementById("results").innerHTML = "Your Age is: " + ageYear + " Years " + ageMonth + " Month.";

}