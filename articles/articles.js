const link = "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/"

export default {

		"AI":
		[{
			"title":
			"Introducing Nomic Embed: A Truly Open Embedding Model",
			"author": "Nomic Team",
			"description": "Nomic Embed est un modèle d'embedding de texte open-source qui dépasse OpenAI Ada-002 sur les tâches à long et court contexte.",
			"date": "12 octobre 2024",
			"content": ["<h3>Qu'est-ce que Nomic Embed ?</h3><p>Nomic Embed est le premier modèle d'embedding de texte entièrement open source, avec des données d'entraînement accessibles et un code d'entraînement auditable. Il présente une longueur de contexte de 8192, surpassant OpenAI Ada-002 et text-embedding-3-small sur diverses tâches.</p>", "<h3>Caractéristiques principales</h3><ul><li><strong>Open Source :</strong> Modèle entièrement open source.</li><li><strong>Données ouvertes :</strong> Les données d'entraînement sont disponibles pour la vérification.</li><li><strong>Code d'entraînement accessible :</strong> Auditable et réutilisable.</li></ul>", "<h3>Performances exceptionnelles</h3><p>Avec une architecture basée sur BERT, Nomic Embed a été formé via un apprentissage contrastif sur plus de 235 millions de paires de textes. Sur le Massive Text Embedding Benchmark (MTEB), il surpasse Ada-002 et d'autres modèles tout en maintenant une longueur de contexte plus élevée.</p>", "<h3>Utilisation et accès</h3><p>Nomic Embed est accessible via l'API Nomic Atlas avec 1 million de tokens gratuits pour les charges de travail en production, garantissant la sécurité et la conformité pour les entreprises.</p>", "<h3>Évaluation et amélioration</h3><p>Pour évaluer les différences entre les modèles, nous avons comparé les espaces d'embedding de Nomic Embed et OpenAI Ada sur un échantillon de 250 000 articles de Wikipedia, mettant en lumière des différences structurelles dans leur traitement des articles de désambiguïsation.</p>", "<h3>Accès aux données</h3><p>Pour accéder aux données complètes, créez un compte Nomic Atlas et suivez les instructions fournies dans le dépôt de code.</p>"],
			"images": [{
				"url": link + "nomic.png",
				"caption": "Illustration de Nomic Embed"
			},
			{
				"url": link + "nomic2.png",
				"caption": "Screenshot de l'explorer Nomic Atlas"
			}],
			"sources": [{
				"title": "Nomic",
				"url": "https://nomic.ai"
			}]
		},
		{
			"title": "Llama 3.2 : Meta met à nouveau les bouchées doubles en matière d’intelligence artificielle",
			"description": "Meta a dévoilé la version Llama 3.2 lors de Meta Connect 2024. Elle offre des capacités multimodales avec traitement du texte, des images et des interactions vocales.",
			date: "26 septembre 2024",
			"content": ["<h3>Introduction</h3><p>Meta a dévoilé la dernière version de son IA open-source, <strong>Llama 3.2</strong>, lors de Meta Connect 2024. Cette version offre des capacités multimodales, avec la possibilité de traiter à la fois du texte et des images, et d'interagir vocalement en utilisant des voix de célébrités.</p>",

			"<h3>Fonctionnalités principales</h3><ul>", "<li><strong>Multimodalité</strong> : Llama peut traiter simultanément du texte et des images, facilitant des tâches comme l'analyse de photos ou la génération de légendes.</li>", "<li><strong>Reconnaissance vocale</strong> : Llama intègre un module de reconnaissance vocale, permettant des interactions naturelles et la synthèse vocale avec des voix de célébrités.</li>", "<li><strong>AI Studio</strong> : Permet la création d'avatars virtuels pour des interactions en vidéo, idéal pour des applications comme Instagram et Messenger.</li>", "</ul>",

			"<h3>Modèles SLM : Compacts et performants</h3><p>Les modèles <strong>SLM (Small Language Models)</strong>, comprenant les versions 1B et 3B, sont conçus pour offrir des performances élevées sur des appareils légers, tels que les smartphones et dispositifs embarqués. Ces modèles utilisent des techniques avancées comme <strong>l’élagage (pruning)</strong> et la <strong>distillation</strong> pour optimiser les performances tout en réduisant la taille et la consommation de ressources.</p><p>Le but principal des modèles SLM est de permettre une utilisation locale et efficace sur des appareils peu puissants. Ils sont idéaux pour des tâches comme le <strong>suivi d’instructions</strong>, la <strong>synthèse</strong> et la <strong>réécriture</strong>, tout en offrant une faible latence. Leur compatibilité avec les architectures <strong>Arm</strong>, notamment les processeurs <strong>Qualcomm</strong> et <strong>MediaTek</strong>, en fait une solution flexible pour les applications mobiles.</p><p>Les versions SLM sont également <strong>facilement personnalisables</strong> grâce à des outils comme <strong>TorchTune</strong>, ce qui permet aux développeurs d'adapter ces modèles à des besoins spécifiques sans avoir besoin d’infrastructures lourdes.</p>",

			"<h3>Disponibilité</h3><p>Llama 3.2 sera disponible gratuitement sur <strong>WhatsApp</strong>, <strong>Instagram</strong>, <strong>Facebook</strong>, et <strong>Messenger</strong>. Toutefois, les versions multimodales ne seront pas accessibles en Europe tant que Meta n’aura pas résolu les questions de conformité avec les régulations européennes.</p>", ],
			"images": [{
				"url": link + "Benchmarks-llama3.2.png",
				"caption": "Llama devient multimodal et peut travailler avec des images"
			},
			{
				"url": link + "SchemaLlama.png",
				"caption": "Llama Schema"
			}],
			"sources": [{
				"title": "Frandroid",
				"url": "https://www.frandroid.com/marques/meta/2349720_llama-3-2-meta-met-a-nouveau-les-bouchees-doubles-en-matiere-dintelligence-artificielle"
			}]
		},

		],

		ROBOTIC: [{
			"title": "Robotaxi, Robovan, Optimus… : tout ce que Tesla a dévoilé pendant que vous dormiez",
			"description": "Tesla a révélé ses projets d'autonomie des véhicules, notamment le Cybercab, un Robotaxi sans volant ni pédale, et le Robovan, un bus autonome futuriste.",
			"date": "11 octobre 2024",
			"content": ["<h3>Introduction</h3><p>Le 10 octobre, lors de la conférence We, Robot, Tesla a présenté ses projets d'autonomie des véhicules. Cette conférence a été l'occasion pour Elon Musk de dévoiler plusieurs innovations marquantes, dont le Cybercab, un Robotaxi révolutionnaire, ainsi que le Robovan, un bus autonome destiné à transformer la mobilité urbaine. En plus de ces véhicules, Musk a également évoqué le robot Optimus, une avancée majeure dans le domaine de la robotique.</p>",

			"<h3>Le Cybercab : l'avenir de la mobilité autonome</h3><p>Elon Musk a lancé le show avec la présentation du <strong>Cybercab</strong>, une voiture sans volant ni pédale, conçue pour une conduite entièrement autonome. Avec seulement deux sièges, le Cybercab se destine principalement aux trajets individuels ou en duo. Ce modèle, qui devrait être proposé à un prix inférieur à 30 000 $, incarne la vision de Tesla pour un avenir où les trajets en voiture sont plus flexibles et moins contraignants. Le Cybercab pourra travailler pour son propriétaire lorsqu'il n'est pas utilisé, permettant ainsi de générer des revenus supplémentaires. Musk a confirmé que la date de sortie est prévue avant 2027, bien que des spéculations suggèrent que cela pourrait être plus tardif, en raison des régulations strictes en Europe.</p>",

			"<h3>Robovan : le bus autonome</h3><p>Tesla a également révélé le <strong>Robovan</strong>, un bus autonome au design futuriste, capable de transporter jusqu'à 20 personnes. Ce véhicule est destiné à répondre aux besoins croissants de mobilité dans les zones urbaines. Bien que peu de détails aient été dévoilés, il est clair que le Robovan pourrait révolutionner le transport public en offrant un service efficace et flexible. Ce type de véhicule pourrait également réduire le nombre de voitures en circulation, contribuant ainsi à diminuer la pollution et à améliorer la qualité de l'air dans les villes.</p>",

			"<h3>Optimus : le robot évolué</h3><p>Lors de la conférence, le robot <strong>Optimus</strong> a fait une apparition marquante. Contrairement aux précédentes démonstrations, où un humain était déguisé en robot, cette fois-ci, un véritable robot a été présenté. Musk a souligné que ce robot intègre toutes les technologies développées pour les véhicules Tesla, tant au niveau logiciel que matériel. Bien qu'aucune information précise sur le prix ou l'utilisation d'Optimus n'ait été communiquée, Musk a évoqué une vision d'avenir où chacun pourrait posséder un Optimus. Les démonstrations ont été accompagnées de performances, avec des Optimus dansant sur scène, illustrant les capacités d'animation et d'interaction du robot.</p>",

			"<h3>Conclusion</h3><p>Avec ces annonces, Tesla semble solidement positionnée pour façonner l'avenir de la mobilité et de la robotique. Le Cybercab pourrait redéfinir la notion de transport personnel, tandis que le Robovan propose une solution pour les défis du transport public en milieu urbain. Optimus, quant à lui, représente une avancée significative dans l'intégration de l'intelligence artificielle et de la robotique dans la vie quotidienne. Ces innovations soulèvent également des questions importantes sur les régulations et l'acceptation sociale des véhicules autonomes et des robots dans notre société.</p>"],
			"images": [{
				"url": link + "cybercab.jpg",
				"caption": "Le Cybercab de Tesla, le Robotaxi sans volant."
			},
			{
				"url": link + "robovan.jpg",
				"caption": "Le Robovan, un bus autonome futuriste."
			},
			{
				"url": link + "optimus-gen.jpg",
				"caption": "Optimus, le robot évolué de Tesla."
			}],
			"sources": [{
				"title": "Numerama",
				"url": "https://www.numerama.com/vroom/1823886-cybercab-robovan-optimus-tout-ce-que-tesla-a-devoile-pendant-que-vous-dormiez.html"
			}]
		},
		{
			"title": "Un nouveau robot humanoïde chez Boston Dynamics",
			"description": "Boston Dynamics a récemment présenté une version entièrement électrique de son robot bipède Atlas.",
			"date": "30 septembre 2024",
			"content": ["<h3>Une nouvelle version tout électrique du robot bipède Atlas</h3>", "<p>Boston Dynamics a récemment présenté une version entièrement électrique de son célèbre robot bipède Atlas, marquant ainsi la fin de l'ère de l’actionnement hydraulique. Cette révolution technologique permet d’offrir une plus grande amplitude de mouvements tout en simplifiant la conception.</p>", "<h3>Fin de l'actionnement hydraulique</h3>", "<p>L’une des annonces majeures de cette nouvelle version est l’abandon du système d'actionnement hydraulique, autrefois utilisé dans les modèles précédents d'Atlas.</p>", "<h3>Caractéristiques techniques du nouveau modèle</h3>", "<ul><li><strong>Amplitude de mouvement augmentée</strong> : Grâce à l’électricité, Atlas peut réaliser des mouvements plus fluides.</li><li><strong>Absence d'acrobaties</strong> : Ce nouvel Atlas ne pourra pas réaliser d'acrobaties spectaculaires.</li><li><strong>Simplification de la programmation</strong> : Le contrôle du robot est désormais plus intuitif.</li></ul>", "<h3>Objectif : Applications concrètes</h3>", "<p>Le but de Boston Dynamics est désormais de commercialiser Atlas en l'adaptant à des applications réelles.</p>", "<iframe width=\"560\" height=\"315\" src=\"https://www.koreus.com/embed/boston-dynamics-new-atlas\"  frameborder=\"0\" allowfullscreen></iframe><br /><a href=\"https://www.koreus.com/video/boston-dynamics-new-atlas.html\">Le nouveau robot Atlas de Boston Dynamics</a>"],
			"images": [{
				"url": link + "Atlas.jpg",
				"caption": "Image du robot Atlas"
			}],
			"sources": [{
				"title": "Boston Dynamics Officiel",
				"url": "https://bostondynamics.com/atlas"
			},
			{
				"title": "Koreus Vidéo : Atlas en action",
				"url": "https://www.koreus.com/embed/boston-dynamics-new-atlas"
			}]
		},
		],

		CYBER: [{
			"title": "Violation de données à l'Internet Archive : 31 millions d'utilisateurs impactés",
			"description": "L'Internet Archive a été victime d'une cyberattaque, entraînant la compromission des données personnelles de 31 millions d'utilisateurs.",
			"date": "15 octobre 2024",
			"content": ["<h3>Introduction</h3><p>L'Internet Archive, une organisation à but non lucratif connue pour son immense collection d'archives numériques et sa célèbre Wayback Machine, a récemment révélé avoir subi une importante violation de données. Cette attaque aurait compromis les informations personnelles de 31 millions d'utilisateurs inscrits à ses services.</p>",

			"<h3>Détails de l'attaque</h3><p>L'attaque a été rendue publique le <strong>13 octobre 2024</strong>, lorsqu'il a été découvert que les serveurs de l'Internet Archive avaient été infiltrés par des cybercriminels. L'accès non autorisé aurait permis à ces derniers de dérober les données d'utilisateur telles que les adresses e-mail, les noms d'utilisateur, ainsi que des mots de passe cryptés.</p><p>Bien que les informations financières ne semblent pas avoir été compromises, l'ampleur de l'attaque est alarmante en raison du nombre d'utilisateurs affectés et du potentiel d'usurpation d'identité.</p>",

			"<h3>Nature des données compromises</h3><p>Les données volées comprennent des informations personnelles telles que :</p><ul>", "<li>Adresses e-mail</li>", "<li>Noms d'utilisateur</li>", "<li>Mots de passe cryptés (hashés)</li>", "<li>Historique d'activité des utilisateurs sur les sites affiliés à l'Internet Archive.</li></ul>",

			"<p>La méthode de cryptage utilisée pour les mots de passe n'a pas été précisée, mais les experts conseillent aux utilisateurs concernés de changer leurs mots de passe immédiatement, en particulier s'ils utilisent les mêmes informations de connexion sur d'autres services en ligne.</p>",

			"<h3>Réactions et mesures prises</h3><p>L'Internet Archive a rapidement pris des mesures pour contenir l'incident en contactant les utilisateurs touchés et en renforçant ses systèmes de sécurité. Ils ont également mis à jour leur politique de sécurité pour prévenir de futures attaques. Toutefois, les utilisateurs sont invités à surveiller de près leurs comptes pour détecter toute activité suspecte et à utiliser l'authentification à deux facteurs lorsque cela est possible.</p>",

			"<h3>Conseils pour les utilisateurs</h3><p>Pour les utilisateurs affectés, il est recommandé de :</p><ul>", "<li>Changer immédiatement leurs mots de passe sur l'Internet Archive et sur tous les autres services utilisant le même mot de passe.</li>", "<li>Activer l'authentification à deux facteurs (2FA) si disponible.</li>", "<li>Être vigilants face à des tentatives d'hameçonnage ou à des communications suspectes.</li></ul>",

			"<p>Il est également conseillé de surveiller leurs comptes bancaires et leurs e-mails pour prévenir tout acte frauduleux pouvant résulter de cette violation.</p>",

			"<h3>Conclusion</h3><p>Cette attaque souligne une fois de plus l'importance de la cybersécurité, même pour des organisations aussi respectées que l'Internet Archive. Les utilisateurs doivent prendre toutes les mesures nécessaires pour protéger leurs informations personnelles et renforcer leur sécurité en ligne.</p>"],
			"images": [{
				"url": "https://example.com/internet-archive-hack.png",
				"caption": "L'Internet Archive a été victime d'une cyberattaque compromettant les données de millions d'utilisateurs."
			}],
			"sources": [{
				"title": "BleepingComputer",
				"url": "https://www.bleepingcomputer.com/news/security/internet-archive-hacked-data-breach-impacts-31-million-users/"
			}]
		},
		{
			"title": "Une faille critique dans Firefox permet aux attaquants de contrôler à distance votre PC",
			"description": "Une vulnérabilité grave a été découverte dans Firefox, permettant aux pirates de prendre le contrôle à distance d'un ordinateur ciblé via une exécution de code malveillant.",
			"date": "15 octobre 2024",
			"content": ["<h3>Introduction</h3><p>Un nouveau problème de sécurité a été signalé dans le navigateur Firefox. Cette faille critique, référencée sous l'identifiant <strong>GHSA-hm3j-qgpw-pj98</strong>, permet à un attaquant distant de prendre le contrôle de l'ordinateur d'une victime en exploitant une exécution de code à distance. La vulnérabilité affecte certaines versions de Firefox et pourrait exposer des millions d'utilisateurs à des risques considérables.</p>",

			"<h3>Origine de la vulnérabilité</h3><p>La faille provient d'une mauvaise gestion de la mémoire dans certaines versions du moteur de rendu de Firefox. Cela permet à un pirate de créer des sites web malveillants conçus pour exploiter cette vulnérabilité. Une fois que l'utilisateur visite le site, l'attaquant peut exécuter du code sur la machine cible, lui permettant de prendre le contrôle complet du système, de voler des données ou d’installer des logiciels malveillants.</p>",

			"<h3>Impact et exploitation</h3><p>Cette vulnérabilité est particulièrement dangereuse car elle ne nécessite aucune interaction complexe de la part de l'utilisateur, au-delà de la simple visite d'un site compromis. L'attaquant peut alors installer des logiciels, lire ou modifier des fichiers, voire prendre le contrôle à distance du système. La faille affecte non seulement les utilisateurs de Firefox, mais potentiellement ceux des navigateurs dérivés du même moteur, comme certains dérivés de Firefox sur mobile ou d'autres applications basées sur le moteur Gecko.</p>",

			"<h3>Mesures de protection</h3><p>Mozilla a rapidement réagi en publiant une mise à jour de sécurité pour corriger cette faille. Il est fortement recommandé à tous les utilisateurs de Firefox de vérifier la version de leur navigateur et d'effectuer la mise à jour dès que possible. Pour se protéger contre cette vulnérabilité, il est également conseillé d'éviter de cliquer sur des liens suspects ou de visiter des sites non fiables.</p>",

			"<h3>Conclusion</h3><p>Cette nouvelle faille de sécurité souligne l'importance de maintenir à jour les logiciels utilisés au quotidien. Les vulnérabilités critiques comme celle-ci peuvent avoir des répercussions graves sur la sécurité des utilisateurs, notamment en facilitant les attaques à distance. La vigilance reste donc de mise, et il est essentiel de suivre les recommandations des éditeurs pour se prémunir contre ces menaces.</p>"],
			"images": [{
				"url": link + "firefox-vulnerability.png",
				"caption": "Une faille critique découverte dans Firefox permet une prise de contrôle à distance."
			}],
			"sources": [{
				"title": "GitHub Security Advisory",
				"url": "https://github.com/advisories/GHSA-hm3j-qgpw-pj98"
			}]
		},
		{
			"title": "Nvidia corrige une vulnérabilité critique dans son Container Toolkit",
			"description": "Nvidia a récemment corrigé une vulnérabilité critique dans son outil de conteneurisation, Container Toolkit.",
			"date": "30 septembre 2024",
			"content": ["<h3>Détails de la faille critique</h3>", "<p>Autrefois connu sous le nom de Nvidia Docker, le service Nvidia Container Toolkit (NCT) contenait une vulnérabilité majeure, référencée sous le CVE-2024-0132 avec un score de gravité de 9 sur 10 selon l'échelle CVSS. Cette vulnérabilité permettait à un utilisateur ou une application malveillante de s'évader de leur conteneur isolé et de prendre le contrôle total de l’hôte sous-jacent.</p>", "<p>Nvidia a décrit cette faille comme une vulnérabilité TOCTOU (Time-of-check Time-of-Use) qui survient lorsque le programme vérifie une condition puis en utilise les résultats sans s'assurer que la condition n'a pas changé entre temps. Cette vulnérabilité affecte les versions de Nvidia Container Toolkit jusqu'à la version 1.16.1 incluse. Les détails techniques de l'exploitation n'ont pas été divulgués pour des raisons de sécurité.</p>", "<h3>Exploitation potentielle et impact</h3>", "<p>Les chercheurs de Wiz Research, qui ont découvert la faille, expliquent qu'un attaquant contrôlant une image de conteneur malveillante peut exploiter cette faille pour échapper au conteneur et obtenir un accès complet à l’hôte. Ce type d'attaque peut se produire directement par le biais de services utilisant des ressources GPU partagées ou via des chaînes d'approvisionnement compromises.</p>", "<h3>Correctifs et recommandations</h3>", "<p>Nvidia a publié un correctif pour cette vulnérabilité. Tous les utilisateurs de Nvidia Container Toolkit sont invités à mettre à jour vers la version la plus récente.</p>"],
			"images": [{
				"url": link + "faille-nvidia.png",
				"caption": "Image de Wiz Research - vulnérabilité Nvidia"
			}],
			"sources": [{
				"title": "Le Monde Informatique",
				"url": "https://www.lemondeinformatique.fr/actualites/lire-docker-augmente-le-prix-de-ses-abonnements-pro-et-team-94719.html"
			}]
		},
		],

		DEV: [{
			"title": "Top 20 des langages de programmation en septembre 2024",
			"description": "Le classement TIOBE de septembre 2024 dévoile des changements intrigants parmi les langages de programmation. Python continue d’imposer sa domination, mais d’autres langages montent en flèche.",
			"date": "1 septembre 2024",
			"content": ["<h3>Introduction</h3><p>Le classement TIOBE de septembre 2024 dévoile des changements intrigants parmi les langages de programmation. Si Python continue d’imposer sa domination, certains langages montent en flèche tandis que d’autres subissent un recul significatif.</p>", "<h3>Classement TIOBE</h3><p>Voici le classement des 20 principaux langages de programmation :</p><p><ul style=\"margin-left: 40px;\"><li>Python : 20.17%</li><li>C++ : 10.75%</li><li>Java : 9.45%</li><li>C : 8.89%</li><li>C# : 6.08%</li><li>JavaScript : 3.92%</li><li>Visual Basic : 2.70%</li><li>Go : 2.35%</li><li>SQL : 1.94%</li><li>Fortran : 1.78%</li><li>Delphi/Object Pascal : 1.77%</li><li>MATLAB : 1.47%</li><li>PHP : 1.46%</li><li>Rust : 1.32%</li><li>R : 1.20%</li><li>Ruby : 1.13%</li><li>Scratch : 1.11%</li><li>Kotlin : 1.10%</li><li>COBOL : 1.09%</li><li>Swift : 1.08%</li></ul></p>", "<h3>Analyse des langages</h3><p>Python reste en tête, suivi de C++ et Java. Swift perd du terrain tandis que Scratch regagne des places dans le classement.</p>", "<h3>Conclusion</h3><p>Le classement TIOBE met en lumière des changements marquants dans l'univers des langages de programmation. Utilisez ces informations pour adapter vos choix technologiques.</p>"],
			"images": [{
				"url": link + "unstonksC.png",
				"caption": "Top langages de programmation"
			},
			{
				"url": link + "Programmation2024TopLang.png",
				"caption": "Langages de programmation en tendance"
			}],
			"sources": [{
				"title": "Codeur.com langages-programmation-septembre-2024",
				"url": "https://www.codeur.com/blog/langages-programmation-septembre-2024/"
			}]
		}]

	}

