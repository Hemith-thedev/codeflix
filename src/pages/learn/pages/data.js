const sectionsData = [
    {
      section_title: "Frontend",
      content: [
        {
          title: (
            <span>
              <span className="gradient-text">React.JS</span>
            </span>
          ),
          paragraph:
            "React is an open-source Javascript library used for building User Interfaces (UIs) specifically for Single Page Applications (SPAs).",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Developed by Facebook, in 2011.",
                  "Deployed later on Instagram in 2012.",
                  "publically as open-source library in May 29, 2013",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Virtual DOM",
                  "Component Based Architecture / Programming",
                  "Declarative Ui",
                  "Component's State updates",
                  "JSX (JavScript XML) - HTML structures directly into your JavaScript files (.jsx)",
                  "One-Way Data Binding",
                  "React Hooks",
                ],
              },
            ],
          },
        },
        {
          title: (
            <span>
              <span className="gradient-text">AngularJS</span>
            </span>
          ),
          paragraph:
            "AngularJS is an open-source, structural JavaScript framework used for building dynamic single-page web applications by extending standard HTML vocabulary.",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Developed by 'Miško Hevery' at Brat Tech LLC in 2009.",
                  "Maintained and officially released by Google in 2010.",
                  "Succeeded by the completely rewritten 'Angular' (v2+) platform in 2016.",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Two-Way Data Binding",
                  "Model-View-Controller (MVC) Architecture",
                  "HTML Templates & Directives (e.g., ng-model, ng-repeat)",
                  "Dependency Injection (DI)",
                  "Built-in Form Validation",
                  "Plain Old JavaScript Objects (POJO) Data Models",
                ],
              },
            ],
          },
        },
        {
          title: (
            <span>
              <span className="gradient-text">Vue.JS</span>
            </span>
          ),
          paragraph:
            "Vue.js is an open-source, progressive JavaScript framework designed to be incrementally adoptable for building modern and interactive user interfaces.",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Created by 'Evan You' while working as a developer at Google.",
                  "Officially released to the public in February 2014.",
                  "Funded entirely by community crowdfunding and sponsorships.",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Virtual DOM (similar to React's performance model)",
                  "Component-Based Architecture",
                  "Reactive Data Binding (Automated system track updates)",
                  "Single-File Components (.vue files combining HTML/JS/CSS)",
                  "Directives & HTML-based Template Syntax",
                  "Composition API & Options API Styles",
                ],
              },
            ],
          },
        },
      ],
    },
    {
      section_title: "Backend",
      content: [
        {
          title: (
            <span>
              <span className="gradient-text">Node.js</span>
            </span>
          ),
          paragraph:
            "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, primarily for server-side logic.",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Created and developed by 'Ryan Dahl' in 2009.",
                  "Built on top of Google Chrome's V8 JavaScript JavaScript execution engine.",
                  "Governed and maintained globally by the OpenJS Foundation.",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Asynchronous and Event-Driven architecture",
                  "Single-Threaded event loop model with background worker pools",
                  "Non-blocking I/O operations for high concurrent traffic",
                  "NPM (Node Package Manager) ecosystem for library sharing",
                  "Native cross-platform execution (Windows, Linux, macOS)",
                ],
              },
            ],
          },
        },
        {
          title: (
            <span>
              <span className="gradient-text">Django</span>
            </span>
          ),
          paragraph:
            "Django is a high-level, open-source Python web framework that encourages rapid development and clean, pragmatic architectural design.",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Created in 2003 by Adrian Holovaty and Simon Willison at a newspaper company.",
                  "Officially released publicly under a BSD license in July 2005.",
                  "Named after the legendary jazz guitarist Django Reinhardt.",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Batteries-Included philosophy providing auth, admin, and ORM tools out-of-the-box",
                  "MVT (Model-View-Template) architectural pattern variant",
                  "Built-in Object-Relational Mapper (ORM) for easy database interaction",
                  "Robust built-in security protections against SQL Injection, XSS, and CSRF",
                  "Automatic, production-ready Admin Graphic Interface generation",
                ],
              },
            ],
          },
        },
      ],
    },
    {
      section_title: "Database",
      content: [
        {
          title: (
            <span>
              <span className="gradient-text">MongoDB</span>
            </span>
          ),
          paragraph:
            "MongoDB is a source-available, document-oriented database classified as a NoSQL database system, designed for scalability and flexible data storage.",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Development started in 2007 by 10gen (now MongoDB Inc.).",
                  "First released publicly as an open-source project in 2009.",
                  "Derived its name from the word 'humongous' to represent data scale capabilities.",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Document-based storage using dynamic BSON (Binary JSON) formatting",
                  "Schema-less architecture allowing fields to vary between documents",
                  "High scalability via automated sharding and horizontal clustering",
                  "Powerful aggregation pipelines for multi-stage data processing",
                  "Native replication setup through Replica Sets for high availability",
                ],
              },
            ],
          },
        },
        {
          title: (
            <span>
              <span className="gradient-text">PostgreSQL</span>
            </span>
          ),
          paragraph:
            "PostgreSQL is a powerful, open-source object-relational database system (RDBMS) emphasizing extensibility and SQL standard compliance.",
          points: {
            heading: "Key points",
            subpoints: [
              {
                subject: "History",
                sub_subpoints: [
                  "Originated as the POSTGRES project at UC Berkeley led by 'Michael Stonebraker' in 1986.",
                  "Released publicly as open-source in 1996 with native SQL support added.",
                  "Maintained continuously by the PostgreSQL Global Development Group.",
                ],
              },
              {
                subject: "Features",
                sub_subpoints: [
                  "Strict ACID compliance guarantees for transactional safety",
                  "Robust support for complex relational querying and joins",
                  "Hybrid data handling via native JSON/JSONB document data types",
                  "High extensibility supporting custom functions, data types, and index types",
                  "Advanced concurrency control through Multi-Version Concurrency Control (MVCC)",
                ],
              },
            ],
          },
        },
      ],
    },
  ];
