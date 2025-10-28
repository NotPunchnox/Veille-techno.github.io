/* Articles concernant l'intelligence artificielle */

export default [
    // Novembre
    // Octobre
    {
        "title": "Systèmes NVIDIA AGX : IA pour Machines Intelligentes, Automobile et Santé",
        "description": "NVIDIA propose des systèmes AGX optimisés par l’IA pour révolutionner les véhicules autonomes, les machines intelligentes et l’imagerie médicale, avec des évolutions récentes comme le Jetson AGX Thor et DRIVE AGX Thor.",
        "date": "28 octobre 2025",
        "content": [
            "<h3>Introduction</h3><p>Les systèmes NVIDIA AGX marquent l’entrée dans une ère de machines autonomes, en offrant une puissance de calcul IA inédite pour des applications comme les voitures sans conducteur, les robots et les dispositifs médicaux. Ces plateformes, basées sur des architectures évolutives, transforment la science‑fiction en réalité.</p>",
            "<h3>Véhicules autonomes</h3><p><strong>NVIDIA DRIVE AGX</strong> est une plateforme ouverte dédiée aux véhicules autonomes, servant de «&nbsp;cerveau&nbsp;» IA avec des performances élevées et un rendement énergétique optimal. Elle supporte des assistants de conduite ainsi que des systèmes entièrement autonomes pour voitures, camions et robot‑taxis. Récemment, le <em>DRIVE AGX Thor Developer Kit</em> (août 2025) a été lancé pour accélérer le développement de véhicules plus sûrs.</p>",
            "<h3>Machines intelligentes</h3><p>Le <strong>Jetson AGX Xavier</strong> offre une puissance de <strong>32 TOPS</strong> pour les applications IA Edge, dans un format compact consommant moins de 30 W. Il facilite la création de robots, drones et machines autonomes via des SDK dédiés. En 2025, le <strong>Jetson AGX Thor</strong> apporte un gain significatif (~5×) en performances pour l’IA générative par rapport à l’Orin précédent.</p>",
            "<h3>Imagerie médicale</h3><p>Le kit <strong>NVIDIA Clara AGX</strong>, basé sur un SoC Xavier ARM, fournit des capacités d’IA et d’imagerie en temps réel pour les appareils médicaux. Il simplifie la gestion distante de parcs d’instruments et s’intègre à la pile logicielle <em>NVIDIA EGX</em> pour les déploiements cliniques.</p>",
            "<h3>Évolutions récentes</h3><ul><li>Contributions aux frameworks ouverts pour la robotique et l’edge.</li><li>Projets pilotes industriels, dont des expérimentations de robot‑taxis basés sur DRIVE AGX Thor.</li><li>Optimisations matérielles et logicielles pour les déploiements à grande échelle.</li></ul>",
            "<h3>Conclusion</h3><p>Les systèmes AGX de NVIDIA positionnent l’entreprise en leader de l’IA appliquée, transformant les secteurs automobile, industriel et médical grâce à des technologies scalables, performantes et adaptées au edge.</p>"
        ],
        "images": [
            {
                "url": "https://developer.nvidia.com/blog/wp-content/uploads/2018/12/xavier-module-dev-kit-3qrtr-1945px.png",
                "caption": "Le module NVIDIA Jetson AGX Xavier et son kit de développement."
            },
            {
                "url": "https://developer.download.nvidia.com/images/drive/agx-drive-850x480.jpg",
                "caption": "La plateforme NVIDIA DRIVE AGX pour véhicules autonomes."
            }
        ],
        "sources": [
            {
                "title": "Site Officiel NVIDIA AGX Systems",
                "url": "https://www.nvidia.com/fr-fr/deep-learning-ai/products/agx-systems/"
            },
            {
                "title": "NVIDIA Blog - Jetson AGX Thor",
                "url": "https://developer.nvidia.com/blog/unlock-faster-smarter-edge-models-with-7x-gen-ai-performance-on-nvidia-jetson-agx-thor/"
            },
            {
                "title": "NVIDIA Blog - DRIVE AGX Thor Developer Kit",
                "url": "https://blogs.nvidia.com/blog/drive-agx-developer-kit-general-availability/"
            },
            {
                "title": "Electrive - NVIDIA Robot Taxi Project",
                "url": "https://www.electrive.com/2025/10/24/nvidia-starts-working-on-robot-taxi-project/"
            }
        ]
    },
    // Septembre
    // Aout
    {
    "title": "OpenAI lance gpt-oss : une révolution open-source pour l’IA et la robotique",
    "description": "En août 2025, OpenAI a dévoilé gpt-oss-120b et gpt-oss-20b, deux modèles de langage open-weight sous licence Apache 2.0. Optimisés pour le raisonnement, l’utilisation d’outils et les déploiements locaux, ces modèles offrent des performances de pointe à faible coût, avec des applications prometteuses en robotique et au-delà.",
    "date": "9 août 2025",
    "content": [
        "<h3>Introduction</h3><p>Le 5 août 2025, OpenAI a marqué un tournant dans l’écosystème open-source en lançant gpt-oss-120b et gpt-oss-20b, deux modèles de langage open-weight sous licence Apache 2.0. Ces modèles, conçus pour rivaliser avec les performances des modèles propriétaires comme OpenAI o4-mini et o3-mini, se distinguent par leur efficacité sur du matériel standard et leur capacité à raisonner, utiliser des outils et s’intégrer dans des workflows agentiques. Annoncés sur le blog d’OpenAI, ils promettent de démocratiser l’accès à l’IA avancée, avec des implications majeures pour la robotique, la recherche et les applications industrielles.</p>",
        "<h3>Des modèles puissants et accessibles</h3><p>Les modèles gpt-oss se démarquent par leur architecture Mixture-of-Experts (MoE), qui réduit le nombre de paramètres actifs pour une efficacité maximale. Le gpt-oss-120b, avec 117 milliards de paramètres (5,1 milliards actifs par jeton), s’exécute sur un GPU de 80 Go, tandis que le gpt-oss-20b, avec 21 milliards de paramètres (3,6 milliards actifs), fonctionne sur seulement 16 Go de mémoire. Selon OpenAI, ces modèles surpassent ou égalent des références comme o4-mini et o3-mini sur des benchmarks tels que Codeforces, MMLU, HealthBench et Tau-Bench, tout en étant personnalisables pour des tâches spécifiques. Leur compatibilité avec des contextes jusqu’à 128 000 jetons et leur optimisation pour des outils comme la recherche web et l’exécution de code Python en font des atouts pour la robotique et l’automatisation.</p>",
        "<h3>Applications en robotique et IA agentique</h3><p>Les modèles gpt-oss sont conçus pour les workflows agentiques, avec des capacités avancées de suivi d’instructions, de raisonnement par chaîne de pensée et d’utilisation d’outils. Dans la robotique, ces modèles peuvent alimenter des systèmes autonomes, comme des robots humanoïdes ou des AMRs, en leur permettant de prendre des décisions complexes en temps réel. Par exemple, leur intégration avec des plateformes comme Hugging Face, utilisée pour le robot Reachy Mini, pourrait permettre de programmer des comportements interactifs pour des robots éducatifs ou industriels. Les partenariats avec des acteurs comme AI Sweden, Orange et Snowflake montrent également leur potentiel pour des applications sécurisées sur site, notamment dans la logistique et la santé, où gpt-oss-120b excelle sur HealthBench.</p>",
        "<h3>Sécurité et responsabilité</h3><p>OpenAI a mis un accent particulier sur la sécurité des modèles gpt-oss. Pendant le pré-entraînement, les données dangereuses liées aux armes nucléaires, radiologiques, biologiques et chimiques ont été filtrées. Le post-entraînement, basé sur un apprentissage par renforcement et une stratégie d’alignement délibératif, garantit que les modèles refusent les prompts malveillants. OpenAI a également testé une version ajustée à des fins malveillantes de gpt-oss-120b, concluant qu’elle reste sous le seuil critique de dangerosité défini par leur cadre de préparation. Ces efforts, audités par des experts tiers, établissent une nouvelle norme pour la sécurité des modèles open-weight. OpenAI invite la communauté à signaler les vulnérabilités via un programme doté de 500 000 $.</p>",
        "<h3>Un écosystème open-source florissant</h3><p>Les modèles gpt-oss sont disponibles sur Hugging Face, avec des implémentations optimisées pour PyTorch, Apple Metal, et des plateformes comme Azure, AWS et vLLM. Leur format MXFP4 réduit les besoins en mémoire, rendant l’inférence locale accessible aux développeurs individuels et aux petites organisations. OpenAI a également publié sous licence open-source l’outil de rendu harmony et le tokenizer o200k_harmony, facilitant leur adoption. Ces initiatives, combinées à des partenariats avec NVIDIA, AMD, et Groq, garantissent une compatibilité matérielle large. Les commentaires de la communauté, via des plateformes comme le Playground d’OpenAI, joueront un rôle clé dans l’évolution future des modèles.</p>",
        "<h3>Conclusion</h3><p>Avec gpt-oss-120b et gpt-oss-20b, OpenAI redéfinit l’accès à l’IA avancée en offrant des modèles open-weight performants, sécurisés et abordables. Leur potentiel en robotique, de l’automatisation industrielle aux interactions homme-robot, est immense, comme en témoigne leur intégration avec des écosystèmes comme Hugging Face. En démocratisant l’IA pour les marchés émergents et les petites organisations, OpenAI pose les bases d’un écosystème open-source dynamique. Les chercheurs et développeurs sont invités à explorer ces modèles, contribuant ainsi à une innovation collaborative et responsable. Cette annonce marque une étape décisive vers une IA accessible à tous.</p>"
    ],
    "images": [
        {
            "url": "https://openai.com/content/images/2025/08/gpt-oss-launch.jpg",
            "caption": "Illustration des modèles gpt-oss-120b et gpt-oss-20b, lancés par OpenAI pour démocratiser l’IA open-source."
        }
    ],
    "sources": [
        {
            "title": "OpenAI – Introducing gpt-oss",
            "url": "https://openai.com/fr-FR/index/introducing-gpt-oss/"
        },
        {
            "title": "Hugging Face – gpt-oss Model Repository",
            "url": "https://huggingface.co/models?search=gpt-oss"
        }
    ]
}, {
    "title": "CES 2025 : Nvidia dévoile Nemotron pour l’IA agentique et vise la robotique",
    "description": "Nvidia lance Nemotron, une famille de grands modèles de langage (LLMs) optimisés pour l’IA agentique, et annonce des avancées majeures pour la robotique, notamment dans les entrepôts, lors du CES 2025.",
    "date": "8 janvier 2025",
    "content": [
        "<h3>Introduction</h3><p>Lors de sa keynote au CES 2025, Nvidia, dirigée par Jensen Huang, a marqué les esprits en dévoilant Nemotron, une famille de LLMs dérivée de Llama, conçue pour l’IA agentique. Devant 12 000 spectateurs à Las Vegas, l’entreprise a également affirmé sa vision : révolutionner la robotique, en commençant par les entrepôts.</p>",
        "<h3>Nemotron : une IA agentique polyvalente</h3><p>Nemotron se décline en trois versions : Nano (embarqué), Super (un GPU) et Ultra (data center). Entraînés pour le suivi d’instructions, le chat, la génération de code et les mathématiques, ces modèles sont personnalisables et disponibles sur le site de Nvidia et Hugging Face. Une variante visuelle, Cosmos Nemotron, complète l’offre, tandis que SAP et ServiceNow sont déjà sur les rangs pour les adopter.</p>",
        "<h3>Blueprints : accélérer les usages</h3><p>Nvidia a enrichi ses Blueprints, des workflows préconfigurés pour déployer des agents IA facilement. Cinq partenariats (CrewAI, LangChain, etc.) offrent des solutions prêtes à l’emploi, tandis que des outils comme la conversion de PDF en podcasts ou la synthèse vidéo sont proposés. Quatre Blueprints Omniverse ciblent l’IA physique, avec Mega qui simule des flottes de robots pour la logistique.</p>",
        "<h3>Conclusion</h3><p>Avec Mega, testé par Accenture et Kion pour créer des jumeaux numériques d’entrepôts, Nvidia vise un marché logistique de 1000 milliards de dollars. En combinant Nemotron et la robotique, l’entreprise se positionne comme un pionnier de l’IA physique, prête à transformer industries et entrepôts grâce à des simulations avancées et des robots intelligents.</p>"
    ],
    "images": [
        {
            "url": "https://www.usine-digitale.fr/mediatheque/3/6/2/001521263_896x598_c.jpg",
            "caption": "Un jumeau numérique d’entrepôt simulé avec Nvidia Cosmos pour entraîner des robots."
        }
    ],
    "sources": [
        {
            "title": "L’Usine Digitale",
            "url": "https://www.usine-digitale.fr/article/ces-2025-nvidia-lance-nemotron-une-famille-de-llms-concue-pour-l-agentique.N2225205"
        }
    ]
},
{
    title:
        "DeepSeek : Le concurrent chinois de ChatGPT bouleverse le marché de l'IA",
    description:
        "DeepSeek, une startup chinoise, a récemment surpassé ChatGPT sur l'App Store d'Apple aux États-Unis, suscitant des inquiétudes concernant la protection des données personnelles.",
    date: "27 janvier 2025",
    content: [
        "<h3>Introduction</h3><p>DeepSeek, une startup chinoise spécialisée dans l'intelligence artificielle, a récemment lancé un assistant gratuit qui a rapidement gagné en popularité, dépassant ChatGPT en tant qu'application gratuite la plus téléchargée sur l'App Store d'Apple aux États-Unis. Cette ascension fulgurante a attiré l'attention des autorités de protection des données personnelles, notamment en Europe, où des enquêtes ont été ouvertes concernant la conformité de DeepSeek aux réglementations en vigueur.</p>",
        "<h3>Problèmes de sécurité et de confidentialité</h3><p>Peu après son ascension, DeepSeek a été victime d'une cyberattaque, obligeant l'entreprise à limiter temporairement les nouvelles inscriptions. Cette attaque a mis en lumière des préoccupations concernant la sécurité des données des utilisateurs et la robustesse des mesures de protection mises en place par la startup.</p>",
        "<h3>Impact sur le marché technologique</h3><p>L'émergence de DeepSeek a eu des répercussions significatives sur le marché technologique mondial. Les actions de Nvidia, un acteur majeur dans le domaine des puces pour l'IA, ont connu une baisse notable, perdant près de 600 milliards de dollars en valeur marchande en une seule journée. Cette chute reflète les inquiétudes des investisseurs face à la montée en puissance de concurrents chinois dans le secteur de l'IA et aux implications potentielles pour les entreprises technologiques établies.</p>",
        "<h3>Réactions des autorités européennes</h3><p>En Europe, les autorités de protection des données personnelles ont exprimé des inquiétudes quant à l'utilisation des données par DeepSeek. Des enquêtes ont été lancées pour déterminer si l'application respecte les réglementations européennes en matière de confidentialité et de protection des données. Ces investigations pourraient avoir des implications majeures pour l'expansion de DeepSeek sur le marché européen.</p>",
        "<h3>Conclusion</h3><p>La montée en puissance de DeepSeek illustre la rapidité avec laquelle le paysage de l'intelligence artificielle peut évoluer. Alors que les startups chinoises gagnent en influence, les questions de sécurité, de confidentialité et de conformité réglementaire deviennent de plus en plus cruciales. Les acteurs du marché et les régulateurs devront collaborer étroitement pour garantir que les innovations en matière d'IA se développent de manière sûre et éthique.</p>",
    ],
    images: [
        {
            url: "deepseek.avif",
            caption: "DeepSeek vs OpenAI",
        },
    ],
    sources: [
        {
            title: "Reuters",
            url: "https://www.reuters.com/technology/artificial-intelligence/chinese-ai-startup-deepseek-overtakes-chatgpt-apple-app-store-2025-01-27/",
        },
        {
            title: "Le Monde",
            url: "https://www.lemonde.fr/pixels/article/2025/01/30/deepseek-face-au-concurrent-chinois-de-chatgpt-l-inquietude-des-autorites-de-protection-des-donnees-personnelles_6523968_4408996.html",
        },
    ],
},
{
    title:
        "LUCIE : L'IA générative open source française attendue à Open Source Experience 2024",
    description:
        "LUCIE, une initiative française d'intelligence artificielle générative open source, sera présentée lors de l'événement Open Source Experience le 4 décembre 2024.",
    date: "18 novembre 2024",
    content: [
        "<h3>Présentation de LUCIE</h3><p>LUCIE est un modèle d'intelligence artificielle générative open source développé dans le cadre de l'initiative OpenLLM-France. Lancée à l'été 2023, cette initiative regroupe plus de 800 acteurs publics et privés, dont des chercheurs, des startups et des entreprises en France et en Europe. Son ambition est de créer des communs numériques pour l'IA générative, avec un accent particulier sur l'éducation, tout en garantissant la souveraineté des données.</p>",
        "<h3>Objectifs et caractéristiques</h3><ul><li><strong>Transparence des données :</strong> LUCIE se distingue par des données d'entraînement 100 % transparentes, assurant une traçabilité complète et une approche éthique dans le développement de l'IA.</li><li><strong>Approche communautaire :</strong> Le projet est porté par une communauté active, favorisant la collaboration entre divers acteurs du secteur numérique, des organismes de recherche et de l'industrie.</li><li><strong>Adaptation à l'éducation :</strong> LUCIE est conçue pour être un modèle d'IA souverain, adapté à des usages spécifiques comme l'éducation, avec une grande stabilité, une compatibilité avec la protection des données et une documentation exhaustive.</li></ul>",
        "<h3>Entraînement et développement</h3><p>Déployé sur le supercalculateur Jean Zay (GENCI), l'entraînement de LUCIE vise à traiter 3 000 milliards de tokens. Les étapes principales incluent :</p><ol><li><strong>Composition du dataset :</strong> Un mélange multilingue comprenant 33 % d'anglais, 32,4 % de français, 15 % de code/mathématiques, et 20 % d'autres langues comme l'allemand, l'espagnol et l'italien.</li><li><strong>Filtrage des données :</strong> Un tri rigoureux garantit des informations de haute qualité, tout en excluant les contenus redondants, erronés ou offensants.</li><li><strong>Parallélisme avancé :</strong> La méthode de parallélisme « 3D » optimise les ressources tout en actualisant les données en fin d'entraînement.</li><li><strong>Extension de la fenêtre contextuelle :</strong> Capable de traiter jusqu'à 128 000 tokens, LUCIE est particulièrement adaptée aux cas d'usage comme le RAG (Retrieval-Augmented Generation).</li><li><strong>Instruction et alignement :</strong> Une phase en deux étapes (fine-tuning et apprentissage par renforcement) affine les performances du modèle.</li></ol>",
        "<h3>Présentation à l'Open Source Experience 2024</h3><p>LUCIE sera présentée lors de l'événement Open Source Experience :</p><ul><li><strong>Date :</strong> 4 décembre 2024</li><li><strong>Lieu :</strong> Salle Alice Recoque, à 14h</li><li><strong>Programme :</strong> Retour sur la genèse de LUCIE avec Michel-Marie Maudet, Directeur Général de LINAGORA.</li></ul><p>Cette présentation sera l'occasion de découvrir les avancées du projet et de comprendre son importance pour la souveraineté numérique en France et en Europe.</p>",
    ],
    images: [
        {
            url: "lucie-ia.webp",
            caption: "LUCIE, l'IA open source française",
        },
    ],
    sources: [
        {
            title: "GoodTech.info",
            url: "https://goodtech.info/lucie-lia-generative-open-source-francaise-vous-attend-a-open-source-experience-2024/",
        },
    ],
},
{
    title: "L'orange Pi & RKLLM",
    description:
        "Rockchip RKLLM, une pile logicielle pour déployer des modèles d'IA génératifs sur les SoC Rockchip RK3588, RK3588S et RK3576, exploite le NPU intégré pour offrir des performances IA de 6 TOPS.",
    date: "17 juillet 2024",
    content: [
        "<h3>Présentation de l'Orange Pi</h3><p>L'Orange Pi est une solution innovante dans le monde des micro-ordinateurs, offrant une combinaison unique de faible consommation énergétique, de puissance de calcul et d'accessibilité financière. Avec sa capacité à répondre à des besoins divers, il devient un choix incontournable pour les développeurs, les makers et même les entreprises cherchant à déployer des infrastructures performantes à moindre coût.</p>",
        "<h3>Caractéristiques principales</h3><ul><li><strong>Consommation énergétique minimale :</strong> L'Orange Pi est conçu pour être extrêmement économe en énergie, ce qui en fait un choix idéal pour des applications à faible consommation.</li><li><strong>Processeur puissant :</strong> Équipé d'un processeur RK (Rockchip) avec une NPU (Neural Processing Unit), il offre des performances exceptionnelles pour le traitement de données d'intelligence artificielle.</li><li><strong>Extensibilité de la RAM :</strong> L'Orange Pi prend en charge jusqu'à 32 Go de RAM, offrant ainsi une grande capacité de traitement pour des tâches complexes et des applications gourmandes en ressources.</li><li><strong>Coût abordable :</strong> À un prix très compétitif, l'Orange Pi est l'une des solutions les plus accessibles sur le marché.</li></ul>",
        "<h3>Performances exceptionnelles</h3><p>Grâce à son processeur RK et à sa NPU intégrée, l'Orange Pi excelle dans les applications d'intelligence artificielle, de machine learning, et de traitement multimédia. Il peut gérer des tâches complexes tout en maintenant une consommation d'énergie remarquablement faible, ce qui le rend idéal pour des projets embarqués ou des serveurs à faible coût.</p>",
        "<h3>Utilisation et flexibilité</h3><p>Avec sa capacité à accueillir jusqu'à 32 Go de RAM, l'Orange Pi peut exécuter une large gamme d'applications, de la domotique aux serveurs légers, en passant par des projets de machine learning. Son faible coût et sa puissance de calcul en font une option privilégiée pour des projets personnels ou professionnels.</p>",
        "<h3>Conclusion</h3><p>L'Orange Pi représente une solution équilibrée entre performance, efficacité énergétique et coût, ce qui en fait un choix idéal pour ceux qui cherchent à développer des projets innovants sans se ruiner. Il ouvre de nouvelles possibilités dans l'informatique embarquée et l'IA à un prix accessible pour tous.</p>",
    ],
    images: [
        {
            url: "rkllm.png",
            caption:
                "Performances de RKLLM sur le TinyLLAMA avec 1.1B de paramètres",
        },
        {
            url: "rkllm-chat.png",
            caption: "Diagramme montrant l'utilisation du NPU sur le SoC RK3588",
        },
    ],
    sources: [
        {
            title: "Raspberry Me",
            url: "https://www.raspberryme.com/kit-doutils-rockchip-rkllm-publie-pour-les-modeles-de-langage-volumineux-acceleres-par-npu-sur-les-soc-rk3588-rk3588s-rk3576/",
        },
        {
            title: "Radxa Wiki",
            url: "https://wiki.radxa.com/",
        },
        {
            title: "Orange Pi Documentation",
            url: "https://docs.orangepi.org/",
        },
    ],
},
{
    title: "Introducing Nomic Embed: A Truly Open Embedding Model",
    author: "Nomic Team",
    description:
        "Nomic Embed est un modèle d'embedding de texte open-source qui dépasse OpenAI Ada-002 sur les tâches à long et court contexte.",
    date: "12 octobre 2024",
    content: [
        "<h3>Qu'est-ce que Nomic Embed ?</h3><p>Nomic Embed est le premier modèle d'embedding de texte entièrement open source, avec des données d'entraînement accessibles et un code d'entraînement auditable. Il présente une longueur de contexte de 8192, surpassant OpenAI Ada-002 et text-embedding-3-small sur diverses tâches.</p>",
        "<h3>Caractéristiques principales</h3><ul><li><strong>Open Source :</strong> Modèle entièrement open source.</li><li><strong>Données ouvertes :</strong> Les données d'entraînement sont disponibles pour la vérification.</li><li><strong>Code d'entraînement accessible :</strong> Auditable et réutilisable.</li></ul>",
        "<h3>Performances exceptionnelles</h3><p>Avec une architecture basée sur BERT, Nomic Embed a été formé via un apprentissage contrastif sur plus de 235 millions de paires de textes. Sur le Massive Text Embedding Benchmark (MTEB), il surpasse Ada-002 et d'autres modèles tout en maintenant une longueur de contexte plus élevée.</p>",
        "<h3>Utilisation et accès</h3><p>Nomic Embed est accessible via l'API Nomic Atlas avec 1 million de tokens gratuits pour les charges de travail en production, garantissant la sécurité et la conformité pour les entreprises.</p>",
        "<h3>Évaluation et amélioration</h3><p>Pour évaluer les différences entre les modèles, nous avons comparé les espaces d'embedding de Nomic Embed et OpenAI Ada sur un échantillon de 250 000 articles de Wikipedia, mettant en lumière des différences structurelles dans leur traitement des articles de désambiguïsation.</p>",
        "<h3>Accès aux données</h3><p>Pour accéder aux données complètes, créez un compte Nomic Atlas et suivez les instructions fournies dans le dépôt de code.</p>",
    ],
    images: [
        {
            url: "nomic.png",
            caption: "Illustration de Nomic Embed",
        },
        {
            url: "nomic2.png",
            caption: "Screenshot de l'explorer Nomic Atlas",
        },
    ],
    sources: [
        {
            title: "Nomic",
            url: "https://nomic.ai",
        },
    ],
},
{
    title:
        "Llama 3.2 : Meta met à nouveau les bouchées doubles en matière d’intelligence artificielle",
    description:
        "Meta a dévoilé la version Llama 3.2 lors de Meta Connect 2024. Elle offre des capacités multimodales avec traitement du texte, des images et des interactions vocales.",
    date: "26 septembre 2024",
    content: [
        "<h3>Introduction</h3><p>Meta a dévoilé la dernière version de son IA open-source, <strong>Llama 3.2</strong>, lors de Meta Connect 2024. Cette version offre des capacités multimodales, avec la possibilité de traiter à la fois du texte et des images, et d'interagir vocalement en utilisant des voix de célébrités.</p>",

        "<h3>Fonctionnalités principales</h3><ul>",
        "<li><strong>Multimodalité</strong> : Llama peut traiter simultanément du texte et des images, facilitant des tâches comme l'analyse de photos ou la génération de légendes.</li>",
        "<li><strong>Reconnaissance vocale</strong> : Llama intègre un module de reconnaissance vocale, permettant des interactions naturelles et la synthèse vocale avec des voix de célébrités.</li>",
        "<li><strong>AI Studio</strong> : Permet la création d'avatars virtuels pour des interactions en vidéo, idéal pour des applications comme Instagram et Messenger.</li>",
        "</ul>",

        "<h3>Modèles SLM : Compacts et performants</h3><p>Les modèles <strong>SLM (Small Language Models)</strong>, comprenant les versions 1B et 3B, sont conçus pour offrir des performances élevées sur des appareils légers, tels que les smartphones et dispositifs embarqués. Ces modèles utilisent des techniques avancées comme <strong>l’élagage (pruning)</strong> et la <strong>distillation</strong> pour optimiser les performances tout en réduisant la taille et la consommation de ressources.</p><p>Le but principal des modèles SLM est de permettre une utilisation locale et efficace sur des appareils peu puissants. Ils sont idéaux pour des tâches comme le <strong>suivi d’instructions</strong>, la <strong>synthèse</strong> et la <strong>réécriture</strong>, tout en offrant une faible latence. Leur compatibilité avec les architectures <strong>Arm</strong>, notamment les processeurs <strong>Qualcomm</strong> et <strong>MediaTek</strong>, en fait une solution flexible pour les applications mobiles.</p><p>Les versions SLM sont également <strong>facilement personnalisables</strong> grâce à des outils comme <strong>TorchTune</strong>, ce qui permet aux développeurs d'adapter ces modèles à des besoins spécifiques sans avoir besoin d’infrastructures lourdes.</p>",

        "<h3>Disponibilité</h3><p>Llama 3.2 sera disponible gratuitement sur <strong>WhatsApp</strong>, <strong>Instagram</strong>, <strong>Facebook</strong>, et <strong>Messenger</strong>. Toutefois, les versions multimodales ne seront pas accessibles en Europe tant que Meta n’aura pas résolu les questions de conformité avec les régulations européennes.</p>",
    ],
    images: [
        {
            url: "Benchmarks-llama3.2.png",
            caption:
                "Llama devient multimodal et peut travailler avec des images",
        },
        {
            url: "SchemaLlama.png",
            caption: "Llama Schema",
        },
    ],
    sources: [
        {
            title: "Frandroid",
            url: "https://www.frandroid.com/marques/meta/2349720_llama-3-2-meta-met-a-nouveau-les-bouchees-doubles-en-matiere-dintelligence-artificielle",
        },
    ],
},

]