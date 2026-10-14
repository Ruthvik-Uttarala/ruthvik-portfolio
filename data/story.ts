export const profile={email:"mailto:uttaralaruthvik@gmail.com",github:"https://github.com/Ruthvik-Uttarala",linkedin:"https://www.linkedin.com/in/ruthvik-uttarala-09918a251/",instagram:"https://www.instagram.com/ruuttarala/"};
export const chapters=[
  {id:"origin",label:"LEVEL 01 · ORIGIN"},
  {id:"penn-state",label:"LEVEL 02 · PENN STATE"},
  {id:"builds",label:"LEVEL 03 · BUILDS"},
  {id:"production",label:"LEVEL 04 · PRODUCTION"},
  {id:"life",label:"LEVEL 05 · LIFE"},
  {id:"long-game",label:"LEVEL 06 · LONG GAME"},
];
export const ventures=[
  {name:"Ramaniyam",text:"A creator-led venture developed through LaunchBox. Seven creator partnerships produced more than 25 promotional posts, alongside reported gains in engagement and weekly sales."},
  {name:"MentorYou.ai",text:"A three-person founding team explored student needs through Idea TestLab and translated feedback into product strategy and pitches."},
  {name:"Wardrobewise",text:"One of the ideas I explored while learning entrepreneurship at Penn State and Happy Valley LaunchBox."},
];
export const fieldNotes=[{title:"Reliability is a product feature.",text:"At OptimalHub, reliability meant designing for the second attempt, not just the happy path.",evidence:["Decoupled PDF extraction from API requests with Lambda, S3, and Kafka.","Used idempotent TypeScript processing, time-window deduplication, and Firestore transaction locks to prevent duplicate parking violations.","Validated PDFextract changes against 123 passing backend tests."]},{title:"AI needs boundaries and evidence.",text:"At PlantVillage, the useful work happened around the model: persistence, evaluation, observability, and regression coverage.",evidence:["Built eight versioned FastAPI endpoints with PostgreSQL and S3-backed workflows.","Investigated retrieval and latency across 24 prompts and 179 LangSmith-traced executions.","Expanded coverage to more than 150 Python and TypeScript tests."]}];
export const skills=[{name:"Languages",items:["Python","TypeScript","JavaScript","Java"]},{name:"Systems",items:["React","Next.js","Flask","FastAPI","Node.js","PostgreSQL","Kafka"]},{name:"Cloud + AI",items:["AWS","Google Cloud","Docker","Bedrock","Gemini","LangChain","LangGraph"]},{name:"Credentials",items:["AWS Certified Machine Learning Engineer","AWS Certified AI Practitioner","Penn State B.S. Computer Science"]}];
