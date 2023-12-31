const inputQuestion = document.getElementById("inputQuestion");
const result = document.getElementById("result");

inputQuestion.addEventListener("keypress", (e) => {
    if (inputQuestion.value && e.key === "Enter") SendQuestion();
});

const OPEN_API_KEY = "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";

function SendQuestion() {
    let sQuestion = inputQuestion.value;

    fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + OPEN_API_KEY,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: sQuestion,  
            max_tokens: 2048,
            temperature: 0.5,
        }),
    })
    .then((response) => response.json())
    .then((json) => {
        if (result.value) result.value += "\n";

        if (json.error?.message) {
            result.value += `Error: ${json.error.message}`;
        } else if (json.choices?.[0].text) {
            let text = json.choices[0].text || "Sem resposta. ";
            result.value += "CHAT GPT: " + text;
        }

        result.scrollTop = result.scrollHeight;
    });

    if (result.value) result.value += "\n\n\n";

    result.value += `Eu: ${sQuestion}`;
    inputQuestion.value = "Carregando...";
    inputQuestion.disabled = true;

    result.scrollTop = result.scrollHeight;
}
