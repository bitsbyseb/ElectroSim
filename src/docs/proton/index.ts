class ProtonDocs extends HTMLElement {
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
        <div class="proton-container">
    <!-- Hero Section -->
    <div class="proton-hero">
        <div class="proton-icon">🔴</div>
        <h1 class="proton-title">Protón (+)</h1>
        <p class="proton-subtitle">Partícula con Carga Positiva</p>
    </div>

    <!-- Introduction -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">⚛️ ¿Qué es un Protón?</h2>
        <p class="proton-text">
            El <strong class="proton-text-highlight">protón</strong> es una partícula subatómica con carga eléctrica positiva 
            que se encuentra en el núcleo de los átomos. Es una de las partículas fundamentales que 
            componen la materia junto con los neutrones y electrones.
        </p>
        <p class="proton-text">
            En este simulador, el protón representa cualquier <strong class="proton-text-white">carga positiva</strong> 
            que genera un campo eléctrico radial apuntando hacia afuera.
        </p>
    </div>

    <!-- Properties -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">📊 Propiedades Fundamentales</h2>
        
        <div class="proton-properties-grid">
            <div class="proton-property-card">
                <h3 class="proton-property-title">Carga Eléctrica</h3>
                <p class="proton-property-text">
                    La carga del protón es la <strong class="proton-text-white">carga elemental positiva</strong>:
                </p>
                <div class="proton-formula-content">
                    \\\[ q_p = +e = +1.602 \\\times 10^{-19} \\\text{ C} \\\]
                </div>
                <p class="proton-property-note">
                    Donde \\\(e\\\) es la magnitud de la carga elemental y C representa Coulombs.
                </p>
            </div>

            <div class="proton-property-card">
                <h3 class="proton-property-title">Masa</h3>
                <p class="proton-property-text">
                    La masa del protón es aproximadamente:
                </p>
                <div class="proton-formula-content">
                    \\\[ m_p = 1.673 \\\times 10^{-27} \\\text{ kg} \\\]
                </div>
                <p class="proton-property-note">
                    Es aproximadamente 1836 veces más pesado que un electrón.
                </p>
            </div>

            <div class="proton-property-card proton-card-full">
                <h3 class="proton-property-title">Estabilidad</h3>
                <p class="proton-property-text">
                    El protón es una partícula <strong class="proton-text-white">extremadamente estable</strong>. 
                    Su vida media es mayor que la edad del universo (\\\( > 10^{34} \\\) años), 
                    lo que lo hace esencialmente estable para propósitos prácticos.
                </p>
            </div>
        </div>
    </div>

    <!-- Electric Field -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">⚡ Campo Eléctrico Generado</h2>
        
        <p class="proton-text proton-mb-4">
            Una carga positiva como el protón genera un <strong class="proton-text-white">campo eléctrico radial</strong> 
            que apunta hacia afuera en todas las direcciones. La magnitud del campo está dada por:
        </p>

        <div class="proton-formula-box">
            <h3 class="proton-formula-title">Magnitud del Campo</h3>
            <div class="proton-formula-content">
                \\[ E = \\frac{k |q|}{r^2} = \\frac{k e}{r^2} \\]
            </div>
            <p class="proton-formula-note proton-mb-4">
                Donde \\(k\\) es la constante de Coulomb y \\(r\\) es la distancia a la carga
            </p>

            <h3 class="proton-formula-title proton-formula-spacing">Forma Vectorial</h3>
            <div class="proton-formula-content">
                \\[ \\vec{E} = \\frac{k q}{r^2}\\hat{r} \\]
            </div>
            <p class="proton-formula-note proton-mt-4">
                El vector \\(\\hat{r}\\) apunta <strong class="proton-text-white">radialmente hacia afuera</strong> desde el protón
            </p>
        </div>

        <div class="proton-info-box proton-info-blue">
            <p class="proton-text">
                <strong class="proton-info-title">💡 Nota importante:</strong> El campo eléctrico disminuye con 
                el cuadrado de la distancia (\\(\\frac{1}{r^2}\\)), conocida como la 
                <strong class="proton-text-white">ley del inverso del cuadrado</strong>.
            </p>
        </div>
    </div>

    <!-- Potential -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">📈 Potencial Eléctrico</h2>
        
        <p class="proton-text proton-mb-4">
            El potencial eléctrico generado por un protón (carga positiva) en un punto 
            a distancia \\(r\\) es:
        </p>

        <div class="proton-formula-box">
            <div class="proton-formula-content proton-mb-4">
                \\[ V = \\frac{k q}{r} = \\frac{k e}{r} \\]
            </div>
            
            <div class="proton-variable-list">
                <p class="proton-variable-item">
                    <span class="proton-variable-bullet">▸</span>
                    <span>\\(V\\) es el potencial eléctrico en voltios (V)</span>
                </p>
                <p class="proton-variable-item">
                    <span class="proton-variable-bullet">▸</span>
                    <span>\\(k = 8.99 \\times 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2\\) (constante de Coulomb)</span>
                </p>
                <p class="proton-variable-item">
                    <span class="proton-variable-bullet">▸</span>
                    <span>\\(e = 1.602 \\times 10^{-19}\\) C (carga elemental)</span>
                </p>
                <p class="proton-variable-item">
                    <span class="proton-variable-bullet">▸</span>
                    <span>\\(r\\) es la distancia al protón en metros</span>
                </p>
            </div>
        </div>

        <div class="proton-info-box proton-info-yellow">
            <p class="proton-text">
                <strong class="proton-info-title">⚠️ Característica:</strong> El potencial de una carga positiva 
                es siempre <strong class="proton-text-white">positivo</strong> y disminuye con \\(\\frac{1}{r}\\) 
                (no con \\(\\frac{1}{r^2}\\) como el campo).
            </p>
        </div>
    </div>

    <!-- Field Lines -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">〰️ Líneas de Campo</h2>
        
        <div class="proton-formula-box proton-mb-4">
            <p class="proton-text proton-mb-4">
                Las líneas de campo eléctrico de un protón (carga positiva) tienen 
                características específicas:
            </p>

            <div class="proton-fieldlines-grid">
                <div class="proton-fieldline-card">
                    <h4 class="proton-fieldline-title">🎯 Dirección</h4>
                    <p class="proton-fieldline-text">
                        Salen radialmente <strong class="proton-text-white">hacia afuera</strong> desde el protón 
                        en todas las direcciones del espacio.
                    </p>
                </div>

                <div class="proton-fieldline-card">
                    <h4 class="proton-fieldline-title">🔄 Simetría</h4>
                    <p class="proton-fieldline-text">
                        Distribución <strong class="proton-text-white">esféricamente simétrica</strong> alrededor 
                        de la carga puntual.
                    </p>
                </div>

                <div class="proton-fieldline-card">
                    <h4 class="proton-fieldline-title">📏 Densidad</h4>
                    <p class="proton-fieldline-text">
                        La densidad de líneas es proporcional a la <strong class="proton-text-white">intensidad del campo</strong>. 
                        Más cercano = más líneas por área.
                    </p>
                </div>

                <div class="proton-fieldline-card">
                    <h4 class="proton-fieldline-title">∞ Extensión</h4>
                    <p class="proton-fieldline-text">
                        Las líneas se extienden hasta el infinito, aunque su efecto 
                        <strong class="proton-text-white">disminuye con la distancia</strong>.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Interactions -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">🤝 Interacciones con Otras Cargas</h2>
        
        <p class="proton-text proton-mb-4">
            La fuerza eléctrica entre un protón y otra carga está dada por la 
            <strong class="proton-text-white">Ley de Coulomb</strong>:
        </p>

        <div class="proton-formula-box proton-mb-4">
            <div class="proton-formula-content proton-mb-4">
                \\[ \\vec{F} = k \\frac{q_1 q_2}{r^2}\\hat{r}_{12} \\]
            </div>
            <p class="proton-formula-note">
                Donde \\(q_1\\) y \\(q_2\\) son las magnitudes de las cargas
            </p>
        </div>

        <div class="proton-interaction-grid">
            <div class="proton-interaction-card proton-interaction-red">
                <h3 class="proton-interaction-title proton-interaction-title-red">⚡ Con otro Protón (+)</h3>
                <p class="proton-text">
                    Dos cargas positivas se <strong class="proton-text-white">repelen</strong>:
                </p>
                <div class="proton-formula-content">
                    \\[ F > 0 \\quad (\\text{repulsión}) \\]
                </div>
                <p class="proton-property-note">
                    La fuerza apunta alejando ambas cargas entre sí.
                </p>
            </div>

            <div class="proton-interaction-card proton-interaction-blue">
                <h3 class="proton-interaction-title proton-interaction-title-blue">🧲 Con un Electrón (−)</h3>
                <p class="proton-text">
                    Cargas opuestas se <strong class="proton-text-white">atraen</strong>:
                </p>
                <div class="proton-formula-content">
                    \\[ F < 0 \\quad (\\text{atracción}) \\]
                </div>
                <p class="proton-property-note">
                    La fuerza apunta acercando ambas cargas.
                </p>
            </div>
        </div>
    </div>

    <!-- Elementary Charge -->
    <div class="proton-box proton-box-cyan">
        <h2 class="proton-section-title">🔬 La Carga Elemental</h2>
        
        <p class="proton-text proton-mb-4">
            La <strong class="proton-text-cyan">carga elemental</strong> \\(e\\) es la unidad fundamental 
            de carga eléctrica en la naturaleza. Es la magnitud de la carga del protón (positiva) 
            y del electrón (negativa).
        </p>

        <div class="proton-formula-box proton-mb-4">
            <div class="proton-formula-content proton-mb-4">
                \\[ e = 1.602176634 \\times 10^{-19} \\text{ C} \\]
            </div>
            <p class="proton-formula-note">
                Valor exacto definido desde 2019 por el Sistema Internacional de Unidades
            </p>
        </div>

        <div class="proton-tips-container">
            <div class="proton-charge-card">
                <h4 class="proton-charge-title">⚛️ Cuantización de la Carga</h4>
                <p class="proton-charge-text">
                    Toda carga eléctrica observable es un múltiplo entero de la carga elemental:
                </p>
                <div class="proton-formula-content">
                    \\[ Q = n \\cdot e \\quad \\text{donde } n \\in \\mathbb{Z} \\]
                </div>
            </div>

            <div class="proton-charge-card">
                <h4 class="proton-charge-title">🎯 Constante Fundamental</h4>
                <p class="proton-charge-text">
                    La carga elemental es una de las <strong class="proton-text-white">constantes fundamentales 
                    de la naturaleza</strong>, junto con la velocidad de la luz \\(c\\) y la constante 
                    de Planck \\(h\\).
                </p>
            </div>
        </div>
    </div>

    <!-- Energy -->
    <div class="proton-box proton-box-red">
        <h2 class="proton-section-title">⚡ Energía Potencial Eléctrica</h2>
        
        <p class="proton-text proton-mb-4">
            La energía potencial eléctrica de una carga \\(q\\) en presencia de un protón 
            a distancia \\(r\\) es:
        </p>

        <div class="proton-formula-box">
            <div class="proton-formula-content proton-mb-4">
                \\[ U = k \\frac{q_1 q_2}{r} = \\frac{k e q}{r} \\]
            </div>
            
            <div class="proton-energy-grid">
                <div class="proton-energy-card proton-energy-red">
                    <p class="proton-fieldline-text">
                        <strong class="proton-text-white">Si \\(q > 0\\):</strong> \\(U > 0\\) (se repelen, 
                        energía positiva)
                    </p>
                </div>
                <div class="proton-energy-card proton-energy-blue">
                    <p class="proton-fieldline-text">
                        <strong class="proton-text-white">Si \\(q < 0\\):</strong> \\(U < 0\\) (se atraen, 
                        energía negativa)
                    </p>
                </div>
            </div>
        </div>

        <div class="proton-info-box proton-info-yellow">
            <p class="proton-fieldline-text">
                <strong class="proton-info-title">💡 Interpretación:</strong> Cuando \\(U > 0\\), 
                se requiere energía para mantener las cargas juntas. Cuando \\(U < 0\\), 
                se libera energía cuando las cargas se acercan.
            </p>
        </div>
    </div>

    <!-- Practical Tips -->
    <div class="proton-box proton-box-emerald">
        <h2 class="proton-section-title">🎮 Experimentación en el Simulador</h2>
        
        <div class="proton-tips-container">
            <div class="proton-tip-card">
                <strong class="proton-tip-title">🔴 Un solo protón:</strong>
                <span class="proton-text"> Observa cómo las líneas de campo se distribuyen 
                uniformemente en todas las direcciones, creando un patrón radial perfecto.</span>
            </div>

            <div class="proton-tip-card">
                <strong class="proton-tip-title">🔴🔴 Dos protones:</strong>
                <span class="proton-text"> Coloca dos protones cerca y observa cómo se repelen. 
                Las líneas de campo se "empujan" entre sí, creando regiones donde no hay líneas.</span>
            </div>

            <div class="proton-tip-card">
                <strong class="proton-tip-title">🔴🔵 Protón y electrón:</strong>
                <span class="proton-text"> Crea un par protón-electrón (dipolo eléctrico) y 
                observa cómo las líneas de campo van del protón al electrón, mostrando atracción.</span>
            </div>

            <div class="proton-tip-card">
                <strong class="proton-tip-title">📍 Usa sensores:</strong>
                <span class="proton-text"> Coloca sensores de campo a diferentes distancias del 
                protón para visualizar cómo disminuye la intensidad con \\(1/r^2\\).</span>
            </div>
        </div>
    </div>

    <!-- Historical Context -->
    <div class="proton-box proton-box-purple">
        <h2 class="proton-section-title">📚 Contexto Histórico</h2>
        
        <div class="proton-history-text">
            <p class="proton-leading-relaxed">
                El protón fue descubierto por <strong class="proton-text-white">Ernest Rutherford</strong> en 1917, 
                aunque su existencia se había inferido previamente de experimentos con tubos de rayos catódicos.
            </p>
            
            <p class="proton-leading-relaxed">
                El término "protón" proviene del griego <em class="proton-text-purple">πρῶτον</em> (prōton), 
                que significa "primero", ya que se pensaba que era la partícula fundamental de todos 
                los núcleos atómicos.
            </p>

            <p class="proton-leading-relaxed">
                Hoy sabemos que el protón está compuesto por <strong class="proton-text-white">quarks</strong> 
                (dos quarks "up" y un quark "down"), pero para el estudio del electromagnetismo clásico, 
                lo tratamos como una carga puntual.
            </p>
        </div>
    </div>

    <!-- Summary -->
    <div class="proton-summary">
        <h3 class="proton-summary-title">📌 Resumen Clave</h3>
        <div class="proton-summary-grid">
            <div class="proton-summary-item">
                <p class="proton-summary-text">
                    <strong class="proton-text-white">Carga:</strong><br>
                    \\(+e = +1.602 \\times 10^{-19}\\) C
                </p>
            </div>
            <div class="proton-summary-item">
                <p class="proton-summary-text">
                    <strong class="proton-text-white">Campo:</strong><br>
                    Radial hacia afuera
                </p>
            </div>
            <div class="proton-summary-item">
                <p class="proton-summary-text">
                    <strong class="proton-text-white">Interacción:</strong><br>
                    Repele (+), Atrae (−)
                </p>
            </div>
        </div>
    </div>
</div>`;
        return tpl;
    }

    get styles(): string {
        return `/* Estilos para Documentación del Protón */

.proton-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Hero Section */
.proton-hero {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%);
    color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.proton-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.proton-title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.proton-subtitle {
    font-size: 1.25rem;
    opacity: 0.95;
}

@media (min-width: 768px) {
    .proton-title {
        font-size: 3rem;
    }
    
    .proton-subtitle {
        font-size: 1.5rem;
    }
}

/* Content Boxes */
.proton-box {
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid;
    background-color: #212121;
}

.proton-box-red {
    border-left-color: #ef4444;
}

.proton-box-cyan {
    border-left-color: #06b6d4;
    background-color: #181818;
}

.proton-box-purple {
    border-left-color: #a855f7;
    background-color: #181818;
}

.proton-box-emerald {
    border-left-color: #10b981;
}

/* Typography */
.proton-section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
}

.proton-text {
    color: #d1d5db;
    line-height: 1.625;
    margin-bottom: 0.75rem;
}

.proton-text-highlight {
    color: #f87171;
    font-weight: bold;
}

.proton-text-white {
    color: white;
    font-weight: bold;
}

.proton-text-cyan {
    color: #22d3ee;
    font-weight: bold;
}

.proton-text-purple {
    color: #c084fc;
    font-style: italic;
}

/* Property Cards Grid */
.proton-properties-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .proton-properties-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.proton-property-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #f87171;
    background-color: #303030;
}

.proton-property-title {
    font-size: 1.125rem;
    font-weight: bold;
    color: #f87171;
    margin-bottom: 0.5rem;
}

.proton-property-text {
    color: #d1d5db;
    margin-bottom: 0.5rem;
}

.proton-property-note {
    color: #9ca3af;
    font-size: 0.875rem;
}

.proton-card-full {
    grid-column: span 1;
}

@media (min-width: 768px) {
    .proton-card-full {
        grid-column: span 2;
    }
}

/* Formula Boxes */
.proton-formula-box {
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: #303030;
}

.proton-formula-title {
    text-align: center;
    color: #f87171;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.proton-formula-content {
    text-align: center;
    margin-bottom: 0.75rem;
}

.proton-formula-note {
    color: #9ca3af;
    text-align: center;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.proton-formula-spacing {
    margin-top: 1.5rem;
}

/* Info Boxes */
.proton-info-box {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid;
    background-color: #181818;
}

.proton-info-blue {
    border-left-color: #3b82f6;
}

.proton-info-yellow {
    border-left-color: #eab308;
    background-color: #303030;
}

.proton-info-title {
    font-weight: bold;
}

.proton-info-blue .proton-info-title {
    color: #60a5fa;
}

.proton-info-yellow .proton-info-title {
    color: #fbbf24;
}

/* Field Lines Grid */
.proton-fieldlines-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .proton-fieldlines-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.proton-fieldline-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #f87171;
    background-color: #212121;
}

.proton-fieldline-title {
    color: #f87171;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.proton-fieldline-text {
    color: #d1d5db;
    font-size: 0.875rem;
}

/* Interaction Cards */
.proton-interaction-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .proton-interaction-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.proton-interaction-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid;
    background-color: #303030;
}

.proton-interaction-red {
    border-left-color: #ef4444;
}

.proton-interaction-blue {
    border-left-color: #3b82f6;
}

.proton-interaction-title {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.proton-interaction-title-red {
    color: #f87171;
}

.proton-interaction-title-blue {
    color: #60a5fa;
}

/* Variable List */
.proton-variable-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.proton-variable-item {
    display: flex;
    align-items: flex-start;
    color: #d1d5db;
}

.proton-variable-bullet {
    color: #ef4444;
    margin-right: 0.75rem;
    flex-shrink: 0;
}

/* Elementary Charge Section */
.proton-charge-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #303030;
}

.proton-charge-title {
    color: #22d3ee;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.proton-charge-text {
    color: #d1d5db;
    font-size: 0.875rem;
    line-height: 1.625;
}

/* Energy Cards */
.proton-energy-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .proton-energy-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.proton-energy-card {
    padding: 0.75rem;
    border-radius: 0.25rem;
    border-left: 4px solid;
    background-color: #212121;
}

.proton-energy-red {
    border-left-color: #f87171;
}

.proton-energy-blue {
    border-left-color: #60a5fa;
}

/* Experiment Tips */
.proton-tips-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.proton-tip-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #10b981;
    background-color: #303030;
}

.proton-tip-title {
    color: #34d399;
    font-weight: bold;
}

/* Historical Context */
.proton-history-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #d1d5db;
}

/* Summary Section */
.proton-summary {
    padding: 1.5rem;
    border-radius: 0.75rem;
    text-align: center;
    background-color: #06202B;
}

.proton-summary-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #f87171;
    margin-bottom: 0.75rem;
}

.proton-summary-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: left;
}

@media (min-width: 768px) {
    .proton-summary-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.proton-summary-item {
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: #212121;
}

.proton-summary-text {
    color: #d1d5db;
    font-size: 0.875rem;
}

/* Utility Classes */
.proton-mb-4 {
    margin-bottom: 1rem;
}

.proton-mt-4 {
    margin-top: 1rem;
}

.proton-text-center {
    text-align: center;
}

.proton-leading-relaxed {
    line-height: 1.625;
}`;
    }
}

customElements.define('proton-docs', ProtonDocs);