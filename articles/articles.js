const link =
  "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/";

export default {
  AI: [
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
          url: link + "deepseek.avif",
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
          url: link + "lucie-ia.webp",
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
          url: link + "rkllm.png",
          caption:
            "Performances de RKLLM sur le TinyLLAMA avec 1.1B de paramètres",
        },
        {
          url: link + "rkllm-chat.png",
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
          url: link + "nomic.png",
          caption: "Illustration de Nomic Embed",
        },
        {
          url: link + "nomic2.png",
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
          url: link + "Benchmarks-llama3.2.png",
          caption:
            "Llama devient multimodal et peut travailler avec des images",
        },
        {
          url: link + "SchemaLlama.png",
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
  ],

  ROBOTIC: [
    {
      "title": "Nomagic lève 44 millions pour ses robots IA dans les entrepôts européens",
      "description": "La start-up polonaise Nomagic sécurise 44 millions d'euros en série B pour accélérer le déploiement de ses bras robotisés dopés à l'IA dans les entrepôts à travers l'Europe.",
      "date": "10 mars 2025",
      "content": [
        "<h3>Introduction</h3><p>Nomagic, une start-up basée à Varsovie, a annoncé le 10 mars 2025 avoir bouclé une levée de fonds de 44 millions d'euros. Spécialisée dans les bras robotisés pour la logistique, elle profite de l’essor de l’intelligence artificielle pour renforcer sa présence dans les entrepôts européens.</p>",
        "<h3>Un financement stratégique</h3><p>Mené par la Banque Européenne pour la Reconstruction et le Développement (BERD), ce tour de table inclut également Khosla Ventures, Almaz Capital et une dette de la Banque Européenne d’Investissement. L’objectif est clair : équiper davantage de sites avec plus de 10 robots chacun d’ici deux ans, tout en investissant dans l’IA.</p>",
        "<h3>Une croissance impressionnante</h3><p>Avec une hausse de 220 % de son chiffre d’affaires récurrent en 2024, Nomagic a déjà séduit des clients comme Cdiscount en France, Apo.com et Asos en Allemagne. La start-up vise une croissance supplémentaire de 200 % en 2025, répondant à une demande croissante dans la mode, la pharmacie et l’alimentation.</p>",
        "<h3>Conclusion</h3><p>Nomagic se positionne comme un acteur clé de l’automatisation logistique en Europe. En s’appuyant sur ses robots et les données qu’ils génèrent, elle ambitionne de développer des modèles d’IA avancés, renforçant ainsi son avantage concurrentiel dans un marché en plein essor.</p>"
      ],
      "images": [
        {
          "url": "https://www.usine-digitale.fr/medias/nomagic-founders.jpg",
          "caption": "Les co-fondateurs de Nomagic : Marek Cygan, Kacper Nowicki et Tristan D’Orgeval."
        }
      ],
      "sources": [
        {
          "title": "L’Usine Digitale",
          "url": "https://www.usine-digitale.fr/article/nomagic-la-start-up-qui-deploie-ses-robots-dopes-a-l-ia-dans-les-entrepots-en-europe.N2228188"
        }
      ]
    },
    {
      "title": "Figure AI révolutionne la robotique domestique avec Helix",
      "description": "Avec son modèle Helix, Figure AI permet à ses robots humanoïdes de comprendre des commandes vocales et de manipuler des objets inconnus, ouvrant la voie à une présence dans les foyers.",
      "date": "9 mars 2025",
      "content": [
        "<h3>Introduction</h3><p>Figure AI, entreprise américaine, a dévoilé le 9 mars 2025 son modèle Helix, une IA de type vision-langage-action (VLA). Ce système permet à ses robots de répondre à des instructions en langage naturel et de manipuler des objets jamais vus auparavant.</p>",
        "<h3>Une technologie innovante</h3><p>Helix repose sur deux systèmes : un modèle de compréhension lente (7-9 Hz) et un contrôle rapide des mouvements (200 Hz). Cette architecture unique offre un contrôle précis du haut du corps des robots, y compris doigts et poignets, et permet une collaboration entre plusieurs unités.</p>",
        "<h3>Vers une application domestique</h3><p>Dans des démonstrations, deux robots équipés de Helix ont rangé des courses sur simple commande vocale. Fonctionnant sur des GPU embarqués à faible consommation, le modèle ne nécessite que 500 heures d’entraînement, le rendant viable pour un usage commercial.</p>",
        "<h3>Conclusion</h3><p>Figure AI mise sur Helix pour transformer la robotique domestique. En éliminant le besoin de formation spécifique pour chaque tâche, cette technologie pourrait bientôt rendre les robots humanoïdes indispensables dans les foyers, marquant un tournant dans leur adoption.</p>"
      ],
      "images": [
        {
          "url": "https://www.usine-digitale.fr/medias/helix-robot.jpg",
          "caption": "Un robot Figure AI manipulant un objet grâce au modèle Helix."
        }
      ],
      "sources": [
        {
          "title": "L’Usine Digitale",
          "url": "https://www.usine-digitale.fr/article/figure-ai-progresse-dans-la-robotique-a-la-maison-avec-son-modele-helix.N2227802"
        }
      ]
    },
    {
      "title": "Apptronik lève 350 millions pour ses robots humanoïdes en entreprise",
      "description": "La start-up américaine Apptronik sécurise 350 millions de dollars en série A pour déployer à grande échelle son robot humanoïde Apollo dans divers secteurs industriels.",
      "date": "8 mars 2025",
      "content": [
        "<h3>Introduction</h3><p>Le 8 mars 2025, Apptronik a annoncé une levée de fonds de 350 millions de dollars, portée par B Capital, Capital Factory et Google. Cette série A vise à accélérer la production et le déploiement de son robot humanoïde Apollo dans les entreprises.</p>",
        "<h3>Un robot polyvalent</h3><p>Apollo est conçu pour des tâches dans les entrepôts et usines, avec des applications prévues dans l’automobile, la logistique, et à terme, les soins aux personnes âgées. Des partenariats avec Mercedes-Benz et GXO Logistics témoignent de son potentiel immédiat.</p>",
        "<h3>Des alliances technologiques</h3><p>Forte de collaborations avec la NASA, Nvidia et Google DeepMind, Apptronik bénéficie d’un écosystème solide. Après trois ans de croissance record, elle voit 2025 comme une année clé pour scaler ses déploiements, surfant sur un marché robotique estimé à 199,94 milliards de dollars d’ici 2029.</p>",
        "<h3>Conclusion</h3><p>Apptronik s’impose comme un leader dans la robotique humanoïde pour l’entreprise. Avec ce financement, elle compte transformer les industries en automatisant des tâches variées, tout en posant les bases pour des applications futures plus larges.</p>"
      ],
      "images": [
        {
          "url": "https://www.usine-digitale.fr/mediatheque/4/1/9/001522914_896x598_c.jpg",
          "caption": "Le robot humanoïde Apollo d’Apptronik en action dans un entrepôt."
        }
      ],
      "sources": [
        {
          "title": "L’Usine Digitale",
          "url": "https://www.usine-digitale.fr/article/apptronik-leve-350-millions-de-dollars-pour-deployer-son-robot-humanoide-en-entreprise.N2227528"
        }
      ]
    },
    {
      title: "L'industrie boostée à l'IA avec NVIDIA Jetson",
      description: "NVIDIA Jetson est une gamme de plates-formes informatiques d'intelligence artificielle conçues pour apporter la puissance de l'IA aux systèmes embarqués et industriels. ( Nano Ordinateur )",
      date: "1 janvier 2025",
      content: [
        "<h3>Qu'est-ce que NVIDIA Jetson ?</h3><p>NVIDIA Jetson est une gamme de plates-formes informatiques d'intelligence artificielle conçues pour apporter la puissance de l'IA aux systèmes embarqués et industriels. Ces plates-formes compactes et économes en énergie sont dotées de GPU hautes performances et d'accélérateurs d'IA dédiés, permettant l'inférence d'IA en temps réel pour une large gamme d'applications, de la robotique aux véhicules autonomes en passant par les caméras intelligentes et l'IoT industriel.</p>",
        "<h3>Qu'est-ce qui différencie le NVIDIA Jetson des autres processeurs ?</h3><p>Chaque module NVIDIA Jetson est un système sur module (SoM) complet comprenant un GPU intégré, un CPU, une mémoire, une gestion de l'énergie et des interfaces à haut débit. Ces éléments sont finement ajustés pour offrir des performances d'inférence IA de premier plan tout en garantissant l'efficacité énergétique, permettant aux appareils de périphérie d'exécuter efficacement des algorithmes d'IA complexes. De plus, NVIDIA a développé un écosystème d'entraide pour le développement de l'IA sur les appareils Jetson, incluant la compatibilité avec les principaux frameworks d'IA comme TensorFlow et TensorRT de NVIDIA, ainsi que diverses bibliothèques et API pour la vision par ordinateur et l'apprentissage en profondeur.</p>",
        "<h3>NVIDIA Jetson vs GPU NVIDIA</h3><p>L'utilisation de NVIDIA Jetson n'exclut pas les GPU pour le traitement ; elle élargit plutôt les options pour les intégrateurs de systèmes et les OEM dans la personnalisation des solutions informatiques d'IA. Les GPU sont idéaux pour l'entraînement de réseaux neuronaux étendus ou l'exécution d'algorithmes d'IA complexes nécessitant une puissance de calcul élevée, tandis que Jetson est adapté aux applications d'IA en périphérie, où la faible latence, l'efficacité énergétique et la petite taille sont importantes.</p>",
        "<h3>Cas d'usage</h3><p>Les plates-formes NVIDIA Jetson sont utilisées dans divers domaines industriels, notamment :</p><ul><li><strong>Robotique :</strong> Intégration dans des robots pour des tâches de vision par ordinateur et de navigation autonome.</li><li><strong>Véhicules autonomes :</strong> Traitement en temps réel des données des capteurs pour la conduite autonome.</li><li><strong>Caméras intelligentes :</strong> Analyse vidéo en temps réel pour la surveillance et la sécurité.</li><li><strong>IoT industriel :</strong> Surveillance et contrôle des processus industriels avec des capacités d'IA avancées.</li></ul>",
      ],
      images: [
        {
          url: link + "jetson.webp",
          caption: "Exemple d'utilisation de NVIDIA Jetson dans l'industrie",
        }
      ],
      sources: [
        {
          title: "Sphinx France",
          url: "https://blog.sphinxfrance.com/actualite-iiot-cybersecurite/ia/industrie-ia-nvidia-jetson/",
        },
      ],
    },
    {
      title:
        "Robotaxi, Robovan, Optimus… : tout ce que Tesla a dévoilé pendant que vous dormiez",
      description:
        "Tesla a révélé ses projets d'autonomie des véhicules, notamment le Cybercab, un Robotaxi sans volant ni pédale, et le Robovan, un bus autonome futuriste.",
      date: "11 octobre 2024",
      content: [
        "<h3>Introduction</h3><p>Le 10 octobre, lors de la conférence We, Robot, Tesla a présenté ses projets d'autonomie des véhicules. Cette conférence a été l'occasion pour Elon Musk de dévoiler plusieurs innovations marquantes, dont le Cybercab, un Robotaxi révolutionnaire, ainsi que le Robovan, un bus autonome destiné à transformer la mobilité urbaine. En plus de ces véhicules, Musk a également évoqué le robot Optimus, une avancée majeure dans le domaine de la robotique.</p>",

        "<h3>Le Cybercab : l'avenir de la mobilité autonome</h3><p>Elon Musk a lancé le show avec la présentation du <strong>Cybercab</strong>, une voiture sans volant ni pédale, conçue pour une conduite entièrement autonome. Avec seulement deux sièges, le Cybercab se destine principalement aux trajets individuels ou en duo. Ce modèle, qui devrait être proposé à un prix inférieur à 30 000 $, incarne la vision de Tesla pour un avenir où les trajets en voiture sont plus flexibles et moins contraignants. Le Cybercab pourra travailler pour son propriétaire lorsqu'il n'est pas utilisé, permettant ainsi de générer des revenus supplémentaires. Musk a confirmé que la date de sortie est prévue avant 2027, bien que des spéculations suggèrent que cela pourrait être plus tardif, en raison des régulations strictes en Europe.</p>",

        "<h3>Robovan : le bus autonome</h3><p>Tesla a également révélé le <strong>Robovan</strong>, un bus autonome au design futuriste, capable de transporter jusqu'à 20 personnes. Ce véhicule est destiné à répondre aux besoins croissants de mobilité dans les zones urbaines. Bien que peu de détails aient été dévoilés, il est clair que le Robovan pourrait révolutionner le transport public en offrant un service efficace et flexible. Ce type de véhicule pourrait également réduire le nombre de voitures en circulation, contribuant ainsi à diminuer la pollution et à améliorer la qualité de l'air dans les villes.</p>",

        "<h3>Optimus : le robot évolué</h3><p>Lors de la conférence, le robot <strong>Optimus</strong> a fait une apparition marquante. Contrairement aux précédentes démonstrations, où un humain était déguisé en robot, cette fois-ci, un véritable robot a été présenté. Musk a souligné que ce robot intègre toutes les technologies développées pour les véhicules Tesla, tant au niveau logiciel que matériel. Bien qu'aucune information précise sur le prix ou l'utilisation d'Optimus n'ait été communiquée, Musk a évoqué une vision d'avenir où chacun pourrait posséder un Optimus. Les démonstrations ont été accompagnées de performances, avec des Optimus dansant sur scène, illustrant les capacités d'animation et d'interaction du robot.</p>",

        "<h3>Conclusion</h3><p>Avec ces annonces, Tesla semble solidement positionnée pour façonner l'avenir de la mobilité et de la robotique. Le Cybercab pourrait redéfinir la notion de transport personnel, tandis que le Robovan propose une solution pour les défis du transport public en milieu urbain. Optimus, quant à lui, représente une avancée significative dans l'intégration de l'intelligence artificielle et de la robotique dans la vie quotidienne. Ces innovations soulèvent également des questions importantes sur les régulations et l'acceptation sociale des véhicules autonomes et des robots dans notre société.</p>",
      ],
      images: [
        {
          url: link + "cybercab.jpg",
          caption: "Le Cybercab de Tesla, le Robotaxi sans volant.",
        },
        {
          url: link + "robovan.jpg",
          caption: "Le Robovan, un bus autonome futuriste.",
        },
        {
          url: link + "optimus-gen.jpg",
          caption: "Optimus, le robot évolué de Tesla.",
        },
      ],
      sources: [
        {
          title: "Numerama",
          url: "https://www.numerama.com/vroom/1823886-cybercab-robovan-optimus-tout-ce-que-tesla-a-devoile-pendant-que-vous-dormiez.html",
        },
      ],
    },
    {
      title: "Un nouveau robot humanoïde chez Boston Dynamics",
      description:
        "Boston Dynamics a récemment présenté une version entièrement électrique de son robot bipède Atlas.",
      date: "30 septembre 2024",
      content: [
        "<h3>Une nouvelle version tout électrique du robot bipède Atlas</h3>",
        "<p>Boston Dynamics a récemment présenté une version entièrement électrique de son célèbre robot bipède Atlas, marquant ainsi la fin de l'ère de l’actionnement hydraulique. Cette révolution technologique permet d’offrir une plus grande amplitude de mouvements tout en simplifiant la conception.</p>",
        "<h3>Fin de l'actionnement hydraulique</h3>",
        "<p>L’une des annonces majeures de cette nouvelle version est l’abandon du système d'actionnement hydraulique, autrefois utilisé dans les modèles précédents d'Atlas.</p>",
        "<h3>Caractéristiques techniques du nouveau modèle</h3>",
        "<ul><li><strong>Amplitude de mouvement augmentée</strong> : Grâce à l’électricité, Atlas peut réaliser des mouvements plus fluides.</li><li><strong>Absence d'acrobaties</strong> : Ce nouvel Atlas ne pourra pas réaliser d'acrobaties spectaculaires.</li><li><strong>Simplification de la programmation</strong> : Le contrôle du robot est désormais plus intuitif.</li></ul>",
        "<h3>Objectif : Applications concrètes</h3>",
        "<p>Le but de Boston Dynamics est désormais de commercialiser Atlas en l'adaptant à des applications réelles.</p>",
        '<iframe width="560" height="315" src="https://www.koreus.com/embed/boston-dynamics-new-atlas"  frameborder="0" allowfullscreen></iframe><br /><a href="https://www.koreus.com/video/boston-dynamics-new-atlas.html">Le nouveau robot Atlas de Boston Dynamics</a>',
      ],
      images: [
        {
          url: link + "Atlas.jpg",
          caption: "Image du robot Atlas",
        },
      ],
      sources: [
        {
          title: "Boston Dynamics Officiel",
          url: "https://bostondynamics.com/atlas",
        },
        {
          title: "Koreus Vidéo : Atlas en action",
          url: "https://www.koreus.com/embed/boston-dynamics-new-atlas",
        },
      ],
    },
  ],

  CYBER: [
    {
      "title": "Cyberattaque à l’Université de Rennes : un sous-réseau pédagogique visé",
      "description": "L’Université de Rennes a été ciblée par une cyberattaque ce week-end, affectant un sous-réseau pédagogique. Le groupe FunkSec revendique l’attaque et menace de publier 50 Go de données volées d’ici le 19 mars.",
      "date": "10 mars 2025",
      "content": [
        "<h3>Introduction</h3><p>L’Université de Rennes, anciennement Rennes 1, a signalé le 10 mars 2025 avoir détecté une cyberattaque au cours du week-end. Cette 'action informatique malveillante' a touché un sous-réseau pédagogique, mais l’établissement assure que l’incident reste limité et que ses réseaux principaux sont toujours opérationnels.</p>",
        "<h3>Une attaque revendiquée par FunkSec</h3><p>Le groupe de hackers FunkSec a revendiqué cette opération sur un forum de piratage. Il affirme avoir exfiltré 50 gigaoctets de données, incluant des fichiers PDF, CSV, bases de données, e-mails, numéros de téléphone, factures, mots de passe et clés SSH. Les cybercriminels menacent de tout publier le 19 mars si leurs exigences ne sont pas satisfaites.</p>",
        "<h3>Réponse et contexte</h3><p>L’université, qui accueille plus de 30 000 étudiants, a rapidement effectué des diagnostics et mis en place des mesures de sécurisation. FunkSec, connu pour sa stratégie de double-extorsion (chiffrement et vol de données), utilise l’intelligence artificielle pour optimiser ses attaques. Selon Bitdefender, ce gang a déjà frappé 120 cibles, notamment dans l’éducation et le secteur public.</p>",
        "<h3>Conclusion</h3><p>Cet incident met en lumière la vulnérabilité des institutions académiques face aux cybermenaces sophistiquées. Bien que l’impact semble contenu pour l’instant, la menace de publication des données volées plane, laissant l’université dans une course contre la montre pour renforcer sa sécurité.</p>"
      ],
      "images": [
        {
          "url": link + "renne.jpg",
          "caption": "La faculté de droit et de science politique de l’Université de Rennes, l’un des sites de l’établissement."
        }
      ],
      "sources": [
        {
          "title": "L’Usine Digitale",
          "url": "https://www.usine-digitale.fr/article/l-universite-de-rennes-victime-d-une-cyberattaque-sur-un-sous-reseau-pedagogique.N2228653"
        }
      ]
    },
    {
      title:
        "DeepSeek : l’inquiétude des autorités de protection des données personnelles",
      description:
        "DeepSeek, une application d'intelligence artificielle chinoise, suscite des préoccupations chez les autorités de protection des données personnelles en raison de ses pratiques de collecte et d'utilisation des données.",
      date: "30 janvier 2025",
      content: [
        "<h3>Introduction</h3><p>DeepSeek, une application d'intelligence artificielle développée par une start-up chinoise, a récemment gagné en popularité, surpassant même ChatGPT en termes de téléchargements sur l'App Store. Cependant, cette ascension rapide a attiré l'attention des autorités de protection des données personnelles, inquiètes des pratiques de l'application en matière de collecte et d'utilisation des données des utilisateurs.</p>",
        "<h3>Pratiques de collecte de données</h3><p>Selon les informations disponibles, DeepSeek collecte une quantité importante de données personnelles auprès de ses utilisateurs, y compris des informations sensibles telles que les contacts, la localisation et les historiques de navigation. Ces données sont utilisées pour améliorer les performances de l'IA, mais leur collecte massive sans consentement explicite soulève des questions sur le respect de la vie privée.</p>",
        "<h3>Réactions des autorités</h3><p>Les autorités de protection des données de plusieurs pays ont exprimé leurs préoccupations concernant DeepSeek. En Australie, le gouvernement a annoncé l'interdiction de l'application sur tous les systèmes et appareils gouvernementaux en raison de préoccupations en matière de sécurité nationale. De même, d'autres pays, dont l'Italie et Taïwan, ont pris des mesures similaires pour interdire ou restreindre l'utilisation de DeepSeek.</p>",
        "<h3>Réponse de DeepSeek</h3><p>En réponse aux critiques, DeepSeek a déclaré qu'elle subissait une cyberattaque malveillante à grande échelle, ce qui l'a obligée à limiter temporairement les inscriptions des utilisateurs. La société affirme travailler à renforcer ses mesures de sécurité et à collaborer avec les autorités pour résoudre les problèmes soulevés.</p>",
        "<h3>Conclusion</h3><p>La montée en puissance de DeepSeek met en lumière les défis croissants liés à la protection des données personnelles à l'ère de l'intelligence artificielle. Alors que ces technologies offrent des avantages significatifs, il est essentiel de garantir que leur développement et leur déploiement respectent les normes de confidentialité et de sécurité des données.</p>",
      ],
      images: [
        {
          url: link + "cyber-deepseek.avif",
          caption:
            "DeepSeek, l'application d'intelligence artificielle chinoise, suscite des inquiétudes en matière de protection des données.",
        },
      ],
      sources: [
        {
          title: "Le Monde",
          url: "https://www.lemonde.fr/pixels/article/2025/01/30/deepseek-face-au-concurrent-chinois-de-chatgpt-l-inquietude-des-autorites-de-protection-des-donnees-personnelles_6523968_4408996.html",
        },
        {
          title: "news.com.au",
          url: "https://www.news.com.au/technology/innovation/australia-to-ban-controversial-chinese-ai-company-deepseek-from-all-of-its-government-systems/news-story/cac4f0763016408eb406a48eb8dbe6c0",
        },
        {
          title: "Impact.sn",
          url: "https://www.impact.sn/Intelligence-artificielle-La-chinoise-DeepSeek-detrone-ChatGPT-se-dit-victime-d-une-cyberattaque-a-grande-echelle_a50909.html",
        },
      ],
    },
    {
      title: "Game Freak : Cyberattaque compromettant des données sensibles",
      description:
        "Le studio Game Freak a subi une cyberattaque, compromettant des informations sur ses employés et des projets futurs, en parallèle du lancement du nouveau jeu Pokémon.",
      date: "14 octobre 2024",
      content: [
        "<h3>Introduction</h3><p>Game Freak, le célèbre studio derrière la franchise Pokémon, a récemment annoncé avoir été victime d'une cyberattaque. Cette intrusion a conduit à la compromission de données sensibles, y compris des informations sur les employés et des projets de développement en cours.</p>",

        "<h3>Détails de l'incident</h3><p>Cette violation de données survient alors que Game Freak se prépare au lancement de son nouveau jeu Pokémon sur la Nintendo Switch 2. Les détails spécifiques de la faille de sécurité n'ont pas été entièrement révélés, mais l'impact pourrait toucher jusqu'à 31 millions d'utilisateurs.</p>",

        "<h3>Conséquences pour les utilisateurs</h3><p>Les utilisateurs sont conseillés de surveiller de près leurs informations personnelles, car les données compromises pourraient être utilisées de manière malveillante. Game Freak a commencé à notifier les utilisateurs concernés et à renforcer ses mesures de sécurité pour éviter de futures violations.</p>",

        "<h3>Conclusion</h3><p>Alors que la franchise Pokémon continue de croître, cette cyberattaque souligne l'importance de la sécurité des données dans l'industrie du jeu vidéo. Les fans sont impatients de découvrir le nouveau jeu, mais la situation actuelle rappelle que la sécurité des informations personnelles doit rester une priorité pour toutes les entreprises technologiques.</p>",
      ],
      images: [
        {
          url: link + "pokemon.png",
          caption:
            "Game Freak est connu pour ses franchises emblématiques comme Pokémon.",
        },
      ],
      sources: [
        {
          title: "Metro",
          url: "https://metro.co.uk/2024/10/14/pokemon-gen-10-game-nintendo-switch-2-revealed-game-freak-hack-21790454/",
        },
      ],
    },
    {
      title:
        "Violation de données à l'Internet Archive : 31 millions d'utilisateurs impactés",
      description:
        "L'Internet Archive a été victime d'une cyberattaque, entraînant la compromission des données personnelles de 31 millions d'utilisateurs.",
      date: "15 octobre 2024",
      content: [
        "<h3>Introduction</h3><p>L'Internet Archive, une organisation à but non lucratif connue pour son immense collection d'archives numériques et sa célèbre Wayback Machine, a récemment révélé avoir subi une importante violation de données. Cette attaque aurait compromis les informations personnelles de 31 millions d'utilisateurs inscrits à ses services.</p>",

        "<h3>Détails de l'attaque</h3><p>L'attaque a été rendue publique le <strong>13 octobre 2024</strong>, lorsqu'il a été découvert que les serveurs de l'Internet Archive avaient été infiltrés par des cybercriminels. L'accès non autorisé aurait permis à ces derniers de dérober les données d'utilisateur telles que les adresses e-mail, les noms d'utilisateur, ainsi que des mots de passe cryptés.</p><p>Bien que les informations financières ne semblent pas avoir été compromises, l'ampleur de l'attaque est alarmante en raison du nombre d'utilisateurs affectés et du potentiel d'usurpation d'identité.</p>",

        "<h3>Nature des données compromises</h3><p>Les données volées comprennent des informations personnelles telles que :</p><ul>",
        "<li>Adresses e-mail</li>",
        "<li>Noms d'utilisateur</li>",
        "<li>Mots de passe cryptés (hashés)</li>",
        "<li>Historique d'activité des utilisateurs sur les sites affiliés à l'Internet Archive.</li></ul>",

        "<p>La méthode de cryptage utilisée pour les mots de passe n'a pas été précisée, mais les experts conseillent aux utilisateurs concernés de changer leurs mots de passe immédiatement, en particulier s'ils utilisent les mêmes informations de connexion sur d'autres services en ligne.</p>",

        "<h3>Réactions et mesures prises</h3><p>L'Internet Archive a rapidement pris des mesures pour contenir l'incident en contactant les utilisateurs touchés et en renforçant ses systèmes de sécurité. Ils ont également mis à jour leur politique de sécurité pour prévenir de futures attaques. Toutefois, les utilisateurs sont invités à surveiller de près leurs comptes pour détecter toute activité suspecte et à utiliser l'authentification à deux facteurs lorsque cela est possible.</p>",

        "<h3>Conseils pour les utilisateurs</h3><p>Pour les utilisateurs affectés, il est recommandé de :</p><ul>",
        "<li>Changer immédiatement leurs mots de passe sur l'Internet Archive et sur tous les autres services utilisant le même mot de passe.</li>",
        "<li>Activer l'authentification à deux facteurs (2FA) si disponible.</li>",
        "<li>Être vigilants face à des tentatives d'hameçonnage ou à des communications suspectes.</li></ul>",

        "<p>Il est également conseillé de surveiller leurs comptes bancaires et leurs e-mails pour prévenir tout acte frauduleux pouvant résulter de cette violation.</p>",

        "<h3>Conclusion</h3><p>Cette attaque souligne une fois de plus l'importance de la cybersécurité, même pour des organisations aussi respectées que l'Internet Archive. Les utilisateurs doivent prendre toutes les mesures nécessaires pour protéger leurs informations personnelles et renforcer leur sécurité en ligne.</p>",
      ],
      images: [
        {
          url: link + "webarchive.png",
          caption:
            "L'Internet Archive a été victime d'une cyberattaque compromettant les données de millions d'utilisateurs.",
        },
      ],
      sources: [
        {
          title: "BleepingComputer",
          url: "https://www.bleepingcomputer.com/news/security/internet-archive-hacked-data-breach-impacts-31-million-users/",
        },
      ],
    },
    {
      title:
        "Une faille critique dans Firefox permet aux attaquants de contrôler à distance votre PC",
      description:
        "Une vulnérabilité grave a été découverte dans Firefox, permettant aux pirates de prendre le contrôle à distance d'un ordinateur ciblé via une exécution de code malveillant.",
      date: "15 octobre 2024",
      content: [
        "<h3>Introduction</h3><p>Un nouveau problème de sécurité a été signalé dans le navigateur Firefox. Cette faille critique, référencée sous l'identifiant <strong>GHSA-hm3j-qgpw-pj98</strong>, permet à un attaquant distant de prendre le contrôle de l'ordinateur d'une victime en exploitant une exécution de code à distance. La vulnérabilité affecte certaines versions de Firefox et pourrait exposer des millions d'utilisateurs à des risques considérables.</p>",

        "<h3>Origine de la vulnérabilité</h3><p>La faille provient d'une mauvaise gestion de la mémoire dans certaines versions du moteur de rendu de Firefox. Cela permet à un pirate de créer des sites web malveillants conçus pour exploiter cette vulnérabilité. Une fois que l'utilisateur visite le site, l'attaquant peut exécuter du code sur la machine cible, lui permettant de prendre le contrôle complet du système, de voler des données ou d’installer des logiciels malveillants.</p>",

        "<h3>Impact et exploitation</h3><p>Cette vulnérabilité est particulièrement dangereuse car elle ne nécessite aucune interaction complexe de la part de l'utilisateur, au-delà de la simple visite d'un site compromis. L'attaquant peut alors installer des logiciels, lire ou modifier des fichiers, voire prendre le contrôle à distance du système. La faille affecte non seulement les utilisateurs de Firefox, mais potentiellement ceux des navigateurs dérivés du même moteur, comme certains dérivés de Firefox sur mobile ou d'autres applications basées sur le moteur Gecko.</p>",

        "<h3>Mesures de protection</h3><p>Mozilla a rapidement réagi en publiant une mise à jour de sécurité pour corriger cette faille. Il est fortement recommandé à tous les utilisateurs de Firefox de vérifier la version de leur navigateur et d'effectuer la mise à jour dès que possible. Pour se protéger contre cette vulnérabilité, il est également conseillé d'éviter de cliquer sur des liens suspects ou de visiter des sites non fiables.</p>",

        "<h3>Conclusion</h3><p>Cette nouvelle faille de sécurité souligne l'importance de maintenir à jour les logiciels utilisés au quotidien. Les vulnérabilités critiques comme celle-ci peuvent avoir des répercussions graves sur la sécurité des utilisateurs, notamment en facilitant les attaques à distance. La vigilance reste donc de mise, et il est essentiel de suivre les recommandations des éditeurs pour se prémunir contre ces menaces.</p>",
      ],
      images: [
        {
          url: link + "firefox-vulnerability.png",
          caption:
            "Une faille critique découverte dans Firefox permet une prise de contrôle à distance.",
        },
      ],
      sources: [
        {
          title: "GitHub Security Advisory",
          url: "https://github.com/advisories/GHSA-hm3j-qgpw-pj98",
        },
      ],
    },
    {
      title:
        "Nvidia corrige une vulnérabilité critique dans son Container Toolkit",
      description:
        "Nvidia a récemment corrigé une vulnérabilité critique dans son outil de conteneurisation, Container Toolkit.",
      date: "30 septembre 2024",
      content: [
        "<h3>Détails de la faille critique</h3>",
        "<p>Autrefois connu sous le nom de Nvidia Docker, le service Nvidia Container Toolkit (NCT) contenait une vulnérabilité majeure, référencée sous le CVE-2024-0132 avec un score de gravité de 9 sur 10 selon l'échelle CVSS. Cette vulnérabilité permettait à un utilisateur ou une application malveillante de s'évader de leur conteneur isolé et de prendre le contrôle total de l’hôte sous-jacent.</p>",
        "<p>Nvidia a décrit cette faille comme une vulnérabilité TOCTOU (Time-of-check Time-of-Use) qui survient lorsque le programme vérifie une condition puis en utilise les résultats sans s'assurer que la condition n'a pas changé entre temps. Cette vulnérabilité affecte les versions de Nvidia Container Toolkit jusqu'à la version 1.16.1 incluse. Les détails techniques de l'exploitation n'ont pas été divulgués pour des raisons de sécurité.</p>",
        "<h3>Exploitation potentielle et impact</h3>",
        "<p>Les chercheurs de Wiz Research, qui ont découvert la faille, expliquent qu'un attaquant contrôlant une image de conteneur malveillante peut exploiter cette faille pour échapper au conteneur et obtenir un accès complet à l’hôte. Ce type d'attaque peut se produire directement par le biais de services utilisant des ressources GPU partagées ou via des chaînes d'approvisionnement compromises.</p>",
        "<h3>Correctifs et recommandations</h3>",
        "<p>Nvidia a publié un correctif pour cette vulnérabilité. Tous les utilisateurs de Nvidia Container Toolkit sont invités à mettre à jour vers la version la plus récente.</p>",
      ],
      images: [
        {
          url: link + "faille-nvidia.png",
          caption: "Image de Wiz Research - vulnérabilité Nvidia",
        },
      ],
      sources: [
        {
          title: "Le Monde Informatique",
          url: "https://www.lemondeinformatique.fr/actualites/lire-docker-augmente-le-prix-de-ses-abonnements-pro-et-team-94719.html",
        },
      ],
    },
  ],

  DEV: [
    {
      "title": "LynxJS : Une nouvelle ère pour le développement multiplateforme",
      "description": "LynxJS, un framework open-source lancé par ByteDance, promet de révolutionner le développement d'applications multiplateformes en combinant la simplicité du JavaScript avec des performances natives grâce à un moteur Rust.",
      "date": "8 mars 2025",
      "content": [
        "<h3>Introduction</h3><p>Dévoilé en mars 2025 par ByteDance, LynxJS est un framework open-source qui permet aux développeurs de créer des applications pour mobile (iOS et Android) et le web à partir d’une seule base de code. Utilisant des technologies web comme JavaScript et CSS, il offre une alternative performante aux outils existants.</p>",
        "<h3>Un framework innovant</h3><p>LynxJS se distingue par son moteur de rendu natif écrit en Rust et son architecture double-thread, séparant la logique JavaScript du rendu UI. Cela garantit des performances fluides et des lancements rapides, même pour des applications complexes intégrées dans des écosystèmes comme TikTok.</p>",
        "<h3>Comment l’utiliser</h3><p>Pour démarrer, les développeurs peuvent utiliser l’outil CLI ‘create-rspeedy’ pour configurer un projet, puis tester leurs applications via l’app Lynx Explorer. Le framework prend en charge une syntaxe inspirée de React, rendant la transition facile pour les développeurs web.</p>",
        "<h3>Conclusion</h3><p>Avec sa licence Apache 2.0 et une documentation complète sur lynxjs.org, LynxJS s’impose comme une option prometteuse face à React Native ou Flutter. Bien que son écosystème soit encore jeune, son potentiel attire déjà l’attention des développeurs du monde entier.</p>"
      ],
      "images": [
        {
          "url": link + "/lynx.png",
          "caption": "Le logo de LynxJS, symbole d’un framework léger et puissant."
        }
      ],
      "sources": [
        {
          "title": "Medium - Priyadarshan Ghosh",
          "url": "https://priyadarshanghosh26.medium.com/introduction-to-lynxjs-a-lightweight-javascript-framework-c386eba73728"
        },
        {
          "title": "Site officiel de LynxJS",
          "url": "https://lynxjs.org/"
        }
      ]
    },
    {
      "title": "Le créateur de C++ appelle à sécuriser le langage",
      "description": "Bjarne Stroustrup, le créateur du langage C++, exhorte la communauté des développeurs à renforcer la sécurité de ce langage, notamment en accélérant l'adoption de pratiques de mémoire sécurisée.",
      "date": "28 février 2025",
      "content": [
        "<h3>Introduction</h3><p>Dans une déclaration publiée le 28 février 2025, Bjarne Stroustrup, le père du C++, a lancé un appel urgent à la communauté des développeurs pour sécuriser ce langage largement utilisé. Alors que C++ reste un pilier dans les systèmes critiques, ses failles de gestion de la mémoire continuent de poser des risques.</p>",
        "<h3>Un constat alarmant</h3><p>Stroustrup a souligné que les erreurs de mémoire, comme les débordements de tampon, sont encore trop fréquentes dans les projets C++. Il insiste sur l’adoption de pratiques modernes, telles que les 'smart pointers' et les outils d’analyse statique, pour réduire les vulnérabilités exploitables par des attaquants.</p>",
        "<h3>Propositions concrètes</h3><p>Il recommande une mise à jour des standards C++ (notamment C++23 et au-delà) pour intégrer des garde-fous par défaut et encourager les développeurs à abandonner les pratiques obsolètes comme les pointeurs bruts. Il appelle également à une meilleure formation des programmeurs sur la sécurité.</p>",
        "<h3>Conclusion</h3><p>Cet appel intervient dans un contexte où la cybersécurité devient une priorité mondiale. Si la communauté suit les conseils de Stroustrup, C++ pourrait rester pertinent tout en devenant plus sûr pour les applications futures.</p>"
      ],
      "images": [
        {
          "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/cpp-security.jpg",
          "caption": "Bjarne Stroustrup plaide pour un C++ plus sécurisé."
        }
      ],
      "sources": [
        {
          "title": "Programmez!",
          "url": "https://www.programmez.com/"
        }
      ]
    },
    {
      "title": "Google enrichit AlloyDB, son SGBD compatible PostgreSQL",
      "description": "Google continue d'améliorer AlloyDB, son système de gestion de bases de données compatible avec PostgreSQL, en y ajoutant de nouvelles fonctionnalités pour optimiser les performances et la sécurité.",
      "date": "26 février 2025",
      "content": [
        "<h3>Introduction</h3><p>Google a annoncé le 26 février 2025 une mise à jour majeure de AlloyDB, son système de gestion de bases de données (SGBD) cloud compatible avec PostgreSQL. Cette évolution vise à répondre aux besoins croissants des entreprises en matière de performance et de protection des données.</p>",
        "<h3>Nouvelles fonctionnalités</h3><p>Parmi les ajouts, AlloyDB intègre désormais une optimisation automatique des requêtes grâce à l’IA, réduisant les temps d’exécution jusqu’à 20 %. Côté sécurité, un chiffrement renforcé et une gestion fine des accès basés sur les rôles ont été ajoutés pour répondre aux normes de conformité comme le RGPD.</p>",
        "<h3>Impact pour les développeurs</h3><p>Ces améliorations facilitent la migration depuis PostgreSQL classique vers AlloyDB, tout en offrant des outils pour surveiller et déboguer les performances en temps réel. Les entreprises utilisant des charges de travail intensives, comme l’analyse de données, en bénéficieront particulièrement.</p>",
        "<h3>Conclusion</h3><p>Avec cette mise à jour, Google consolide AlloyDB comme une alternative compétitive aux SGBD traditionnels, combinant la flexibilité de PostgreSQL avec la puissance du cloud. Une annonce qui devrait séduire les développeurs et les DSI.</p>"
      ],
      "images": [
        {
          "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/alloydb-update.jpg",
          "caption": "AlloyDB de Google s’enrichit pour plus de performance et sécurité."
        }
      ],
      "sources": [
        {
          "title": "Programmez!",
          "url": "https://www.programmez.com/"
        }
      ]
    },
    {
      "title": "Google lance une version gratuite de son assistant de code par IA : comment y accéder",
      "description": "Google a récemment dévoilé une version gratuite de son assistant de codage alimenté par l'intelligence artificielle, visant à faciliter le travail des développeurs en automatisant certaines tâches de programmation.",
      "date": "26 février 2025",
      "content": [
        "<h3>Introduction</h3><p>Le 26 février 2025, Google a lancé une version gratuite de son assistant de codage basé sur l’IA, une initiative visant à démocratiser l’accès à des outils de développement avancés. Cet assistant promet d’accélérer les tâches répétitives et d’améliorer la productivité des programmeurs.</p>",
        "<h3>Fonctionnalités clés</h3><p>L’assistant peut générer du code à partir de descriptions en langage naturel, suggérer des corrections en temps réel et expliquer des blocs de code complexes. Compatible avec des langages comme Python, JavaScript et Java, il s’intègre directement dans des IDE populaires comme VS Code via une extension gratuite.</p>",
        "<h3>Comment y accéder</h3><p>Pour utiliser cet outil, il suffit de se rendre sur le site Google Cloud, de créer un compte gratuit et de télécharger l’extension ou d’accéder à la version web. Une limite de 100 000 tokens par mois est imposée, suffisante pour la plupart des usages personnels ou de petits projets.</p>",
        "<h3>Conclusion</h3><p>En rendant cet assistant gratuit, Google concurrence des outils comme GitHub Copilot tout en attirant les développeurs vers son écosystème cloud. Une aubaine pour les freelances et les étudiants cherchant à optimiser leur workflow.</p>"
      ],
      "images": [
        {
          "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/google-ai-coding.jpg",
          "caption": "L’assistant de codage IA gratuit de Google est désormais accessible."
        }
      ],
      "sources": [
        {
          "title": "Blog du Modérateur",
          "url": "https://www.blogdumoderateur.com/dossier/developpement/"
        }
      ]
    },
    {
      "title": "Auto-entrepreneurs : les nouvelles réglementations Urssaf et TVA",
      "description": "Cet article détaille les nouvelles règles de l'Urssaf et de la TVA qui impactent les auto-entrepreneurs depuis 2024, notamment les augmentations de cotisations et les seuils de franchise TVA révisés, tout en proposant des outils pour simplifier la gestion des freelances.",
      "date": "19 novembre 2024",
      "content": [
        "<h3>Introduction</h3><p>Depuis le 1er janvier 2024, les auto-entrepreneurs en France doivent composer avec de nouvelles réglementations Urssaf et TVA, introduites pour adapter le statut aux réalités économiques. Annoncées le 19 novembre 2024, ces mesures affectent particulièrement les freelances tech.</p>",
        "<h3>Changements principaux</h3><p>Les cotisations sociales ont augmenté de 1,5 % en moyenne pour financer la protection sociale. Par ailleurs, les seuils de franchise de TVA ont été ajustés : 39 100 € pour les prestations de services (contre 36 500 € auparavant), obligeant plus d’auto-entrepreneurs à facturer la TVA. Une simplification administrative est toutefois proposée via un portail Urssaf modernisé.</p>",
        "<h3>Outils pour s’adapter</h3><p>Des plateformes comme Free-Work MyBusiness offrent des solutions pour gérer ces nouvelles obligations : calcul automatique des cotisations, génération de factures avec TVA et suivi des seuils en temps réel. Ces outils visent à réduire la charge administrative des freelances.</p>",
        "<h3>Conclusion</h3><p>Ces évolutions reflètent une volonté de structurer le statut d’auto-entrepreneur, mais elles demandent une adaptation rapide. Les outils numériques seront essentiels pour les freelances souhaitant rester conformes tout en se concentrant sur leur cœur de métier.</p>"
      ],
      "images": [
        {
          "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/urssaf-freelance.jpg",
          "caption": "Nouvelles règles Urssaf et TVA pour les auto-entrepreneurs en 2024."
        }
      ],
      "sources": [
        {
          "title": "Free-Work",
          "url": "https://www.free-work.com/fr/tech-it/blog/actualites-informatiques"
        }
      ]
    },
    {
      "title": "Projet Digits de Nvidia : un ordinateur de bureau sous Linux dédié aux développeurs",
      "description": "Nvidia dévoile Digits, un ordinateur de bureau alimenté par Linux, conçu spécifiquement pour les développeurs avec une puissance de calcul optimisée et une flexibilité accrue.",
      "date": "04 Février 2025",
      "content": [
        "<h3>Introduction</h3><p>Nvidia, connu pour ses avancées dans les GPU et l'intelligence artificielle, a récemment présenté son projet Digits : une station de travail sous Linux pensée pour les développeurs. Cet ordinateur de bureau, qui se distingue par sa conception ouverte et sa puissance brute, vise à répondre aux besoins des professionnels cherchant un environnement de développement robuste et personnalisable.</p>",
        "<h3>Une machine taillée pour les développeurs</h3><p>Le Digits se présente comme un ordinateur de bureau compact mais puissant, intégrant un processeur ARM haute performance couplé à un GPU Nvidia de dernière génération. Avec une mémoire RAM extensible jusqu'à 64 Go et un stockage SSD NVMe de 1 To par défaut, cette machine est conçue pour gérer des charges de travail intensives, qu'il s'agisse de compilation de code, de tests d'applications ou de simulations complexes.</p>",
        "<h3>Linux au cœur du système</h3><p>Contrairement aux systèmes propriétaires traditionnels, le Digits repose sur une distribution Linux optimisée par Nvidia. Cette décision offre aux développeurs une liberté totale pour personnaliser leur environnement de travail. Que ce soit pour installer des outils spécifiques, configurer des scripts ou exploiter des bibliothèques open source, cet ordinateur promet une flexibilité inégalée. Nvidia fournit également une suite d’outils préinstallés, compatibles avec les frameworks de développement les plus populaires.</p>",
        "<h3>Design et connectivité</h3><p>Le design du Digits est à la fois fonctionnel et épuré. Son boîtier compact permet une intégration facile sur un bureau, tandis que ses ports multiples (USB-C, HDMI 2.1, Ethernet 10 GbE) assurent une connectivité étendue pour les périphériques modernes. Un système de refroidissement avancé garantit des performances stables même lors d’une utilisation prolongée à pleine capacité.</p>",
        "<h3>Positionnement sur le marché</h3><p>Avec un prix de départ annoncé autour de 1 500 $, le Digits se positionne comme une alternative compétitive aux stations de travail haut de gamme. Nvidia cible clairement les développeurs indépendants, les petites équipes et les entreprises cherchant une solution performante sans les coûts exorbitants des configurations sur mesure.</p>",
        "<h3>Conclusion</h3><p>Le projet Digits de Nvidia redéfinit l’ordinateur de bureau pour développeurs en combinant la puissance brute d’un matériel de pointe avec la liberté offerte par Linux. Cette initiative pourrait bien séduire une communauté en quête de performance et d’adaptabilité, tout en renforçant la présence de Nvidia dans le domaine des outils pour professionnels.</p>"
      ],
      "images": [
        {
          "url": "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/digits-nvidia.webp",
          "caption": "Le Nvidia Digits, un ordinateur de bureau sous Linux pour les développeurs."
        }
      ],
      "sources": [
        {
          "title": "ZDNet France",
          "url": "https://www.zdnet.fr/actualites/projet-digits-de-nvidia-un-ordinateur-de-bureau-alimente-par-linux-pour-les-developpeurs-dia-404106.htm"
        }
      ]
    },
    {
      title:
        "WordPress intègre son nouveau design system dans Figma : comment y accéder",
      description:
        "WordPress lance une bibliothèque de composants dans Figma, permettant aux concepteurs de créer des designs plus cohérents et efficaces dans l’écosystème du CMS.",
      date: "13 novembre 2024",
      content: [
        "<h3>Introduction</h3>",
        "<p>L’équipe de design de WordPress a annoncé le 7 novembre 2024 la sortie d’une bibliothèque de design system sur Figma. Cet outil vise à offrir aux concepteurs travaillant dans l’écosystème WordPress des composants prêts à l’emploi pour faciliter la création de maquettes et respecter les normes du CMS.</p>",
        "<h3>Qu’est-ce que la bibliothèque de design system WordPress pour Figma ?</h3>",
        "<p>La bibliothèque de design system WordPress est un ensemble de composants visuels et de styles intégrés dans Figma, le logiciel de référence pour le prototypage et la collaboration en ligne. Elle inclut :</p>",
        "<ul>",
        "<li><strong>Bibliothèque de composants étendue</strong> : boutons, formulaires, icônes et menus organisés pour une réutilisation efficace.</li>",
        "<li><strong>Tokens de style</strong> : gestion des éléments comme la typographie, la couleur ou les rayons pour garantir l’uniformité.</li>",
        "<li><strong>Stickers complexes</strong> : composants avancés comme l’éditeur de blocs ou l’éditeur de site.</li>",
        "</ul>",
        "<p>Selon James Koster, designer chez Automattic, cette ressource vise à simplifier le travail des designers en centralisant les éléments nécessaires, leur permettant ainsi de se concentrer sur l’aspect créatif.</p>",
        "<h3>Pourquoi une bibliothèque WordPress sur Figma ?</h3>",
        "<p>Figma, avec ses fonctionnalités de prototypage et de collaboration en ligne, s’est imposé comme un outil incontournable pour les designers. Cette bibliothèque WordPress permet :</p>",
        "<ul>",
        "<li><strong>Optimisation des flux de travail</strong> : les composants visuels sont centralisés, prêts à être utilisés et personnalisés.</li>",
        "<li><strong>Cohérence avec le code</strong> : les éléments visuels correspondent aux composants disponibles dans le code WordPress, réduisant les écarts entre conception et développement.</li>",
        "<li><strong>Facilité de personnalisation</strong> : grâce aux propriétés et variantes des composants dans Figma, l’adaptation des designs devient intuitive.</li>",
        "</ul>",
        "<p>Cette intégration simplifie ainsi la création d’interfaces respectant les normes esthétiques et fonctionnelles du CMS.</p>",
        "<h3>Comment accéder à la bibliothèque WordPress dans Figma ?</h3>",
        "<p>La bibliothèque est accessible de plusieurs manières :</p>",
        "<ul>",
        "<li>Les membres de l’équipe de design de WordPress y ont un accès automatique dans leurs fichiers Figma au sein de l’organisation WordPress.org.</li>",
        "<li>Les autres concepteurs peuvent dupliquer le fichier depuis la page de la communauté WordPress sur Figma et le publier comme bibliothèque.</li>",
        "</ul>",
        "<p>La bibliothèque sera mise à jour régulièrement avec les nouvelles versions de Gutenberg et des versions majeures de WordPress (à partir de la version 6.8).</p>",
      ],
      sources: [
        {
          title: "Automattic",
          url: "https://automattic.com/",
        },
        {
          title: "WordPress Design Team Blog",
          url: "https://make.wordpress.org/design/",
        },
        {
          title: "Figma Community - WordPress",
          url: "https://www.figma.com/community",
        },
      ],
      images: [
        {
          url: link + "wordpress.jpg",
          caption:
            "L’interface du nouveau système de design WordPress dans Figma, regroupant styles et composants. © James Koster/Automattic",
        },
        {
          url: link + "figma-wordpress.jpg",
          caption:
            "L’éditeur de blocs intégré au design système WordPress dans Figma. © James Koster/Automattic",
        },
      ],
    },
    {
      title:
        "Plus de 75 % des développeurs s'appuient sur l'IA : pourquoi c'est un problème",
      description:
        "Une étude de Google Cloud révèle que si l'adoption de l'IA augmente la productivité et la qualité du code, elle peut également entraîner une instabilité accrue dans la livraison des logiciels.",
      date: "28 octobre 2024",
      content: [
        "<h3>Introduction</h3><p>Une étude récente du rapport <em>State of DevOps 2024</em> de Google Cloud met en lumière une tendance majeure dans l'industrie technologique : plus de 75 % des développeurs et des professionnels IT s’appuient désormais sur l’intelligence artificielle (IA) dans leurs tâches quotidiennes. Cependant, cette adoption massive n’est pas sans inconvénients.</p>",
        "<h3>Un usage généralisé de l’IA</h3><p>Selon l’enquête menée par l’équipe DevOps Research and Assessment (DORA) de Google Cloud auprès de 3 000 professionnels à travers le monde, 76 % des répondants utilisent des outils ou agents basés sur l’IA pour :</p><ul>",
        "<li>Écrire du code</li>",
        "<li>Synthétiser des informations</li>",
        "<li>Expliquer du code</li>",
        "</ul><p>De plus, 81 % des entreprises représentées dans l’étude ont réorienté leurs ressources technologiques vers le développement et l’intégration de l’IA.</p>",
        "<h3>Avantages mesurables</h3><p>Les résultats montrent que l’adoption de l’IA est corrélée à plusieurs améliorations dans les processus de développement :</p><ul>",
        "<li>Augmentation de la qualité de la documentation (+7,5 %)</li>",
        "<li>Amélioration de la qualité du code (+3,4 %)</li>",
        "<li>Accélération des révisions de code (+3,1 %)</li>",
        "<li>Réduction de la complexité du code (-1,8 %)</li>",
        "</ul><p>Au moins 67 % des répondants affirment que l’IA les aide à produire un meilleur code, augmentant ainsi leur productivité et leur satisfaction au travail.</p>",
        "<h3>Les limites de l’intégration de l’IA</h3><p>Malgré ces avantages, les chercheurs de Google Cloud soulignent que l’intégration de l’IA peut avoir des impacts négatifs sur les performances de livraison des logiciels. Par exemple :</p><ul>",
        "<li>Diminution de la stabilité de la livraison (-7,2 %)</li>",
        "<li>Réduction du débit de livraison estimée à -1,5 %</li>",
        "</ul><p>Cette instabilité s’explique en partie par le faible niveau de confiance des développeurs dans le code généré par l’IA. En effet, 39 % des répondants déclarent avoir 'peu ou pas confiance' dans les résultats fournis par ces outils.</p>",
        "<h3>Recommandations pour une adoption réfléchie</h3><p>Les chercheurs appellent à une gestion prudente de l’intégration de l’IA dans les workflows de développement. Ils recommandent :</p><ul>",
        "<li>Une évaluation approfondie des rôles confiés à l’IA</li>",
        "<li>Un suivi des impacts sur la stabilité et les performances des livraisons</li>",
        "</ul><p>L’amélioration du processus de développement ne garantit pas automatiquement une meilleure livraison des logiciels', conclut l’étude. Bien que l’IA apporte des bénéfices importants, elle n’est pas une solution universelle.</p>",
      ],
      sources: [
        {
          title: "ZDNet",
          url: "https://www.zdnet.com/",
        },
        {
          title: "Google Cloud State of DevOps Report 2024",
          url: "https://cloud.google.com/state-of-devops/",
        },
      ],
      images: [
        {
          url: link + "IArobot-750x410.jpg",
          caption: "IA robot",
        },
      ],
    },
    {
      title: "Top 20 des langages de programmation en septembre 2024",
      description:
        "Le classement TIOBE de septembre 2024 dévoile des changements intrigants parmi les langages de programmation. Python continue d’imposer sa domination, mais d’autres langages montent en flèche.",
      date: "1 septembre 2024",
      content: [
        "<h3>Introduction</h3><p>Le classement TIOBE de septembre 2024 dévoile des changements intrigants parmi les langages de programmation. Si Python continue d’imposer sa domination, certains langages montent en flèche tandis que d’autres subissent un recul significatif.</p>",
        '<h3>Classement TIOBE</h3><p>Voici le classement des 20 principaux langages de programmation :</p><p><ul style="margin-left: 40px;"><li>Python : 20.17%</li><li>C++ : 10.75%</li><li>Java : 9.45%</li><li>C : 8.89%</li><li>C# : 6.08%</li><li>JavaScript : 3.92%</li><li>Visual Basic : 2.70%</li><li>Go : 2.35%</li><li>SQL : 1.94%</li><li>Fortran : 1.78%</li><li>Delphi/Object Pascal : 1.77%</li><li>MATLAB : 1.47%</li><li>PHP : 1.46%</li><li>Rust : 1.32%</li><li>R : 1.20%</li><li>Ruby : 1.13%</li><li>Scratch : 1.11%</li><li>Kotlin : 1.10%</li><li>COBOL : 1.09%</li><li>Swift : 1.08%</li></ul></p>',
        "<h3>Analyse des langages</h3><p>Python reste en tête, suivi de C++ et Java. Swift perd du terrain tandis que Scratch regagne des places dans le classement.</p>",
        "<h3>Conclusion</h3><p>Le classement TIOBE met en lumière des changements marquants dans l'univers des langages de programmation. Utilisez ces informations pour adapter vos choix technologiques.</p>",
      ],
      images: [
        {
          url: link + "unstonksC.png",
          caption: "Top langages de programmation",
        },
        {
          url: link + "Programmation2024TopLang.png",
          caption: "Langages de programmation en tendance",
        },
      ],
      sources: [
        {
          title: "Codeur.com langages-programmation-septembre-2024",
          url: "https://www.codeur.com/blog/langages-programmation-septembre-2024/",
        },
      ],
    },
  ],
};
