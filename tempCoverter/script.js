const calculateTemp = () => {
    const numberTemp = document.getElementById("temp").value;
    const tempSelected = document.getElementById("temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(temp_diff);
    function celToFah(cel){
        return Math.round((cel*9/5)+32);
    }
    function fahToCel(fah){
        return Math.round((fah-32)*5/9);
    }
    let result;


    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('output').innerHTML = `= ${result} Fahrenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('output').innerHTML = `= ${result} celsius`;
    }
}

