document.addEventListener("DOMContentLoaded", function() {
    fetch('/json/classes.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            populateDropdown(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
});

function populateDropdown(classes) {
    var dropdown = document.getElementById("classDropdown");

    classes.forEach(function(cls) {
        var option = document.createElement("option");
        option.value = cls.code;
        option.text = cls.department + ' ' + cls.code;
        dropdown.appendChild(option);
    });
}

function fetchClassData() {
    var dropdown = document.getElementById("classDropdown");
    var selectedValue = dropdown.value;

    if (selectedValue) {
        fetch('/json/classes.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var selectedClass = data.classes.find(function (cls) {
                    return cls.code === selectedValue;
                });

                if (selectedClass) {
                    appendData(selectedClass);
                } else {
                    console.log('Class not found');
                }
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
    } else {
        clearData();
    }
}

function clearData() {
    var myDataContainer = document.getElementById("myData");
    myDataContainer.innerHTML = '';
}


