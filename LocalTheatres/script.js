// script.js

// Sample array of upcoming shows
const upcomingShows = [
    { title: "Show 1", date: "2023-06-01" },
    { title: "Show 2", date: "2023-06-15" },
    { title: "Show 3", date: "2023-07-01" }
  ];
  
  // Function to populate the "Upcoming Shows" section
  function populateUpcomingShows() {
    const upcomingShowsList = document.getElementById("upcoming-shows");
  
    // Clear existing content
    upcomingShowsList.innerHTML = "";
  
    // Loop through the upcoming shows array and create list items
    upcomingShows.forEach(show => {
      const listItem = document.createElement("li");
      listItem.textContent = `${show.title} - ${show.date}`;
      upcomingShowsList.appendChild(listItem);
    });
  }
  
  // Call the function to populate the section
  populateUpcomingShows();
  