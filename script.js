document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate on Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 400,
      easing: "ease-out",
      once: true,
      mirror: false,
      offset: 50,
      delay: 0
    })
  }

  // Initialize Lucide icons
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons()
  }

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year")
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear().toString()
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const html = document.documentElement
      const newTheme = html.classList.contains("dark") ? "light" : "dark"
      html.className = newTheme
      localStorage.setItem("theme", newTheme)
      updateBodyStyles(newTheme)
    })
  }

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    document.documentElement.className = savedTheme
    updateBodyStyles(savedTheme)
  }

  function updateBodyStyles(theme) {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0a0a0a"
      document.body.style.color = "#f0f0f0"
    } else {
      document.body.style.backgroundColor = "#f8f8f8"
      document.body.style.color = "#0a0a0a"
    }
  }

  // Mobile menu
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const closeMenuButton = document.getElementById("close-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.add("active")
    })
  }

  if (closeMenuButton && mobileMenu) {
    closeMenuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  }

  // Scroll progress
  const scrollProgress = document.querySelector(".scroll-progress")
  if (scrollProgress) {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / scrollHeight) * 100
      scrollProgress.style.transform = `scaleX(${progress / 100})`
    })
  }

  // Typed text effect with proper sequencing
  function typeText(element, text, speed, callback) {
    if (!element) return

    let i = 0
    element.textContent = ""

    function typing() {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(typing, speed)
      } else if (callback) {
        callback()
      }
    }

    typing()
  }

  // Type hero section text
  const heroTitleElement = document.getElementById("typed-hero")
  const heroQuestionElement = document.getElementById("typed-question")
  const heroDescriptionElement = document.getElementById("typed-description")

  if (heroTitleElement && heroQuestionElement && heroDescriptionElement) {
    typeText(heroTitleElement, "MANAN AMBALIYA", 50, () => {
      // Add a pause between title and question
      setTimeout(() => {
        typeText(heroQuestionElement, "Why build machines that think?", 40, () => {
          // Add a pause between question and description
          setTimeout(() => {
            typeText(
              heroDescriptionElement,
              "Because we cannot stop thinking. And in that relentless pursuit, we may find not answers, but a deeper understanding of the questions.",
              30,
            )
          }, 500)
        })
      }, 500)
    })
  }

  // Setup rotating titles
  const rotatingTitlesContainer = document.querySelector(".rotating-titles")
  if (rotatingTitlesContainer) {
    const titles = ["Data Scientist", "ML Engineer", "Developer", "Problem Solver"]

    rotatingTitlesContainer.innerHTML = ""
    const titleElement = document.createElement("span")
    titleElement.classList.add("rotating-title", "active")
    rotatingTitlesContainer.appendChild(titleElement)

    let currentTitleIndex = 0

    function rotateTitle() {
      titleElement.textContent = titles[currentTitleIndex]
      titleElement.style.opacity = 0

      // Fade in
      setTimeout(() => {
        titleElement.style.opacity = 1
      }, 200)

      // Prepare for next title
      currentTitleIndex = (currentTitleIndex + 1) % titles.length

      // Wait before showing next title
      setTimeout(rotateTitle, 3000)
    }

    // Start the rotation
    rotateTitle()
  }

  // Interactive quote
  const quoteWords = document.querySelectorAll(".quote-word")
  quoteWords.forEach((word) => {
    word.addEventListener("mouseenter", () => {
      word.style.transform = "scale(1.1)"
    })

    word.addEventListener("mouseleave", () => {
      word.style.transform = "scale(1)"
    })
  })

  // Skills section
  const skillsData = {
    "data-science": [
      {
        name: "Machine Learning",
        level: 90,
        category: "Data Science",
        description:
          "Extensive experience implementing various ML algorithms including regression, classification, clustering, and ensemble methods. Proficient in feature engineering, model selection, and hyperparameter tuning to optimize performance.",
      },
      {
        name: "Statistical Analysis",
        level: 85,
        category: "Data Science",
        description:
          "Strong foundation in statistical methods including hypothesis testing, experimental design, and multivariate analysis. Skilled at extracting meaningful insights from complex datasets and communicating findings effectively.",
      },
      {
        name: "Deep Learning",
        level: 80,
        category: "Data Science",
        description:
          "Implemented neural networks for various applications using TensorFlow and PyTorch. Experience with CNNs for image processing, RNNs for sequence data, and transfer learning techniques.",
      },
      {
        name: "Data Visualization",
        level: 95,
        category: "Data Science",
        description:
          "Expert in creating compelling visual narratives from complex data using tools like Matplotlib, Seaborn, Plotly, and Tableau. Skilled at designing dashboards that communicate insights clearly to technical and non-technical audiences.",
      },
      {
        name: "Natural Language Processing",
        level: 75,
        category: "Data Science",
        description:
          "Experience with text preprocessing, sentiment analysis, topic modeling, and building chatbots. Familiar with libraries like NLTK, spaCy, and Hugging Face Transformers.",
      },
    ],
    "web-development": [
      {
        name: "React.js",
        level: 85,
        category: "Web Development",
        description:
          "Proficiency in building interactive UIs with React. Experienced with hooks, context API, and state management in applications.",
      },
      {
        name: "Node.js",
        level: 80,
        category: "Web Development",
        description:
          "Strong backend development skills using Node.js and Express. Experience building RESTful APIs, handling authentication, and integrating with databases.",
      },
      {
        name: "Python",
        level: 95,
        category: "Web Development",
        description:
          "Expert in Python for web development using frameworks like Flask and FastAPI. Skilled at creating APIs and integrating with data science workflows.",
      },
      {
        name: "SQL",
        level: 85,
        category: "Web Development",
        description:
          "Proficient in writing complex SQL queries, optimizing database performance, and designing efficient schemas across PostgreSQL and MySQL.",
      },
    ],
    "cloud-devops": [
      {
        name: "AWS",
        level: 75,
        category: "Cloud & DevOps",
        description:
          "Experience with AWS services including EC2, S3, Lambda, and DynamoDB. Skilled at designing scalable, cost-effective cloud architectures.",
      },
      {
        name: "Docker",
        level: 70,
        category: "Cloud & DevOps",
        description:
          "Proficient in containerizing applications with Docker for consistent development and deployment environments. Experience with multi-container applications using Docker Compose.",
      },
      {
        name: "CI/CD",
        level: 65,
        category: "Cloud & DevOps",
        description:
          "Experience setting up continuous integration and deployment pipelines. Focus on automating testing, building, and deployment processes for faster and more reliable releases.",
      },
      {
        name: "Kubernetes",
        level: 60,
        category: "Cloud & DevOps",
        description:
          "Working knowledge of Kubernetes for container orchestration. Experience with deployments, services, and configuring persistent storage for stateful applications.",
      },
    ],
    languages: [
      {
        name: "Python",
        level: 95,
        category: "Languages",
        description:
          "Expert-level Python programming with extensive experience in data science, web development, and automation. Proficient with libraries like NumPy, Pandas, Scikit-learn, and Flask.",
      },
      {
        name: "SQL",
        level: 85,
        category: "Languages",
        description:
          "Proficient in writing complex SQL queries, optimizing database performance, and designing efficient schemas across PostgreSQL and MySQL.",
      },
      {
        name: "C++",
        level: 75,
        category: "Languages",
        description:
          "Strong foundation in C++ development with experience in data structures, algorithms, and building efficient applications.",
      },
      {
        name: "MATLAB",
        level: 80,
        category: "Languages",
        description:
          "Proficient in MATLAB for numerical computing, data analysis, and algorithm development, particularly for engineering and scientific applications.",
      },
    ],
  }

  // Initialize skills section
  const skillsGrid = document.querySelector(".skills-grid")
  const skillCategoryButtons = document.querySelectorAll(".skill-category-btn")
  const skillDetailsPlaceholder = document.querySelector(".skill-details-placeholder")
  const skillDetailsContent = document.querySelector(".skill-details-content")
  const skillDetailsName = document.querySelector(".skill-details-name")
  const skillDetailsCategory = document.querySelector(".skill-details-category")
  const skillDetailsProficiencyValue = document.querySelector(".skill-details-proficiency-value")
  const skillDetailsProficiencyProgress = document.querySelector(".skill-details-proficiency-progress")
  const skillDetailsDescription = document.querySelector(".skill-details-description")
  const skillDetailsBack = document.querySelector(".skill-details-back")

  let activeCategory = "data-science"

  function renderSkills(category) {
    if (!skillsGrid) return

    skillsGrid.innerHTML = ""

    skillsData[category].forEach((skill) => {
      const skillItem = document.createElement("div")
      skillItem.classList.add("skill-item")
      skillItem.innerHTML = `
                <h4 class="skill-name">${skill.name}</h4>
                <div class="skill-proficiency">
                    <div class="skill-proficiency-header">
                        <span>Proficiency</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-proficiency-bar">
                        <div class="skill-proficiency-progress" style="width: 0%"></div>
                    </div>
                </div>
            `

      skillItem.addEventListener("click", () => {
        showSkillDetails(skill)
      })

      skillsGrid.appendChild(skillItem)
    })

    // Animate progress bars
    setTimeout(() => {
      const progressBars = document.querySelectorAll(".skill-proficiency-progress")
      progressBars.forEach((bar, index) => {
        if (skillsData[category] && skillsData[category][index]) {
          bar.style.width = `${skillsData[category][index].level}%`
        }
      })
    }, 100)
  }

  function showSkillDetails(skill) {
    if (
      !skillDetailsName ||
      !skillDetailsCategory ||
      !skillDetailsProficiencyValue ||
      !skillDetailsProficiencyProgress ||
      !skillDetailsDescription ||
      !skillDetailsPlaceholder ||
      !skillDetailsContent
    )
      return

    skillDetailsName.textContent = skill.name
    skillDetailsCategory.textContent = skill.category
    skillDetailsProficiencyValue.textContent = `${skill.level}%`
    skillDetailsProficiencyProgress.style.width = `${skill.level}%`
    skillDetailsDescription.textContent = skill.description

    skillDetailsPlaceholder.style.display = "none"
    skillDetailsContent.style.display = "flex"

    // Highlight the selected skill
    const skillItems = document.querySelectorAll(".skill-item")
    skillItems.forEach((item) => {
      if (item.querySelector(".skill-name").textContent === skill.name) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  }

  if (skillDetailsBack) {
    skillDetailsBack.addEventListener("click", () => {
      if (skillDetailsPlaceholder) skillDetailsPlaceholder.style.display = "flex"
      if (skillDetailsContent) skillDetailsContent.style.display = "none"

      // Remove highlight from all skills
      const skillItems = document.querySelectorAll(".skill-item")
      skillItems.forEach((item) => {
        item.classList.remove("active")
      })
    })
  }

  // Initialize with first category
  renderSkills(activeCategory)

  // Category buttons
  skillCategoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category")

      // Update active button
      skillCategoryButtons.forEach((btn) => {
        btn.classList.remove("active")
      })
      button.classList.add("active")

      // Update active category and render skills
      activeCategory = category
      renderSkills(category)

      // Reset skill details view
      if (skillDetailsPlaceholder) skillDetailsPlaceholder.style.display = "flex"
      if (skillDetailsContent) skillDetailsContent.style.display = "none"
    })
  })

  // Contact form
  const contactForm = document.getElementById("contact-form")
  const formSuccess = document.getElementById("form-success")

  if (contactForm && formSuccess) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simulate form submission
      contactForm.style.display = "none"
      formSuccess.style.display = "block"

      // Reset form
      setTimeout(() => {
        contactForm.reset()
        contactForm.style.display = "block"
        formSuccess.style.display = "none"
      }, 3000)
    })
  }

  // Navigation active state
  const sections = document.querySelectorAll(".section")
  const navItems = document.querySelectorAll(".nav-item, .mobile-nav-item, .floating-menu-item")

  function setActiveNavItem() {
    let currentSection = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop - 300) {
        currentSection = section.getAttribute("id")
      }
    })

    navItems.forEach((item) => {
      item.classList.remove("active")
      if (item.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", setActiveNavItem)
  setActiveNavItem() // Set initial state

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header")?.offsetHeight || 0
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains("active")) {
          mobileMenu.classList.remove("active")
        }
      }
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const loadingElement = document.getElementById("leetcode-loading")
  const errorElement = document.getElementById("leetcode-error")
  const errorMessageElement = document.getElementById("leetcode-error-message")
  const contentElement = document.getElementById("leetcode-content")
  const retryButton = document.getElementById("leetcode-retry-button")

  // Stats elements
  const totalSolvedElement = document.getElementById("leetcode-total-solved")
  const totalSolvedCountElement = document.getElementById("leetcode-total-solved-count")
  const acceptanceRateElement = document.getElementById("leetcode-acceptance-rate")
  const rankingElement = document.getElementById("leetcode-ranking")
  const streakElement = document.getElementById("leetcode-streak")
  const totalProgressBarElement = document.getElementById("leetcode-total-progress-bar")
  const totalPercentageElement = document.getElementById("leetcode-total-percentage")
  const easyCountElement = document.getElementById("leetcode-easy-count")
  const easyProgressElement = document.getElementById("leetcode-easy-progress")
  const mediumCountElement = document.getElementById("leetcode-medium-count")
  const mediumProgressElement = document.getElementById("leetcode-medium-progress")
  const hardCountElement = document.getElementById("leetcode-hard-count")
  const hardProgressElement = document.getElementById("leetcode-hard-progress")
  const profileLinkElement = document.getElementById("leetcode-profile-link")

  // LeetCode username
  const username = "Manan0001"

  // Update profile link
  profileLinkElement.href = `https://leetcode.com/u/${username}/`

  // Fetch LeetCode stats
  fetchLeetCodeStats()

  // Add event listener to retry button
  retryButton.addEventListener("click", fetchLeetCodeStats)

  // Function to fetch LeetCode stats
  function fetchLeetCodeStats() {
    // Show loading state
    loadingElement.style.display = "flex"
    errorElement.style.display = "none"
    contentElement.style.display = "none"

    // In a real implementation, you would make an API call here
    // For this example, we'll simulate an API call with a timeout
    setTimeout(() => {
      // Simulate API failure (in a real app, this would be a fetch call)
      const apiSuccess = false // Set to true to simulate success, false to simulate failure

      if (apiSuccess) {
        // If API call is successful, use the returned data
        const data = {
          totalSolved: 187,
          easySolved: 95,
          mediumSolved: 78,
          hardSolved: 14,
          acceptanceRate: 67.8,
          ranking: 125432,
          streak: 15,
          totalQuestions: 2500,
          easyTotal: 750,
          mediumTotal: 1250,
          hardTotal: 500,
        }

        updateUI(data)

        // Hide loading, show content
        loadingElement.style.display = "none"
        errorElement.style.display = "none"
        contentElement.style.display = "block"
      } else {
        // If API call fails, use fallback data
        const fallbackData = {
          totalSolved: 159,
          easySolved: 79,
          mediumSolved: 77,
          hardSolved: 3,
          acceptanceRate: 56.32,
          ranking: 748016,
          streak: 16,
          totalQuestions: 2500,
          easyTotal: 750,
          mediumTotal: 1250,
          hardTotal: 500,
        }

        updateUI(fallbackData)

        // Show error message with fallback data
        loadingElement.style.display = "none"
        errorElement.style.display = "block"
        contentElement.style.display = "block"
        errorMessageElement.textContent = "Failed to fetch LeetCode data. Using cached data instead."
      }
    }, 1500) // Simulate network delay
  }

  // Function to update UI with data
  function updateUI(data) {
    // Calculate percentages
    const totalPercentage = (data.totalSolved / data.totalQuestions) * 100
    const easyPercentage = (data.easySolved / data.easyTotal) * 100
    const mediumPercentage = (data.mediumSolved / data.mediumTotal) * 100
    const hardPercentage = (data.hardSolved / data.hardTotal) * 100

    // Update stats
    totalSolvedElement.textContent = data.totalSolved
    totalSolvedCountElement.textContent = `${data.totalSolved} / ${data.totalQuestions}`
    acceptanceRateElement.textContent = `${data.acceptanceRate}%`
    rankingElement.textContent = `#${data.ranking}`
    streakElement.textContent = `${data.streak} days`

    // Update progress bars
    totalProgressBarElement.style.width = `${totalPercentage}%`
    totalPercentageElement.textContent = `${totalPercentage.toFixed(1)}%`

    easyCountElement.textContent = `${data.easySolved} / ${data.easyTotal}`
    easyProgressElement.style.width = `${easyPercentage}%`

    mediumCountElement.textContent = `${data.mediumSolved} / ${data.mediumTotal}`
    mediumProgressElement.style.width = `${mediumPercentage}%`

    hardCountElement.textContent = `${data.hardSolved} / ${data.hardTotal}`
    hardProgressElement.style.width = `${hardPercentage}%`
  }
})
