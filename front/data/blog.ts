export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string[]; // HTML/Markdown paragraph strings
  readingTime: string;
  date: string;
  author: string;
  imageUrl: string; // Placeholder paths or styles
  tags: string[];
  tips: string[];
  quote: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Demystifying High-Functioning Anxiety: The Cost of Over-Achieving",
    slug: "demystifying-high-functioning-anxiety",
    category: "Anxiety",
    excerpt: "Behind the mask of execution, high productivity, and external success often lies an internal storm of chronic worry, muscle tension, and fear of failure.",
    content: [
      "To the outside world, someone experiencing high-functioning anxiety looks like a pillar of success. They are exceptionally organized, always on time, incredibly detailed, and highly productive. They are the coworker who anticipates every crisis and the friend who coordinates every calendar. However, this outer competence is powered by a silent, continuous inner fuel: the fear of failure, the dread of disappointing others, and a relentless need to prove worthiness.",
      "Clinically, high-functioning anxiety is not a distinct diagnostic category in the DSM-5, but rather a manifestation of Generalized Anxiety Disorder (GAD). The individual's physiological survival response (fight-or-flight) is locked in a subtle 'forward gear.' Instead of causing freeze or avoidance, it pushes them into hyper-action. But this constant forward motion comes at an immense physiological cost.",
      "The consequences of leaving this unaddressed are profound. Over time, high-functioning anxiety erodes sleep quality, results in gastrointestinal distress, contributes to chronic shoulder and jaw tension, and eventually culminates in severe mental burnout. Learning to identify the subtle line where healthy motivation ends and nervous system exhaustion begins is the critical first step toward healing."
    ],
    readingTime: "6 min read",
    date: "2026-05-10",
    author: "Dr. Evelyn Bennett, Ph.D.",
    imageUrl: "/blog/anxiety.jpg",
    tags: ["Anxiety", "Mental Health", "Self-Care", "CBT"],
    tips: [
      "Set strict 'digital sunset' hours where professional communication is completely silenced.",
      "Practice 'unproductive pauses'—spend 5 minutes daily intentionally doing absolutely nothing.",
      "Replace self-critical queries with neutral cognitive reviews like 'I did my best under these current conditions.'",
      "Check in somatic-style: scan for tight shoulders or a clenched jaw throughout the workday."
    ],
    quote: "Our productivity is not a measurement of our human worthiness. The nervous system deserves safety, not just efficiency."
  },
  {
    title: "Understanding Somatic Grounding: Healing the Body After Trauma",
    slug: "understanding-somatic-grounding-trauma",
    category: "Trauma",
    excerpt: "Trauma isn't just a mental memory; it's a physiological state stored in our cells, muscles, and nervous systems. Somatic grounding provides the key to unlocking it.",
    content: [
      "Traditional talk therapies operate primarily from the 'top-down'—using conscious thought and verbal processing to organize emotions. However, clinical research pioneered by figures like Dr. Bessel van der Kolk reveals that trauma is stored somatically. The body retains the physiological signature of the threat long after the danger has passed, causing chronic bracing, breathing changes, and sudden panic.",
      "Somatic grounding represents a 'bottom-up' clinical approach. By shifting our attention directly to bodily sensations, we signal to the amygdala that the present moment is secure. When we feel the weight of our heels on the floor or the physical expansion of our ribs, we invite the autonomic nervous system to deactivate its threat response and re-enter parasympathetic regulation.",
      "Integrating somatic experiencing into a trauma recovery plan doesn't require reliving the cognitive narrative of past pain. Rather, it focuses on expanding your 'window of tolerance'—the range of physiological activation in which you feel emotionally stable. Slowly, the body learns that it is no longer trapped in the past."
    ],
    readingTime: "8 min read",
    date: "2026-04-28",
    author: "Dr. Evelyn Bennett, Ph.D.",
    imageUrl: "/blog/somatic.jpg",
    tags: ["Trauma", "Somatic Grounding", "EMDR", "Nervous System"],
    tips: [
      "Employ the 5-4-3-2-1 technique: identify 5 colors, 4 textures, 3 sounds, 2 smells, and 1 taste around you.",
      "Try 'somatic shielding'—slowly rub your palms together to generate warmth, then place them over your heart or eyes.",
      "Practice bilateral pacing or walking, paying deep attention to the physical sensation of the ground shifting underfoot.",
      "Gently hum or exhale with a low 'Voo' sound to stimulate the vagus nerve."
    ],
    quote: "The body is the keeper of our history. Healing occurs when the body finally understands that the struggle is over."
  },
  {
    title: "The Power of Cognitive Reframing: How to Challenge Automatic Thoughts",
    slug: "power-of-cognitive-reframing",
    category: "CBT",
    excerpt: "Cognitive reframing is not positive thinking. It is a rigorous, evidence-based process of looking at reality objectively and ending toxic cycles of self-talk.",
    content: [
      "A common misconception about Cognitive Behavioral Therapy (CBT) is that it simply promotes 'positive thinking.' In practice, clinical cognitive reframing has nothing to do with positive illusions. It is a realistic, structured method of identifying cognitive distortions—the inaccurate, biased lenses through which the brain automatically interprets events.",
      "Our brains are wired with a negativity bias designed for ancestral survival. When we face a challenge, our automatic thoughts often default to catastrophizing ('everything is ruined'), personalization ('this is entirely my fault'), or black-and-white thinking ('if I'm not perfect, I'm a failure'). These distortions feel like absolute facts, but they are merely internal theories.",
      "By learning to act as an objective investigator of your own thoughts, you can evaluate the actual evidence supporting them. Cognitive reframing allows you to build balanced, evidence-based perspectives, reducing unnecessary suffering and empowering you to make decisions from a place of clear, centered logic."
    ],
    readingTime: "5 min read",
    date: "2026-03-15",
    author: "Dr. Evelyn Bennett, Ph.D.",
    imageUrl: "/blog/cbt.jpg",
    tags: ["CBT", "Cognitive Distortion", "Self-Care", "Clarity"],
    tips: [
      "Keep an active 'Thought Record': write down the automatic thought, its emotion, and the objective evidence.",
      "Ask yourself: 'Is this thought a factual guarantee, or is it one of many possible interpretations?'",
      "Treat yourself as a friend: ask what supportive advice you would offer a loved one in this identical situation.",
      "Recognize absolute labels like 'always' or 'never' and replace them with dynamic descriptions."
    ],
    quote: "We do not see things as they are; we see them as we think they are. Correcting the lens restores our peace."
  },
  {
    title: "Navigating Relationship Ruptures: The Art of Attuned Repair",
    slug: "navigating-relationship-ruptures-repair",
    category: "Relationships",
    excerpt: "Every relationship experiences ruptures. The indicator of a secure attachment is not the absence of conflict, but the swift presence of emotional repair.",
    content: [
      "In couples therapy, one of the most liberating truths partners discover is that conflict is not a sign of relational failure. In fact, attempts to maintain a completely conflict-free marriage often result in emotional distancing and silent resentment. The health of a relationship is predicted by how partners manage the inevitable 'ruptures'—the moments when connection is broken.",
      "A rupture occurs when one partner feels unseen, misunderstood, rejected, or ignored. Left unresolved, these small moments compile into emotional scar tissue, reinforcing defensive walls. Attuned repair is the intentional process of turning back toward each other, acknowledging the breach, taking accountability for one's actions, and restoring emotional safety.",
      "Successful repair requires down-regulating our threat responses. When in an argument, the nervous system views the partner as a danger, activating fight-or-flight defenses. Attuned couples learn to co-regulate, utilizing softening remarks, emotional validation, and touch to indicate safety before trying to solve the cognitive disagreement."
    ],
    readingTime: "7 min read",
    date: "2026-02-22",
    author: "Dr. Evelyn Bennett, Ph.D.",
    imageUrl: "/blog/relationships.jpg",
    tags: ["Relationships", "EFT", "Attachment Theory", "Communication"],
    tips: [
      "Use 'I' statements focused on your internal landscape: 'I felt overwhelmed when...' instead of 'You always...'",
      "Acknowledge the subjective emotional reality: 'I can see how my reaction made you feel isolated.'",
      "Take structured cool-down breaks (20+ minutes) if heart rates exceed 100 beats per minute during disputes.",
      "Initiate small physical bids for connection: a gentle touch on the arm, a warm embrace, or soft eye contact."
    ],
    quote: "Relational security is not built in the absence of conflict. It is built in the courageous return to connection."
  },
  {
    title: "Unmasking Burnout: Establishing Boundaries in a Hyper-Connected World",
    slug: "unmasking-burnout-boundaries-wellness",
    category: "Stress",
    excerpt: "Professional exhaustion isn't resolved by a weekend spa trip. Real burnout recovery requires establishing radical boundaries and re-aligning with your core values.",
    content: [
      "We live in a hyper-connected culture that celebrates constant availability and equates exhaustion with productivity. In this environment, burnout has become an epidemic. Burnout is not merely feeling tired; it is a clinical syndrome of emotional exhaustion, depersonalization, and a reduced sense of personal accomplishment.",
      "Many try to resolve burnout with superficial self-care—a quick vacation or a hot bath. However, these methods are temporary bandages. True recovery demands a structural audit of your energy boundaries. It requires the courage to say 'no' to demands that exceed your capacity and to actively protect your finite psychological resources.",
      "Establishing healthy boundaries is an act of nervous system preservation. It involves recognizing that your energy is a valuable clinical asset that must be actively stewarded. When we align our daily commitments with our actual values rather than cultural pressures, we transition from frantic survival back to stable vitality."
    ],
    readingTime: "6 min read",
    date: "2026-01-14",
    author: "Dr. Evelyn Bennett, Ph.D.",
    imageUrl: "/blog/burnout.jpg",
    tags: ["Burnout", "Stress", "Boundaries", "Mindfulness"],
    tips: [
      "Define clean boundaries around your personal calendar: block out untouchable time for rest.",
      "Clearly communicate your limits to team members: 'I will be able to review this during my deep-work hours tomorrow.'",
      "Evaluate requests against your priorities: ask yourself if saying 'yes' requires saying 'no' to your health.",
      "Designate physical areas in your home as work-free zones to help your brain mentally disconnect."
    ],
    quote: "A boundary is not a wall to keep people out. It is a bridge that keeps you safely connected to yourself."
  },
  {
    title: "Mindfulness Over Control: Cultivating Peace Through Radical Acceptance",
    slug: "mindfulness-over-control-radical-acceptance",
    category: "Mindfulness",
    excerpt: "Pain is inevitable in life, but suffering is optional. Discover how the practice of radical acceptance releases us from the exhaustion of struggling against reality.",
    content: [
      "Much of our emotional suffering does not stem from external events themselves, but from our internal struggle against them. We spend immense cognitive energy wishing things were different, relitigating past events, or fighting variables that are entirely beyond our control. This mental friction is the root of emotional fatigue.",
      "Radical Acceptance—a core component of Dialectical Behavior Therapy (DBT)—is the practice of accepting reality exactly as it is, without judgment or resistance. It is crucial to understand that acceptance is not approval, complacency, or surrender. It is simply acknowledging what is true in the present moment so you can act effectively.",
      "When we stop fighting facts, we conserve our neurological energy. By accepting the current reality, we free ourselves to make choices based on actual conditions rather than exhausting ourselves in frustration. Acceptance is the quiet foundation upon which authentic growth and healing are built."
    ],
    readingTime: "5 min read",
    date: "2025-12-05",
    author: "Dr. Evelyn Bennett, Ph.D.",
    imageUrl: "/blog/mindfulness.jpg",
    tags: ["Mindfulness", "Radical Acceptance", "DBT", "Peace"],
    tips: [
      "When facing frustration, repeat the somatic phrase: 'This is the reality of the present moment, even if I don't prefer it.'",
      "Identify the parts of the situation you have power to influence, and let go of the parts you cannot.",
      "Practice non-judgmental breathing: observe your emotions come and go like clouds moving across a clear sky.",
      "Release physical tension in your hands and jaw to signal safety to your emotional brain."
    ],
    quote: "Suffering equals pain times resistance. When we reduce our resistance to zero, only the clean physical pain remains."
  }
];
