// Specialized Classes fichas 2.4.0
window.SC_MOD_VERSION_DATA = window.SC_MOD_VERSION_DATA || {};
window.SC_MOD_VERSION_DATA["3.0.0-rc.1"] = window.SC_MOD_VERSION_DATA["3.0.0-rc.1"] || {};
window.SC_MOD_VERSION_DATA["3.0.0-rc.1"]["classes"] = {
  "schema": "specializedclasses.classes_ES.v1",
  "packageVersion": "2.4.0",
  "modVersion": "3.0.0-rc.1",
  "compatibleGameVersion_note": "La ficha depende de la versión del mod Specialized Classes, no solo de la versión de Vintage Story.",
  "classes": [
    {
      "order": 1,
      "id": "archivist",
      "name_es": "Archivista",
      "name_en": "Archivist",
      "description_es": "Especialista de ruinas, biblioteca y decoración antigua. Convierte objetos de ruinas, papel y mobiliario viejo en valor útil.",
      "image": "assets/personajes/archivist.png",
      "iconStrip": "assets/iconos/archivist_iconos.png",
      "static_exports": {
        "html": "fichas_html/01_Archivista_archivist.html",
        "md": "fichas_md/01_Archivista_archivist.md",
        "png": "fichas_png/01_Archivista_archivist.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 7,
        "negativeEffects": 4,
        "recipesGrid": 239,
        "recipesStation": 4,
        "recipesCompatibility": 1
      }
    },
    {
      "order": 2,
      "id": "blackguard",
      "name_es": "Guardia Negra",
      "name_en": "Blackguard",
      "description_es": "Combatiente-forjador. Favorece combate, reparación, metal y equipo militar, a cambio de peor autosuficiencia natural.",
      "image": "assets/personajes/blackguard.png",
      "iconStrip": "assets/iconos/blackguard_iconos.png",
      "static_exports": {
        "html": "fichas_html/02_Guardia_Negra_blackguard.html",
        "md": "fichas_md/02_Guardia_Negra_blackguard.md",
        "png": "fichas_png/02_Guardia_Negra_blackguard.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 7,
        "negativeEffects": 5,
        "recipesGrid": 43,
        "recipesStation": 8,
        "recipesCompatibility": 0
      }
    },
    {
      "order": 3,
      "id": "brickmaker",
      "name_es": "Alfarero",
      "name_en": "Brickmaker",
      "description_es": "Constructor material. Fuerte con arcilla, tierra, cerámica y bloques de construcción; vulnerable al fuego.",
      "image": "assets/personajes/brickmaker.png",
      "iconStrip": "assets/iconos/brickmaker_iconos.png",
      "static_exports": {
        "html": "fichas_html/03_Alfarero_brickmaker.html",
        "md": "fichas_md/03_Alfarero_brickmaker.md",
        "png": "fichas_png/03_Alfarero_brickmaker.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 12,
        "negativeEffects": 5,
        "recipesGrid": 65,
        "recipesStation": 3,
        "recipesCompatibility": 2
      }
    },
    {
      "order": 4,
      "id": "butcher",
      "name_es": "Carnicero",
      "name_en": "Butcher",
      "description_es": "Especialista en carne, ganadería y conservación. Brilla cuando hay fauna, hielo, cuero o una cadena alimentaria organizada.",
      "image": "assets/personajes/butcher.png",
      "iconStrip": "assets/iconos/butcher_iconos.png",
      "static_exports": {
        "html": "fichas_html/04_Carnicero_butcher.html",
        "md": "fichas_md/04_Carnicero_butcher.md",
        "png": "fichas_png/04_Carnicero_butcher.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 9,
        "negativeEffects": 5,
        "recipesGrid": 23,
        "recipesStation": 1,
        "recipesCompatibility": 16
      }
    },
    {
      "order": 5,
      "id": "clockmaker",
      "name_es": "Relojero",
      "name_en": "Clockmaker",
      "description_es": "Técnico de late game. Su valor está en mecánica, piezas Jonas, transporte de objetos y tecnología avanzada.",
      "image": "assets/personajes/clockmaker.png",
      "iconStrip": "assets/iconos/clockmaker_iconos.png",
      "static_exports": {
        "html": "fichas_html/05_Relojero_clockmaker.html",
        "md": "fichas_md/05_Relojero_clockmaker.md",
        "png": "fichas_png/05_Relojero_clockmaker.png"
      },
      "source_counts_2_1_2": {
        "traits": 8,
        "positiveEffects": 9,
        "negativeEffects": 5,
        "recipesGrid": 35,
        "recipesStation": 15,
        "recipesCompatibility": 12
      }
    },
    {
      "order": 6,
      "id": "farmhand",
      "name_es": "Agricultor",
      "name_en": "Farmhand",
      "description_es": "Base alimentaria del servidor. Muy fuerte en cultivos, semillas, fertilizante, cuerdas y pesca; flojo para minería.",
      "image": "assets/personajes/farmhand.png",
      "iconStrip": "assets/iconos/farmhand_iconos.png",
      "static_exports": {
        "html": "fichas_html/06_Agricultor_farmhand.html",
        "md": "fichas_md/06_Agricultor_farmhand.md",
        "png": "fichas_png/06_Agricultor_farmhand.png"
      },
      "source_counts_2_1_2": {
        "traits": 9,
        "positiveEffects": 17,
        "negativeEffects": 5,
        "recipesGrid": 51,
        "recipesStation": 10,
        "recipesCompatibility": 10
      }
    },
    {
      "order": 7,
      "id": "florist",
      "name_es": "Florista",
      "name_en": "Florist",
      "description_es": "Soporte de medicina, abejas, tintes y decoración vegetal. Bajo combate y minería, pero aporta mucha infraestructura útil.",
      "image": "assets/personajes/florist.png",
      "iconStrip": "assets/iconos/florist_iconos.png",
      "static_exports": {
        "html": "fichas_html/07_Florista_florist.html",
        "md": "fichas_md/07_Florista_florist.md",
        "png": "fichas_png/07_Florista_florist.png"
      },
      "source_counts_2_1_2": {
        "traits": 6,
        "positiveEffects": 9,
        "negativeEffects": 7,
        "recipesGrid": 142,
        "recipesStation": 20,
        "recipesCompatibility": 17
      }
    },
    {
      "order": 8,
      "id": "forester",
      "name_es": "Guardabosques",
      "name_en": "Forester",
      "description_es": "Especialista en madera, combustible y carpintería. Gran valor de infraestructura; pega más, pero también recibe más daño.",
      "image": "assets/personajes/forester.png",
      "iconStrip": "assets/iconos/forester_iconos.png",
      "static_exports": {
        "html": "fichas_html/08_Guardabosques_forester.html",
        "md": "fichas_md/08_Guardabosques_forester.md",
        "png": "fichas_png/08_Guardabosques_forester.png"
      },
      "source_counts_2_1_2": {
        "traits": 8,
        "positiveEffects": 13,
        "negativeEffects": 7,
        "recipesGrid": 62,
        "recipesStation": 55,
        "recipesCompatibility": 4
      }
    },
    {
      "order": 9,
      "id": "hunter",
      "name_es": "Cazador",
      "name_en": "Hunter",
      "description_es": "Cazador real: daño a distancia, animales, pieles, flechas y cuero. Pierde valor donde no haya fauna o economía de cuero.",
      "image": "assets/personajes/hunter.png",
      "iconStrip": "assets/iconos/hunter_iconos.png",
      "static_exports": {
        "html": "fichas_html/09_Cazador_hunter.html",
        "md": "fichas_md/09_Cazador_hunter.md",
        "png": "fichas_png/09_Cazador_hunter.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 9,
        "negativeEffects": 7,
        "recipesGrid": 28,
        "recipesStation": 6,
        "recipesCompatibility": 14
      }
    },
    {
      "order": 10,
      "id": "malefactor",
      "name_es": "Maleante",
      "name_en": "Malefactor",
      "description_es": "Exploración, comercio, saqueo y chatarra. Depende de ruinas, traders y recursos raros para expresar su ventaja.",
      "image": "assets/personajes/malefactor.png",
      "iconStrip": "assets/iconos/malefactor_iconos.png",
      "static_exports": {
        "html": "fichas_html/10_Maleante_malefactor.html",
        "md": "fichas_md/10_Maleante_malefactor.md",
        "png": "fichas_png/10_Maleante_malefactor.png"
      },
      "source_counts_2_1_2": {
        "traits": 9,
        "positiveEffects": 12,
        "negativeEffects": 5,
        "recipesGrid": 12,
        "recipesStation": 0,
        "recipesCompatibility": 0
      }
    },
    {
      "order": 11,
      "id": "messenger",
      "name_es": "Mensajero",
      "name_en": "Messenger",
      "description_es": "Logística pura. Mejora movimiento, caminos, iluminación, bolsas y transporte personal; es frágil.",
      "image": "assets/personajes/messenger.png",
      "iconStrip": "assets/iconos/messenger_iconos.png",
      "static_exports": {
        "html": "fichas_html/11_Mensajero_messenger.html",
        "md": "fichas_md/11_Mensajero_messenger.md",
        "png": "fichas_png/11_Mensajero_messenger.png"
      },
      "source_counts_2_1_2": {
        "traits": 6,
        "positiveEffects": 7,
        "negativeEffects": 6,
        "recipesGrid": 54,
        "recipesStation": 24,
        "recipesCompatibility": 2
      }
    },
    {
      "order": 12,
      "id": "quarrier",
      "name_es": "Cantero",
      "name_en": "Quarrier",
      "description_es": "Piedra y construcción pesada. Es obrero de roca, grava, arena y cantería; menos orientado a saqueo fino.",
      "image": "assets/personajes/quarrier.png",
      "iconStrip": "assets/iconos/quarrier_iconos.png",
      "static_exports": {
        "html": "fichas_html/12_Cantero_quarrier.html",
        "md": "fichas_md/12_Cantero_quarrier.md",
        "png": "fichas_png/12_Cantero_quarrier.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 13,
        "negativeEffects": 6,
        "recipesGrid": 38,
        "recipesStation": 24,
        "recipesCompatibility": 8
      }
    },
    {
      "order": 13,
      "id": "spelunker",
      "name_es": "Espeleólogo",
      "name_en": "Spelunker",
      "description_es": "Minero de riesgo. Fuerte en bateo, mineral, explosivos y exploración subterránea; no sostiene bien comida.",
      "image": "assets/personajes/spelunker.png",
      "iconStrip": "assets/iconos/spelunker_iconos.png",
      "static_exports": {
        "html": "fichas_html/13_Espeleologo_spelunker.html",
        "md": "fichas_md/13_Espeleologo_spelunker.md",
        "png": "fichas_png/13_Espeleólogo_spelunker.png"
      },
      "source_counts_2_1_2": {
        "traits": 6,
        "positiveEffects": 7,
        "negativeEffects": 6,
        "recipesGrid": 20,
        "recipesStation": 7,
        "recipesCompatibility": 0
      }
    },
    {
      "order": 14,
      "id": "tailor",
      "name_es": "Sastre",
      "name_en": "Tailor",
      "description_es": "Textil, ropa y equipo blando. Aporta costura, fibras, alfombras y prendas; su mayor peligro objetivo es el frío.",
      "image": "assets/personajes/tailor.png",
      "iconStrip": "assets/iconos/tailor_iconos.png",
      "static_exports": {
        "html": "fichas_html/14_Sastre_tailor.html",
        "md": "fichas_md/14_Sastre_tailor.md",
        "png": "fichas_png/14_Sastre_tailor.png"
      },
      "source_counts_2_1_2": {
        "traits": 8,
        "positiveEffects": 10,
        "negativeEffects": 6,
        "recipesGrid": 53,
        "recipesStation": 0,
        "recipesCompatibility": 2
      }
    },
    {
      "order": 15,
      "id": "vintner",
      "name_es": "Viticultor",
      "name_en": "Vintner",
      "description_es": "Setas, fruta, vidrio, líquidos y bebidas. Construye infraestructura de consumibles y procesamiento vegetal.",
      "image": "assets/personajes/vintner.png",
      "iconStrip": "assets/iconos/vintner_iconos.png",
      "static_exports": {
        "html": "fichas_html/15_Viticultor_vintner.html",
        "md": "fichas_md/15_Viticultor_vintner.md",
        "png": "fichas_png/15_Viticultor_vintner.png"
      },
      "source_counts_2_1_2": {
        "traits": 7,
        "positiveEffects": 11,
        "negativeEffects": 6,
        "recipesGrid": 36,
        "recipesStation": 2,
        "recipesCompatibility": 15
      }
    },
    {
      "order": 16,
      "id": "commoner",
      "name_es": "Plebeyo",
      "name_en": "Commoner",
      "description_es": "Clase base mejorada por el mod con hambre reducida. Simple, estable y eficiente en comida.",
      "image": null,
      "iconStrip": null,
      "static_exports": {
        "html": "fichas_html/16_Plebeyo_commoner.html",
        "md": "fichas_md/16_Plebeyo_commoner.md",
        "png": "fichas_png/16_Plebeyo_commoner.png"
      },
      "source_counts_2_1_2": {
        "traits": 1,
        "positiveEffects": 1,
        "negativeEffects": 0,
        "recipesGrid": 0,
        "recipesStation": 0,
        "recipesCompatibility": 0
      }
    }
  ],
  "usage_note_es": "La explicación humana de objetos/herramientas por clase está en usage_ES.js/json."
};
