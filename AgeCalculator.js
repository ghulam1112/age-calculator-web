function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    var dayDiff = today.getDate() - dob.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    var ageMonths = today.getMonth() - dob.getMonth();
    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < dob.getDate())) {
        ageMonths = 12 + ageMonths;
    }
    var ageDays = today.getDate() - dob.getDate();
    if (ageDays < 0) {
        var prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, dob.getDate());
        ageDays = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24));
    }
    document.getElementById('result').innerText = "Your age is: " + age + " years, " + ageMonths + " months, and " + ageDays + " days.";
}