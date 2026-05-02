function getAnswer() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let response = "";

  if (input.includes("vote")) {
    response = "To vote, you must be registered and carry a valid ID.";
  } 
  else if (input.includes("who can vote")) {
    response = "Any citizen above 18 years of age can vote.";
  } 
  else if (input.includes("evm")) {
    response = "EVM stands for Electronic Voting Machine.";
  } 
  else if (input.includes("registration")) {
    response = "You can register online on official election portals.";
  } 
  else {
    response = "Try asking about voting, EVM, or registration.";
  }

  document.getElementById("chatBox").innerHTML += 
    "<p><b>You:</b> " + input + "</p>" +
    "<p><b>Bot:</b> " + response + "</p>";
}
