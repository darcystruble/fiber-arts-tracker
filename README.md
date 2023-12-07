# Crafted: A Fiber Arts Project Management
[Teachnologies](#technologies) * [Screenshots](#sreenshots) * [ERD](#erd) * [Wireframe](#wireframe) 

Crafted is an app that allows the user to track many aspects of their making/crafting journey. A user can track their yarn/fiber stash. They can track projects in 3 categories: knitting, crochet and spinning and see how they are using their crafting time.

### User Stories

A user can:
- Make an account and sign into their accounts
- See an overview of time spent on each craft based on their crafting goals
- Track projects in 3 categories: knitting, crocheting, and spinning
- Add yarn, fiber, and tools to their stash
- Create a project, add yarn or fiber to their project either from stash or not from stash.

### Technologies

Technologies used:
- React w/ Typescript
- PostgreSQL, Django

### Sreenshots
![Home page](/assets/home-page.png)

![Add New Project](/assets/add-new-project.png)

![View a project](/assets/view-project.png)

![Edit project](/assets/edit-project.png)

![Cell phone view](/assets/cell-view.png)


### ERD

There are 4 main table types, with users and goals being straight forward. The projects and stash models are abstract, allowing their respective connected models to inherit their properties. In the case of projects, the Projects models, the models that inherit from it are Knitting, Spinning and Crochet. For the Stash model, Fiber and Yarn inherit from it.

![ERD](/assets/Final-Project-Fiber-Tracker-Page-3.drawio.png)

### Wireframe
![Wireframes](/assets/fiber-art-figma.png)