export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    question: "Which of the following is a characteristic of emerging technologies according to Rotolo, Hicks, and Martin?",
    options: ["Radical novelty", "Slow growth", "Complete predictability", "Low impact"],
    correctAnswer: "Radical novelty",
    explanation: "Emerging technologies show radical novelty by using different basic principles or new uses of existing tech."
  },
  {
    question: "Which characteristic refers to technologies converging from different research streams?",
    options: ["Coherence", "Prominent impact", "Uncertainty", "Relativity"],
    correctAnswer: "Coherence",
    explanation: "Coherence describes internal unity and logical interconnection among research streams."
  },
  {
    question: "Which area is cited as part of Industry 4.0 in the PDF?",
    options: ["Augmented Reality (AR)", "Steam engines", "Analog telephony", "Manual looms"],
    correctAnswer: "Augmented Reality (AR)",
    explanation: "AR is listed among Industry 4.0 technologies affecting workflows and decision-making."
  },
  {
    question: "What does 'prominent impact' mean for an emerging technology?",
    options: ["Transforms sectors and exerts wide economic influence", "Has no effect on industries", "Is only theoretical", "Is already obsolete"],
    correctAnswer: "Transforms sectors and exerts wide economic influence",
    explanation: "Prominent impact means the technology can transform industries and socio-economic systems."
  },
  {
    question: "Which technology uses qubits and quantum superposition?",
    options: ["Quantum computers", "Cloud computing", "Augmented reality", "Big data analytics"],
    correctAnswer: "Quantum computers",
    explanation: "Quantum computers use qubits that can be in superposition (0 and 1 simultaneously)."
  },
  {
    question: "Machine learning is best described as:",
    options: ["An AI method that enables systems to learn from experience", "A type of database", "A hardware device", "A testing tool"],
    correctAnswer: "An AI method that enables systems to learn from experience",
    explanation: "Machine learning provides machines the ability to learn from data and experience."
  },
  {
    question: "Which of these is NOT listed as an emerging technology area in the PDF?",
    options: ["Horse-drawn carriage", "Internet of Things (IoT)", "Big Data Analytics", "Cloud Computing"],
    correctAnswer: "Horse-drawn carriage",
    explanation: "Horse-drawn carriages are not a modern emerging technology area discussed in the PDF."
  },
  {
    question: "What is a practical application of AR mentioned in the PDF?",
    options: ["In-car displays that guide parking", "Mechanical printing press", "Manual accounting", "Typewriters"],
    correctAnswer: "In-car displays that guide parking",
    explanation: "AR overlays computer-generated information such as driving aids in vehicles."
  },
  {
    question: "Industry 4.0 is best described as:",
    options: ["Integration of physical and digital systems improving production", "Return to manual labor", "Only cloud services", "Only social media"],
    correctAnswer: "Integration of physical and digital systems improving production",
    explanation: "Industry 4.0 integrates digital and physical systems to improve quality and efficiency."
  },
  {
    question: "Which of the following technologies enables decentralised analytics at the edge?",
    options: ["Internet of Things (IoT)", "Fossil fuels", "Inkjet printing", "Manual typewriter"],
    correctAnswer: "Internet of Things (IoT)",
    explanation: "IoT devices decentralize data collection and enable local analytics and decision-making."
  },
  {
    question: "Which statement reflects 'uncertainty and ambiguity' of emerging tech?",
    options: ["Outcomes are not fully known and meanings vary between groups", "Everything is fully determined", "No impact expected", "Completely certain adoption"],
    correctAnswer: "Outcomes are not fully known and meanings vary between groups",
    explanation: "Emerging technologies carry uncertain futures and ambiguous potential uses across social groups."
  },
  {
    question: "Big Data Analytics primarily helps to:",
    options: ["Discover patterns in large datasets for decision-making", "Replace human resources", "Decrease data availability", "Create physical hardware"],
    correctAnswer: "Discover patterns in large datasets for decision-making",
    explanation: "Big data analytics organizes and analyzes large datasets to support decisions."
  },
  {
    question: "Which organization is cited for identifying top emerging technology areas?",
    options: ["World Economic Forum", "Local newspaper", "A grocery store", "A small blog"],
    correctAnswer: "World Economic Forum",
    explanation: "The World Economic Forum is referenced for listing high-potential emerging technologies."
  },
  {
    question: "Cloud computing is defined as:",
    options: ["Delivering hosted services over the Internet", "A desktop application only", "A physical warehouse", "A programming language"],
    correctAnswer: "Delivering hosted services over the Internet",
    explanation: "Cloud computing provides hosted services (storage/compute) over the Internet."
  },
  {
    question: "Quantum computing's main advantage is:",
    options: ["Solving certain problems far more efficiently than classical computers", "Being cheaper than calculators", "Replacing cloud computing", "Being widespread in phones"],
    correctAnswer: "Solving certain problems far more efficiently than classical computers",
    explanation: "Quantum computers can exploit quantum mechanics to outperform classical machines for some tasks."
  },
  {
    question: "Which technology is expected to provide real-time worker support (e.g., repair instructions)?",
    options: ["Augmented Reality (AR)", "Typewriter", "Fax machines", "Coal power"],
    correctAnswer: "Augmented Reality (AR)",
    explanation: "AR can deliver real-time instructions and contextual information to workers on site."
  },
  {
    question: "Which is an example of 'relatively fast growth' characteristic?",
    options: ["Rapid increase in number of actors and prototypes", "No change over decades", "Declining interest", "Stable single vendor only"],
    correctAnswer: "Rapid increase in number of actors and prototypes",
    explanation: "Relatively fast growth shows rising actors, funding, and prototype outputs."
  },
  {
    question: "Which of these is NOT a building block of Industry 4.0 mentioned?",
    options: ["Handwritten ledgers", "Robotics", "Virtual Reality", "IoT"],
    correctAnswer: "Handwritten ledgers",
    explanation: "Handwritten ledgers are outdated and not part of Industry 4.0 technologies."
  },
  {
    question: "Which organization developed the working paper referenced for emerging tech characteristics?",
    options: ["Rotolo, Hicks, & Martin (SPRU)", "Unknown startup", "Retail company", "Local club"],
    correctAnswer: "Rotolo, Hicks, & Martin (SPRU)",
    explanation: "The PDF cites Rotolo, Hicks, & Martin's SPRU working paper on emerging technology characteristics."
  },
  {
    question: "What is the significance of 'coherence' in emerging technologies?",
    options: ["Indicates persistence and identity beyond initial flux", "Means technologies are identical", "Means technologies cannot be used", "Means no actors involved"],
    correctAnswer: "Indicates persistence and identity beyond initial flux",
    explanation: "Coherence shows the technology has an emerging identity and momentum over time."
  },
  {
    question: "What is the primary goal of requirements determination?",
    options: ["Convert high-level user needs into a detailed requirements definition", "Design the final UI", "Deploy the software", "Write unit tests only"],
    correctAnswer: "Convert high-level user needs into a detailed requirements definition",
    explanation: "Requirements determination refines user needs into a detailed, actionable requirements definition."
  },
  {
    question: "Which is an example of a functional requirement?",
    options: ["The system must allow users to search for products", "Use of a specific database vendor", "Office location", "Developer salary"],
    correctAnswer: "The system must allow users to search for products",
    explanation: "Functional requirements describe what the system should do, e.g., search functionality."
  },
  {
    question: "Which requirement type defines response time and reliability?",
    options: ["Performance (non-functional) requirements", "Functional requirements", "Actors list", "Use-case names"],
    correctAnswer: "Performance (non-functional) requirements",
    explanation: "Performance requirements specify response time, capacity, and reliability."
  },
  {
    question: "Which requirement type addresses who can change inventory items?",
    options: ["Security requirements", "Functional requirements", "Prototyping requirements", "Design patterns"],
    correctAnswer: "Security requirements",
    explanation: "Security requirements set access controls like which roles can change inventory."
  },
  {
    question: "Which phrase is recommended when writing requirements?",
    options: ["Use 'shall' or 'will' rather than 'user-friendly'", "Use ambiguous terms like 'easy'", "Use metaphors", "Avoid numbering"],
    correctAnswer: "Use 'shall' or 'will' rather than 'user-friendly'",
    explanation: "Using 'shall' or 'will' produces verifiable, clear requirements, unlike vague terms."
  },
  {
    question: "In requirements modeling, which UML diagram summarizes functional requirements from a user perspective?",
    options: ["Use-case diagram", "Class diagram", "Sequence diagram only", "Activity diagram only"],
    correctAnswer: "Use-case diagram",
    explanation: "Use-case diagrams summarize functional requirements as interactions between actors and use-cases."
  },
  {
    question: "Which component of a use-case diagram represents roles interacting with the system?",
    options: ["Actor", "Use-case", "Subject boundary", "Association"],
    correctAnswer: "Actor",
    explanation: "Actors (people or systems) represent roles that interact with the system in use-case diagrams."
  },
  {
    question: "Where are use-cases placed in a use-case diagram?",
    options: ["Inside the subject boundary box", "Outside the diagram", "On the actor stick figure", "In the legend only"],
    correctAnswer: "Inside the subject boundary box",
    explanation: "Use-cases are placed inside the subject boundary to indicate system scope."
  },
  {
    question: "What should each use-case be labeled with?",
    options: ["A verb-noun phrase that defines a functional requirement", "A single adjective", "Random numbers", "Developer names"],
    correctAnswer: "A verb-noun phrase that defines a functional requirement",
    explanation: "Use-cases use verb-noun labels (e.g., 'Create Invoice') to describe functionality."
  },
  {
    question: "Which is a recommended activity during requirements analysis?",
    options: ["Use inspections and prototyping to ensure requirement quality", "Skip client reviews", "Assume completeness", "Avoid checklists"],
    correctAnswer: "Use inspections and prototyping to ensure requirement quality",
    explanation: "Inspections and prototypes help validate that requirements are correct and testable."
  },
  {
    question: "Which is part of a requirements definition report outline?",
    options: ["Functional and non-functional requirements sections", "Only test cases", "Only code", "Only deployment scripts"],
    correctAnswer: "Functional and non-functional requirements sections",
    explanation: "A requirements definition report includes sections for functional and non-functional requirements."
  },
  {
    question: "What do non-functional requirements affect during design?",
    options: ["Decisions about database, UI, hardware and architecture", "Only code comments", "Only user manuals", "Only deployment scripts"],
    correctAnswer: "Decisions about database, UI, hardware and architecture",
    explanation: "Non-functional requirements guide decisions on technical architecture and components."
  },
  {
    question: "Which technique is best when many people must provide input from different locations?",
    options: ["Questionnaires", "One-on-one interviews only", "Walkthroughs only", "Code reviews"],
    correctAnswer: "Questionnaires",
    explanation: "Questionnaires allow gathering structured input from a large, distributed group."
  },
  {
    question: "What is document analysis used for?",
    options: ["Understanding the current (as-is) system via existing documents", "Deploying software", "Designing hardware", "Writing tests only"],
    correctAnswer: "Understanding the current (as-is) system via existing documents",
    explanation: "Document analysis interprets existing artifacts to assess the current system and requirements."
  },
  {
    question: "Which requirement characteristic ensures unique identification for traceability?",
    options: ["Assigning a unique identifier to each requirement", "Using vague language", "No identifiers", "Mixing requirements together"],
    correctAnswer: "Assigning a unique identifier to each requirement",
    explanation: "Unique IDs allow tracking requirements through development and changes."
  },
  {
    question: "Which step is first when using questionnaires?",
    options: ["Selecting participants (sample)", "Administering the questionnaire only", "Ignoring responses", "Designing the database"],
    correctAnswer: "Selecting participants (sample)",
    explanation: "Selecting participants ensures your sample represents the target population."
  },
  {
    question: "What is the purpose of a requirements checklist during analysis?",
    options: ["Ensure clarity, verifiability, and traceability of requirements", "Automate deployment", "Replace testing", "Write code faster"],
    correctAnswer: "Ensure clarity, verifiability, and traceability of requirements",
    explanation: "A checklist helps verify requirements are clear, testable, and traceable."
  },
  {
    question: "In UML use-case diagrams, what indicates interaction between actor and use-case?",
    options: ["Association (a connecting line)", "A dotted rectangle", "A class box", "A database icon"],
    correctAnswer: "Association (a connecting line)",
    explanation: "Associations (lines) connect actors to the use-cases they interact with."
  },
  {
    question: "Which modeling language is used for visualizing object-oriented systems?",
    options: ["UML (Unified Modeling Language)", "HTML", "CSV", "Bash"],
    correctAnswer: "UML (Unified Modeling Language)",
    explanation: "UML is the standard visual modeling language used to document object-oriented designs."
  },
  {
    question: "What does the 'S' in SOLID stand for?",
    options: ["Single Responsibility Principle (SRP)", "Security", "Scaling", "Service Orientation"],
    correctAnswer: "Single Responsibility Principle (SRP)",
    explanation: "S in SOLID is SRP: each class/module should have only one reason to change."
  },
  {
    question: "Which SOLID principle advises that classes should be open for extension but closed for modification?",
    options: ["Open-Closed Principle (OCP)", "Liskov Substitution Principle", "Interface Segregation Principle", "Dependency Inversion Principle"],
    correctAnswer: "Open-Closed Principle (OCP)",
    explanation: "OCP means you should extend behavior via new code rather than modifying existing code."
  },
  {
    question: "Which principle states derived classes must be substitutable for base classes?",
    options: ["Liskov Substitution Principle (LSP)", "Single Responsibility Principle", "Open-Closed Principle", "Interface Segregation Principle"],
    correctAnswer: "Liskov Substitution Principle (LSP)",
    explanation: "LSP requires derived classes behave correctly when used in place of their base classes."
  },
  {
    question: "What does the Interface Segregation Principle (ISP) recommend?",
    options: ["Create several small, client-specific interfaces rather than one large interface", "Use one large interface for all clients", "Avoid interfaces", "Add all methods to base class"],
    correctAnswer: "Create several small, client-specific interfaces rather than one large interface",
    explanation: "ISP prevents forcing clients to implement methods they don't use by splitting interfaces."
  },
  {
    question: "What is the main idea of the Dependency Inversion Principle (DIP)?",
    options: ["High-level modules should not depend on low-level modules; both should depend on abstractions", "Depend only on concrete classes", "Avoid interfaces entirely", "Write everything in one module"],
    correctAnswer: "High-level modules should not depend on low-level modules; both should depend on abstractions",
    explanation: "DIP advocates depending on abstractions (interfaces) to reduce coupling."
  },
  {
    question: "Which is a symptom of bad software architecture mentioned in the PDF?",
    options: ["Rigidity", "High test coverage", "Strong modularity", "Easy reuse"],
    correctAnswer: "Rigidity",
    explanation: "Rigidity means the system is hard to change because changes affect many parts."
  },
  {
    question: "Which SOLID principle helps achieve easier and better software testing?",
    options: ["All SOLID principles (collectively)", "Only SRP", "Only OCP", "Only DIP"],
    correctAnswer: "All SOLID principles (collectively)",
    explanation: "SOLID reduces complexity and increases modularity, making testing easier overall."
  },
  {
    question: "In the SRP example, which class had multiple responsibilities?",
    options: ["Employee class with calculatePay, reportHours, saveEmployee", "Logger class only", "Notifier class only", "Empty class"],
    correctAnswer: "Employee class with calculatePay, reportHours, saveEmployee",
    explanation: "The Employee class combined payroll, reporting, and persistence responsibilities, violating SRP."
  },
  {
    question: "Which design concept describes reusable solutions to recurring problems?",
    options: ["Design patterns", "Unit tests", "Requirements documents", "Deployment scripts"],
    correctAnswer: "Design patterns",
    explanation: "Design patterns are named templates for common software design problems."
  },
  {
    question: "Which SOLID principle helps avoid forcing a class to implement methods it doesn't need?",
    options: ["Interface Segregation Principle (ISP)", "Single Responsibility Principle", "Open-Closed Principle", "Liskov Substitution Principle"],
    correctAnswer: "Interface Segregation Principle (ISP)",
    explanation: "ISP suggests splitting interfaces so clients implement only what they use."
  },
  {
    question: "What does DIP suggest about high-level and low-level classes?",
    options: ["Both should depend on abstractions (interfaces)", "High-level should directly instantiate low-level", "Low-level should control high-level", "Avoid abstraction"],
    correctAnswer: "Both should depend on abstractions (interfaces)",
    explanation: "DIP promotes depending on interfaces to decouple modules."
  },
  {
    question: "Which is an expected benefit of following SOLID principles?",
    options: ["Increased readability, extensibility, and maintainability", "Longer monolithic classes", "Harder to change code", "More accidental errors"],
    correctAnswer: "Increased readability, extensibility, and maintainability",
    explanation: "SOLID aims to reduce complexity and improve maintainability and extensibility."
  },
  {
    question: "Violating LSP can cause:",
    options: ["System architecture to break when substituting subclasses", "Faster performance always", "More documentation", "Better testability"],
    correctAnswer: "System architecture to break when substituting subclasses",
    explanation: "If subclasses don't correctly substitute base classes, system behavior can break."
  },
  {
    question: "Example solution for DIP often introduces:",
    options: ["An interface (abstraction) such as INotifier between UserManager and notifier implementations", "More static methods only", "Hard-coded dependencies", "Elimination of interfaces"],
    correctAnswer: "An interface (abstraction) such as INotifier between UserManager and notifier implementations",
    explanation: "Using an interface decouples UserManager from concrete notifier implementations."
  },
  {
    question: "Which is NOT a characteristic of bad architecture?",
    options: ["High modularity and easy reuse", "Rigidity", "Fragility", "Immobility"],
    correctAnswer: "High modularity and easy reuse",
    explanation: "High modularity is desirable, unlike rigidity, fragility, and immobility which are bad traits."
  },
  {
    question: "Design patterns are:",
    options: ["Reusable solutions and templates, not specific code", "Executable programs", "Deployment pipelines", "Test cases"],
    correctAnswer: "Reusable solutions and templates, not specific code",
    explanation: "Design patterns describe solutions and structures, not exact code snippets."
  },
  {
    question: "Which resource is cited for SOLID principles discussion in the PDF?",
    options: ["Clean Architecture by Robert Martin (and others)", "Random blog without citation", "Personal notes", "Unknown forum"],
    correctAnswer: "Clean Architecture by Robert Martin (and others)",
    explanation: "The PDF references Clean Architecture and related SOLID literature for the principles."
  },
  {
    question: "An example violation of ISP forces a class to:",
    options: ["Implement methods it doesn't use (throw exceptions)", "Reduce methods", "Refactor into smaller modules", "Use only one method"],
    correctAnswer: "Implement methods it doesn't use (throw exceptions)",
    explanation: "Violating ISP may lead classes to implement unused methods, sometimes throwing exceptions to satisfy interface contracts."
  },
  {
    question: "What does SOLID collectively help reduce?",
    options: ["Complexity of source code", "Number of developers", "User satisfaction", "Hardware costs"],
    correctAnswer: "Complexity of source code",
    explanation: "SOLID principles aim to simplify structure and reduce accidental complexity."
  },
  {
    question: "Which prototyping paradigm is discarded after testing and used to clarify early ideas?",
    options: ["Throwaway prototyping", "Evolutionary prototyping", "Continuous deployment", "Final product"],
    correctAnswer: "Throwaway prototyping",
    explanation: "Throwaway prototypes are built quickly to explore ideas and then discarded."
  },
  {
    question: "Which prototyping paradigm evolves into the final product?",
    options: ["Evolutionary prototyping", "Throwaway prototyping", "Waterfall deployment", "Static wireframe"],
    correctAnswer: "Evolutionary prototyping",
    explanation: "Evolutionary prototypes are modified and reused to become part of the final product."
  },
  {
    question: "Low-fidelity prototypes are mainly used to:",
    options: ["Check visual appearance and user flows quickly", "Deploy to production", "Improve quantum algorithms", "Manage servers"],
    correctAnswer: "Check visual appearance and user flows quickly",
    explanation: "Low-fidelity prototypes help validate interface layout and navigation early."
  },
  {
    question: "Which is a wireframing tool mentioned in the PDF?",
    options: ["Balsamiq Wireframes", "Microsoft Word", "Notepad", "Calculator"],
    correctAnswer: "Balsamiq Wireframes",
    explanation: "Balsamiq is listed as a low-fidelity wireframing tool."
  },
  {
    question: "High-fidelity prototypes are usually:",
    options: ["Closer to the final product and may include working code", "Paper sketches only", "Never used for testing", "Only text documents"],
    correctAnswer: "Closer to the final product and may include working code",
    explanation: "High-fidelity prototypes simulate the final product and are used for user testing."
  },
  {
    question: "Which requirement-gathering technique involves a facilitator and group participants?",
    options: ["Joint Application Development (JAD)", "Interview", "Questionnaire", "Document analysis"],
    correctAnswer: "Joint Application Development (JAD)",
    explanation: "JAD is a structured group technique led by a facilitator to elicit requirements."
  },
  {
    question: "What role records notes and assists the JAD facilitator?",
    options: ["Scribe", "Moderator", "Actor", "Tester"],
    correctAnswer: "Scribe",
    explanation: "Scribes document inputs and help structure information during JAD sessions."
  },
  {
    question: "Which interview step comes first?",
    options: ["Selecting interviewees and scheduling", "Post-interview follow-up", "Recording the transcript only", "Ignoring participants"],
    correctAnswer: "Selecting interviewees and scheduling",
    explanation: "The first step is planning who to interview and scheduling them."
  },
  {
    question: "Which is an advantage of questionnaires?",
    options: ["Good for reaching many respondents and structured data collection", "Always produces deep insights", "Requires no analysis", "Replaces interviews entirely"],
    correctAnswer: "Good for reaching many respondents and structured data collection",
    explanation: "Questionnaires are efficient for wide-scale, structured information gathering."
  },
  {
    question: "What does document analysis help identify?",
    options: ["What needs to be changed in the current system", "Production deployment time", "Final code architecture only", "Server uptime"],
    correctAnswer: "What needs to be changed in the current system",
    explanation: "Document analysis reveals existing processes, data quality issues, and artifacts to inform requirements."
  },
  {
    question: "Which step in creating a use-case diagram involves minimizing crossing lines?",
    options: ["Place and draw actors near related use-cases", "Write deployment scripts", "Choose database engine", "Implement code"],
    correctAnswer: "Place and draw actors near related use-cases",
    explanation: "Positioning actors close to their use-cases reduces crossing association lines."
  },
  {
    question: "Which of these is NOT a component of a use-case diagram?",
    options: ["Database schema (not directly a component)", "Actor", "Use-case", "Subject boundary box"],
    correctAnswer: "Database schema (not directly a component)",
    explanation: "Use-case diagrams show actors, use-cases, and boundaries—not detailed DB schemas."
  },
  {
    question: "Which tool examples were given for drawing UML diagrams?",
    options: ["Microsoft Visio and Visual Paradigm", "Notepad and Paint", "Excel and Word only", "FTP clients"],
    correctAnswer: "Microsoft Visio and Visual Paradigm",
    explanation: "Visio and Visual Paradigm are common UML diagramming tools mentioned."
  },
  {
    question: "When are requirements reviewed by the client?",
    options: ["After the requirements definition report is created", "Never", "Only after deployment", "Only at coding stage"],
    correctAnswer: "After the requirements definition report is created",
    explanation: "The requirements definition is iteratively revised until the client approves it."
  },
  {
    question: "Which requirement group includes cultural and political constraints?",
    options: ["Non-functional requirements", "Unit tests", "Design patterns", "Deployment scripts"],
    correctAnswer: "Non-functional requirements",
    explanation: "Cultural and political requirements (e.g., language constraints) are non-functional requirements."
  },
  {
    question: "An example security requirement in the PDF is:",
    options: ["Only doctors shall be able to set their availability", "System must use COBOL", "Everyone can edit everything", "No login required"],
    correctAnswer: "Only doctors shall be able to set their availability",
    explanation: "The PDF lists REQ014 as 'Only doctors shall be able to set their availability' as a security requirement."
  },
  {
    question: "Which requirement example enforces language usage?",
    options: ["System will use English language only", "Use any language randomly", "No language requirements", "System will auto-detect all languages"],
    correctAnswer: "System will use English language only",
    explanation: "REQ017 states the system will use English only, a cultural/political requirement."
  },
  {
    question: "Which step in use-case creation is adding associations?",
    options: ["Step 4: Add associations (draw lines)", "Step 1: Deploy", "Step 3: Code only", "Step 2: Budgeting"],
    correctAnswer: "Step 4: Add associations (draw lines)",
    explanation: "Adding associations connects actors to the use-cases they engage with."
  },
  {
    question: "Which modeling artifacts are produced from functional requirements?",
    options: ["Functional, structural, and behavioral models", "Deployment manifests", "Only unit tests", "Only code comments"],
    correctAnswer: "Functional, structural, and behavioral models",
    explanation: "Functional requirements are transformed into models that represent system behavior and structure."
  },
  {
    question: "What is the activity of executing a system under specified conditions called?",
    options: ["Software testing", "Code review only", "Deployment script", "Project management"],
    correctAnswer: "Software testing",
    explanation: "Software testing executes system components under conditions to observe and evaluate results."
  },
  {
    question: "Which of the following is a direct objective of software testing?",
    options: ["Identify and reveal as many errors as possible", "Remove all documentation", "Hire more staff", "Increase unrelated costs"],
    correctAnswer: "Identify and reveal as many errors as possible",
    explanation: "A direct objective is to detect defects to improve software quality before release."
  },
  {
    question: "Who typically performs unit testing?",
    options: ["Developer", "Customer", "Tester group only", "End user"],
    correctAnswer: "Developer",
    explanation: "Unit tests are written and run by developers to validate individual units."
  },
  {
    question: "Which test verifies that modules and their interfaces work correctly together?",
    options: ["Integration testing", "Unit testing", "Acceptance testing only", "Prototyping"],
    correctAnswer: "Integration testing",
    explanation: "Integration testing checks interactions between combined modules and interfaces."
  },
  {
    question: "Which testing type may include usability, security, and performance?",
    options: ["System testing", "Unit testing", "Code walkthroughs only", "Interviewing"],
    correctAnswer: "System testing",
    explanation: "System testing evaluates the entire system including non-functional aspects."
  },
  {
    question: "Performance testing includes which subtypes?",
    options: ["Load and stress testing", "Unit and mock testing", "Interview and questionnaire", "Code refactoring"],
    correctAnswer: "Load and stress testing",
    explanation: "Performance testing uses load (sustained) and stress (peak) tests to measure behavior under heavy conditions."
  },
  {
    question: "Acceptance testing is performed by:",
    options: ["Customers or system users", "Only developers", "Only the moderator", "Only automated tools"],
    correctAnswer: "Customers or system users",
    explanation: "Customers validate the system meets business needs before accepting it."
  },
  {
    question: "In TDD, which step comes first?",
    options: ["Write a unit test for functionality before writing code", "Deploy to production", "Refactor only", "Write documentation only"],
    correctAnswer: "Write a unit test for functionality before writing code",
    explanation: "TDD begins with writing a failing unit test before producing production code."
  },
  {
    question: "Which unit testing framework is for Java?",
    options: ["JUnit", "NUnit", "RSpec", "Mocha"],
    correctAnswer: "JUnit",
    explanation: "JUnit is a Java unit testing framework mentioned in the PDF."
  },
  {
    question: "Which unit testing framework is for .NET languages?",
    options: ["NUnit", "JUnit", "PyTest", "RSpec"],
    correctAnswer: "NUnit",
    explanation: "NUnit is the open-source framework for .NET unit testing."
  },
  {
    question: "What is the main goal of software inspections like Fagan inspections?",
    options: ["Identify and remove errors in artifacts and find systemic process defects", "Only deploy code", "Only write tests", "Only train staff"],
    correctAnswer: "Identify and remove errors in artifacts and find systemic process defects",
    explanation: "Fagan inspections are formal peer reviews aiming to detect defects and process issues."
  },
  {
    question: "Who leads and organizes an inspection meeting in Fagan methodology?",
    options: ["Moderator", "Author only", "Reader only", "Tester only"],
    correctAnswer: "Moderator",
    explanation: "The moderator plans and guides the inspection activities and logistics."
  },
  {
    question: "Which role is responsible for fixing defects identified during inspection?",
    options: ["Author", "Moderator only", "Reader only", "Tester only"],
    correctAnswer: "Author",
    explanation: "The author who created the artifact corrects defects found in inspection."
  },
  {
    question: "What is a 'structured walkthrough' primarily used for?",
    options: ["Getting feedback and familiarizing reviewers with an author's work", "Replacing unit tests", "Final deployment", "Changing requirements only"],
    correctAnswer: "Getting feedback and familiarizing reviewers with an author's work",
    explanation: "Structured walkthroughs are peer reviews to collect feedback and explain deliverables to reviewers."
  },
  {
    question: "Which code review approach relies on automated analysis within IDEs?",
    options: ["Tool-driven code review", "Developer-driven code review", "Fagan inspection only", "Walkthrough only"],
    correctAnswer: "Tool-driven code review",
    explanation: "Tool-driven reviews use static analysis and IDE tools to flag code issues automatically."
  },
  {
    question: "Which workflow uses pull requests and integrators to examine proposed changes?",
    options: ["Pull-based development", "Formal Fagan only", "Structured walkthrough only", "Questionnaire workflow"],
    correctAnswer: "Pull-based development",
    explanation: "Pull-based development uses pull requests and integrators to review and merge code changes."
  },
  {
    question: "Which modern tool is mentioned for repository-based lightweight code review?",
    options: ["Gerrit (and CodeFlow)", "Notepad", "Fax machine", "Typewriter"],
    correctAnswer: "Gerrit (and CodeFlow)",
    explanation: "Gerrit is cited as an example of a tool used to enable code reviews integrated with repositories."
  },
  {
    question: "What is one advantage of modern (lightweight) code review over formal inspections?",
    options: ["Does not require face-to-face meetings and fits workflow tools", "Always finds fewer defects", "Removes need for testing", "Eliminates requirements"],
    correctAnswer: "Does not require face-to-face meetings and fits workflow tools",
    explanation: "Modern reviews are lightweight and tool-integrated, avoiding in-person meetings."
  },
  {
    question: "Which activity follows inspection when defects are corrected?",
    options: ["Follow-up where moderator verifies fixes", "Ignore fixes", "Deploy immediately", "Archive without verification"],
    correctAnswer: "Follow-up where moderator verifies fixes",
    explanation: "Follow-up ensures the author resolved defects and the moderator verifies corrections."
  },
  {
    question: "Which step in use-case creation is adding associations?",
    options: ["Step 4: Add associations (draw lines)", "Step 1: Deploy", "Step 3: Code only", "Step 2: Budgeting"],
    correctAnswer: "Step 4: Add associations (draw lines)",
    explanation: "Adding associations connects actors to the use-cases they engage with."
  },
  {
    question: "Which modeling artifacts are produced from functional requirements?",
    options: ["Functional, structural, and behavioral models", "Deployment manifests", "Only unit tests", "Only code comments"],
    correctAnswer: "Functional, structural, and behavioral models",
    explanation: "Functional requirements are transformed into models that represent system behavior and structure."
  },
  {
    question: "Which requirement example enforces language usage?",
    options: ["System will use English language only", "Use any language randomly", "No language requirements", "System will auto-detect all languages"],
    correctAnswer: "System will use English language only",
    explanation: "REQ017 states the system will use English only, a cultural/political requirement."
  },
  {
    question: "An example security requirement in the PDF is:",
    options: ["Only doctors shall be able to set their availability", "System must use COBOL", "Everyone can edit everything", "No login required"],
    correctAnswer: "Only doctors shall be able to set their availability",
    explanation: "The PDF lists REQ014 as 'Only doctors shall be able to set their availability' as a security requirement."
  }
];
