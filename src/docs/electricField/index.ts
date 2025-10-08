class ElectricFieldDocs extends HTMLElement {
    static observedAttributes = [];
    constructor() {
        super();
    }

    public connectedCallback() {
        this.append(this.template.content.cloneNode(true));
    }

    public disconnectedCallback() {
        this.remove();
    }

    get template(): HTMLTemplateElement {
        const tpl = document.createElement('template');
        tpl.innerHTML = `<style>
            ${this.styles}
        </style>
        <div class="container">
    <!-- Hero Section -->
    <div class="hero-section orange-gradient">
        <div class="hero-icon">📍</div>
        <h1 class="hero-title">Sensor de Campo Eléctrico</h1>
        <p class="hero-subtitle">Herramienta de Medición Vectorial</p>
    </div>

    <!-- Introduction -->
    <div class="content-card border-orange">
        <h2 class="card-title">🎯 ¿Qué es el Sensor de Campo Eléctrico?</h2>
        <p class="card-paragraph">
            El <strong class="text-highlight-orange">sensor de campo eléctrico</strong> es una herramienta de visualización 
            que te permite medir y observar la dirección e intensidad del campo eléctrico en cualquier punto del espacio.
        </p>
        <p class="card-paragraph">
            En el simulador, este sensor aparece como una <strong class="text-emphasis">flecha (vector)</strong> que 
            apunta en la dirección del campo eléctrico resultante en su ubicación, con una longitud proporcional 
            a su magnitud.
        </p>
    </div>

    <!-- How it Works -->
    <div class="content-card border-orange">
        <h2 class="card-title">⚙️ ¿Cómo Funciona?</h2>
        
        <div class="formula-section mb-4">
            <p class="card-paragraph">
                El sensor calcula el campo eléctrico total en su posición utilizando el 
                <strong class="text-emphasis">principio de superposición</strong>:
            </p>
            
            <div class="formula-container">
                \( \vec{E}_{\text{total}} = \sum_{i=1}^{n} \vec{E}_i = \sum_{i=1}^{n} \frac{kQ_i}{r_i^2}\hat{r}_i \)
            </div>
            
            <p class="formula-caption text-center">
                Donde se suman vectorialmente las contribuciones de todas las cargas presentes
            </p>
        </div>

        <div class="grid-container">
            <div class="property-card border-orange-light">
                <h4 class="property-title-orange">📐 Magnitud</h4>
                <p class="text-sm text-gray-300">
                    La <strong class="text-emphasis">longitud de la flecha</strong> representa la intensidad 
                    del campo eléctrico en ese punto. Mayor longitud = campo más intenso.
                </p>
            </div>

            <div class="property-card border-orange-light">
                <h4 class="property-title-orange">🧭 Dirección</h4>
                <p class="text-sm text-gray-300">
                    La <strong class="text-emphasis">orientación de la flecha</strong> muestra hacia dónde 
                    apunta el campo eléctrico (dirección en la que se movería una carga positiva).
                </p>
            </div>

            <div class="property-card border-orange-light">
                <h4 class="property-title-orange">🔄 Tiempo Real</h4>
                <p class="text-sm text-gray-300">
                    El sensor se actualiza <strong class="text-emphasis">instantáneamente</strong> cuando 
                    mueves cargas o agregas/eliminas elementos del escenario.
                </p>
            </div>

            <div class="property-card border-orange-light">
                <h4 class="property-title-orange">🎨 Color</h4>
                <p class="text-sm text-gray-300">
                    El color <strong class="text-highlight-orange">naranja</strong> distintivo te ayuda a 
                    identificar rápidamente los sensores de campo en el escenario.
                </p>
            </div>
        </div>
    </div>

    <!-- Mathematical Foundation -->
    <div class="content-card border-orange">
        <h2 class="card-title">📐 Fundamento Matemático</h2>
        
        <div class="list-container">
            <div class="formula-section">
                <h3 class="formula-title text-highlight-orange">Campo de una Carga Puntual</h3>
                <div class="formula-container">
                    \( \vec{E} = \frac{kQ}{r^2}\hat{r} \)
                </div>
                <div class="list-container text-sm text-gray-300">
                    <p class="list-item"><span class="list-item-bullet-orange">▸</span><span>\(\vec{E}\) = Vector de campo eléctrico (N/C)</span></p>
                    <p class="list-item"><span class="list-item-bullet-orange">▸</span><span>\(k = 8.99 \times 10^9\) N·m²/C² = Constante de Coulomb</span></p>
                    <p class="list-item"><span class="list-item-bullet-orange">▸</span><span>\(Q\) = Carga fuente (C)</span></p>
                    <p class="list-item"><span class="list-item-bullet-orange">▸</span><span>\(r\) = Distancia a la carga (m)</span></p>
                    <p class="list-item"><span class="list-item-bullet-orange">▸</span><span>\(\hat{r}\) = Vector unitario radial</span></p>
                </div>
            </div>

            <div class="formula-section">
                <h3 class="formula-title text-highlight-orange">Principio de Superposición</h3>
                <p class="card-paragraph">
                    Cuando hay múltiples cargas, el campo total es la <strong class="text-emphasis">suma vectorial</strong> 
                    de todos los campos individuales:
                </p>
                <div class="formula-container">
                    \( \vec{E}_{\text{total}} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + \cdots + \vec{E}_n \)
                </div>
                <p class="formula-caption text-center">
                    Esta es la operación que el sensor realiza automáticamente
                </p>
            </div>

            <div class="formula-section">
                <h3 class="formula-title text-highlight-orange">Componentes Cartesianas</h3>
                <p class="card-paragraph">
                    El campo eléctrico se puede descomponer en componentes \(x\) e \(y\):
                </p>
                <div class="grid-container">
                    <div class="text-center">
                        \( E_x = E \cos(\theta) \)
                    </div>
                    <div class="text-center">
                        \( E_y = E \sin(\theta) \)
                    </div>
                </div>
                <p class="formula-caption text-center mt-3">
                    Donde \(\theta\) es el ángulo con respecto al eje \(x\)
                </p>
            </div>
        </div>
    </div>

    <!-- Interpretation Guide -->
    <div class="content-card border-orange">
        <h2 class="card-title">🔍 Guía de Interpretación</h2>
        
        <div class="list-container">
            <div class="interpretation-card border-blue">
                <h4 class="interpretation-title text-blue">🔴 Cerca de una Carga Positiva</h4>
                <p class="text-sm text-gray-300">
                    La flecha apunta <strong class="text-emphasis">hacia afuera</strong> (alejándose de la carga). 
                    Muy larga cerca de la carga, disminuye rápidamente con la distancia (\(\propto 1/r^2\)).
                </p>
            </div>

            <div class="interpretation-card border-blue">
                <h4 class="interpretation-title text-blue">🔵 Cerca de una Carga Negativa</h4>
                <p class="text-sm text-gray-300">
                    La flecha apunta <strong class="text-emphasis">hacia adentro</strong> (hacia la carga). 
                    El campo converge hacia el electrón desde todas las direcciones.
                </p>
            </div>

            <div class="interpretation-card border-green">
                <h4 class="interpretation-title text-green">🔴🔵 Entre Cargas Opuestas (Dipolo)</h4>
                <p class="text-sm text-gray-300">
                    Las flechas forman <strong class="text-emphasis">curvas</strong> que van de la carga positiva 
                    a la negativa. En el punto medio, el campo puede ser fuerte o débil dependiendo de la 
                    distancia entre las cargas.
                </p>
            </div>

            <div class="interpretation-card border-red">
                <h4 class="interpretation-title text-red">🔴🔴 Entre Cargas del Mismo Signo</h4>
                <p class="text-sm text-gray-300">
                    Existe un punto entre ellas donde el campo es <strong class="text-emphasis">cero</strong> 
                    (la flecha desaparece o es muy pequeña). Las flechas se "repelen" entre sí.
                </p>
            </div>

            <div class="interpretation-card border-purple">
                <h4 class="interpretation-title text-purple">📍 Lejos de Todas las Cargas</h4>
                <p class="text-sm text-gray-300">
                    El campo es <strong class="text-emphasis">débil</strong> (flecha pequeña) y apunta en la 
                    dirección de la carga dominante o del centro de masa de cargas del mismo signo.
                </p>
            </div>
        </div>
    </div>

    <!-- Use Cases -->
    <div class="content-card border-emerald">
        <h2 class="card-title">🎮 Casos de Uso Prácticos</h2>
        
        <div class="list-container">
            <div class="tip-card border-emerald">
                <strong class="text-emerald-highlight">📊 Mapeo de Campo:</strong>
                <span class="text-gray-300"> Coloca múltiples sensores en una cuadrícula para crear un 
                "mapa vectorial" del campo eléctrico y visualizar su estructura completa.</span>
            </div>

            <div class="tip-card border-emerald">
                <strong class="text-emerald-highlight">🎯 Puntos de Equilibrio:</strong>
                <span class="text-gray-300"> Busca ubicaciones donde la flecha desaparece o es muy pequeña. 
                Estos son puntos donde el campo eléctrico neto es cero.</span>
            </div>

            <div class="tip-card border-emerald">
                <strong class="text-emerald-highlight">📏 Ley del Inverso del Cuadrado:</strong>
                <span class="text-gray-300"> Coloca sensores a diferentes distancias de una carga y observa 
                cómo la longitud de la flecha disminuye con \(1/r^2\).</span>
            </div>

            <div class="tip-card border-emerald">
                <strong class="text-emerald-highlight">🔄 Simetría:</strong>
                <span class="text-gray-300"> Coloca sensores alrededor de una configuración simétrica de 
                cargas para verificar que el campo mantiene la simetría esperada.</span>
            </div>

            <div class="tip-card border-emerald">
                <strong class="text-emerald-highlight">⚡ Líneas de Campo:</strong>
                <span class="text-gray-300"> Las flechas de los sensores son tangentes a las líneas de 
                campo eléctrico. Úsalos para predecir cómo se verán las líneas de campo.</span>
            </div>

            <div class="tip-card border-emerald">
                <strong class="text-emerald-highlight">🧲 Fuerza sobre Cargas:</strong>
                <span class="text-gray-300"> La flecha muestra la dirección de la fuerza que experimentaría 
                una carga positiva de prueba. Para cargas negativas, la fuerza es opuesta.</span>
            </div>
        </div>
    </div>

    <!-- Physical Significance -->
    <div class="content-card-cyan">
        <h2 class="card-title">🌟 Significado Físico</h2>
        
        <div class="formula-section mb-4">
            <h3 class="formula-title text-cyan-highlight">¿Qué Representa el Campo Eléctrico?</h3>
            <p class="card-paragraph">
                El campo eléctrico es una propiedad del espacio que describe la 
                <strong class="text-emphasis">fuerza por unidad de carga</strong> que experimentaría 
                una carga de prueba en ese punto:
            </p>
            <div class="formula-container">
                \( \vec{E} = \frac{\vec{F}}{q_0} \)
            </div>
            <p class="formula-caption text-center">
                Donde \(\vec{F}\) es la fuerza sobre una carga de prueba \(q_0\)
            </p>
        </div>

        <div class="grid-container">
            <div class="application-card">
                <h4 class="application-title text-cyan-highlight">🎯 Concepto Clave</h4>
                <p class="text-sm text-gray-300">
                    El campo eléctrico existe <strong class="text-emphasis">independientemente</strong> de 
                    que haya una carga de prueba para medirlo. Es una propiedad del espacio creada 
                    por las cargas fuente.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title text-cyan-highlight">⚡ Magnitud en N/C</h4>
                <p class="text-sm text-gray-300">
                    Las unidades Newtons por Coulomb (N/C) nos dicen cuánta fuerza (en Newtons) 
                    experimentará cada Coulomb de carga colocado en ese punto.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title text-cyan-highlight">🌊 Campo Vectorial</h4>
                <p class="text-sm text-gray-300">
                    El campo eléctrico es un <strong class="text-emphasis">campo vectorial</strong>: 
                    tiene una magnitud y dirección específicas en cada punto del espacio.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title text-cyan-highlight">📐 Gradiente del Potencial</h4>
                <p class="text-sm text-gray-300">
                    El campo eléctrico apunta en la dirección donde el potencial disminuye 
                    más rápidamente: \(\vec{E} = -\nabla V\)
                </p>
            </div>
        </div>
    </div>

    <!-- Relationship with Force -->
    <div class="content-card border-orange">
        <h2 class="card-title">💪 Relación con la Fuerza Eléctrica</h2>
        
        <div class="formula-section mb-4">
            <p class="card-paragraph">
                Si conoces el campo eléctrico en un punto, puedes calcular la fuerza sobre 
                cualquier carga \(q\) en ese punto:
            </p>
            <div class="formula-container">
                \( \vec{F} = q\vec{E} \)
            </div>
            
            <div class="grid-container">
                <div class="force-card border-green">
                    <p class="text-sm text-gray-300">
                        <strong class="text-emphasis">Si \(q > 0\):</strong><br>
                        La fuerza apunta en la <strong class="text-green-highlight">misma dirección</strong> que el campo
                    </p>
                </div>
                <div class="force-card border-blue">
                    <p class="text-sm text-gray-300">
                        <strong class="text-emphasis">Si \(q < 0\):</strong><br>
                        La fuerza apunta en <strong class="text-blue-highlight">dirección opuesta</strong> al campo
                    </p>
                </div>
            </div>
        </div>

        <div class="note border-yellow">
            <p class="text-sm text-gray-300">
                <strong class="text-yellow-highlight">💡 Ejemplo práctico:</strong> Si el sensor muestra un campo 
                de 1000 N/C hacia la derecha, y colocas una carga de +2 µC, experimentará una fuerza de 
                0.002 N hacia la derecha. Si la carga fuera -2 µC, la fuerza sería 0.002 N hacia la izquierda.
            </p>
        </div>
    </div>

    <!-- Tips and Tricks -->
    <div class="content-card-purple">
        <h2 class="card-title">💡 Consejos y Trucos</h2>
        
        <div class="list-container">
            <div class="duality-card">
                <h4 class="duality-title text-purple-highlight">🎯 Ubicación Estratégica</h4>
                <p class="text-sm text-gray-300">
                    Coloca sensores en ubicaciones clave: entre cargas, en ejes de simetría, 
                    y a diferentes distancias para obtener una comprensión completa del campo.
                </p>
            </div>

            <div class="duality-card">
                <h4 class="duality-title text-purple-highlight">🔄 Movimiento Dinámico</h4>
                <p class="text-sm text-gray-300">
                    Mueve un sensor alrededor del escenario y observa cómo cambia la flecha. 
                    Esto te da una intuición de cómo varía el campo en el espacio.
                </p>
            </div>

            <div class="duality-card">
                <h4 class="duality-title text-purple-highlight">📊 Comparación Cuantitativa</h4>
                <p class="text-sm text-gray-300">
                    Compara las longitudes de las flechas en diferentes sensores para identificar 
                    dónde el campo es más fuerte o más débil.
                </p>
            </div>

            <div class="duality-card">
                <h4 class="duality-title text-purple-highlight">🌐 Combina con Líneas de Campo</h4>
                <p class="text-sm text-gray-300">
                    Activa las líneas de campo globales y coloca sensores. Verás que las flechas 
                    son siempre <strong class="text-emphasis">tangentes</strong> a las líneas de campo.
                </p>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <div class="content-card border-orange">
        <h2 class="card-title">🎮 Controles del Sensor</h2>
        
        <div class="grid-container-3">
            <div class="control-card">
                <div class="control-icon">➕</div>
                <h4 class="property-title-orange">Agregar</h4>
                <p class="text-sm text-gray-300">
                    Clic en el botón de sensor de campo eléctrico. Aparece en el centro del lienzo.
                </p>
            </div>

            <div class="control-card">
                <div class="control-icon">🖱️</div>
                <h4 class="property-title-orange">Mover</h4>
                <p class="text-sm text-gray-300">
                    Mantén clic izquierdo sobre el sensor y arrástralo a cualquier posición.
                </p>
            </div>

            <div class="control-card">
                <div class="control-icon">❌</div>
                <h4 class="property-title-orange">Eliminar</h4>
                <p class="text-sm text-gray-300">
                    Coloca el cursor sobre el sensor y presiona la tecla <span class="key-badge">X</span>
                </p>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="summary-card">
        <h3 class="summary-title text-orange-highlight">📌 Resumen Clave</h3>
        <div class="summary-grid">
            <div class="summary-item">
                <p class="text-sm text-gray-300">
                    <strong class="text-emphasis">Función:</strong><br>
                    Visualiza dirección e intensidad del campo eléctrico
                </p>
            </div>
            <div class="summary-item">
                <p class="text-sm text-gray-300">
                    <strong class="text-emphasis">Representación:</strong><br>
                    Flecha vectorial (magnitud y dirección)
                </p>
            </div>
            <div class="summary-item">
                <p class="text-sm text-gray-300">
                    <strong class="text-emphasis">Utilidad:</strong><br>
                    Mapeo, análisis y comprensión del campo
                </p>
            </div>
        </div>
        <p class="summary-footer-orange">
            Herramienta esencial para visualizar y comprender la estructura del campo eléctrico
        </p>
    </div>
</div>`;
        return tpl;
    }

    get styles(): string {
        return `
        /* General Container and Spacing */
.container > * + * {
    margin-top: 1.5rem; /* space-y-6 */
}

/* Text Colors */
.text-white { color: #fff; }
.text-gray-300 { color: #d1d5db; }
.text-gray-400 { color: #9ca3af; }
.text-emphasis { color: #fff; font-weight: 700; }
.text-highlight-orange { color: #fb923c; } /* orange-400 */
.text-blue-highlight { color: #60a5fa; }
.text-green-highlight { color: #4ade80; }
.text-cyan-highlight { color: #22d3ee; }
.text-yellow-highlight { color: #facc15; }
.text-purple-highlight { color: #c084fc; }
.text-blue { color: #60a5fa; }
.text-green { color: #4ade80; }
.text-red { color: #f87171; }
.text-purple { color: #c084fc; }

/* Border Colors */
.border-orange { border-left: 4px solid #f97316; }
.border-orange-light { border-left: 4px solid #fb923c; }
.border-blue { border-left: 4px solid #3b82f6; }
.border-green { border-left: 4px solid #22c55e; }
.border-red { border-left: 4px solid #ef4444; }
.border-purple { border-left: 4px solid #a855f7; }
.border-emerald { border-left: 4px solid #10b981; }
.border-yellow { border-left: 4px solid #eab308; }

/* Basic Card Styles */
.content-card, .content-card-cyan, .content-card-purple {
    padding: 1.5rem; /* p-6 */
    border-radius: 0.75rem; /* rounded-xl */
    background-color: #212121;
}
.content-card-cyan { background-color: #181818; border-left: 4px solid #06b6d4; }
.content-card-purple { background-color: #181818; border-left: 4px solid #a855f7; }

.card-title {
    font-size: 1.5rem; /* text-2xl */
    font-weight: 700; /* font-bold */
    color: #fff; /* text-white */
    margin-bottom: 1rem; /* mb-4 */
}

.card-paragraph {
    color: #d1d5db; /* text-gray-300 */
    line-height: 1.625; /* leading-relaxed */
    margin-bottom: 0.75rem; /* mb-3 */
}

/* Hero Section */
.hero-section {
    text-align: center; /* text-center */
    padding: 2rem; /* p-8 */
    color: #fff; /* text-white */
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
}
.orange-gradient { background-image: linear-gradient(to bottom right, #ea580c, #c2410c, #7c2d12); }

.hero-icon { font-size: 3.75rem; margin-bottom: 1rem; }
.hero-title { font-size: 2.25rem; font-weight: 700; margin-bottom: 0.75rem; }
.hero-subtitle { font-size: 1.25rem; opacity: 0.95; }

/* Grid Layout */
.grid-container { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
.grid-container-3 { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }

/* Property & Application Cards */
.property-card, .application-card, .duality-card, .control-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}

.property-title-orange {
    font-weight: 700; /* font-bold */
    color: #fb923c; /* text-orange-400 */
    margin-bottom: 0.5rem; /* mb-2 */
}

.application-title { font-weight: 700; margin-bottom: 0.5rem; }
.text-cyan-highlight { color: #22d3ee; }

/* Formula Sections */
.formula-section { padding: 1.25rem; border-radius: 0.5rem; background-color: #303030; }
.formula-container { text-align: center; margin: 0.75rem 0; }
.formula-caption { color: #9ca3af; font-size: 0.875rem; }
.formula-title { text-align: center; font-weight: 700; margin-bottom: 0.75rem; }

/* List Styles */
.list-container { display: flex; flex-direction: column; gap: 0.75rem; }
.list-item { display: flex; align-items: flex-start; }
.list-item-bullet-orange { color: #f97316; margin-right: 0.75rem; flex-shrink: 0; }

/* Interpretation Cards */
.interpretation-card { padding: 1rem; border-radius: 0.5rem; background-color: #303030; }
.interpretation-title { font-weight: 700; margin-bottom: 0.5rem; }

/* Use Case/Tip Cards */
.tip-card { padding: 1rem; border-radius: 0.5rem; background-color: #303030; }
.text-emerald-highlight { color: #34d399; font-weight: 700; }

/* Force & Note Cards */
.force-card { padding: 0.75rem; border-radius: 0.25rem; background-color: #212121; }
.note { padding: 1rem; border-radius: 0.5rem; background-color: #303030; }

/* Duality & Control Cards */
.duality-title { font-weight: 700; margin-bottom: 0.5rem; }
.control-card { text-align: center; }
.control-icon { font-size: 1.875rem; margin-bottom: 0.5rem; }
.key-badge { background-color: #ea580c; color: #fff; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.75rem; font-weight: 700; }

/* Summary Card */
.summary-card { padding: 1.5rem; border-radius: 0.75rem; text-align: center; background-color: #06202B; }
.summary-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; }
.text-orange-highlight { color: #fb923c; }
.summary-grid { display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; text-align: left; }
.summary-item { padding: 0.75rem; border-radius: 0.25rem; background-color: #212121; }
.summary-footer-orange { color: #fdba74; font-size: 0.875rem; margin-top: 1rem; font-style: italic; }

/* Utility Classes */
.mb-4 { margin-bottom: 1rem; }
.mt-3 { margin-top: 0.75rem; }
.text-center { text-align: center; }
.text-sm { font-size: 0.875rem; }

/* Responsive Adjustments */
@media (min-width: 768px) {
    .hero-title { font-size: 3rem; }
    .hero-subtitle { font-size: 1.5rem; }
    .grid-container { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-container-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .summary-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

        `;
    }
}

customElements.define('electric-docs', ElectricFieldDocs);