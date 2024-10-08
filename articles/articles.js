const link = "https://notpunchnox.github.io/Veille-techno.github.io/articles/images/"

export default {

    "AI": [{
            "title": "Llama 3.2 : Meta met à nouveau les bouchées doubles en matière d’intelligence artificielle",
            "description": "Meta a dévoilé la version Llama 3.2 lors de Meta Connect 2024. Elle offre des capacités multimodales avec traitement du texte, des images et des interactions vocales.",
            "content": [
                "<h3>Introduction</h3><p>Meta a dévoilé la dernière version de son IA open-source, <strong>Llama 3.2</strong>, lors de Meta Connect 2024. Cette version offre des capacités multimodales, avec la possibilité de traiter à la fois du texte et des images, et d'interagir vocalement en utilisant des voix de célébrités.</p>",

                "<h3>Fonctionnalités principales</h3><ul>",
                "<li><strong>Multimodalité</strong> : Llama peut traiter simultanément du texte et des images, facilitant des tâches comme l'analyse de photos ou la génération de légendes.</li>",
                "<li><strong>Reconnaissance vocale</strong> : Llama intègre un module de reconnaissance vocale, permettant des interactions naturelles et la synthèse vocale avec des voix de célébrités.</li>",
                "<li><strong>AI Studio</strong> : Permet la création d'avatars virtuels pour des interactions en vidéo, idéal pour des applications comme Instagram et Messenger.</li>",
                "</ul>",

                "<h3>Modèles SLM : Compacts et performants</h3><p>Les modèles <strong>SLM (Small Language Models)</strong>, comprenant les versions 1B et 3B, sont conçus pour offrir des performances élevées sur des appareils légers, tels que les smartphones et dispositifs embarqués. Ces modèles utilisent des techniques avancées comme <strong>l’élagage (pruning)</strong> et la <strong>distillation</strong> pour optimiser les performances tout en réduisant la taille et la consommation de ressources.</p><p>Le but principal des modèles SLM est de permettre une utilisation locale et efficace sur des appareils peu puissants. Ils sont idéaux pour des tâches comme le <strong>suivi d’instructions</strong>, la <strong>synthèse</strong> et la <strong>réécriture</strong>, tout en offrant une faible latence. Leur compatibilité avec les architectures <strong>Arm</strong>, notamment les processeurs <strong>Qualcomm</strong> et <strong>MediaTek</strong>, en fait une solution flexible pour les applications mobiles.</p><p>Les versions SLM sont également <strong>facilement personnalisables</strong> grâce à des outils comme <strong>TorchTune</strong>, ce qui permet aux développeurs d'adapter ces modèles à des besoins spécifiques sans avoir besoin d’infrastructures lourdes.</p>",

                "<h3>Disponibilité</h3><p>Llama 3.2 sera disponible gratuitement sur <strong>WhatsApp</strong>, <strong>Instagram</strong>, <strong>Facebook</strong>, et <strong>Messenger</strong>. Toutefois, les versions multimodales ne seront pas accessibles en Europe tant que Meta n’aura pas résolu les questions de conformité avec les régulations européennes.</p>",
            ],
            "images": [{
                    "url": link + "Benchmarks-llama3.2.png",
                    "caption": "Llama devient multimodal et peut travailler avec des images"
                },
                {
                    "url": link + "SchemaLlama.png",
                    "caption": "Llama Schema"
                }
            ],
            "sources": [{
                "title": "Frandroid",
                "url": "https://www.frandroid.com/marques/meta/2349720_llama-3-2-meta-met-a-nouveau-les-bouchees-doubles-en-matiere-dintelligence-artificielle"
            }]
        },

    ],

    ROBOTIC: [{
        "title": "Un nouveau robot humanoïde chez Boston Dynamics",
        "description": "Boston Dynamics a récemment présenté une version entièrement électrique de son robot bipède Atlas.",
        "date": "30 septembre 2024",
        "content": ["<h3>Une nouvelle version tout électrique du robot bipède Atlas</h3>",
            "<p>Boston Dynamics a récemment présenté une version entièrement électrique de son célèbre robot bipède Atlas, marquant ainsi la fin de l'ère de l’actionnement hydraulique. Cette révolution technologique permet d’offrir une plus grande amplitude de mouvements tout en simplifiant la conception.</p>",
            "<h3>Fin de l'actionnement hydraulique</h3>",
            "<p>L’une des annonces majeures de cette nouvelle version est l’abandon du système d'actionnement hydraulique, autrefois utilisé dans les modèles précédents d'Atlas.</p>",
            "<h3>Caractéristiques techniques du nouveau modèle</h3>",
            "<ul><li><strong>Amplitude de mouvement augmentée</strong> : Grâce à l’électricité, Atlas peut réaliser des mouvements plus fluides.</li><li><strong>Absence d'acrobaties</strong> : Ce nouvel Atlas ne pourra pas réaliser d'acrobaties spectaculaires.</li><li><strong>Simplification de la programmation</strong> : Le contrôle du robot est désormais plus intuitif.</li></ul>",
            "<h3>Objectif : Applications concrètes</h3>",
            "<p>Le but de Boston Dynamics est désormais de commercialiser Atlas en l'adaptant à des applications réelles.</p>",
            "<p><a href=\"https://bostondynamics.com/atlas/?wvideo=p7iw5vfjrz\"><img src=\"https://embed-ssl.wistia.com/deliveries/2368ba4968169ffed2b4fccc9a0c01a7.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=00355ae0\" width=\"400\" height=\"225\" style=\"width: 400px; height: 225px;\"></a></p><p><a href=\"https://bostondynamics.com/atlas/?wvideo=p7iw5vfjrz\">Atlas | Boston Dynamics</a></p>"
        ],
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
            }
        ]
    },],

    CYBER: [{
        "title": "Nvidia corrige une vulnérabilité critique dans son Container Toolkit",
        "description": "Nvidia a récemment corrigé une vulnérabilité critique dans son outil de conteneurisation, Container Toolkit.",
        "date": "30 septembre 2024",
        "content": ["<h3>Détails de la faille critique</h3>",
            "<p>Autrefois connu sous le nom de Nvidia Docker, le service Nvidia Container Toolkit (NCT) contenait une vulnérabilité majeure, référencée sous le CVE-2024-0132 avec un score de gravité de 9 sur 10 selon l'échelle CVSS. Cette vulnérabilité permettait à un utilisateur ou une application malveillante de s'évader de leur conteneur isolé et de prendre le contrôle total de l’hôte sous-jacent.</p>",
            "<p>Nvidia a décrit cette faille comme une vulnérabilité TOCTOU (Time-of-check Time-of-Use) qui survient lorsque le programme vérifie une condition puis en utilise les résultats sans s'assurer que la condition n'a pas changé entre temps. Cette vulnérabilité affecte les versions de Nvidia Container Toolkit jusqu'à la version 1.16.1 incluse. Les détails techniques de l'exploitation n'ont pas été divulgués pour des raisons de sécurité.</p>",
            "<h3>Exploitation potentielle et impact</h3>",
            "<p>Les chercheurs de Wiz Research, qui ont découvert la faille, expliquent qu'un attaquant contrôlant une image de conteneur malveillante peut exploiter cette faille pour échapper au conteneur et obtenir un accès complet à l’hôte. Ce type d'attaque peut se produire directement par le biais de services utilisant des ressources GPU partagées ou via des chaînes d'approvisionnement compromises.</p>",
            "<h3>Correctifs et recommandations</h3>",
            "<p>Nvidia a publié un correctif pour cette vulnérabilité. Tous les utilisateurs de Nvidia Container Toolkit sont invités à mettre à jour vers la version la plus récente.</p>"
        ],
        "images": [{
            "url": link + "faille-nvidia.png",
            "caption": "Image de Wiz Research - vulnérabilité Nvidia"
        }],
        "sources": [{
            "title": "Le Monde Informatique",
            "url": "https://www.lemondeinformatique.fr/actualites/lire-docker-augmente-le-prix-de-ses-abonnements-pro-et-team-94719.html"
        }]
    }, ],

    DEV: []

}