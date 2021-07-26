function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    result = principal * (1.0 + rate) ** years;
    
    return result;
}

document.getElementById("result").innerHTML = compute();
