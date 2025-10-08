class PotentialDocs extends HTMLElement {
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
        <div class="potential-container">
    <!-- Hero Section -->
    <div class="potential-hero">
        <div class="potential-icon">📊</div>
        <h1 class="potential-title">Sensor de Potencial Eléctrico</h1>
        <p class="potential-subtitle">Medidor de Energía Potencial Eléctrica</p>
    </div>

    <!-- Introduction -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">🎯 ¿Qué es el Sensor de Potencial?</h2>
        <p class="potential-text potential-mb-3">
            El <strong class="potential-text-highlight">sensor de potencial eléctrico</strong> es una herramienta que 
            mide el valor del potencial eléctrico (voltaje) en un punto específico del espacio.
        </p>
        <p class="potential-text">
            A diferencia del campo eléctrico (que es vectorial), el potencial eléctrico es una 
            <strong class="potential-text-white">magnitud escalar</strong>, es decir, solo tiene valor numérico 
            sin dirección asociada.
        </p>
    </div>

    <!-- What is Potential -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">⚡ ¿Qué es el Potencial Eléctrico?</h2>
        
        <div class="potential-inner-box">
            <p class="potential-text potential-mb-4">
                El potencial eléctrico en un punto es la <strong class="potential-text-white">energía potencial 
                eléctrica por unidad de carga</strong> en ese punto:
            </p>
            <div class="potential-formula-content">
                \[ V = \frac{U}{q_0} \]
            </div>
            <p class="potential-formula-note">
                Donde \(U\) es la energía potencial y \(q_0\) es una carga de prueba
            </p>
        </div>

        <div class="potential-grid-2">
            <div class="potential-property-card">
                <h4 class="potential-property-title">📏 Unidades</h4>
                <p class="potential-property-text potential-mb-3">
                    Se mide en <strong class="potential-text-white">Voltios (V)</strong>:
                </p>
                <div class="potential-text-center potential-text-sm">
                    \[ 1 \text{ V} = 1 \frac{\text{J}}{\text{C}} \]
                </div>
            </div>

            <div class="potential-property-card">
                <h4 class="potential-property-title">🎯 Signo</h4>
                <p class="potential-property-text">
                    \(V > 0\) cerca de cargas positivas<br>
                    \(V < 0\) cerca de cargas negativas
                </p>
            </div>
        </div>
    </div>

    <!-- Mathematical Foundation -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">📐 Fórmulas Fundamentales</h2>
        
        <div class="potential-formula-section">
            <div class="potential-formula-box">
                <h3 class="potential-formula-title">Potencial de una Carga Puntual</h3>
                <div class="potential-formula-content">
                    \[ V = \frac{kQ}{r} \]
                </div>
                <div class="potential-formula-list">
                    <p>• \(V\) = Potencial eléctrico (V)</p>
                    <p>• \(k = 8.99 \times 10^9\) N·m²/C²</p>
                    <p>• \(Q\) = Carga fuente (C)</p>
                    <p>• \(r\) = Distancia a la carga (m)</p>
                </div>
            </div>

            <div class="potential-formula-box">
                <h3 class="potential-formula-title">Principio de Superposición</h3>
                <div class="potential-formula-content">
                    \[ V_{\text{total}} = \sum_{i=1}^{n} \frac{kQ_i}{r_i} \]
                </div>
                <p class="potential-formula-note">
                    Suma algebraica simple (no vectorial)
                </p>
            </div>

            <div class="potential-formula-box">
                <h3 class="potential-formula-title">Relación con el Campo Eléctrico</h3>
                <div class="potential-formula-content">
                    \[ \vec{E} = -\nabla V \]
                </div>
                <p class="potential-formula-note">
                    El campo apunta donde el potencial disminuye más rápido
                </p>
            </div>
        </div>
    </div>

    <!-- How it Works -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">⚙️ ¿Cómo Funciona el Sensor?</h2>
        
        <div class="potential-grid-2">
            <div class="potential-property-card">
                <h4 class="potential-property-title">📊 Visualización</h4>
                <p class="potential-property-text">
                    Muestra el <strong class="potential-text-white">valor numérico</strong> del potencial, 
                    sin flecha (es escalar, no vectorial).
                </p>
            </div>

            <div class="potential-property-card">
                <h4 class="potential-property-title">🔄 Actualización</h4>
                <p class="potential-property-text">
                    Se actualiza en <strong class="potential-text-white">tiempo real</strong> al mover 
                    cargas o modificar el escenario.
                </p>
            </div>
        </div>
    </div>

    <!-- Interpretation Guide -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">🔍 Guía de Interpretación</h2>
        
        <div class="potential-space-y-3">
            <div class="potential-interpretation-card potential-card-red">
                <h4 class="potential-card-title potential-title-red">🔴 Cerca de Carga Positiva</h4>
                <p class="potential-property-text">
                    \(V\) es positivo y alto. Disminuye con \(1/r\) al alejarse.
                </p>
            </div>

            <div class="potential-interpretation-card potential-card-blue">
                <h4 class="potential-card-title potential-title-blue">🔵 Cerca de Carga Negativa</h4>
                <p class="potential-property-text">
                    \(V\) es negativo. Se hace menos negativo al alejarse.
                </p>
            </div>

            <div class="potential-interpretation-card potential-card-purple">
                <h4 class="potential-card-title potential-title-purple">🔴🔵 Entre Cargas Opuestas</h4>
                <p class="potential-property-text">
                    Existe un punto donde \(V = 0\) (equilibrio de potenciales).
                </p>
            </div>

            <div class="potential-interpretation-card potential-card-yellow">
                <h4 class="potential-card-title potential-title-yellow">🔴🔴 o 🔵🔵 Mismo Signo</h4>
                <p class="potential-property-text">
                    Los potenciales se suman. Nunca hay un punto con \(V = 0\) entre ellas.
                </p>
            </div>
        </div>
    </div>

    <!-- Physical Meaning -->
    <div class="potential-box potential-box-cyan">
        <h2 class="potential-section-title">🌟 Significado Físico</h2>
        
        <div class="potential-meaning-box">
            <h3 class="potential-meaning-title">¿Qué Representa?</h3>
            <ul class="potential-list">
                <li>• Energía potencial por unidad de carga</li>
                <li>• Trabajo necesario para traer una carga desde el infinito</li>
                <li>• "Altura" en el paisaje energético del campo eléctrico</li>
            </ul>
        </div>

        <div class="potential-interpretation-card potential-card-cyan">
            <h4 class="potential-card-title potential-title-cyan">⚡ Analogía</h4>
            <p class="potential-property-text">
                Como la altura en gravedad: las cargas positivas "ruedan" de alto a bajo potencial, 
                igual que una pelota rueda cuesta abajo.
            </p>
        </div>
    </div>

    <!-- Use Cases -->
    <div class="potential-box potential-box-emerald">
        <h2 class="potential-section-title">🎮 Casos de Uso Prácticos</h2>
        
        <div class="potential-usecase-container">
            <div class="potential-usecase-card">
                <strong class="potential-usecase-title">🗺️ Mapeo:</strong>
                <span class="potential-text"> Coloca sensores en cuadrícula para visualizar 
                el "paisaje" del potencial eléctrico.</span>
            </div>

            <div class="potential-usecase-card">
                <strong class="potential-usecase-title">📏 Ley \(1/r\):</strong>
                <span class="potential-text"> Observa cómo el potencial disminuye con \(1/r\) 
                (más lento que el campo que va con \(1/r^2\)).</span>
            </div>

            <div class="potential-usecase-card">
                <strong class="potential-usecase-title">⚡ Diferencias \(\Delta V\):</strong>
                <span class="potential-text"> Usa dos sensores para calcular voltajes. 
                Esta diferencia determina el trabajo para mover cargas.</span>
            </div>

            <div class="potential-usecase-card">
                <strong class="potential-usecase-title">🌊 Equipotenciales:</strong>
                <span class="potential-text"> Encuentra puntos con igual potencial para 
                trazar líneas equipotenciales (perpendiculares al campo).</span>
            </div>
        </div>
    </div>

    <!-- Comparison -->
    <div class="potential-box potential-box-purple">
        <h2 class="potential-section-title">⚖️ Potencial vs Campo Eléctrico</h2>
        
        <div class="potential-grid-2">
            <div class="potential-comparison-card">
                <h4 class="potential-comparison-title potential-title-green">📊 Potencial (V)</h4>
                <ul class="potential-list">
                    <li>• Magnitud escalar</li>
                    <li>• Unidades: Voltios (V)</li>
                    <li>• Disminuye con \(1/r\)</li>
                    <li>• Suma algebraica simple</li>
                    <li>• Más fácil de calcular</li>
                </ul>
            </div>

            <div class="potential-comparison-card">
                <h4 class="potential-comparison-title potential-title-orange">📏 Campo (\(\vec{E}\))</h4>
                <ul class="potential-list">
                    <li>• Magnitud vectorial</li>
                    <li>• Unidades: N/C o V/m</li>
                    <li>• Disminuye con \(1/r^2\)</li>
                    <li>• Suma vectorial compleja</li>
                    <li>• Más complejo de calcular</li>
                </ul>
            </div>
        </div>

        <div class="potential-mt-4 potential-interpretation-card potential-card-cyan">
            <p class="potential-property-text">
                <strong class="potential-title-cyan">🔗 Relación:</strong> 
                \(\vec{E} = -\nabla V\). El campo apunta donde el potencial disminuye. 
                Las líneas equipotenciales son perpendiculares a las líneas de campo.
            </p>
        </div>
    </div>

    <!-- Energy Calculations -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">⚡ Cálculos de Energía</h2>
        
        <div class="potential-grid-2">
            <div class="potential-formula-box">
                <h3 class="potential-formula-title">Energía Potencial</h3>
                <div class="potential-formula-content">
                    \[ U = qV \]
                </div>
                <p class="potential-formula-note">
                    Energía de una carga \(q\) en potencial \(V\)
                </p>
            </div>

            <div class="potential-formula-box">
                <h3 class="potential-formula-title">Trabajo</h3>
                <div class="potential-formula-content">
                    \[ W = q\Delta V \]
                </div>
                <p class="potential-formula-note">
                    Trabajo para mover carga \(q\) con diferencia \(\Delta V\)
                </p>
            </div>
        </div>
    </div>

    <!-- Controls -->
    <div class="potential-box potential-box-green">
        <h2 class="potential-section-title">🎮 Controles del Sensor</h2>
        
        <div class="potential-grid-3">
            <div class="potential-control-card">
                <div class="potential-control-icon">➕</div>
                <h4 class="potential-control-title">Agregar</h4>
                <p class="potential-control-text">
                    Clic en botón de sensor de potencial
                </p>
            </div>

            <div class="potential-control-card">
                <div class="potential-control-icon">🖱️</div>
                <h4 class="potential-control-title">Mover</h4>
                <p class="potential-control-text">
                    Mantén clic y arrastra
                </p>
            </div>

            <div class="potential-control-card">
                <div class="potential-control-icon">❌</div>
                <h4 class="potential-control-title">Eliminar</h4>
                <p class="potential-control-text">
                    Cursor sobre sensor + tecla <span class="potential-key">X</span>
                </p>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="potential-summary">
        <h3 class="potential-summary-title">📌 Resumen Clave</h3>
        <div class="potential-summary-grid">
            <div class="potential-summary-item">
                <p class="potential-summary-text">
                    <strong class="potential-text-white">Tipo:</strong><br>
                    Magnitud escalar (sin dirección)
                </p>
            </div>
            <div class="potential-summary-item">
                <p class="potential-summary-text">
                    <strong class="potential-text-white">Función:</strong><br>
                    Energía potencial por carga
                </p>
            </div>
            <div class="potential-summary-item">
                <p class="potential-summary-text">
                    <strong class="potential-text-white">Disminución:</strong><br>
                    Proporcional a \(1/r\)
                </p>
            </div>
        </div>
        <p class="potential-summary-note">
            Herramienta fundamental para analizar energía y trabajo en campos eléctricos
        </p>
    </div>
</div>`;
        return tpl;
    }

    get styles(): string {
        return `/* Estilos para Documentación del Sensor de Potencial */

.potential-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Hero Section */
.potential-hero {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #16a34a 0%, #15803d 50%, #14532d 100%);
    color: white;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.potential-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.potential-title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.potential-subtitle {
    font-size: 1.25rem;
    opacity: 0.95;
}

@media (min-width: 768px) {
    .potential-title {
        font-size: 3rem;
    }
    
    .potential-subtitle {
        font-size: 1.5rem;
    }
}

/* Content Boxes */
.potential-box {
    padding: 1.5rem;
    border-radius: 0.75rem;
    border-left: 4px solid;
    background-color: #212121;
}

.potential-box-green {
    border-left-color: #22c55e;
}

.potential-box-cyan {
    border-left-color: #06b6d4;
    background-color: #181818;
}

.potential-box-purple {
    border-left-color: #a855f7;
    background-color: #181818;
}

.potential-box-emerald {
    border-left-color: #10b981;
}

/* Typography */
.potential-section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin-bottom: 1rem;
}

.potential-text {
    color: #d1d5db;
    line-height: 1.625;
    margin-bottom: 0.75rem;
}

.potential-text-highlight {
    color: #4ade80;
    font-weight: bold;
}

.potential-text-white {
    color: white;
    font-weight: bold;
}

.potential-text-cyan {
    color: #22d3ee;
    font-weight: bold;
}

.potential-text-sm {
    font-size: 0.875rem;
}

/* Inner Boxes */
.potential-inner-box {
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: #303030;
    margin-bottom: 1rem;
}

/* Grid Layouts */
.potential-grid-2 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .potential-grid-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

.potential-grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .potential-grid-3 {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Property Cards */
.potential-property-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #4ade80;
    background-color: #303030;
}

.potential-property-title {
    color: #4ade80;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.potential-property-text {
    color: #d1d5db;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}

/* Formula Sections */
.potential-formula-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.potential-formula-box {
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: #303030;
}

.potential-formula-title {
    color: #4ade80;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.potential-formula-content {
    text-align: center;
    margin-bottom: 0.75rem;
}

.potential-formula-note {
    color: #9ca3af;
    font-size: 0.875rem;
    text-align: center;
}

.potential-formula-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #d1d5db;
    font-size: 0.875rem;
}

/* Interpretation Cards */
.potential-interpretation-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid;
    background-color: #303030;
}

.potential-card-red {
    border-left-color: #ef4444;
}

.potential-card-blue {
    border-left-color: #3b82f6;
}

.potential-card-purple {
    border-left-color: #a855f7;
}

.potential-card-yellow {
    border-left-color: #eab308;
}

.potential-card-green {
    border-left-color: #22c55e;
}

.potential-card-cyan {
    border-left-color: #06b6d4;
}

.potential-card-orange {
    border-left-color: #f97316;
}

.potential-card-emerald {
    border-left-color: #10b981;
}

.potential-card-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.potential-title-red {
    color: #f87171;
}

.potential-title-blue {
    color: #60a5fa;
}

.potential-title-purple {
    color: #c084fc;
}

.potential-title-yellow {
    color: #fbbf24;
}

.potential-title-green {
    color: #4ade80;
}

.potential-title-cyan {
    color: #22d3ee;
}

.potential-title-orange {
    color: #fb923c;
}

.potential-title-emerald {
    color: #34d399;
}

/* Physical Meaning Section */
.potential-meaning-box {
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: #303030;
    margin-bottom: 1rem;
}

.potential-meaning-title {
    color: #22d3ee;
    font-weight: bold;
    margin-bottom: 0.75rem;
}

.potential-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #d1d5db;
    font-size: 0.875rem;
}

/* Use Cases */
.potential-usecase-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.potential-usecase-card {
    padding: 1rem;
    border-radius: 0.5rem;
    border-left: 4px solid #10b981;
    background-color: #303030;
}

.potential-usecase-title {
    color: #34d399;
    font-weight: bold;
}

/* Comparison Section */
.potential-comparison-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #303030;
}

.potential-comparison-title {
    font-weight: bold;
    margin-bottom: 0.75rem;
}

/* Controls Section */
.potential-control-card {
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #303030;
    text-align: center;
}

.potential-control-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.potential-control-title {
    color: #4ade80;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.potential-control-text {
    color: #d1d5db;
    font-size: 0.875rem;
}

.potential-key {
    background-color: #16a34a;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: monospace;
    font-size: 0.75rem;
    font-weight: bold;
}

/* Summary Section */
.potential-summary {
    padding: 1.5rem;
    border-radius: 0.75rem;
    text-align: center;
    background-color: #06202B;
}

.potential-summary-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #4ade80;
    margin-bottom: 0.75rem;
}

.potential-summary-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: left;
}

@media (min-width: 768px) {
    .potential-summary-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.potential-summary-item {
    padding: 0.75rem;
    border-radius: 0.25rem;
    background-color: #212121;
}

.potential-summary-text {
    color: #d1d5db;
    font-size: 0.875rem;
}

.potential-summary-note {
    color: #86efac;
    font-size: 0.875rem;
    margin-top: 1rem;
    font-style: italic;
}

/* Utility Classes */
.potential-mb-3 {
    margin-bottom: 0.75rem;
}

.potential-mb-4 {
    margin-bottom: 1rem;
}

.potential-mt-4 {
    margin-top: 1rem;
}

.potential-text-center {
    text-align: center;
}

.potential-leading-relaxed {
    line-height: 1.625;
}

.potential-space-y-2 > * + * {
    margin-top: 0.5rem;
}

.potential-space-y-3 > * + * {
    margin-top: 0.75rem;
}

.potential-space-y-4 > * + * {
    margin-top: 1rem;
}`;
    }
}

customElements.define('potential-docs', PotentialDocs);