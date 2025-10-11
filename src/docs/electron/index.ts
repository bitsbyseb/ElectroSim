class ElectronDocs extends HTMLElement {
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
    <div class="hero-section">
        <div class="hero-icon">🔵</div>
        <h1 class="hero-title">Electrón (−)</h1>
        <p class="hero-subtitle">Partícula con Carga Negativa</p>
    </div>

    <!-- Introduction -->
    <div class="content-card border-blue">
        <h2 class="card-title">⚛️ ¿Qué es un Electrón?</h2>
        <p class="card-paragraph">
            El <strong class="text-highlight">electrón</strong> es una partícula subatómica con carga eléctrica negativa 
            que orbita alrededor del núcleo atómico. Es una de las partículas fundamentales 
            más importantes y se considera una partícula elemental (no está compuesta por otras partículas).
        </p>
        <p class="card-paragraph text-gray-300">
            En este simulador, el electrón representa cualquier <strong class="text-emphasis">carga negativa</strong> 
            que genera un campo eléctrico radial apuntando hacia adentro.
        </p>
    </div>

    <!-- Properties -->
    <div class="content-card border-blue">
        <h2 class="card-title">📊 Propiedades Fundamentales</h2>
        
        <div class="grid-container">
            <div class="property-card border-blue-light">
                <h3 class="property-title">Carga Eléctrica</h3>
                <p class="property-description">
                    La carga del electrón es la <strong class="text-emphasis">carga elemental negativa</strong>:
                </p>
                <div class="formula-container">
                    \\[ q_e = -e = -1.602 \\times 10^{-19} \\text{ C} \\]
                </div>
                <p class="formula-caption">
                    Donde \\(e\\) es la magnitud de la carga elemental y C representa Coulombs.
                </p>
            </div>

            <div class="property-card border-blue-light">
                <h3 class="property-title">Masa</h3>
                <p class="property-description">
                    La masa del electrón es:
                </p>
                <div class="formula-container">
                    \\[ m_e = 9.109 \\times 10^{-31} \\text{ kg} \\]
                </div>
                <p class="formula-caption">
                    Es aproximadamente 1836 veces más ligero que un protón.
                </p>
            </div>

            <div class="property-card border-blue-light">
                <h3 class="property-title">Spin</h3>
                <p class="property-description">
                    El electrón tiene spin \\(\\frac{1}{2}\\):
                </p>
                <div class="formula-container">
                    \\[ s = \\frac{1}{2}\\hbar \\]
                </div>
                <p class="formula-caption">
                    Es un fermión y obedece el principio de exclusión de Pauli.
                </p>
            </div>

            <div class="property-card border-blue-light">
                <h3 class="property-title">Partícula Elemental</h3>
                <p class="property-description text-gray-300">
                    El electrón es una <strong class="text-emphasis">partícula verdaderamente elemental</strong>. 
                    No tiene estructura interna conocida y se considera puntual hasta escalas 
                    menores a \\(10^{-18}\\) metros.
                </p>
            </div>
        </div>
    </div>

    <!-- Electric Field -->
    <div class="content-card border-blue">
        <h2 class="card-title">⚡ Campo Eléctrico Generado</h2>
        
        <p class="card-paragraph">
            Una carga negativa como el electrón genera un <strong class="text-emphasis">campo eléctrico radial</strong> 
            que apunta hacia adentro en todas las direcciones (hacia la carga). La magnitud del campo está dada por:
        </p>

        <div class="formula-section">
            <h3 class="formula-title text-highlight">Magnitud del Campo</h3>
            <div class="formula-container">
                \\[ E = \\frac{k |q|}{r^2} = \\frac{k e}{r^2} \\]
            </div>
            <p class="formula-caption text-center">
                La magnitud es idéntica a la del protón, solo cambia la dirección
            </p>

            <h3 class="formula-title text-highlight with-margin-top">Forma Vectorial</h3>
            <div class="text-center">
                \\[ \\vec{E} = -\\frac{k e}{r^2}\\hat{r} \\]
            </div>
            <p class="formula-caption text-center mt-3">
                El signo negativo indica que el vector apunta <strong class="text-emphasis">radialmente hacia adentro</strong> 
                (hacia el electrón)
            </p>
        </div>

        <div class="key-difference-note">
            <p class="text-gray-300">
                <strong class="text-cyan-highlight">💡 Diferencia clave con el protón:</strong> Mientras que el campo 
                del protón apunta hacia afuera (divergente), el campo del electrón apunta hacia adentro 
                (convergente). Ambos tienen la misma magnitud a igual distancia.
            </p>
        </div>
    </div>

    <!-- Potential -->
    <div class="content-card border-blue">
        <h2 class="card-title">📉 Potencial Eléctrico</h2>
        
        <p class="card-paragraph">
            El potencial eléctrico generado por un electrón (carga negativa) en un punto 
            a distancia \\(r\\) es:
        </p>

        <div class="formula-section">
            <div class="formula-container">
                \\[ V = \\frac{k q}{r} = -\\frac{k e}{r} \\]
            </div>
            
            <div class="list-container">
                <p class="list-item">
                    <span class="list-item-bullet">▸</span>
                    <span>\\(V\\) es el potencial eléctrico en voltios (V)</span>
                </p>
                <p class="list-item">
                    <span class="list-item-bullet">▸</span>
                    <span>\\(k = 8.99 \\times 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2\\) (constante de Coulomb)</span>
                </p>
                <p class="list-item">
                    <span class="list-item-bullet">▸</span>
                    <span>\\(e = 1.602 \\times 10^{-19}\\) C (carga elemental)</span>
                </p>
                <p class="list-item">
                    <span class="list-item-bullet">▸</span>
                    <span>\\(r\\) es la distancia al electrón en metros</span>
                </p>
            </div>
        </div>

        <div class="warning-note">
            <p class="text-gray-300">
                <strong class="text-yellow-highlight">⚠️ Característica:</strong> El potencial de una carga negativa 
                es siempre <strong class="text-emphasis">negativo</strong>. Esto significa que se requiere trabajo 
                para alejar una carga positiva de un electrón (van hacia un potencial mayor).
            </p>
        </div>
    </div>

    <!-- Field Lines -->
    <div class="content-card border-blue">
        <h2 class="card-title">〰️ Líneas de Campo</h2>
        
        <div class="formula-section">
            <p class="card-paragraph">
                Las líneas de campo eléctrico de un electrón (carga negativa) tienen 
                características específicas:
            </p>

            <div class="grid-container">
                <div class="sub-property-card">
                    <h4 class="sub-property-title">🎯 Dirección</h4>
                    <p class="sub-property-description">
                        Apuntan radialmente <strong class="text-emphasis">hacia adentro</strong> (hacia el electrón) 
                        desde todas las direcciones del espacio.
                    </p>
                </div>

                <div class="sub-property-card">
                    <h4 class="sub-property-title">🔄 Simetría</h4>
                    <p class="sub-property-description">
                        Distribución <strong class="text-emphasis">esféricamente simétrica</strong> alrededor 
                        de la carga puntual.
                    </p>
                </div>

                <div class="sub-property-card">
                    <h4 class="sub-property-title">🌀 Convergencia</h4>
                    <p class="sub-property-description">
                        Las líneas <strong class="text-emphasis">convergen</strong> hacia el electrón, 
                        comportándose como un "sumidero" de campo eléctrico.
                    </p>
                </div>

                <div class="sub-property-card">
                    <h4 class="sub-property-title">📏 Densidad</h4>
                    <p class="sub-property-description">
                        Al igual que con el protón, la densidad de líneas indica 
                        <strong class="text-emphasis">intensidad del campo</strong>.
                    </p>
                </div>
            </div>
        </div>

        <div class="convention-note">
            <p class="text-gray-300">
                <strong class="text-purple-highlight">🔍 Convención:</strong> Por convención, las líneas de campo 
                eléctrico siempre van de cargas positivas (fuentes) a cargas negativas (sumideros). 
                Un electrón aislado tiene líneas que "llegan" desde el infinito.
            </p>
        </div>
    </div>

    <!-- Interactions -->
    <div class="content-card border-blue">
        <h2 class="card-title">🤝 Interacciones con Otras Cargas</h2>
        
        <p class="card-paragraph">
            La fuerza eléctrica entre un electrón y otra carga está dada por la 
            <strong class="text-emphasis">Ley de Coulomb</strong>:
        </p>

        <div class="formula-section">
            <div class="formula-container">
                \\[ \\vec{F} = k \\frac{q_1 q_2}{r^2}\\hat{r}_{12} \\]
            </div>
            <p class="formula-caption text-center">
                Para el electrón: \\(q_1 = -e\\)
            </p>
        </div>

        <div class="grid-container">
            <div class="interaction-card-electron">
                <h3 class="interaction-title-electron">⚡ Con otro Electrón (−)</h3>
                <p class="property-description">
                    Dos cargas negativas se <strong class="text-emphasis">repelen</strong>:
                </p>
                <div class="formula-container">
                    \\[ F > 0 \\quad (\\text{repulsión}) \\]
                </div>
                <p class="formula-caption">
                    La fuerza apunta alejando ambas cargas entre sí.
                </p>
            </div>

            <div class="interaction-card-proton">
                <h3 class="interaction-title-proton">🧲 Con un Protón (+)</h3>
                <p class="property-description">
                    Cargas opuestas se <strong class="text-emphasis">atraen</strong>:
                </p>
                <div class="formula-container">
                    \\[ F &lt; 0 \\quad (\\text{atracción}) \\]
                </div>
                <p class="formula-caption">
                    La fuerza apunta acercando ambas cargas (base de los átomos).
                </p>
            </div>
        </div>
    </div>

    <!-- Energy -->
    <div class="content-card border-blue">
        <h2 class="card-title">⚡ Energía Potencial Eléctrica</h2>
        
        <p class="card-paragraph">
            La energía potencial eléctrica de una carga \\(q\\) en presencia de un electrón 
            a distancia \\(r\\) es:
        </p>

        <div class="formula-section">
            <div class="formula-container">
                \\[ U = k \\frac{q_1 q_2}{r} = -\\frac{k e q}{r} \\]
            </div>
            
            <div class="grid-container mt-4">
                <div class="energy-note-positive">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-emphasis">Si \\(q > 0\\):</strong> \\(U &lt; 0\\) (se atraen, 
                        sistema ligado)
                    </p>
                </div>
                <div class="energy-note-negative">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-emphasis">Si \\(q < 0\\):</strong> \\(U > 0\\) (se repelen, 
                        energía positiva)
                    </p>
                </div>
            </div>
        </div>

        <div class="key-difference-note">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-highlight">⚛️ En el átomo de hidrógeno:</strong> La energía 
                potencial negativa entre el protón y el electrón (\\(U < 0\\)) es lo que mantiene 
                al electrón "ligado" al núcleo, formando un sistema estable.
            </p>
        </div>
    </div>

    <!-- Wave-Particle Duality -->
    <div class="content-card-purple">
        <h2 class="card-title">🌊 Dualidad Onda-Partícula</h2>
        
        <p class="card-paragraph">
            El electrón exhibe un comportamiento fascinante: puede comportarse como partícula 
            y como onda simultáneamente.
        </p>

        <div class="formula-section">
            <h3 class="formula-title text-purple-highlight">Longitud de Onda de De Broglie</h3>
            <div class="formula-container">
                \\[ \\lambda = \\frac{h}{p} = \\frac{h}{m_e v} \\]
            </div>
            <p class="formula-caption text-center">
                Donde \\(h\\) es la constante de Planck, \\(p\\) el momento y \\(v\\) la velocidad
            </p>
        </div>

        <div class="list-container">
            <div class="duality-card">
                <h4 class="duality-title">🎯 Como Partícula</h4>
                <p class="text-gray-300 text-sm">
                    Tiene masa definida, carga y posición. Deja trazas en detectores y puede 
                    ser desviado por campos eléctricos y magnéticos.
                </p>
            </div>

            <div class="duality-card">
                <h4 class="duality-title">🌊 Como Onda</h4>
                <p class="text-gray-300 text-sm">
                    Exhibe interferencia y difracción. Los electrones en átomos forman "ondas estacionarias" 
                    alrededor del núcleo (orbitales atómicos).
                </p>
            </div>
        </div>
    </div>

    <!-- Practical Tips -->
    <div class="content-card-emerald">
        <h2 class="card-title">🎮 Experimentación en el Simulador</h2>
        
        <div class="list-container">
            <div class="tip-card">
                <strong class="text-emerald-highlight">🔵 Un solo electrón:</strong>
                <span class="text-gray-300"> Observa cómo las líneas de campo convergen hacia 
                el electrón desde todas las direcciones, como un "remolino" hacia adentro.</span>
            </div>

            <div class="tip-card">
                <strong class="text-emerald-highlight">🔵🔵 Dos electrones:</strong>
                <span class="text-gray-300"> Coloca dos electrones cerca y observa la repulsión mutua. 
                Las líneas de campo se "repelen" creando una región de separación entre ellos.</span>
            </div>

            <div class="tip-card">
                <strong class="text-emerald-highlight">🔵🔴 Electrón y protón (Átomo):</strong>
                <span class="text-gray-300"> Simula un átomo de hidrógeno colocando un protón y un electrón 
                cercanos. Las líneas van del protón al electrón, mostrando el enlace atómico.</span>
            </div>

            <div class="tip-card">
                <strong class="text-emerald-highlight">🔵🔴🔵🔴 Múltiples pares:</strong>
                <span class="text-gray-300"> Crea varios pares electrón-protón para simular una molécula 
                o red cristalina y observa los complejos patrones de campo resultantes.</span>
            </div>

            <div class="tip-card">
                <strong class="text-emerald-highlight">📍 Sensores de potencial:</strong>
                <span class="text-gray-300"> Coloca sensores alrededor de un electrón para visualizar 
                que el potencial es negativo y aumenta (se hace menos negativo) con la distancia.</span>
            </div>
        </div>
    </div>

    <!-- Applications -->
    <div class="content-card-cyan">
        <h2 class="card-title">🔬 Aplicaciones del Electrón</h2>
        
        <div class="grid-container">
            <div class="application-card">
                <h4 class="application-title">💡 Electricidad</h4>
                <p class="text-gray-300 text-sm">
                    La corriente eléctrica en conductores es el flujo de electrones. 
                    Toda la tecnología eléctrica depende del movimiento de electrones.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title">💻 Electrónica</h4>
                <p class="text-gray-300 text-sm">
                    Transistores, circuitos integrados y procesadores controlan el flujo 
                    de electrones para procesar información.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title">🔬 Microscopía</h4>
                <p class="text-gray-300 text-sm">
                    Los microscopios electrónicos usan haces de electrones para obtener 
                    imágenes con resolución atómica.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title">⚛️ Química</h4>
                <p class="text-gray-300 text-sm">
                    Los enlaces químicos se forman por el intercambio o compartición de 
                    electrones entre átomos.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title">📺 Pantallas CRT</h4>
                <p class="text-gray-300 text-sm">
                    Las antiguas televisiones y monitores usaban haces de electrones 
                    para crear imágenes en la pantalla.
                </p>
            </div>

            <div class="application-card">
                <h4 class="application-title">⚡ Rayos X</h4>
                <p class="text-gray-300 text-sm">
                    Los rayos X se generan cuando electrones de alta energía chocan 
                    con un material metálico.
                </p>
            </div>
        </div>
    </div>

    <!-- Historical Context -->
    <div class="content-card-purple">
        <h2 class="card-title">📚 Contexto Histórico</h2>
        
        <div class="list-container text-gray-300">
            <p class="card-paragraph">
                El electrón fue descubierto por <strong class="text-emphasis">J.J. Thomson</strong> en 1897 
                mediante experimentos con tubos de rayos catódicos. Thomson demostró que los "rayos catódicos" 
                eran en realidad partículas con carga negativa.
            </p>
            
            <p class="card-paragraph">
                El término "electrón" fue propuesto por <strong class="text-emphasis">George Johnstone Stoney</strong> 
                en 1891, derivado de la palabra griega <em class="text-purple-highlight">ἤλεκτρον</em> (elektron), 
                que significa "ámbar" (el ámbar adquiere carga eléctrica al frotarse).
            </p>

            <p class="card-paragraph">
                El modelo atómico moderno, donde los electrones ocupan orbitales cuánticos alrededor del núcleo, 
                fue desarrollado en las décadas de 1920-1930 con la <strong class="text-emphasis">mecánica cuántica</strong>, 
                revolucionando nuestra comprensión de la materia.
            </p>

            <p class="card-paragraph">
                En 1923, <strong class="text-emphasis">Robert Millikan</strong> midió con precisión la carga del electrón 
                mediante su famoso experimento de la gota de aceite, confirmando la cuantización de la carga eléctrica.
            </p>
        </div>
    </div>

    <!-- Comparison -->
    <div class="content-card border-yellow">
        <h2 class="card-title">⚖️ Comparación: Electrón vs Protón</h2>
        
        <div class="table-container">
            <table class="comparison-table">
                <thead>
                    <tr class="table-header-row">
                        <th class="table-header-property">Propiedad</th>
                        <th class="table-header-electron">Electrón (−)</th>
                        <th class="table-header-proton">Protón (+)</th>
                    </tr>
                </thead>
                <tbody class="table-body">
                    <tr class="table-row-dark">
                        <td class="table-cell-property">Carga</td>
                        <td class="table-cell-center">\\(-e\\)</td>
                        <td class="table-cell-center">\\(+e\\)</td>
                    </tr>
                    <tr class="table-row-light">
                        <td class="table-cell-property">Masa</td>
                        <td class="table-cell-center">\\(9.109 \\times 10^{-31}\\) kg</td>
                        <td class="table-cell-center">\\(1.673 \\times 10^{-27}\\) kg</td>
                    </tr>
                    <tr class="table-row-dark">
                        <td class="table-cell-property">Ubicación</td>
                        <td class="table-cell-center">Orbitales atómicos</td>
                        <td class="table-cell-center">Núcleo atómico</td></tr>
                    <tr class="table-row-light">
                        <td class="table-cell-property">Campo eléctrico</td>
                        <td class="table-cell-center">Hacia adentro</td>
                        <td class="table-cell-center">Hacia afuera</td>
                    </tr>
                    <tr class="table-row-dark">
                        <td class="table-cell-property">Potencial</td>
                        <td class="table-cell-center">Negativo (\\(V < 0\\))</td>
                        <td class="table-cell-center">Positivo (\\(V > 0\\))</td>
                    </tr>
                    <tr class="table-row-light">
                        <td class="table-cell-property">Estructura</td>
                        <td class="table-cell-center">Elemental (puntual)</td>
                        <td class="table-cell-center">Compuesto (quarks)</td>
                    </tr>
                    <tr class="table-row-dark">
                        <td class="table-cell-property">Relación de masa</td>
                        <td class="table-cell-center">1</td>
                        <td class="table-cell-center">1836</td>
                    </tr>
                    <tr class="table-row-light">
                        <td class="table-cell-property">Spin</td>
                        <td class="table-cell-center">\\(\\frac{1}{2}\\)</td>
                        <td class="table-cell-center">\\(\\frac{1}{2}\\)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="warning-note">
            <p class="text-gray-300 text-sm">
                <strong class="text-yellow-highlight">🔑 Dato clave:</strong> A pesar de sus diferencias de masa, 
                la magnitud de su carga es <strong class="text-emphasis">exactamente igual</strong>, lo que permite 
                que los átomos sean eléctricamente neutros cuando tienen el mismo número de protones y electrones.
            </p>
        </div>
    </div>

    <!-- Quantum Numbers -->
    <div class="content-card-purple">
        <h2 class="card-title">🔢 Números Cuánticos del Electrón</h2>
        
        <p class="card-paragraph">
            En átomos, el estado de un electrón se describe mediante cuatro números cuánticos:
        </p>

        <div class="list-container">
            <div class="quantum-card">
                <h4 class="quantum-title">1. Número Cuántico Principal (\\(n\\))</h4>
                <p class="text-gray-300 text-sm">
                    Determina el nivel de energía y el tamaño del orbital.
                </p>
                <div class="text-center">
                    \\[ n = 1, 2, 3, 4, \\ldots \\]
                </div>
            </div>

            <div class="quantum-card">
                <h4 class="quantum-title">2. Número Cuántico Azimutal (\\(l\\))</h4>
                <p class="text-gray-300 text-sm">
                    Define la forma del orbital (s, p, d, f).
                </p>
                <div class="text-center">
                    \\[ l = 0, 1, 2, \\ldots, (n-1) \\]
                </div>
            </div>

            <div class="quantum-card">
                <h4 class="quantum-title">3. Número Cuántico Magnético (\\(m_l\\))</h4>
                <p class="text-gray-300 text-sm">
                    Especifica la orientación espacial del orbital.
                </p>
                <div class="text-center">
                    \\[ m_l = -l, \\ldots, 0, \\ldots, +l \\]
                </div>
            </div>

            <div class="quantum-card">
                <h4 class="quantum-title">4. Número Cuántico de Spin (\\(m_s\\))</h4>
                <p class="text-gray-300 text-sm">
                    Describe el spin intrínseco del electrón.
                </p>
                <div class="text-center">
                    \\[ m_s = +\\frac{1}{2} \\text{ o } -\\frac{1}{2} \\]
                </div>
            </div>
        </div>

        <div class="key-difference-note">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-highlight">🎯 Principio de Exclusión de Pauli:</strong> No pueden existir 
                dos electrones en un átomo con los cuatro números cuánticos idénticos. Esto explica la 
                estructura de la tabla periódica y las propiedades químicas de los elementos.
            </p>
        </div>
    </div>

    <!-- Current and Movement -->
    <div class="content-card border-blue">
        <h2 class="card-title">⚡ Corriente Eléctrica y Movimiento</h2>
        
        <p class="card-paragraph">
            Cuando los electrones se mueven de forma ordenada a través de un conductor, 
            generan una <strong class="text-emphasis">corriente eléctrica</strong>.
        </p>

        <div class="formula-section">
            <h3 class="formula-title text-highlight">Corriente Eléctrica</h3>
            <div class="formula-container">
                \\[ I = \\frac{\\Delta Q}{\\Delta t} = \\frac{n \\cdot e}{\\Delta t} \\]
            </div>
            <p class="formula-caption text-center">
                Donde \\(I\\) es la corriente en Amperes, \\(\\Delta Q\\) es la carga que pasa 
                en un tiempo \\(\\Delta t\\), y \\(n\\) es el número de electrones
            </p>
        </div>

        <div class="grid-container">
            <div class="property-card border-blue-light">
                <h4 class="sub-property-title">🐌 Velocidad de Deriva</h4>
                <p class="sub-property-description">
                    Los electrones en un conductor se mueven muy lentamente (\\(\\sim 10^{-4}\\) m/s), 
                    aunque la señal eléctrica viaja a velocidades cercanas a la luz.
                </p>
            </div>

            <div class="property-card border-blue-light">
                <h4 class="sub-property-title">🔄 Dirección Convencional</h4>
                <p class="sub-property-description">
                    Por convención histórica, la corriente fluye de positivo a negativo, 
                    <strong class="text-emphasis">opuesto</strong> al movimiento real de los electrones.
                </p>
            </div>
        </div>

        <div class="curiosity-note">
            <p class="text-gray-300 text-sm">
                <strong class="text-yellow-highlight">💡 Curiosidad:</strong> Un Ampere (1 A) de corriente 
                representa aproximadamente \\(6.24 \\times 10^{18}\\) electrones pasando por un punto 
                cada segundo. ¡Son trillones de electrones!
            </p>
        </div>
    </div>

    <!-- Relativistic Effects -->
    <div class="content-card-cyan">
        <h2 class="card-title">🚀 Efectos Relativistas</h2>
        
        <p class="card-paragraph">
            Cuando los electrones se mueven a velocidades cercanas a la velocidad de la luz, 
            debemos considerar la <strong class="text-emphasis">relatividad especial</strong>.
        </p>

        <div class="formula-section">
            <h3 class="formula-title text-cyan-highlight">Masa Relativista</h3>
            <div class="formula-container">
                \\[ m = \\frac{m_0}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\gamma m_0 \\]
            </div>
            <p class="formula-caption text-center">
                Donde \\(m_0\\) es la masa en reposo, \\(v\\) la velocidad, \\(c\\) la velocidad de la luz, 
                y \\(\\gamma\\) el factor de Lorentz
            </p>
        </div>

        <div class="application-card">
            <h4 class="application-title">⚡ Aplicaciones</h4>
            <p class="text-gray-300 text-sm">
                Los efectos relativistas son importantes en aceleradores de partículas, donde 
                los electrones alcanzan velocidades superiores al 99.9% de la velocidad de la luz, 
                y en radiación sincrotrón utilizada en investigación científica.
            </p>
        </div>
    </div>

    <!-- Antimatter -->
    <div class="content-card-purple">
        <h2 class="card-title">🌌 Antimateria: El Positrón</h2>
        
        <p class="card-paragraph">
            El electrón tiene una antipartícula llamada <strong class="text-emphasis">positrón</strong> (\\(e^+\\)), 
            que tiene la misma masa pero carga opuesta.
        </p>

        <div class="grid-container">
            <div class="antimatter-card border-blue-light">
                <h4 class="antimatter-title text-highlight">Electrón (\\(e^-\\)</h4>
                <ul class="antimatter-list">
                    <li>• Carga: \\(-e\\)</li>
                    <li>• Materia ordinaria</li>
                    <li>• Estable</li>
                    <li>• Abundante en el universo</li>
                </ul>
            </div>

            <div class="antimatter-card border-purple-light">
                <h4 class="antimatter-title text-purple-highlight">Positrón (\\(e^+\\)</h4>
                <ul class="antimatter-list">
                    <li>• Carga: \\(+e\\)</li>
                    <li>• Antimateria</li>
                    <li>• Se aniquila con electrones</li>
                    <li>• Raro naturalmente</li>
                </ul>
            </div>
        </div>

        <div class="formula-section">
            <h3 class="formula-title text-purple-highlight">Aniquilación Electrón-Positrón</h3>
            <div class="formula-container">
                \\[ e^- + e^+ \\rightarrow 2\\gamma \\quad (\\text{dos fotones de energía}) \\]
            </div>
            <div class="text-center">
                \\[ E = 2m_e c^2 = 1.022 \\text{ MeV} \\]
            </div>
            <p class="formula-caption text-center mt-3">
                La masa de ambas partículas se convierte completamente en energía (rayos gamma)
            </p>
        </div>

        <div class="medical-note">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-highlight">🏥 Aplicación médica:</strong> Los positrones se usan en 
                tomografía por emisión de positrones (PET), una técnica de imagenología médica que 
                detecta los rayos gamma producidos por la aniquilación electrón-positrón.
            </p>
        </div>
    </div>

    <!-- Fun Facts -->
    <div class="content-card-emerald">
        <h2 class="card-title">🎉 Datos Curiosos sobre el Electrón</h2>
        
        <div class="grid-container">
            <div class="fun-fact-card">
                <div class="fun-fact-icon">🎯</div>
                <h4 class="fun-fact-title">Tamaño</h4>
                <p class="text-gray-300 text-sm">
                    El electrón es tan pequeño que si un átomo tuviera el tamaño de un estadio de fútbol, 
                    el electrón sería más pequeño que una canica.
                </p>
            </div>

            <div class="fun-fact-card">
                <div class="fun-fact-icon">⚡</div>
                <h4 class="fun-fact-title">Velocidad en Átomos</h4>
                <p class="text-gray-300 text-sm">
                    Los electrones en átomos se mueven a velocidades de aproximadamente \\(2.2 \\times 10^6\\) m/s, 
                    cerca del 1% de la velocidad de la luz.
                </p>
            </div>

            <div class="fun-fact-card">
                <div class="fun-fact-icon">🌊</div>
                <h4 class="fun-fact-title">Principio de Incertidumbre</h4>
                <p class="text-gray-300 text-sm">
                    Es imposible conocer simultáneamente con precisión absoluta la posición y 
                    el momento de un electrón (principio de Heisenberg).
                </p>
            </div>

            <div class="fun-fact-card">
                <div class="fun-fact-icon">🔋</div>
                <h4 class="fun-fact-title">Energía</h4>
                <p class="text-gray-300 text-sm">
                    Se necesita aproximadamente 13.6 eV de energía para arrancar un electrón 
                    del átomo de hidrógeno (energía de ionización).
                </p>
            </div>

            <div class="fun-fact-card">
                <div class="fun-fact-icon">🧲</div>
                <h4 class="fun-fact-title">Momento Magnético</h4>
                <p class="text-gray-300 text-sm">
                    El electrón tiene un momento magnético intrínseco debido a su spin, 
                    comportándose como un diminuto imán.
                </p>
            </div>

            <div class="fun-fact-card">
                <div class="fun-fact-icon">🎭</div>
                <h4 class="fun-fact-title">Indistinguibles</h4>
                <p class="text-gray-300 text-sm">
                    Todos los electrones en el universo son absolutamente idénticos e 
                    indistinguibles entre sí, una propiedad cuántica fundamental.
                </p>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="summary-card">
        <h3 class="summary-title">📌 Resumen Clave</h3>
        <div class="summary-grid">
            <div class="summary-item">
                <p class="text-gray-300 text-sm">
                    <strong class="text-emphasis">Carga:</strong><br>
                    \\(-e = -1.602 \\times 10^{-19}\\) C
                </p>
            </div>
            <div class="summary-item">
                <p class="text-gray-300 text-sm">
                    <strong class="text-emphasis">Campo:</strong><br>
                    Radial hacia adentro
                </p>
            </div>
            <div class="summary-item">
                <p class="text-gray-300 text-sm">
                    <strong class="text-emphasis">Interacción:</strong><br>
                    Repele (−), Atrae (+)
                </p>
            </div>
        </div>
        <p class="summary-footer">
            El electrón es fundamental para comprender la electricidad, la química y la estructura de la materia
        </p>
    </div>
</div>
`;
        return tpl;
    }

    get styles(): string {
        return `/* General Container and Spacing */
.container > * + * {
    margin-top: 1.5rem; /* space-y-6 */
}

/* Text Colors */
.text-white { color: #fff; }
.text-gray-300 { color: #d1d5db; }
.text-gray-400 { color: #9ca3af; }
.text-blue-300 { color: #93c5fd; }
.text-highlight { color: #60a5fa; } /* blue-400 */
.text-cyan-highlight { color: #22d3ee; } /* cyan-400 */
.text-yellow-highlight { color: #facc15; } /* yellow-400 */
.text-purple-highlight { color: #c084fc; } /* purple-400 */
.text-emerald-highlight { color: #34d399; } /* emerald-400 */
.text-red-400 { color: #f87171; }
.text-emphasis { color: #fff; font-weight: 700; }

/* Border Colors */
.border-blue { border-left: 4px solid #3b82f6; }
.border-blue-light { border-left: 4px solid #60a5fa; }
.border-yellow { border-left: 4px solid #eab308; }
.border-purple { border-left: 4px solid #a855f7; }
.border-cyan { border-left: 4px solid #06b6d4; }
.border-emerald { border-left: 4px solid #10b981; }
.border-red { border-left: 4px solid #ef4444; }

/* Basic Card Styles */
.content-card, .content-card-purple, .content-card-emerald, .content-card-cyan, .content-card-yellow {
    padding: 1.5rem; /* p-6 */
    border-radius: 0.75rem; /* rounded-xl */
    background-color: #212121;
}

.content-card-purple { background-color: #181818; border-left: 4px solid #a855f7; }
.content-card-emerald { background-color: #212121; border-left: 4px solid #10b981; }
.content-card-cyan { background-color: #181818; border-left: 4px solid #06b6d4; }

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
    background-image: linear-gradient(to bottom right, #2563eb, #1d4ed8, #1e3a8a); /* bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 */
    color: #fff; /* text-white */
    border-radius: 0.75rem; /* rounded-xl */
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* shadow-xl */
}

.hero-icon {
    font-size: 3.75rem; /* text-6xl */
    margin-bottom: 1rem; /* mb-4 */
}

.hero-title {
    font-size: 2.25rem; /* text-4xl */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.75rem; /* mb-3 */
}

.hero-subtitle {
    font-size: 1.25rem; /* text-xl */
    opacity: 0.95; /* opacity-95 */
}

/* Grid Layout */
.grid-container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
    gap: 1rem; /* gap-4 */
}

/* Property Cards (within grid) */
.property-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}

.property-title {
    font-size: 1.125rem; /* text-lg */
    font-weight: 700; /* font-bold */
    color: #60a5fa; /* text-blue-400 */
    margin-bottom: 0.5rem; /* mb-2 */
}

.property-description {
    color: #d1d5db; /* text-gray-300 */
    margin-bottom: 0.5rem; /* mb-2 */
}

/* Formula Sections */
.formula-container {
    text-align: center; /* text-center */
    margin-top: 0.75rem; /* my-3 */
    margin-bottom: 0.75rem; /* my-3 */
}

.formula-caption {
    color: #9ca3af; /* text-gray-400 */
    font-size: 0.875rem; /* text-sm */
}

.formula-section {
    padding: 1.25rem; /* p-5 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}

.formula-title {
    text-align: center; /* text-center */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.75rem; /* mb-3 */
}

.with-margin-top { margin-top: 1.5rem; } /* mt-6 */
.mt-3 { margin-top: 0.75rem; }
.mt-4 { margin-top: 1rem; }

/* Notes and Callouts */
.key-difference-note, .warning-note, .convention-note, .curiosity-note, .medical-note {
    margin-top: 1rem; /* mt-4 */
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
}

.key-difference-note { background-color: #181818; border-left: 4px solid #06b6d4; }
.warning-note { background-color: #303030; border-left: 4px solid #eab308; }
.convention-note { background-color: #181818; border-left: 4px solid #a855f7; }
.curiosity-note { background-color: #181818; border-left: 4px solid #eab308; }
.medical-note { background-color: #212121; border-left: 4px solid #06b6d4; }

/* List Styles */
.list-container { 
    display: flex; 
    flex-direction: column; 
    gap: 0.75rem; /* space-y-3 */
}

.list-item {
    display: flex; /* flex */
    align-items: flex-start; /* items-start */
    color: #d1d5db; /* text-gray-300 */
}

.list-item-bullet {
    color: #3b82f6; /* text-blue-500 */
    margin-right: 0.75rem; /* mr-3 */
    flex-shrink: 0; /* flex-shrink-0 */
}

/* Sub-Property Cards (Field Lines) */
.sub-property-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    border-left: 4px solid #60a5fa; /* border-blue-400 */
    background-color: #212121;
}

.sub-property-title {
    color: #60a5fa; /* text-blue-400 */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.5rem; /* mb-2 */
}

.sub-property-description {
    color: #d1d5db; /* text-gray-300 */
    font-size: 0.875rem; /* text-sm */
}

/* Interaction Cards */
.interaction-card-electron, .interaction-card-proton {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}
.interaction-card-electron { border-left: 4px solid #3b82f6; }
.interaction-card-proton { border-left: 4px solid #ef4444; }

.interaction-title-electron, .interaction-title-proton {
    font-weight: 700; /* font-bold */
    margin-bottom: 0.75rem; /* mb-3 */
}
.interaction-title-electron { color: #60a5fa; }
.interaction-title-proton { color: #f87171; }

/* Energy Notes */
.energy-note-positive, .energy-note-negative {
    padding: 0.75rem; /* p-3 */
    border-radius: 0.25rem; /* rounded */
    background-color: #212121;
}
.energy-note-positive { border-left: 4px solid #60a5fa; }
.energy-note-negative { border-left: 4px solid #f87171; }

/* Duality Section */
.duality-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}

.duality-title {
    color: #c084fc; /* text-purple-400 */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.5rem; /* mb-2 */
}

/* Practical Tips */
.tip-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    border-left: 4px solid #10b981; /* border-emerald-500 */
    background-color: #303030;
}

/* Applications */
.application-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}

.application-title {
    color: #22d3ee; /* text-cyan-400 */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.5rem; /* mb-2 */
}

/* Comparison Table */
.table-container { overflow-x: auto; }
.comparison-table { width: 100%; font-size: 0.875rem; }
.table-header-row { background-color: #303030; }
.table-header-property { padding: 0.75rem; text-align: left; color: #facc15; }
.table-header-electron { padding: 0.75rem; text-align: center; color: #60a5fa; }
.table-header-proton { padding: 0.75rem; text-align: center; color: #f87171; }
.table-body { color: #d1d5db; }
.table-row-dark { background-color: #181818; }
.table-row-light { background-color: #212121; }
.table-cell-property { padding: 0.75rem; font-weight: 700; }
.table-cell-center { padding: 0.75rem; text-align: center; }

/* Quantum Number Cards */
.quantum-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    border-left: 4px solid #c084fc; /* border-purple-400 */
    background-color: #303030;
}

.quantum-title {
    color: #c084fc; /* text-purple-400 */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.5rem; /* mb-2 */
}

/* Antimatter Section */
.antimatter-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}
.border-purple-light { border-left: 4px solid #c084fc; }

.antimatter-title {
    font-weight: 700; /* font-bold */
    margin-bottom: 0.5rem; /* mb-2 */
}

.antimatter-list {
    font-size: 0.875rem; /* text-sm */
    color: #d1d5db; /* text-gray-300 */
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.antimatter-list > * + * { margin-top: 0.25rem; } /* space-y-1 */

/* Fun Facts */
.fun-fact-card {
    padding: 1rem; /* p-4 */
    border-radius: 0.5rem; /* rounded-lg */
    background-color: #303030;
}

.fun-fact-icon {
    font-size: 1.875rem; /* text-3xl */
    margin-bottom: 0.5rem; /* mb-2 */
}

.fun-fact-title {
    color: #34d399; /* text-emerald-400 */
    font-weight: 700; /* font-bold */
    margin-bottom: 0.5rem; /* mb-2 */
}

/* Summary Card */
.summary-card {
    padding: 1.5rem; /* p-6 */
    border-radius: 0.75rem; /* rounded-xl */
    text-align: center; /* text-center */
    background-color: #06202B;
}

.summary-title {
    font-size: 1.25rem; /* text-xl */
    font-weight: 700; /* font-bold */
    color: #60a5fa; /* text-blue-400 */
    margin-bottom: 0.75rem; /* mb-3 */
}

.summary-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* grid-cols-1 */
    gap: 1rem; /* gap-4 */
    text-align: left; /* text-left */
}

.summary-item {
    padding: 0.75rem; /* p-3 */
    border-radius: 0.25rem; /* rounded */
    background-color: #212121;
}

.summary-footer {
    color: #93c5fd; /* text-blue-300 */
    font-size: 0.875rem; /* text-sm */
    margin-top: 1rem; /* mt-4 */
    font-style: italic; /* italic */
}

/* Responsive Adjustments */
@media (min-width: 768px) {
    .hero-title { font-size: 3rem; } /* md:text-5xl */
    .hero-subtitle { font-size: 1.5rem; } /* md:text-2xl */
    .grid-container { grid-template-columns: repeat(2, minmax(0, 1fr)); } /* md:grid-cols-2 */
    .summary-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } /* md:grid-cols-3 */
}

.text-center { text-align: center; }
.text-sm { font-size: 0.875rem; }
`;
    }
}

customElements.define('electron-docs', ElectronDocs);