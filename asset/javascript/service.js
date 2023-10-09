function calculateTotal(){
    var hours = document.getElementById("hours-input").value;
    var costPerHour = $100;
    var totalCost  = hours * costPerHour;
    document.getElementById(total-cost).innerHTML = "Total Cost: $" + totalCost;
}