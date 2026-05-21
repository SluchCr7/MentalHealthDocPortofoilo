export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string; // Used to match with Lucide Icons
  shortDesc: string;
  longDesc: string;
  pricing: string;
  duration: string;
  features: string[];
  methodologies: string[];
}

export const services: Service[] = [
  {
    id: "anxiety",
    title: "Anxiety Therapy & Worry Management",
    slug: "anxiety-therapy",
    icon: "Brain",
    shortDesc: "Overcome chronic worry, panic, and social anxiety through clinically proven cognitive behavioral techniques.",
    longDesc: "Generalized anxiety, panic disorder, and social anxiety can feel paralyzing. Our structured anxiety therapy program integrates Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT) to help you understand the physiological roots of worry, break free from catastrophic thought loops, and regain absolute command of your life.",
    pricing: "$150",
    duration: "50 minutes",
    features: [
      "Identify physiological worry triggers",
      "Develop somatic grounding strategies",
      "Cognitive restructuring for catastrophic thoughts",
      "Personalized daily exposure exercise blueprints"
    ],
    methodologies: ["Cognitive Behavioral Therapy (CBT)", "Acceptance & Commitment Therapy (ACT)", "Mindfulness-Based Stress Reduction (MBSR)"]
  },
  {
    id: "depression",
    title: "Depression & Mood Counseling",
    slug: "depression-counseling",
    icon: "HeartPulse",
    shortDesc: "Rebuild your sense of vitality, self-compassion, and emotional connection in a safe, validating clinical space.",
    longDesc: "Depression goes far beyond sadness—it is a loss of energy, interest, and hope. We work collaboratively to uncover the roots of your emotional heaviness, employing Behavioral Activation and Schema Therapy to break the cycles of isolation, build self-compassion, and gradually restore a sense of meaning, energy, and joy.",
    pricing: "$150",
    duration: "50 minutes",
    features: [
      "Root cause exploration & belief analysis",
      "Behavioral activation & energy scaffolding",
      "Self-compassion training workshops",
      "Isolation cycles exit strategies"
    ],
    methodologies: ["Behavioral Activation", "Schema Therapy", "Compassion-Focused Therapy (CFT)"]
  },
  {
    id: "trauma",
    title: "Trauma Recovery & EMDR",
    slug: "trauma-recovery",
    icon: "ShieldAlert",
    shortDesc: "Process distressing somatic memories and heal from complex trauma utilizing advanced EMDR techniques.",
    longDesc: "When traumatic events happen, the mind can store them in highly raw, sensory loops that keep you in survival mode. Utilizing Eye Movement Desensitization and Reprocessing (EMDR) and trauma-informed somatic experiencing, we help safely integrate difficult past experiences, allowing your nervous system to fully return to safety.",
    pricing: "$180",
    duration: "60 minutes",
    features: [
      "Safe resource construction and physiological prep",
      "Targeted EMDR reprocessing sessions",
      "Somatic Experiencing and body grounding",
      "Integration of core self-beliefs"
    ],
    methodologies: ["Eye Movement Desensitization (EMDR)", "Somatic Experiencing", "Internal Family Systems (IFS) elements"]
  },
  {
    id: "relationships",
    title: "Relationship & Couples Counseling",
    slug: "relationship-counseling",
    icon: "Users",
    shortDesc: "Transform reactive conflicts into deep attachment safety, understanding, and loving partnership.",
    longDesc: "Even the strongest couples can fall into negative interaction loops where both partners feel unheard and unvalued. Drawing from Emotionally Focused Therapy (EFT) and Gottman Method Couples Therapy, we decode your conflict cycles to repair attachment injuries and build lasting, secure relational safety.",
    pricing: "$200",
    duration: "75 minutes",
    features: [
      "Relational conflict cycle deconstruction",
      "Vulnerability expression exercises",
      "Deep attachment injury repair sessions",
      "Gottman communication skills practice"
    ],
    methodologies: ["Emotionally Focused Therapy (EFT)", "Gottman Method couples framework", "Attachment Theory"]
  },
  {
    id: "family",
    title: "Family Systems Therapy",
    slug: "family-therapy",
    icon: "Home",
    shortDesc: "Align parent-child communication patterns and bring cohesion to the household ecosystem.",
    longDesc: "Families are complex systems, and struggles within one member often resonate through the entire household. We work as systemic counselors, helping families re-establish healthy boundaries, resolve intergenerational misunderstandings, and build positive, cooperative parent-child communication dynamics.",
    pricing: "$220",
    duration: "75 minutes",
    features: [
      "Family dynamic system mapping",
      "Constructive boundary setting guides",
      "Active parent-child listening protocols",
      "Co-parenting consistency alignment"
    ],
    methodologies: ["Systemic Family Therapy", "Structural Family Therapy", "Narrative Therapy"]
  },
  {
    id: "stress",
    title: "Stress & Burnout Consultation",
    slug: "stress-management",
    icon: "Sparkles",
    shortDesc: "Recover mental clarity, establish sustainable life boundaries, and prevent professional exhaustion.",
    longDesc: "In our high-stress modern world, chronic fatigue and mental burnout can creep in, affecting executive function and health. This clinical program focuses on burnout recovery, combining biological stress-regulation strategies with values alignment to help you set firm boundaries and design a balanced, intentional life.",
    pricing: "$140",
    duration: "50 minutes",
    features: [
      "Autonomic nervous system soothing protocols",
      "Work-life boundaries mapping",
      "Time/energy optimization auditing",
      "Values-aligned decision frameworks"
    ],
    methodologies: ["Mindfulness-Based Stress Reduction (MBSR)", "Acceptance & Commitment Therapy (ACT)", "Polyvagal Theory applications"]
  },
  {
    id: "teen",
    title: "Teen & Adolescent Therapy",
    slug: "teen-therapy",
    icon: "Smile",
    shortDesc: "Support adolescents navigating social pressure, emotional changes, and identity construction.",
    longDesc: "Adolescence is a time of intense neurological and social changes. Our teen therapy sessions provide a confidential, non-judgmental container where adolescents can safely discuss identity, anxiety, academic pressures, and digital-world boundaries while learning adaptive coping skills.",
    pricing: "$145",
    duration: "50 minutes",
    features: [
      "Safe, confidential teenage identity dialogue",
      "Social-media anxiety coping mechanisms",
      "Academic performance anxiety regulation",
      "Collaborative parent feedback checkpoints"
    ],
    methodologies: ["Adolescent CBT", "Dialectical Behavior Therapy (DBT) skills", "Creative Arts Expression"]
  },
  {
    id: "online",
    title: "Virtual / Telehealth Therapy Sessions",
    slug: "online-sessions",
    icon: "Video",
    shortDesc: "Access premium clinical counseling from the absolute privacy, comfort, and safety of your home.",
    longDesc: "Therapy should fit seamlessly into your life without the stress of commutes. Utilizing our fully HIPAA-compliant, encrypted high-definition video telemedicine platform, we provide identical professional evidence-based care anywhere, maintaining full clinical integrity and security.",
    pricing: "$135",
    duration: "50 minutes",
    features: [
      "Fully secure HIPAA-compliant video link",
      "Interactive digital whiteboard files sharing",
      "No commute or waiting room overhead",
      "Flexible schedule coordination"
    ],
    methodologies: ["Evidence-Based Telehealth Delivery", "Digital Cognitive Tools Integration"]
  }
];
