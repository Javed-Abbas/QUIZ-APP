function submitQuiz() {
    let score = 0;

    if(document.querySelector("input[name='q1']:checked").value === "a"){
        score++;
    }
    if(document.querySelector("input[name='q2']:checked").value === "b"){
        score++;
    }
    if(document.querySelector("input[name='q3']:checked").value === "c"){
        score++;
    }
    if(document.querySelector("input[name='q4']:checked").value === "d"){
        score++;
    }
    if(document.querySelector("input[name='q5']:checked").value === "a"){
        score++;
    }
    if(document.querySelector("input[name='q6']:checked").value === "b"){
        score++;
    }
    if(document.querySelector("input[name='q7']:checked").value === "c"){
        score++;
    }
    if(document.querySelector("input[name='q8']:checked").value === "d"){
        score++;
    }

    if(document.querySelector("input[name='q9']:checked").value === "a"){
        score++;
    }
    if(document.querySelector("input[name='q10']:checked").value === "b"){
        score++;
    }

    let resultDiv = document.querySelector("#result_prnt");
    resultDiv.innerHTML = score;
}