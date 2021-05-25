let dataCollectorForm = document.getElementById("Data-Collector");
dataCollectorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let ourFormData = new FormData(event.target);
  let userFirstName = ourFormData.get("firstName");
  let userBirthTime = ourFormData.get("dateTime");
  let userLocation = ourFormData.get("location");

  let updatedMainContent = `
  <h2>Thank you, ${userFirstName}</h2>
      <p>${userBirthTime}, ${userLocation}</p>
      <p>
      <span>
        This is our Cosmic Energy tip, just for you:
        </span>
      </p>
      <p>
      Initiate something. Have an idea that's been brewing? This is a supported time to take action. 
      You don't have to know how it's all going to work out - 
      <span> 
      just take that first step.
      </span> 
      </p>
      <p class="fine-print"> You are the author of your story. You are also the main character. 
      Bring that energy through this transformative season.</p>
      `;
  let ourMainContent = document.getElementById("Main-Content");
  ourMainContent.innerHTML = updatedMainContent;
});
