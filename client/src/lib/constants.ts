// Project Image Guidelines:
// 1. Place your project images in /public/images/ directory
// 2. Use high-quality images (recommended: 1200x800 pixels)
// 3. Supported formats: JPG, PNG, WebP
// 4. Example path: "/images/your-project-name.jpg"

export const publications = [];
export const researchInterests = [];

export const musicProjects = [
  {
    title: "Discography",
    summary: "Original works, collaborations, and remixes",
    image: "/images/visual-scoring.jpg",
    technologies: ["Ableton Live", "Logic Pro", "Rekordbox"],
    detailedDescription: `I began producing as a sophomore at Yale and it quickly became one of the greatest joys of my life. I typically make House or EDM, but enjoy exploring different sounds and genres. My favorite part of writing music is collaboration, and I am lucky to be friends with some amazing musicians. I have worked with acts like <a href="https://open.spotify.com/artist/1OcU1uVtqF9umURdShNIwP" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Balt Lora</a>, <a href="https://open.spotify.com/artist/3QCB7sHyeE8BM8G5JqA1Z4" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Wacomo</a>, and <a href="https://open.spotify.com/artist/1lhIL1YVgF6X1I8IMluKZi" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">PJ Frantz</a>. Below is a selection of some originals (all collaborations with my friend <a href="https://open.spotify.com/artist/7jszfbhgcYuNuQt2QR8HCy" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Abby Walker</a>) and remixes. Eager to perform and share my love for dance music, I started to DJ in my senior year. I've played in many dingy basements, but also at larger venues like Elm City Tap House and Toads Place in New Haven.`,
    originalWorks: [
      {
        title: "Tell Me a Lie (feat. Abby Walker)",
        url: "/audio/Tell Me a Lie.mp3",
        year: "2022",
      },
      {
        title: "Something (feat. Abby Walker)",
        url: "/audio/something.mp3",
        year: "2023",
      },
      {
        title: "Afterlife (feat. Abby Walker)",
        url: "/audio/afterlife.mp3",
        year: "2023",
      },
    ],
    remixes: [
      {
        title: "Rasputin (Boney M.) remix",
        originalArtist: "Steve Reich",
        url: "/audio/Rasputin (five trees remix).mp3",
        year: "2023",
      },
      {
        title: "Smalltown Boy (Bronski Beat) remix",
        originalArtist: "J.S. Bach",
        url: "/audio/PMS_Stimulation.mp3",
        year: "2024",
      },
    ],
    performanceImage: {
      url: "/images/dj-performance.png",
      caption:
        "DJ set (left), Toad's Place backing up PJ Frantz (upper right), student music festival with Abby Walker (bottom right)",
    },
  },
  {
    title: "Computer Music",
    summary: "Musical machines and probabilistic composition",
    detailedDescription:
      "After taking a class on electronic dance music, I was hungry to dive deeper into this intersection of interests. The next few years, I took several classes in computer music, including algorithmic music, sound synthesis, and electronic instrument design. In these classes I learned about the history of the field and how to build computer music systems in Max/MSP and SuperCollider. Below are some samplings from a project I did for algorithmic music. I built mealy machines and Markov models to extract stastical information from musical data that was then used to generate probabalistic music sequences.",
    image: "/images/computer-music.png",
    githubUrl: "https://github.com/pmillerschmidt/Musical-Machines",
    technologies: ["SuperCollider", "Markov Model", "Max/MSP"],
    originalWorks: [
      {
        title: "Hidden Markov Model Generation",
        url: "/audio/markov-song.mp3",
        description:
          "Melody and drum patterns generated using Hidden Markov Models",
        year: "2023",
      },
      {
        title: "Mealy Machine Generation",
        url: "/audio/mealy-song.mp3",
        description: "Melody and drum patterns generated using Mealy Machines",
        year: "2023",
      },
    ],
  },
  {
    title: "Coursework",
    summary: "Academic background in thoery and taxonomy",
    description:
      "A collaborative film score composition project with Baltazar Lora",
    detailedDescription: `
    Music classes at Yale complemented my analytical engineering coursework, providing an outlet for creative exploration. After taking introductory theory courses my first year, I took nearly every course I was proficient enough to handle. Some of my favorites include Where Music Theories Collide, American Neighborhood Musics, and Gamelan Ensemble. 
    Below is a visual score I wrote with my friend and collaborator <a href="https://open.spotify.com/artist/1OcU1uVtqF9umURdShNIwP" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Baltazar Lora</a> for our composition seminar.`,
    image: "/images/theory.jpg",
    videoUrl: "https://www.youtube.com/embed/W0jj0Gkzsc8",
    isYoutubeVideo: true,
    technologies: ["Theory", "Film Scoring", "Composition"],
  },
];

export const projects = [
  {
    title: "GrooveBlocks",
    description: "Combinatory blocks for composition-based learning",
    image: "/images/grooveblocks.png",
    technologies: ["Java", "Audio Processing", "C++"],
    demoUrl: "https://grooveblocks.mit.edu",
    projectUrl: "https://grooveblocks.mit.edu",
    githubUrl: "https://github.com/pmillerschmidt/grooveblocks",
    videoUrl: "https://www.youtube.com/embed/x5WkWsCPJ6E",
    isYoutubeVideo: true,
    detailedDescription: `
      <p>GrooveBlocks reimagines music education through tangible, interactive building blocks that make composition accessible from day one. Traditional music education often prioritizes technical proficiency over creative expression, leading to high dropout rates and missed opportunities for musical discovery. Instead of requiring years of practice before creation, GrooveBlocks lets students start song-writing immediately through an intuitive system of modular blocks that control different musical elements.</p> 
      <div>
        <img src="/images/grooveblocks/grooveblocks-design.png" alt="Design" class="w-full rounded-lg shadow-lg mb-2" />
        <p class="text-sm text-white/60 text-center">Grooveblocks initial design conceptions</p>
      </div>
      
      <p>The hardware consists of connectable blocks for rhythm, melody, harmony, and effects, each equipped with sensors that translate physical manipulation into sound. These blocks interface with our companion app, which features three seamlessly integrated modes: Learn, Jam, and Create. The Learn mode adapts to each student's interests and progress, introducing new concepts when they're ready. Jam mode facilitates improvisation and collaboration, while Create mode offers varying levels of compositional guidance based on the student's experience. The Modes are designed to easily transition between, so a student can improvise/play and then easily begin composing based on their improvisation. </p>

    <div style="display: flex; gap: 1rem; margin: 1.5rem 0;">
      <div style="flex: 1;">
        <img src="/images/grooveblocks/grooveblocks-ui.png" alt="Grooveblocks Interface" style="width: 100%; height: auto; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin-bottom: 0.5rem;" />
        <p style="font-size: 0.875rem; color: rgba(255, 255, 255, 0.6); text-align: center;">Jam Mode UI (left) & Prospective UI style (right)</p>
      </div>
    </div>
    
    <p>What sets GrooveBlocks apart is its adaptive approach. Rather than overwhelming beginners with full musical complexity (like a piano's 88 keys or a DAW's countless controls), the system introduces elements gradually as students develop. This balanced approach keeps students engaged and challenged at the right level, allowing them to discover their musical identity while building technical skills. Through testing with middle schoolers and collaboration with educators, we refined this approach to ensure it keeps students engaged while fostering genuine musical growth. While we reached testing agreements with the Music for Young Children foundation, we paused the project indefinitely as we returned to our respective universities.</p>
    `,
    features: [
      "Interactive block-based composition",
      "Real-time audio processing",
      "Collaborative music creation",
      "Rich visual and haptic feedback",
    ],
  },
  {
    title: "MelGen",
    description: "Generative melodic/harmonic LSTM model",
    image: "/images/melgen.png",
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    demoUrl: "https://melgen.mit.edu/demo",
    githubUrl: "https://github.com/pmillerschmidt/MelGen",
    videoUrl: "https://www.youtube.com/embed/VGp2k8LJc3M",
    isYoutubeVideo: true,
    liveDemo: true,
    demoDescription:
      "Experience real-time melody generation that adapts to chord progressions. Create unique melodic lines that follow musical theory principles.",
    detailedDescription: `
    
Music generation with machine learning poses unique challenges due to the high dimensionality of audio data and the complex temporal and hierarchical structures inherent in music. MelGen, an AI-powered MIDI generator, addresses these challenges by generating melodies based on harmonic structures. Trained on the Rock Corpus Dataset—comprising harmonic analyses and melodic transcriptions of 20th-century songs—the model uses an LSTM architecture with a single LSTM layer, dropout, and a softmax classifier. Training spanned 50 epochs with a learning rate of 0.001 and a sparse categorical cross-entropy loss function. Despite these efforts, the model initially produced melodies with inconsistencies, such as prolonged notes caused by overestimated continuation probabilities. To mitigate this, continuation reduction was implemented to balance note lengths, resulting in more coherent outputs. Users can interact with MelGen by providing a MIDI file of chords and a seed melody, which the model builds upon to generate new melodies. The project's codebase includes tools for data preprocessing, training, and melody generation, highlighting its end-to-end approach to addressing the complexities of music generation.
<div>
  <p class="mb-2"><strong>MelGen Output</strong></p>
  <audio controls src="/audio/melgen-demo.mp3" class="w-full"></audio>
</div>
    `,
    features: [
      "Real-time melody generation",
      "Chord-aware composition",
      "Machine Learning",
      "Interactive parameters",
    ],
  },
  {
    title: "Artiphon Music Logic",
    description: "Markov Melody generator for embedded systems",
    image: "/images/midi.webp",
    technologies: ["C++", "MIDI", "Embedded Systems"],
    githubUrl: "https://github.com/pmillerschmidt/Artiphon-Music-Logic",
    detailedDescription: `
      <p>For my capstone project at Artiphon, I built a lightweight melody generator in C++. The algorithm incorporated a Trigram Hidden Markov Model and user-specified temperatures for precise melodic control. The program parses artist-specific MIDI to emulate their style. For my exploration, I fed it Avicii top-line melodies normalized around A minor. The model is designed to be efficient and work on Artiphon's low-memory, embedded systems. It was an interesting challenge in building statistical models that are simple, but create novel and reasonable music.</p>

      <h3 class="text-xl font-semibold mt-6 mb-4">User controls</h3>
      <ul class="list-none space-y-2">
        <li><strong>Chord coefficient:</strong> the likelihood of chord tones</li>
        <li><strong>Strong note coefficient:</strong> the likelihood that down beats emphasize chord tones</li>
        <li><strong>Movement hesitance:</strong> the amount of desired movement (jumpiness)</li>
        <li><strong>Movement spread:</strong> the probabalistic range of the melody</li>
        <li><strong>Repetition coefficient:</strong> likelihood of repetition (1 = none, 0 = total repetition)</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-4">Audio Examples</h3>
      Here are examples of the generator creating top-line melodies, with temperatures displayed in the title. The lead melody is the generated section, the accompaniment is for reference. 
      <div class="space-y-4">
        <div>
          <p class="mb-2"><strong>CSMG-Avicii-{4,7,3,12,0}</strong></p>
          <audio controls src="/audio/artiphon/CSMG-Avicii-{4,7,3,12,0}.mp3" class="w-full"></audio>
        </div>
        <div>
          <p class="mb-2"><strong>CSMG-Avicii-{5, 6, 8, 8, 0.1}</strong></p>
          <audio controls src="/audio/artiphon/CSMG-Avicii-{5, 6, 8, 8, 0.1}.mp3" class="w-full"></audio>
        </div>
        <div>
          <p class="mb-2"><strong>CSMG-Avicii-{10,4,15,15,0.6}</strong></p>
          <audio controls src="/audio/artiphon/CSMG-Avicii-{10,4,15,15,0.6}.mp3" class="w-full"></audio>
        </div>
      </div>
    `,
    features: [
      "Low time/memory complexity",
      "User-controlled generation",
      "MIDI export",
    ],
  },
  {
    title: "Q-tar",
    description: "Reinforcement learning for melody generation",
    image: "/images/Qtar.png",
    technologies: ["PyTorch", "Reinforcement Learning", "Flask"],
    demoUrl: "https://neural-music.example.com",
    projectUrl: "https://qtar.mit.edu",
    githubUrl: "https://github.com/pmillerschmidt/qtar",
    videoUrl: "https://www.youtube.com/watch?v=IcCUpgkPF8k",
    isYoutubeVideo: true,
    liveDemo: true,
    demoDescription:
      "Create unique musical pieces using deep learning models trained on various musical styles.",
    detailedDescription: `
      <p class="mb-6">
        Qtar is a reinforcement learning agent that learns music theory rules through environmental interaction. The project explores melody generation as a game-like system where an RL agent discovers and internalizes musical principles through rewards and rules.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Initial Approach</h2>
    <p class="mb-6">
        The first implementation attempted to teach all musical rules simultaneously in a single training phase. However, this approach proved problematic - the agent disproportionately focused on rules that provided immediate, high rewards while struggling to learn patterns that required longer-term planning and more subtle musical understanding.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Evolution of Training Strategy</h2>
    <p class="mb-6">
        To address these limitations, I experimented with curriculum learning, a common RL technique that progressively introduces complexity. I initially developed a five-phase training curriculum, hypothesizing that this would mirror human music learning and allow the agent to gradually master increasingly sophisticated musical concepts. While this approach showed promise conceptually, it only yielded marginal improvements in melodic coherence.
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Refined Two-Phase Framework</h2>
    <p class="mb-6">
        After evaluating results, I simplified the training to two focused phases:
    </p>
    <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2"><strong>Phase One</strong>: The agent learns fundamental melodic rules and motif structures</li>
        <li class="mb-2"><strong>Phase Two</strong>: Building on these basics, the agent explores complex patterns and long-term musical coherence. This phase incorporates successful motifs from Phase One, rewarding the agent for creating variations that maintain similarity with previously successful patterns.</li>
    </ol>

    <h2 class="text-2xl font-bold mt-8 mb-4">Training with Human Feedback</h2>
    <p class="mb-6">
        The system is structured into two training stages:
    </p>
    <ol class="list-decimal pl-6 mb-6">
        <li class="mb-2"><strong>Pre-training</strong>: Initial learning of musical rules and patterns (phase 1 & 2)</li>
        <li class="mb-2"><strong>RL Fine-tuning</strong>: Training from phase 2, the agent incorporates human feedback collected through a custom UI. These human ratings directly influence the reward function, helping guide the agent toward more natural compositions.</li>
    </ol>

    <h2 class="text-2xl font-bold mt-8 mb-4">Results</h2>
    <p class="mb-6">
        Here are two samples of the agent's melodies. The first is a melody generated from the pretrained weights and the second is a melody generated from the fine-tuned weights, after a few episodes of human feedback. There is not a massive difference, but you can tell that the agent is learning to generate more complex melodies, specifically ones that have more note variety. It also seems to be over-learning syncopation, so I may need to update those rewards.
    </p>
    <div>
      <p class="mb-2"><strong>Qtar Pretrained Output</strong></p>
      <audio controls src="/audio/qtar-pretrained.mp3" class="w-full"></audio>
    </div>

    <div>
      <p class="mb-2"><strong>Qtar Trained Output (with Human Feedback)</strong></p>
      <audio controls src="/audio/qtar-trained.mp3" class="w-full"></audio>
    </div>
    
    `,
    features: ["Reinforcement Learning", "Human Feedback", "Web interface"],
  },
  {
    title: "nextChord",
    description: "Chord progression neural network",
    image: "/images/next-chord.png",
    technologies: ["PyTorch", "Long Short-Term Memory", "React"],
    demoUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    projectUrl: "https://pmillerschmidt.github.io/ChordCompass/",
    isExternalDemo: true,
    githubUrl: "https://github.com/pmillerschmidt/ChordCompass",
    liveDemo: true,
    videoUrl: "https://www.youtube.com/embed/F9KaOG3SCbU",
    isYoutubeVideo: true,
    embedDemo: false,
    detailedDescription: `
      nextChord/ChordCompass is a chord progression neural network trained on the <a href="https://paperswithcode.com/dataset/niko-chord-progression-dataset#:~:text=The%20Niko%20Chord%20Progression%20Dataset%20is%20used%20in%20AccoMontage2.,have%20an%20'Unknown'%20style.)" target="_blank" rel="noopener noreferrer" class="text-primary-500 font-medium no-underline hover:underline hover:decoration-2 hover:text-primary-400 transition-all duration-200">Niko Chord Progression Dataset</a> which contains 5k+ chord progressions. It pre-processes progressions into sequences of roman numerals, and then uses a LSTM to predict the next chord in the sequence. The temperature parameter controls the amount of randomness in the prediction. I built a web interface and API to inference the model. The next steps of this project are to integrate a more diverse dataset with complex progressions and a larger vocabulary of chords to predict.

      <div>
        <p class="mb-2"><strong>nextChord Output</strong></p>
        <audio controls src="/audio/nextchord-demo.mp3" class="w-full"></audio>
      </div>

    
    `,
    features: ["AI chord generation", "API Design", "Web Audio Processing"],
  },
  {
    title: "Chess Engine Design",
    description: "Minimax chess engine with advanced heuristics",
    image: "/images/minimax.png",
    technologies: ["Python", "Alpha-Beta Pruning", "Tree Search"],
    demoUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    projectUrl: "https://pmillerschmidt.github.io/Chess-Alpha-Beta/",
    isExternalDemo: true,
    githubUrl: "https://github.com/pmillerschmidt/Chess-Alpha-Beta",
    videoUrl: "https://www.youtube.com/watch?v=_lQSp4do4To",
    liveDemo: true,
    isYoutubeVideo: true,
    demoDescription:
      "Play against an AI opponent that uses advanced game tree search algorithms and positional evaluation",
    detailedDescription: `
      This chess engine implements the minimax algorithm with alpha-beta pruning and advanced move sorting heuristics. This was my final project for my Computational Intelligence for Games course and was inspired by my interest in perfect information games like chess. The engine evaluates positions using a scoring system that considers multiple factors:
      - Material gain (whether a move is winning/losing a piece)
      - Material balance (piece values and their relative worth)
      - Piece Square Evaluation
      - Lethal threats (e.g. checkmate)

      The algorithm evaluates every move based on this reward system by searching the game tree and applying the minimax algorithm. To improve search efficiency, we implemented alpha-beta pruning and scout optimizations. 
      
      The web interface provides an interactive board where users can play a random, greedy, minimax, or scout agent with increasing levels of challenge. 
    `,
    features: [
      "Alpha-beta pruning algorithm",
      "Position evaluation",
      "Interactive chess board",
      "Real-time move calculation",
    ],
  },
  //Removed duplicate Q-tar entry
];
