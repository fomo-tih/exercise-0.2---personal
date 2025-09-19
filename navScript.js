// Wait until the DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {

  // ===================== NAVIGATION BAR =====================
  const navItems = document.querySelectorAll(".nav-item"); // All navigation links
  const logo = document.querySelector(".logo a"); // Logo link
  const currentPage = window.location.pathname.split("/").pop() || "index.html"; 
  // Get the current page filename (e.g., Home.html)

  // Highlight current active nav item
  navItems.forEach((item) => {
    if (item.getAttribute("href") === currentPage) {
      item.classList.add("is-active"); // Add active class to current page
    }

    // Handle nav item click
    item.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const target = item.getAttribute("href"); // Get link target
      if (target) window.location.assign(target); // Navigate to target page
    });
  });

  // Logo click always takes you back to Home.html
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.assign("index.html");
    });
  }

  // ===================== PORTFOLIO TABS =====================
  const tabs = document.querySelectorAll(".portfolio-tabs .tab"); // Tab buttons
  const contents = document.querySelectorAll(".tab-content"); // Tab content areas

  // Function to switch tabs
  function activateTab(tabName) {
    // Remove active class from all tabs & content
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));

    // Find the clicked tab and related content
    const activeTab = document.querySelector(`.tab[data-tab="${tabName}"]`);
    const activeContent = document.getElementById(tabName);

    // Set them as active
    if (activeTab) activeTab.classList.add("active");
    if (activeContent) activeContent.classList.add("active");
  }

  // Add click event for each tab button
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab.trim()); // Switch tab when clicked
    });
  });


  // ===================== ABOUT STATS SHORTCUTS =====================
  const statsLinks = document.querySelectorAll(".about-stats-row .stat");
  
  // When clicking stats (Projects / Certificates / Tech Stack)
  statsLinks.forEach((stat) => {
    stat.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = stat.dataset.target; // Which tab to open
      const showcase = document.getElementById("portfolio-showcase"); // Portfolio section

      // Smooth scroll to portfolio showcase
      if (showcase) {
        showcase.scrollIntoView({ behavior: "smooth" });
      }

      // Activate the matching tab
      if (targetId) {
        activateTab(targetId);
      }
    });
  });
});

