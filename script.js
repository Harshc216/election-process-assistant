const responses = {
  vote: "To vote, you must be registered and carry a valid ID.",
  evm: "EVM is an Electronic Voting Machine used in elections.",
  registration: "Register online through official election portals.",
  process: "Election process includes registration, nomination, campaigning, voting, and counting.",
  results: "Votes are counted and results are declared by election authorities."
};

function getAnswer() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let response = "Sorry, I don't understand. Try asking about voting, EVM, or process.";

  for (let key in responses) {
    if (input.includes(key)) {
      response = responses[key];
      break;
    }
  }

  document.getElementById("chatBox").innerHTML += 
    `<p><b>You:</b> ${input}</p>
     <p><b>Bot:</b> ${response}</p>`;
}
