export const electronDoc = `
<div class="space-y-6">
    <!-- Hero Section -->
    <div class="text-center p-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-xl shadow-xl">
        <div class="text-6xl mb-4">🔵</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-3">Electrón (−)</h1>
        <p class="text-xl md:text-2xl opacity-95">Partícula con Carga Negativa</p>
    </div>

    <!-- Introduction -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚛️ ¿Qué es un Electrón?</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            El <strong class="text-blue-400">electrón</strong> es una partícula subatómica con carga eléctrica negativa 
            que orbita alrededor del núcleo atómico. Es una de las partículas fundamentales 
            más importantes y se considera una partícula elemental (no está compuesta por otras partículas).
        </p>
        <p class="text-gray-300 leading-relaxed">
            En este simulador, el electrón representa cualquier <strong class="text-white">carga negativa</strong> 
            que genera un campo eléctrico radial apuntando hacia adentro.
        </p>
    </div>

    <!-- Properties -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📊 Propiedades Fundamentales</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-blue-400 mb-2">Carga Eléctrica</h3>
                <p class="text-gray-300 mb-2">
                    La carga del electrón es la <strong class="text-white">carga elemental negativa</strong>:
                </p>
                <div class="text-center my-3">
                    \\[ q_e = -e = -1.602 \\times 10^{-19} \\text{ C} \\]
                </div>
                <p class="text-gray-400 text-sm">
                    Donde \\(e\\) es la magnitud de la carga elemental y C representa Coulombs.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-blue-400 mb-2">Masa</h3>
                <p class="text-gray-300 mb-2">
                    La masa del electrón es:
                </p>
                <div class="text-center my-3">
                    \\[ m_e = 9.109 \\times 10^{-31} \\text{ kg} \\]
                </div>
                <p class="text-gray-400 text-sm">
                    Es aproximadamente 1836 veces más ligero que un protón.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-blue-400 mb-2">Spin</h3>
                <p class="text-gray-300 mb-2">
                    El electrón tiene spin \\(\\frac{1}{2}\\):
                </p>
                <div class="text-center my-3">
                    \\[ s = \\frac{1}{2}\\hbar \\]
                </div>
                <p class="text-gray-400 text-sm">
                    Es un fermión y obedece el principio de exclusión de Pauli.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-blue-400 mb-2">Partícula Elemental</h3>
                <p class="text-gray-300">
                    El electrón es una <strong class="text-white">partícula verdaderamente elemental</strong>. 
                    No tiene estructura interna conocida y se considera puntual hasta escalas 
                    menores a \\(10^{-18}\\) metros.
                </p>
            </div>
        </div>
    </div>

    <!-- Electric Field -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Campo Eléctrico Generado</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            Una carga negativa como el electrón genera un <strong class="text-white">campo eléctrico radial</strong> 
            que apunta hacia adentro en todas las direcciones (hacia la carga). La magnitud del campo está dada por:
        </p>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <h3 class="text-center text-blue-400 font-bold mb-3">Magnitud del Campo</h3>
            <div class="text-center mb-3">
                \\[ E = \\frac{k |q|}{r^2} = \\frac{k e}{r^2} \\]
            </div>
            <p class="text-gray-400 text-center text-sm mb-4">
                La magnitud es idéntica a la del protón, solo cambia la dirección
            </p>

            <h3 class="text-center text-blue-400 font-bold mb-3 mt-6">Forma Vectorial</h3>
            <div class="text-center">
                \\[ \\vec{E} = -\\frac{k e}{r^2}\\hat{r} \\]
            </div>
            <p class="text-gray-400 text-center text-sm mt-3">
                El signo negativo indica que el vector apunta <strong class="text-white">radialmente hacia adentro</strong> 
                (hacia el electrón)
            </p>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #181818;">
            <p class="text-gray-300">
                <strong class="text-cyan-400">💡 Diferencia clave con el protón:</strong> Mientras que el campo 
                del protón apunta hacia afuera (divergente), el campo del electrón apunta hacia adentro 
                (convergente). Ambos tienen la misma magnitud a igual distancia.
            </p>
        </div>
    </div>

    <!-- Potential -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📉 Potencial Eléctrico</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            El potencial eléctrico generado por un electrón (carga negativa) en un punto 
            a distancia \\(r\\) es:
        </p>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ V = \\frac{k q}{r} = -\\frac{k e}{r} \\]
            </div>
            
            <div class="space-y-3 text-gray-300">
                <p class="flex items-start">
                    <span class="text-blue-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(V\\) es el potencial eléctrico en voltios (V)</span>
                </p>
                <p class="flex items-start">
                    <span class="text-blue-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(k = 8.99 \\times 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2\\) (constante de Coulomb)</span>
                </p>
                <p class="flex items-start">
                    <span class="text-blue-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(e = 1.602 \\times 10^{-19}\\) C (carga elemental)</span>
                </p>
                <p class="flex items-start">
                    <span class="text-blue-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(r\\) es la distancia al electrón en metros</span>
                </p>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
            <p class="text-gray-300">
                <strong class="text-yellow-400">⚠️ Característica:</strong> El potencial de una carga negativa 
                es siempre <strong class="text-white">negativo</strong>. Esto significa que se requiere trabajo 
                para alejar una carga positiva de un electrón (van hacia un potencial mayor).
            </p>
        </div>
    </div>

    <!-- Field Lines -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">〰️ Líneas de Campo</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <p class="text-gray-300 leading-relaxed mb-4">
                Las líneas de campo eléctrico de un electrón (carga negativa) tienen 
                características específicas:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #212121;">
                    <h4 class="text-blue-400 font-bold mb-2">🎯 Dirección</h4>
                    <p class="text-gray-300 text-sm">
                        Apuntan radialmente <strong class="text-white">hacia adentro</strong> (hacia el electrón) 
                        desde todas las direcciones del espacio.
                    </p>
                </div>

                <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #212121;">
                    <h4 class="text-blue-400 font-bold mb-2">🔄 Simetría</h4>
                    <p class="text-gray-300 text-sm">
                        Distribución <strong class="text-white">esféricamente simétrica</strong> alrededor 
                        de la carga puntual.
                    </p>
                </div>

                <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #212121;">
                    <h4 class="text-blue-400 font-bold mb-2">🌀 Convergencia</h4>
                    <p class="text-gray-300 text-sm">
                        Las líneas <strong class="text-white">convergen</strong> hacia el electrón, 
                        comportándose como un "sumidero" de campo eléctrico.
                    </p>
                </div>

                <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #212121;">
                    <h4 class="text-blue-400 font-bold mb-2">📏 Densidad</h4>
                    <p class="text-gray-300 text-sm">
                        Al igual que con el protón, la densidad de líneas indica 
                        <strong class="text-white">intensidad del campo</strong>.
                    </p>
                </div>
            </div>
        </div>

        <div class="p-4 rounded-lg border-l-4 border-purple-500" style="background-color: #181818;">
            <p class="text-gray-300">
                <strong class="text-purple-400">🔍 Convención:</strong> Por convención, las líneas de campo 
                eléctrico siempre van de cargas positivas (fuentes) a cargas negativas (sumideros). 
                Un electrón aislado tiene líneas que "llegan" desde el infinito.
            </p>
        </div>
    </div>

    <!-- Interactions -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🤝 Interacciones con Otras Cargas</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            La fuerza eléctrica entre un electrón y otra carga está dada por la 
            <strong class="text-white">Ley de Coulomb</strong>:
        </p>

        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ \\vec{F} = k \\frac{q_1 q_2}{r^2}\\hat{r}_{12} \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Para el electrón: \\(q_1 = -e\\)
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-blue-500" style="background-color: #303030;">
                <h3 class="text-blue-400 font-bold mb-3">⚡ Con otro Electrón (−)</h3>
                <p class="text-gray-300 mb-2">
                    Dos cargas negativas se <strong class="text-white">repelen</strong>:
                </p>
                <div class="text-center my-2">
                    \\[ F > 0 \\quad (\\text{repulsión}) \\]
                </div>
                <p class="text-gray-400 text-sm">
                    La fuerza apunta alejando ambas cargas entre sí.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-red-500" style="background-color: #303030;">
                <h3 class="text-red-400 font-bold mb-3">🧲 Con un Protón (+)</h3>
                <p class="text-gray-300 mb-2">
                    Cargas opuestas se <strong class="text-white">atraen</strong>:
                </p>
                <div class="text-center my-2">
                    \\[ F &lt; 0 \\quad (\\text{atracción}) \\]
                </div>
                <p class="text-gray-400 text-sm">
                    La fuerza apunta acercando ambas cargas (base de los átomos).
                </p>
            </div>
        </div>
    </div>

    <!-- Energy -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Energía Potencial Eléctrica</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            La energía potencial eléctrica de una carga \\(q\\) en presencia de un electrón 
            a distancia \\(r\\) es:
        </p>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ U = k \\frac{q_1 q_2}{r} = -\\frac{k e q}{r} \\]
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="p-3 rounded border-l-4 border-blue-400" style="background-color: #212121;">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-white">Si \\(q > 0\\):</strong> \\(U &lt; 0\\) (se atraen, 
                        sistema ligado)
                    </p>
                </div>
                <div class="p-3 rounded border-l-4 border-red-400" style="background-color: #212121;">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-white">Si \\(q &lt; 0\\):</strong> \\(U > 0\\) (se repelen, 
                        energía positiva)
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #181818;">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-400">⚛️ En el átomo de hidrógeno:</strong> La energía 
                potencial negativa entre el protón y el electrón (\\(U &lt; 0\\)) es lo que mantiene 
                al electrón "ligado" al núcleo, formando un sistema estable.
            </p>
        </div>
    </div>

    <!-- Wave-Particle Duality -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🌊 Dualidad Onda-Partícula</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            El electrón exhibe un comportamiento fascinante: puede comportarse como partícula 
            y como onda simultáneamente.
        </p>

        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <h3 class="text-purple-400 font-bold mb-3">Longitud de Onda de De Broglie</h3>
            <div class="text-center mb-3">
                \\[ \\lambda = \\frac{h}{p} = \\frac{h}{m_e v} \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Donde \\(h\\) es la constante de Planck, \\(p\\) el momento y \\(v\\) la velocidad
            </p>
        </div>

        <div class="space-y-3">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">🎯 Como Partícula</h4>
                <p class="text-gray-300 text-sm">
                    Tiene masa definida, carga y posición. Deja trazas en detectores y puede 
                    ser desviado por campos eléctricos y magnéticos.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">🌊 Como Onda</h4>
                <p class="text-gray-300 text-sm">
                    Exhibe interferencia y difracción. Los electrones en átomos forman "ondas estacionarias" 
                    alrededor del núcleo (orbitales atómicos).
                </p>
            </div>
        </div>
    </div>

    <!-- Practical Tips -->
    <div class="p-6 rounded-xl border-l-4 border-emerald-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎮 Experimentación en el Simulador</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔵 Un solo electrón:</strong>
                <span class="text-gray-300"> Observa cómo las líneas de campo convergen hacia 
                el electrón desde todas las direcciones, como un "remolino" hacia adentro.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔵🔵 Dos electrones:</strong>
                <span class="text-gray-300"> Coloca dos electrones cerca y observa la repulsión mutua. 
                Las líneas de campo se "repelen" creando una región de separación entre ellos.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔵🔴 Electrón y protón (Átomo):</strong>
                <span class="text-gray-300"> Simula un átomo de hidrógeno colocando un protón y un electrón 
                cercanos. Las líneas van del protón al electrón, mostrando el enlace atómico.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔵🔴🔵🔴 Múltiples pares:</strong>
                <span class="text-gray-300"> Crea varios pares electrón-protón para simular una molécula 
                o red cristalina y observa los complejos patrones de campo resultantes.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📍 Sensores de potencial:</strong>
                <span class="text-gray-300"> Coloca sensores alrededor de un electrón para visualizar 
                que el potencial es negativo y aumenta (se hace menos negativo) con la distancia.</span>
            </div>
        </div>
    </div>

    <!-- Applications -->
    <div class="p-6 rounded-xl border-l-4 border-cyan-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🔬 Aplicaciones del Electrón</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">💡 Electricidad</h4>
                <p class="text-gray-300 text-sm">
                    La corriente eléctrica en conductores es el flujo de electrones. 
                    Toda la tecnología eléctrica depende del movimiento de electrones.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">💻 Electrónica</h4>
                <p class="text-gray-300 text-sm">
                    Transistores, circuitos integrados y procesadores controlan el flujo 
                    de electrones para procesar información.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">🔬 Microscopía</h4>
                <p class="text-gray-300 text-sm">
                    Los microscopios electrónicos usan haces de electrones para obtener 
                    imágenes con resolución atómica.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">⚛️ Química</h4>
                <p class="text-gray-300 text-sm">
                    Los enlaces químicos se forman por el intercambio o compartición de 
                    electrones entre átomos.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">📺 Pantallas CRT</h4>
                <p class="text-gray-300 text-sm">
                    Las antiguas televisiones y monitores usaban haces de electrones 
                    para crear imágenes en la pantalla.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">⚡ Rayos X</h4>
                <p class="text-gray-300 text-sm">
                    Los rayos X se generan cuando electrones de alta energía chocan 
                    con un material metálico.
                </p>
            </div>
        </div>
    </div>

    <!-- Historical Context -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">📚 Contexto Histórico</h2>
        
        <div class="space-y-4 text-gray-300">
            <p class="leading-relaxed">
                El electrón fue descubierto por <strong class="text-white">J.J. Thomson</strong> en 1897 
                mediante experimentos con tubos de rayos catódicos. Thomson demostró que los "rayos catódicos" 
                eran en realidad partículas con carga negativa.
            </p>
            
            <p class="leading-relaxed">
                El término "electrón" fue propuesto por <strong class="text-white">George Johnstone Stoney</strong> 
                en 1891, derivado de la palabra griega <em class="text-purple-400">ἤλεκτρον</em> (elektron), 
                que significa "ámbar" (el ámbar adquiere carga eléctrica al frotarse).
            </p>

            <p class="leading-relaxed">
                El modelo atómico moderno, donde los electrones ocupan orbitales cuánticos alrededor del núcleo, 
                fue desarrollado en las décadas de 1920-1930 con la <strong class="text-white">mecánica cuántica</strong>, 
                revolucionando nuestra comprensión de la materia.
            </p>

            <p class="leading-relaxed">
                En 1923, <strong class="text-white">Robert Millikan</strong> midió con precisión la carga del electrón 
                mediante su famoso experimento de la gota de aceite, confirmando la cuantización de la carga eléctrica.
            </p>
        </div>
    </div>

    <!-- Comparison -->
    <div class="p-6 rounded-xl border-l-4 border-yellow-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚖️ Comparación: Electrón vs Protón</h2>
        
        <div class="overflow-x-auto">
            <table class="w-full text-sm">
                <thead>
                    <tr style="background-color: #303030;">
                        <th class="p-3 text-left text-yellow-400">Propiedad</th>
                        <th class="p-3 text-center text-blue-400">Electrón (−)</th>
                        <th class="p-3 text-center text-red-400">Protón (+)</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300">
                    <tr style="background-color: #181818;">
                        <td class="p-3 font-bold">Carga</td>
                        <td class="p-3 text-center">\\(-e\\)</td>
                        <td class="p-3 text-center">\\(+e\\)</td>
                    </tr>
                    <tr style="background-color: #212121;">
                        <td class="p-3 font-bold">Masa</td>
                        <td class="p-3 text-center">\\(9.109 \\times 10^{-31}\\) kg</td>
                        <td class="p-3 text-center">\\(1.673 \\times 10^{-27}\\) kg</td>
                    </tr>
                    <tr style="background-color: #181818;">
                        <td class="p-3 font-bold">Ubicación</td>
                        <td class="p-3 text-center">Orbitales atómicos</td>
                        <td class="p-3 text-center">Núcleo atómico</td></tr>
                    <tr style="background-color: #212121;">
                        <td class="p-3 font-bold">Campo eléctrico</td>
                        <td class="p-3 text-center">Hacia adentro</td>
                        <td class="p-3 text-center">Hacia afuera</td>
                    </tr>
                    <tr style="background-color: #181818;">
                        <td class="p-3 font-bold">Potencial</td>
                        <td class="p-3 text-center">Negativo (\\(V &lt; 0\\))</td>
                        <td class="p-3 text-center">Positivo (\\(V > 0\\))</td>
                    </tr>
                    <tr style="background-color: #212121;">
                        <td class="p-3 font-bold">Estructura</td>
                        <td class="p-3 text-center">Elemental (puntual)</td>
                        <td class="p-3 text-center">Compuesto (quarks)</td>
                    </tr>
                    <tr style="background-color: #181818;">
                        <td class="p-3 font-bold">Relación de masa</td>
                        <td class="p-3 text-center">1</td>
                        <td class="p-3 text-center">1836</td>
                    </tr>
                    <tr style="background-color: #212121;">
                        <td class="p-3 font-bold">Spin</td>
                        <td class="p-3 text-center">\\(\\frac{1}{2}\\)</td>
                        <td class="p-3 text-center">\\(\\frac{1}{2}\\)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
            <p class="text-gray-300 text-sm">
                <strong class="text-yellow-400">🔑 Dato clave:</strong> A pesar de sus diferencias de masa, 
                la magnitud de su carga es <strong class="text-white">exactamente igual</strong>, lo que permite 
                que los átomos sean eléctricamente neutros cuando tienen el mismo número de protones y electrones.
            </p>
        </div>
    </div>

    <!-- Quantum Numbers -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🔢 Números Cuánticos del Electrón</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            En átomos, el estado de un electrón se describe mediante cuatro números cuánticos:
        </p>

        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-purple-400" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">1. Número Cuántico Principal (\\(n\\))</h4>
                <p class="text-gray-300 text-sm mb-2">
                    Determina el nivel de energía y el tamaño del orbital.
                </p>
                <div class="text-center">
                    \\[ n = 1, 2, 3, 4, \\ldots \\]
                </div>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-purple-400" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">2. Número Cuántico Azimutal (\\(l\\))</h4>
                <p class="text-gray-300 text-sm mb-2">
                    Define la forma del orbital (s, p, d, f).
                </p>
                <div class="text-center">
                    \\[ l = 0, 1, 2, \\ldots, (n-1) \\]
                </div>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-purple-400" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">3. Número Cuántico Magnético (\\(m_l\\))</h4>
                <p class="text-gray-300 text-sm mb-2">
                    Especifica la orientación espacial del orbital.
                </p>
                <div class="text-center">
                    \\[ m_l = -l, \\ldots, 0, \\ldots, +l \\]
                </div>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-purple-400" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">4. Número Cuántico de Spin (\\(m_s\\))</h4>
                <p class="text-gray-300 text-sm mb-2">
                    Describe el spin intrínseco del electrón.
                </p>
                <div class="text-center">
                    \\[ m_s = +\\frac{1}{2} \\text{ o } -\\frac{1}{2} \\]
                </div>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #212121;">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-400">🎯 Principio de Exclusión de Pauli:</strong> No pueden existir 
                dos electrones en un átomo con los cuatro números cuánticos idénticos. Esto explica la 
                estructura de la tabla periódica y las propiedades químicas de los elementos.
            </p>
        </div>
    </div>

    <!-- Current and Movement -->
    <div class="p-6 rounded-xl border-l-4 border-blue-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Corriente Eléctrica y Movimiento</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            Cuando los electrones se mueven de forma ordenada a través de un conductor, 
            generan una <strong class="text-white">corriente eléctrica</strong>.
        </p>

        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <h3 class="text-center text-blue-400 font-bold mb-3">Corriente Eléctrica</h3>
            <div class="text-center mb-3">
                \\[ I = \\frac{\\Delta Q}{\\Delta t} = \\frac{n \\cdot e}{\\Delta t} \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Donde \\(I\\) es la corriente en Amperes, \\(\\Delta Q\\) es la carga que pasa 
                en un tiempo \\(\\Delta t\\), y \\(n\\) es el número de electrones
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h4 class="text-blue-400 font-bold mb-2">🐌 Velocidad de Deriva</h4>
                <p class="text-gray-300 text-sm">
                    Los electrones en un conductor se mueven muy lentamente (\\(\\sim 10^{-4}\\) m/s), 
                    aunque la señal eléctrica viaja a velocidades cercanas a la luz.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h4 class="text-blue-400 font-bold mb-2">🔄 Dirección Convencional</h4>
                <p class="text-gray-300 text-sm">
                    Por convención histórica, la corriente fluye de positivo a negativo, 
                    <strong class="text-white">opuesto</strong> al movimiento real de los electrones.
                </p>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #181818;">
            <p class="text-gray-300 text-sm">
                <strong class="text-yellow-400">💡 Curiosidad:</strong> Un Ampere (1 A) de corriente 
                representa aproximadamente \\(6.24 \\times 10^{18}\\) electrones pasando por un punto 
                cada segundo. ¡Son trillones de electrones!
            </p>
        </div>
    </div>

    <!-- Relativistic Effects -->
    <div class="p-6 rounded-xl border-l-4 border-cyan-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🚀 Efectos Relativistas</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            Cuando los electrones se mueven a velocidades cercanas a la velocidad de la luz, 
            debemos considerar la <strong class="text-white">relatividad especial</strong>.
        </p>

        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <h3 class="text-center text-cyan-400 font-bold mb-3">Masa Relativista</h3>
            <div class="text-center mb-3">
                \\[ m = \\frac{m_0}{\\sqrt{1 - \\frac{v^2}{c^2}}} = \\gamma m_0 \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Donde \\(m_0\\) es la masa en reposo, \\(v\\) la velocidad, \\(c\\) la velocidad de la luz, 
                y \\(\\gamma\\) el factor de Lorentz
            </p>
        </div>

        <div class="p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #303030;">
            <h4 class="text-cyan-400 font-bold mb-2">⚡ Aplicaciones</h4>
            <p class="text-gray-300 text-sm">
                Los efectos relativistas son importantes en aceleradores de partículas, donde 
                los electrones alcanzan velocidades superiores al 99.9% de la velocidad de la luz, 
                y en radiación sincrotrón utilizada en investigación científica.
            </p>
        </div>
    </div>

    <!-- Antimatter -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🌌 Antimateria: El Positrón</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            El electrón tiene una antipartícula llamada <strong class="text-white">positrón</strong> (\\(e^+\\)), 
            que tiene la misma masa pero carga opuesta.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="p-4 rounded-lg border-l-4 border-blue-400" style="background-color: #303030;">
                <h4 class="text-blue-400 font-bold mb-2">Electrón (\\(e^-\\))</h4>
                <ul class="text-gray-300 text-sm space-y-1">
                    <li>• Carga: \\(-e\\)</li>
                    <li>• Materia ordinaria</li>
                    <li>• Estable</li>
                    <li>• Abundante en el universo</li>
                </ul>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-purple-400" style="background-color: #303030;">
                <h4 class="text-purple-400 font-bold mb-2">Positrón (\\(e^+\\))</h4>
                <ul class="text-gray-300 text-sm space-y-1">
                    <li>• Carga: \\(+e\\)</li>
                    <li>• Antimateria</li>
                    <li>• Se aniquila con electrones</li>
                    <li>• Raro naturalmente</li>
                </ul>
            </div>
        </div>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <h3 class="text-center text-purple-400 font-bold mb-3">Aniquilación Electrón-Positrón</h3>
            <div class="text-center mb-3">
                \\[ e^- + e^+ \\rightarrow 2\\gamma \\quad (\\text{dos fotones de energía}) \\]
            </div>
            <div class="text-center">
                \\[ E = 2m_e c^2 = 1.022 \\text{ MeV} \\]
            </div>
            <p class="text-gray-400 text-center text-sm mt-3">
                La masa de ambas partículas se convierte completamente en energía (rayos gamma)
            </p>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-cyan-500" style="background-color: #212121;">
            <p class="text-gray-300 text-sm">
                <strong class="text-cyan-400">🏥 Aplicación médica:</strong> Los positrones se usan en 
                tomografía por emisión de positrones (PET), una técnica de imagenología médica que 
                detecta los rayos gamma producidos por la aniquilación electrón-positrón.
            </p>
        </div>
    </div>

    <!-- Fun Facts -->
    <div class="p-6 rounded-xl border-l-4 border-emerald-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎉 Datos Curiosos sobre el Electrón</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <div class="text-3xl mb-2">🎯</div>
                <h4 class="text-emerald-400 font-bold mb-2">Tamaño</h4>
                <p class="text-gray-300 text-sm">
                    El electrón es tan pequeño que si un átomo tuviera el tamaño de un estadio de fútbol, 
                    el electrón sería más pequeño que una canica.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <div class="text-3xl mb-2">⚡</div>
                <h4 class="text-emerald-400 font-bold mb-2">Velocidad en Átomos</h4>
                <p class="text-gray-300 text-sm">
                    Los electrones en átomos se mueven a velocidades de aproximadamente \\(2.2 \\times 10^6\\) m/s, 
                    cerca del 1% de la velocidad de la luz.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <div class="text-3xl mb-2">🌊</div>
                <h4 class="text-emerald-400 font-bold mb-2">Principio de Incertidumbre</h4>
                <p class="text-gray-300 text-sm">
                    Es imposible conocer simultáneamente con precisión absoluta la posición y 
                    el momento de un electrón (principio de Heisenberg).
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <div class="text-3xl mb-2">🔋</div>
                <h4 class="text-emerald-400 font-bold mb-2">Energía</h4>
                <p class="text-gray-300 text-sm">
                    Se necesita aproximadamente 13.6 eV de energía para arrancar un electrón 
                    del átomo de hidrógeno (energía de ionización).
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <div class="text-3xl mb-2">🧲</div>
                <h4 class="text-emerald-400 font-bold mb-2">Momento Magnético</h4>
                <p class="text-gray-300 text-sm">
                    El electrón tiene un momento magnético intrínseco debido a su spin, 
                    comportándose como un diminuto imán.
                </p>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <div class="text-3xl mb-2">🎭</div>
                <h4 class="text-emerald-400 font-bold mb-2">Indistinguibles</h4>
                <p class="text-gray-300 text-sm">
                    Todos los electrones en el universo son absolutamente idénticos e 
                    indistinguibles entre sí, una propiedad cuántica fundamental.
                </p>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="p-6 rounded-xl text-center" style="background-color: #06202B;">
        <h3 class="text-xl font-bold text-blue-400 mb-3">📌 Resumen Clave</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Carga:</strong><br>
                    \\(-e = -1.602 \\times 10^{-19}\\) C
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Campo:</strong><br>
                    Radial hacia adentro
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Interacción:</strong><br>
                    Repele (−), Atrae (+)
                </p>
            </div>
        </div>
        <p class="text-blue-300 text-sm mt-4 italic">
            El electrón es fundamental para comprender la electricidad, la química y la estructura de la materia
        </p>
    </div>
</div>
`;