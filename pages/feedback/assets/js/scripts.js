console.log("Feedback Page Loaded!");

document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const feedbackList = document.getElementById("feedback-list");
    const feedbackItem = document.createElement("div");
    feedbackItem.className = "feedback-item";
    feedbackItem.innerHTML = `<h3>${name}</h3><p>${message}</p>`;

    feedbackList.appendChild(feedbackItem);

    document.getElementById("feedback-form").reset();
});
