let github_profile_picture_src = '';

function openNav() {
    document.getElementById("mySidenav").style.width = "400px";
}

function closeNav() {
    document.getElementById("mySidenav").style.transition = "width 0s"; // Remove transition
    document.getElementById("mySidenav").style.width = "0";
}

// JavaScript to handle the scroll to top functionality
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Function to check if the arrow should be displayed
    function checkScroll() {
        if (document.documentElement.scrollHeight > window.innerHeight) {
            scrollToTopBtn.style.display = (window.scrollY > 100) ? 'block' : 'none';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }

    // Scroll event to check the scroll position
    window.addEventListener('scroll', checkScroll);

    // Initial check on page load
    checkScroll();

    // Click event to scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


//This Repo

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");

    // Function to fetch repository information from thisrepo.txt
    function fetchRepositoryInfo() {
        console.log("Fetching repository information...");
        //enter location of file. Use file thisrepo.txt
        fetch('txt/this_repo.txt') // Replace with your actual URL
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                console.log("File content:", data);
                parseRepositoryInfo(data); // Process the fetched data
            })
            .catch(error => {
                console.error("Error fetching or parsing repository information:", error);
            });
    }

    // Function to parse repository information data
    function parseRepositoryInfo(data) {
        const line = data.trim();
        console.log("Parsed line:", line);

        const [title_repo, link_repo, link_readme] = line.split(', ').map(entry => entry.trim());

        if (!title_repo || !link_repo || !link_readme) {
            console.error("Invalid data format: title or link is empty");
            return;
        }

        console.log("Title:", title_repo, "Link:", link_repo, "Readme:",link_readme);
        updateRepositoryLink(title_repo, link_repo, link_readme);
    }

    // Function to update the repository link in the HTML
    function updateRepositoryLink(title_repo, link_repo, link_readme) {
        const repoLink = document.querySelector('.repo-link');
        const notebookNameLink = document.querySelector('.notebookname-link');
        const readmeLink = document.querySelector('.readme-logo');

        if (repoLink && notebookNameLink && readmeLink) {
            repoLink.href = link_repo;
            notebookNameLink.textContent = title_repo;
            notebookNameLink.href = link_repo;
            readmeLink.href=link_readme;

            // Set the document title
            document.title = title_repo;

          } else {
            console.error("HTML elements not found");
        }
    }

    // Fetch repository information after DOM is loaded
    fetchRepositoryInfo();
});

//Personal information

document.addEventListener('DOMContentLoaded',function() {
  console.log("DOM fully loaded and parsed");

//function to fetch personal information

//personal.txt has this format:
//github_user,linkedin_usr,kaggle_user,googlesite_webaddress, gh_profile_picture_src, bio_picture_src

function fetchPersonalInfo() {
  console.log("Fetching personal info...");
  //enter location of file, Use personal.txt
  fetch('txt/personal_info.txt')
  .then(response => {
    if(!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then(data => {
    console.log("File content:",data);
    parsePersonalInfo(data);
  })
  .catch(error => {
    console.error("Error fetching or parsing personal info:", error);
  });
}

//function to parse personal data
function parsePersonalInfo(data){
  const line = data.trim();
  console.log("Parsed line:",line);

  const [github_user, linkedin_user, kaggle_user, googlesite_webaddress, gh_profile_picture_src,bio_picture_src] = line.split(', ').map(entry => entry.trim());

  if (!github_user || !linkedin_user || !kaggle_user || !googlesite_webaddress || !gh_profile_picture_src || !bio_picture_src){
      console.error("Invalid data format: data is empty");
      return;
  }

  github_profile_picture_src = gh_profile_picture_src;

  console.log("Github User",github_user,"Linkedin User:",linkedin_user,"Kaggle User:",kaggle_user,
  "Google site web address:",googlesite_webaddress,
  "Github profile Picture source:",gh_profile_picture_src,
  "Picture source in Imgur or similar:",bio_picture_src);
  updatePersonalLink(github_user,linkedin_user,kaggle_user,googlesite_webaddress,bio_picture_src);
}

//Function to update the personal info links in the html
function updatePersonalLink(github_user, linkedin_user, kaggle_user,googlesite_webaddress,bio_picture_src) {
  const githubOverviewLink = document.querySelector('.github-overview-link');
  const githubOverviewUserName = document.querySelector('.github-overview-name');
  const linkedinUserLink = document.querySelector('.linkedin-logo');
  const kaggleUserLink = document.querySelector('.menu-kaggle');
  const githubRepositoriesLink = document.querySelector('.menu-opt2');
  const githubPagesLink = document.querySelector('.menu-opt1');
  const googleSiteBioLink = document.querySelector('.menu-opt4');
  const googleSitePortfolioLink = document.querySelector('.menu-opt3');
  const bioPicLink = document.querySelector('.menu-opt4-logo');
  const sidenavGithubLink = document.querySelector('.sidenav-github');

  if (githubOverviewLink && linkedinUserLink && kaggleUserLink && googlesite_webaddress && githubRepositoriesLink &&
  githubPagesLink && googleSiteBioLink && googleSitePortfolioLink && bioPicLink && sidenavGithubLink && githubOverviewUserName) {
    githubOverviewLink.href ="http://github.com/" + github_user;
    githubOverviewUserName.href = "http://github.com/" + github_user;
    githubOverviewUserName.textContent = github_user;
    linkedinUserLink.href="http://linkedin.com/in/" + linkedin_user;
    kaggleUserLink.href="http://kaggle.com/" + kaggle_user;
    githubRepositoriesLink.href="http://github.com/" + github_user + "?tab=repositories";
    githubPagesLink.href="https://" + github_user+".github.io";
    googleSiteBioLink.href="https://sites.google.com/view/" + googlesite_webaddress + "/home?authuser=0";
    googleSitePortfolioLink.href="https://sites.google.com/view/" + googlesite_webaddress + "/portfolio?authuser=0";
    bioPicLink.src=bio_picture_src;
    sidenavGithubLink.href="http://github.com/"+github_user;
    console.log("Github link:",sidenavGithubLink);
    console.log("Github user:",githubOverviewName.textContent);
  }
  else{
    console.error("HTML elements not found");
  }
}

  fetchPersonalInfo();
});


// Repositories

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");


//The file repositories.txt has this format:
//Title_of_repository, Link_of_repository
    // Function to fetch repositories
    function fetchRepositories() {
        console.log("Fetching repositories...");
        // enter location of file. Use repositories.txt
        fetch('txt/my_repositories.txt')
            .then(response => response.text())
            .then(data => {
                console.log("File content:", data);
                parseRepositoryData(data); // Process the fetched data
            })
            .catch(error => {
                console.error("Error fetching or parsing repositories:", error);
            });
    }


    // Function to parse repository data
    function parseRepositoryData(data) {
        const lines = data.trim().split('\n');
        console.log("Parsed lines:", lines);

        lines.forEach(line => {
            const [text, link] = line.split(',').map(entry => entry.trim());
            console.log("Text:", text, "Link:", link);
            // Add repository entry to repositories div
            addRepositoryEntry(text, link, github_profile_picture_src);
        });
    }

    // Function to add repository entry to the repositories div
    function addRepositoryEntry(text, link,github_profile_picture_src) {
        // Create list item (li) element
        const listItem = document.createElement('li');
        listItem.style.display = 'flex';
        listItem.style.alignItems = 'center';
        listItem.style.textDecoration = 'none';
        listItem.style.color = '#717982';
        listItem.style.fontSize = '16px';
        listItem.style.padding = '7px 20px'; // Ensure consistent padding with CSS
        listItem.style.transition = 'background-color 0.3s';
        listItem.style.marginRight = '10px';
        listItem.style.marginLeft = '22px';
        listItem.style.borderRadius = '10px';
        listItem.style.lineHeight = '16px';
        listItem.style.height = '30px'; // Ensure the height matches the CSS
        listItem.style.marginTop = '2px';

        // Create a container div for image and anchor
        const contentContainer = document.createElement('div');

        // Create anchor (a) element for the link
        const anchor = document.createElement('a');

        //create image element
        const image = document.createElement('img');
        image.src = github_profile_picture_src; // Image URL
        image.alt = 'icon';
        image.width = 30;
        image.height = 30;
        image.style.alignItems = 'center';
        image.style.marginRight = '10px'; // Gap between image and textContent

        anchor.setAttribute('href', link);
        anchor.textContent = text;
        anchor.style.textDecoration = 'none'; // Remove underline if needed
        anchor.style.color = '#717982'; // Text color
        anchor.style.fontSize = '16px'; // Font size
        anchor.style.paddingTop = '2px'; // Bottom padding for text
        anchor.style.lineHeight = '18px'; // Ensure image and text are vertically aligned
        anchor.style.alignItems = 'center'; // Center items vertically
        anchor.style.whiteSpace = 'normal'; // Allow text to wrap
        anchor.style.wordBreak = 'break-word'; // Break long words

        // Append anchor to list item
        listItem.appendChild(image);
        listItem.appendChild(anchor);

        // Append the container div to the list item
        listItem.appendChild(contentContainer);

        // Add event listeners for hover effect
        listItem.addEventListener('mouseover', function() {
            this.classList.add('hovered'); // Add CSS class on hover
        });

        listItem.addEventListener('mouseout', function() {
            this.classList.remove('hovered'); // Remove CSS class on mouseout
        });

        // Get the repositories div container
        const repositoriesList = document.getElementById('repositories-list');

        // Append list item to repositories div
        repositoriesList.appendChild(listItem);
    }

    // Fetch repositories after DOM is loaded
    fetchRepositories();
});

//for testing tooltip
document.querySelectorAll('.tooltip').forEach(tooltip => {
    tooltip.addEventListener('mouseover', () => {
        console.log('Hover detected:', tooltip);
    });
});
