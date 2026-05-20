const CalendarIcon = () => (
    <svg
        className="w-2.5 h-2.5 text-[var(--background)]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
    >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
);

const TimelineItem = ({
    company,
    date,
    position,
    task,
    isCurrent = false,
}: {
    company: string;
    date: string;
    position: string;
    task: string[];
    isCurrent?: boolean;
}) => (
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-[var(--sec)] rounded-full -start-3 ring-8 ring-[var(--background)]">
            <CalendarIcon />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-[var(--white)]">
            {position}
            {isCurrent && (
                <span className="bg-[var(--sec)] text-[var(--background)] text-sm font-medium me-2 px-2.5 py-0.5 rounded-xl ms-3">
                    Current
                </span>
            )}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-[var(--white-icon)]">
            {date}
        </time>
        <h4 className="font-bold text-[var(--white)]">{company}</h4>
        <ul className="space-y-2">
            {task.map((task, index) => (
                <li
                    key={index}
                    className="flex items-center gap-2 text-base font-normal text-[var(--white-icon)]"
                >
                    <svg
                        className="w-4 h-4 flex-shrink-0 text-[var(--sec)]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.17157L16.2426 7.75736L10.5858 13.4142Z" />
                    </svg>
                    <span>{task}</span>
                </li>
            ))}
        </ul>
    </li>
);

const WorkTimeline = () => {
    const experiences = [
        {
            company: "PT. Akasha Wira International Tbk.",
            date: "Dec 2025 - Present",
            position: "AI/ML Engineer ",
            task: [
                "Built automation workflows that reduced manual work for sales and HR, improving lead discovery to 3,250 Priority and 1,245 Qualified leads.",
                "Created web scrapers to collect more target data from competitor platforms.",
                "Set up LLM-based keyword generation, scheduling, and email reporting for Zoho CRM.",
                "Built a desktop app that records calls, transcribes them, and gives real-time AI suggestions and summaries.",
                "Developed a Chrome extension to download candidate data from job portals like KitaLulus.",
                "Designed the system for real-time comments and speech generation for virtual avatar streaming.",
            ],
            isCurrent: true,
        },
        {
            company: "WWWaste Pte Ltd",
            date: "Jun 2025 - Dec 2025",
            position: "AI/ML Engineer ",
            task: [
                "Built and deployed end-to-end ML and LLM pipelines for forecasting, insight generation, brand detection, and customer support chatbot development using AWS SageMaker and LangChain, enhancing business intelligence and user experience.",
                "Optimized production APIs with FastAPI and Redis, integrating LLM observability (Langfuse) and reducing response time by 99.7% and token usage by 90%.",
            ],
            isCurrent: false,
        },
        {
            company: "PT. Adamata Indonesia",
            date: "Jan 2025 - Jun 2025",
            position: "Machine Learning Engineer Intern",
            task: [
                "Contributing to data and CI/CD pipelines setup for machine learning model development",
                "Optimizing object detection model on edge device",
                "Explore cutting-edge computer vision technology and algorithms for waste management ",
                "Lead the software system design and refactor of bottle cap sorting. Increase 40% sorting performence ",
            ],
            isCurrent: false,
        },
        {
            company: "Ruang Guru",
            date: "Sept 2024 - Dec 2024",
            position: "Artificial Intelligence Engineer Intern",
            task: [
                "Led the development of a centralized system integrating AI models such as OpenAI, Gemini, and Anthropic, streamlining access for both product and development teams.",
                "Developed REST API endpoints for a Coding Assistant, improving engineering team access.",
                " Implemented CI/CD pipelines to automate the deployment process, reducing deployment errors by 25% and enhancing system reliability.",
            ],
        },
        {
            company: "XL Axiata (X-Camp)",
            date: "Aug 2024",
            position: "Product Development Intern",
            task: [
                "Contributed to the integration of RTSP cameras for object detection and optimized multithreaded data processing using CUDA, improving system performance by 40% and enabling real-time analytics.",
                "Led data collection and labeling for training datasets for object detection",
                "Led research on deploying YOLO models on Jetson Nano for object detection, enhancing speed and accuracy in AI-driven solutions.",
                "Configured MQTT protocols and integrated them with ThingsBoard, ensuring seamless data communication and system reliability."
            ],
        },
    ];

    return (
        <ol className="relative border-s border-[var(--white-icon-tr)]">
            {experiences.map((exp, index) => (
                <TimelineItem
                    key={index}
                    company={exp.company}
                    date={exp.date}
                    position={exp.position}
                    task={exp.task}
                    isCurrent={exp.isCurrent}
                />
            ))}
        </ol>
    );
};

export default WorkTimeline;
