export const protonDoc = `
<div class="space-y-6">
    <!-- Hero Section -->
    <div class="text-center p-8 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white rounded-xl shadow-xl">
        <div class="text-6xl mb-4">🔴</div>
        <h1 class="text-4xl md:text-5xl font-bold mb-3">Protón (+)</h1>
        <p class="text-xl md:text-2xl opacity-95">Partícula con Carga Positiva</p>
    </div>

    <!-- Introduction -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚛️ ¿Qué es un Protón?</h2>
        <p class="text-gray-300 leading-relaxed mb-3">
            El <strong class="text-red-400">protón</strong> es una partícula subatómica con carga eléctrica positiva 
            que se encuentra en el núcleo de los átomos. Es una de las partículas fundamentales que 
            componen la materia junto con los neutrones y electrones.
        </p>
        <p class="text-gray-300 leading-relaxed">
            En este simulador, el protón representa cualquier <strong class="text-white">carga positiva</strong> 
            que genera un campo eléctrico radial apuntando hacia afuera.
        </p>
    </div>

    <!-- Properties -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📊 Propiedades Fundamentales</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-red-400" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-red-400 mb-2">Carga Eléctrica</h3>
                <p class="text-gray-300 mb-2">
                    La carga del protón es la <strong class="text-white">carga elemental positiva</strong>:
                </p>
                <div class="text-center my-3">
                    \\[ q_p = +e = +1.602 \\times 10^{-19} \\text{ C} \\]
                </div>
                <p class="text-gray-400 text-sm">
                    Donde \\(e\\) es la magnitud de la carga elemental y C representa Coulombs.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-red-400" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-red-400 mb-2">Masa</h3>
                <p class="text-gray-300 mb-2">
                    La masa del protón es aproximadamente:
                </p>
                <div class="text-center my-3">
                    \\[ m_p = 1.673 \\times 10^{-27} \\text{ kg} \\]
                </div>
                <p class="text-gray-400 text-sm">
                    Es aproximadamente 1836 veces más pesado que un electrón.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-red-400 md:col-span-2" style="background-color: #303030;">
                <h3 class="text-lg font-bold text-red-400 mb-2">Estabilidad</h3>
                <p class="text-gray-300">
                    El protón es una partícula <strong class="text-white">extremadamente estable</strong>. 
                    Su vida media es mayor que la edad del universo (\\( > 10^{34} \\) años), 
                    lo que lo hace esencialmente estable para propósitos prácticos.
                </p>
            </div>
        </div>
    </div>

    <!-- Electric Field -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Campo Eléctrico Generado</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            Una carga positiva como el protón genera un <strong class="text-white">campo eléctrico radial</strong> 
            que apunta hacia afuera en todas las direcciones. La magnitud del campo está dada por:
        </p>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <h3 class="text-center text-red-400 font-bold mb-3">Magnitud del Campo</h3>
            <div class="text-center mb-3">
                \\[ E = \\frac{k |q|}{r^2} = \\frac{k e}{r^2} \\]
            </div>
            <p class="text-gray-400 text-center text-sm mb-4">
                Donde \\(k\\) es la constante de Coulomb y \\(r\\) es la distancia a la carga
            </p>

            <h3 class="text-center text-red-400 font-bold mb-3 mt-6">Forma Vectorial</h3>
            <div class="text-center">
                \\[ \\vec{E} = \\frac{k q}{r^2}\\hat{r} \\]
            </div>
            <p class="text-gray-400 text-center text-sm mt-3">
                El vector \\(\\hat{r}\\) apunta <strong class="text-white">radialmente hacia afuera</strong> desde el protón
            </p>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-blue-500" style="background-color: #181818;">
            <p class="text-gray-300">
                <strong class="text-blue-400">💡 Nota importante:</strong> El campo eléctrico disminuye con 
                el cuadrado de la distancia (\\(\\frac{1}{r^2}\\)), conocida como la 
                <strong class="text-white">ley del inverso del cuadrado</strong>.
            </p>
        </div>
    </div>

    <!-- Potential -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">📈 Potencial Eléctrico</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            El potencial eléctrico generado por un protón (carga positiva) en un punto 
            a distancia \\(r\\) es:
        </p>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ V = \\frac{k q}{r} = \\frac{k e}{r} \\]
            </div>
            
            <div class="space-y-3 text-gray-300">
                <p class="flex items-start">
                    <span class="text-red-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(V\\) es el potencial eléctrico en voltios (V)</span>
                </p>
                <p class="flex items-start">
                    <span class="text-red-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(k = 8.99 \\times 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2\\) (constante de Coulomb)</span>
                </p>
                <p class="flex items-start">
                    <span class="text-red-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(e = 1.602 \\times 10^{-19}\\) C (carga elemental)</span>
                </p>
                <p class="flex items-start">
                    <span class="text-red-500 mr-3 flex-shrink-0">▸</span>
                    <span>\\(r\\) es la distancia al protón en metros</span>
                </p>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
            <p class="text-gray-300">
                <strong class="text-yellow-400">⚠️ Característica:</strong> El potencial de una carga positiva 
                es siempre <strong class="text-white">positivo</strong> y disminuye con \\(\\frac{1}{r}\\) 
                (no con \\(\\frac{1}{r^2}\\) como el campo).
            </p>
        </div>
    </div>

    <!-- Field Lines -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">〰️ Líneas de Campo</h2>
        
        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <p class="text-gray-300 leading-relaxed mb-4">
                Las líneas de campo eléctrico de un protón (carga positiva) tienen 
                características específicas:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-lg border-l-4 border-red-400" style="background-color: #212121;">
                    <h4 class="text-red-400 font-bold mb-2">🎯 Dirección</h4>
                    <p class="text-gray-300 text-sm">
                        Salen radialmente <strong class="text-white">hacia afuera</strong> desde el protón 
                        en todas las direcciones del espacio.
                    </p>
                </div>

                <div class="p-4 rounded-lg border-l-4 border-red-400" style="background-color: #212121;">
                    <h4 class="text-red-400 font-bold mb-2">🔄 Simetría</h4>
                    <p class="text-gray-300 text-sm">
                        Distribución <strong class="text-white">esféricamente simétrica</strong> alrededor 
                        de la carga puntual.
                    </p>
                </div>

                <div class="p-4 rounded-lg border-l-4 border-red-400" style="background-color: #212121;">
                    <h4 class="text-red-400 font-bold mb-2">📏 Densidad</h4>
                    <p class="text-gray-300 text-sm">
                        La densidad de líneas es proporcional a la <strong class="text-white">intensidad del campo</strong>. 
                        Más cercano = más líneas por área.
                    </p>
                </div>

                <div class="p-4 rounded-lg border-l-4 border-red-400" style="background-color: #212121;">
                    <h4 class="text-red-400 font-bold mb-2">∞ Extensión</h4>
                    <p class="text-gray-300 text-sm">
                        Las líneas se extienden hasta el infinito, aunque su efecto 
                        <strong class="text-white">disminuye con la distancia</strong>.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Interactions -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🤝 Interacciones con Otras Cargas</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            La fuerza eléctrica entre un protón y otra carga está dada por la 
            <strong class="text-white">Ley de Coulomb</strong>:
        </p>

        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ \\vec{F} = k \\frac{q_1 q_2}{r^2}\\hat{r}_{12} \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Donde \\(q_1\\) y \\(q_2\\) son las magnitudes de las cargas
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-l-4 border-red-500" style="background-color: #303030;">
                <h3 class="text-red-400 font-bold mb-3">⚡ Con otro Protón (+)</h3>
                <p class="text-gray-300 mb-2">
                    Dos cargas positivas se <strong class="text-white">repelen</strong>:
                </p>
                <div class="text-center my-2">
                    \\[ F > 0 \\quad (\\text{repulsión}) \\]
                </div>
                <p class="text-gray-400 text-sm">
                    La fuerza apunta alejando ambas cargas entre sí.
                </p>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-blue-500" style="background-color: #303030;">
                <h3 class="text-blue-400 font-bold mb-3">🧲 Con un Electrón (−)</h3>
                <p class="text-gray-300 mb-2">
                    Cargas opuestas se <strong class="text-white">atraen</strong>:
                </p>
                <div class="text-center my-2">
                    \\[ F &lt; 0 \\quad (\\text{atracción}) \\]
                </div>
                <p class="text-gray-400 text-sm">
                    La fuerza apunta acercando ambas cargas.
                </p>
            </div>
        </div>
    </div>

    <!-- Elementary Charge -->
    <div class="p-6 rounded-xl border-l-4 border-cyan-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">🔬 La Carga Elemental</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            La <strong class="text-cyan-400">carga elemental</strong> \\(e\\) es la unidad fundamental 
            de carga eléctrica en la naturaleza. Es la magnitud de la carga del protón (positiva) 
            y del electrón (negativa).
        </p>

        <div class="p-5 rounded-lg mb-4" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ e = 1.602176634 \\times 10^{-19} \\text{ C} \\]
            </div>
            <p class="text-gray-400 text-center text-sm">
                Valor exacto definido desde 2019 por el Sistema Internacional de Unidades
            </p>
        </div>

        <div class="space-y-3">
            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">⚛️ Cuantización de la Carga</h4>
                <p class="text-gray-300 text-sm leading-relaxed">
                    Toda carga eléctrica observable es un múltiplo entero de la carga elemental:
                </p>
                <div class="text-center my-2">
                    \\[ Q = n \\cdot e \\quad \\text{donde } n \\in \\mathbb{Z} \\]
                </div>
            </div>

            <div class="p-4 rounded-lg" style="background-color: #303030;">
                <h4 class="text-cyan-400 font-bold mb-2">🎯 Constante Fundamental</h4>
                <p class="text-gray-300 text-sm">
                    La carga elemental es una de las <strong class="text-white">constantes fundamentales 
                    de la naturaleza</strong>, junto con la velocidad de la luz \\(c\\) y la constante 
                    de Planck \\(h\\).
                </p>
            </div>
        </div>
    </div>

    <!-- Energy -->
    <div class="p-6 rounded-xl border-l-4 border-red-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">⚡ Energía Potencial Eléctrica</h2>
        
        <p class="text-gray-300 leading-relaxed mb-4">
            La energía potencial eléctrica de una carga \\(q\\) en presencia de un protón 
            a distancia \\(r\\) es:
        </p>

        <div class="p-5 rounded-lg" style="background-color: #303030;">
            <div class="text-center mb-4">
                \\[ U = k \\frac{q_1 q_2}{r} = \\frac{k e q}{r} \\]
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="p-3 rounded border-l-4 border-red-400" style="background-color: #212121;">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-white">Si \\(q > 0\\):</strong> \\(U > 0\\) (se repelen, 
                        energía positiva)
                    </p>
                </div>
                <div class="p-3 rounded border-l-4 border-blue-400" style="background-color: #212121;">
                    <p class="text-gray-300 text-sm">
                        <strong class="text-white">Si \\(q &lt; 0\\):</strong> \\(U &lt; 0\\) (se atraen, 
                        energía negativa)
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-4 p-4 rounded-lg border-l-4 border-yellow-500" style="background-color: #303030;">
            <p class="text-gray-300 text-sm">
                <strong class="text-yellow-400">💡 Interpretación:</strong> Cuando \\(U > 0\\), 
                se requiere energía para mantener las cargas juntas. Cuando \\(U &lt; 0\\), 
                se libera energía cuando las cargas se acercan.
            </p>
        </div>
    </div>

    <!-- Practical Tips -->
    <div class="p-6 rounded-xl border-l-4 border-emerald-500" style="background-color: #212121;">
        <h2 class="text-2xl font-bold text-white mb-4">🎮 Experimentación en el Simulador</h2>
        
        <div class="space-y-3">
            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔴 Un solo protón:</strong>
                <span class="text-gray-300"> Observa cómo las líneas de campo se distribuyen 
                uniformemente en todas las direcciones, creando un patrón radial perfecto.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔴🔴 Dos protones:</strong>
                <span class="text-gray-300"> Coloca dos protones cerca y observa cómo se repelen. 
                Las líneas de campo se "empujan" entre sí, creando regiones donde no hay líneas.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">🔴🔵 Protón y electrón:</strong>
                <span class="text-gray-300"> Crea un par protón-electrón (dipolo eléctrico) y 
                observa cómo las líneas de campo van del protón al electrón, mostrando atracción.</span>
            </div>

            <div class="p-4 rounded-lg border-l-4 border-emerald-500" style="background-color: #303030;">
                <strong class="text-emerald-400">📍 Usa sensores:</strong>
                <span class="text-gray-300"> Coloca sensores de campo a diferentes distancias del 
                protón para visualizar cómo disminuye la intensidad con \\(1/r^2\\).</span>
            </div>
        </div>
    </div>

    <!-- Historical Context -->
    <div class="p-6 rounded-xl border-l-4 border-purple-500" style="background-color: #181818;">
        <h2 class="text-2xl font-bold text-white mb-4">📚 Contexto Histórico</h2>
        
        <div class="space-y-4 text-gray-300">
            <p class="leading-relaxed">
                El protón fue descubierto por <strong class="text-white">Ernest Rutherford</strong> en 1917, 
                aunque su existencia se había inferido previamente de experimentos con tubos de rayos catódicos.
            </p>
            
            <p class="leading-relaxed">
                El término "protón" proviene del griego <em class="text-purple-400">πρῶτον</em> (prōton), 
                que significa "primero", ya que se pensaba que era la partícula fundamental de todos 
                los núcleos atómicos.
            </p>

            <p class="leading-relaxed">
                Hoy sabemos que el protón está compuesto por <strong class="text-white">quarks</strong> 
                (dos quarks "up" y un quark "down"), pero para el estudio del electromagnetismo clásico, 
                lo tratamos como una carga puntual.
            </p>
        </div>
    </div>

    <!-- Summary -->
    <div class="p-6 rounded-xl text-center" style="background-color: #06202B;">
        <h3 class="text-xl font-bold text-red-400 mb-3">📌 Resumen Clave</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Carga:</strong><br>
                    \\(+e = +1.602 \\times 10^{-19}\\) C
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Campo:</strong><br>
                    Radial hacia afuera
                </p>
            </div>
            <div class="p-3 rounded" style="background-color: #212121;">
                <p class="text-gray-300 text-sm">
                    <strong class="text-white">Interacción:</strong><br>
                    Repele (+), Atrae (−)
                </p>
            </div>
        </div>
    </div>
</div>
`;