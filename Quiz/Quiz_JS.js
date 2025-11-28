function submit() {


    //variables

    let score, Q1, Q2, Q3, name, age;

    Q1 = document.getElementById("Input1");
    Q2 = document.getElementById("Input2");
    Q3 = document.getElementById("Input3");

    score = 0;
    score = (Q2.value.length + Q1.value.length + Q3.value.length + score);

    name = document.getElementById("name").value;
    age = document.getElementById("age").value;


    //if statments (blank error)

    if ( Q1.value.length == 0 ) {
        document.getElementById("Q1-b").style.display = "block";
        //Q1.classList.add("input-placeholder")

    }

    if ( Q2.value.length == 0 ) {
        document.getElementById("Q2-b").style.display = "block";
        //.classList.add("input-placeholder")

    }

    if ( Q3.value.length == 0 ) {
        document.getElementById("Q3-b").style.display = "block";
        //Q3.classList.add("input-placeholder")

    }
    
    if ( name.length == 0 ) {
        document.getElementById("name-b").style.display = "block";
        //name.classList.add("input-placeholder")
        
    }

    if (age.length == 0) {
        document.getElementById("age-blank").style.display = "block";
        //document.getElementById("age").classList.add("input-placeholder")
 
    }


//errors soulation


    if ( Q1.value.length > 0 ) {
        document.getElementById("Q1-b").style.display = "none";
        //Q1.classList.remove("input-placeholder")

    }

    if ( Q2.value.length > 0 ) {
        document.getElementById("Q2-b").style.display = "none";
        //Q2.classList.remove("input-placeholder")

    }

    if ( Q3.value.length > 0 ) {
        document.getElementById("Q3-b").style.display = "none";
        //Q3.classList.remove("input-placeholder")

    }


    if (name.length > 0) {
        document.getElementById("name-b").style.display = "none";
        //name.classList.remove("input-placeholder")
        
    }

    if (age.length > 0) {
        document.getElementById("age-blank").style.display = "none";
        //document.getElementById("age").classList.remove("input-placeholder")
 
    }


    //if statments (select)

    if (document.getElementById('correct').checked) {
        score = (score + 35);
    }
    

    if (document.getElementById('correct1').checked) {
        score = (score + 35);
    }
//the name var didnt work below in sub3 for some resons
    document.getElementById("Name1").innerHTML = name;
    document.getElementById("Score1").innerHTML = score;

    document.getElementById("Name12").innerHTML = name;
    document.getElementById("Score12").innerHTML = score;

    document.getElementById("Score123").innerHTML = score;


    if (score >= 150) {
        document.getElementById("succeeded").style.display = "block";
    }

    if (score <= 80) {
        document.getElementById("Failed").style.display = "block";
    }

    if (score < 150 && score > 80) {
        document.getElementById("waiting_list").style.display = "block";
    }
    console.log(1)
    sub2()
        
}


function sub2() {
    if (document.getElementById("Q1-b").style.display == "none" && document.getElementById("Q2-b").style.display == "none" && document.getElementById("Q3-b").style.display == "none" && document.getElementById("name-b").style.display == "none" && document.getElementById("age-blank").style.display == "none" && (document.getElementById('correct').checked || document.getElementById('False1').checked || document.getElementById('False2').checked) && (document.getElementById('correct1').checked || document.getElementById('False3').checked || document.getElementById('False4').checked)) {
        console.log(2)
        sub3()

    }
}

function sub3() {
    document.getElementById("Result").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    console.log(3)
    

}

