import React from "react";
import MannoLogoBlanco from "../Assets/manno-logo-blanco.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Alianzas() {
  useEffect(() => {
    document.title = "MannoApp - Alianzas";
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "rgb(101, 127, 246)" }}>
        <nav className="manno-header terms-header">
          <div>
            <Link to={"/"}>
              <img src={MannoLogoBlanco} alt="Manno-Logo" height={30} />
            </Link>
          </div>
        </nav>
        <div className="terms-container">
          <section id="main">
            <div className="terms-inner">
              <section id="one" className="terms-wrapper style1">
                <header className="special">
                  <h2 className="terms-title">
                    (I)Términos, Condiciones Generales de Alianzas Comerciales.
                  </h2>
                </header>
                <div id="terms" className="content">
                  <span className="auto-style3">
                    Los presentes Términos y Condiciones y Políticas de
                    Privacidad Generales de Alianzas Comerciales (los “Términos
                    y Condiciones Generales”) regulan el uso del Chatbot -según
                    se define más adelante- y la relación contractual entre los
                    Clientes y Tecnoexpertos S.A, CUIT:30718496183, con
                    domicilio legal en Francisco Berra N°655, Morón, Provincia
                    de Buenos Aires.
                  </span>
                  <p className="auto-style2">
                    <strong>Definiciones </strong>
                  </p>
                  <p className="auto-style3">
                    En los presentes Términos y Condiciones los siguientes
                    términos tendrán el siguiente significado:
                  </p>
                  <p>
                    <strong>Tecnoexpertos: </strong>
                    <span className="auto-style3">
                      es Tecnoexpertos S.A, CUIT:30-71849618-3, con domicilio
                      legal en Francisco Berra N°655, Morón, Provincia de Buenos
                      Aires es un proveedor de servicios de instalación y
                      reparación de Productos.
                    </span>
                  </p>
                  <p>
                    &nbsp;
                    <strong>"Chatbot": </strong>
                    <span className="auto-style3">
                      es un medio informático a través de Whatsapp cuyo objeto
                      es la comunicación con el Usuario a través de texto que
                      utiliza inteligencia artificial (IA) y procesamiento del
                      lenguaje natural (PLN) para comprender preguntas o
                      comandos y proporcionar respuestas automatizadas. El
                      Chatbot puede brindar respuestar a consultas, proporcionar
                      información y concretar la venta de Servicios según lo
                      permitido por Tecnoexpertos
                    </span>
                  </p>
                  <p>
                    <strong>"Uso del chatbot": </strong>
                    <span className="auto-style3">
                      significa cualquier acceso de uso al Chatbot, por
                      cualquier medio de enlace ya sea por link de URLrl o
                      sistema QR.
                    </span>
                  </p>
                  <p>
                    <strong>"Usuarios": </strong>
                    <span className="auto-style3">
                      significa todo individuo que acceda al Chatbot para
                      consulta y/o solicitud de los Servicios disponibles.
                    </span>
                  </p>
                  <p>
                    <strong>"Cliente":</strong>
                    <span className="auto-style3">
                      es un Usuario que solicite y abone un Servicio a través
                      del Chatbot. &nbsp;
                    </span>
                  </p>
                  <p>
                    <strong>“Experto”: </strong>
                    <span className="auto-style3">
                      es el técnico designado por Tecnoexpertos para brindar el
                      Servicio.
                    </span>
                  </p>
                  <p>
                    <strong>“Partner”: </strong>
                    <span className="auto-style3">
                      empresa que comercializa bienes que serán instalados y/o
                      reparados y/o revisados a través del servicio otorgado por
                      Tecnoexpertos.
                    </span>
                  </p>
                  <p>
                    <strong>“Productos”: </strong>
                    <span className="auto-style3">
                      son los bienes comercializados por el Partner sobre los
                      que se ofrece y en su caso prestará el Servicio.
                    </span>
                  </p>
                  <p>
                    <strong>“Servicio”: </strong>
                    <span className="auto-style3">
                      significa un servicio ofrecido y/o efectivamente prestado
                      por el Experto que involucra la instalación y/o reparación
                      y/o revisión de Productos Instalables y/o de Productos de
                      Revisión.
                    </span>
                  </p>
                  <p>
                    <strong>“Términos y Condiciones”: </strong>
                    <span className="auto-style3">
                      se refiere a los Términos y Condiciones Generales y
                      Particulares en conjunto.
                    </span>
                  </p>
                  <p>
                    <strong>“Términos y Condiciones Particulares”: </strong>
                    <span className="auto-style3">
                      refieren a los Términos y Condiciones Particulares del
                      Servicio de Alianzas.
                    </span>
                  </p>
                  <p className="auto-style3">
                    Los Términos y Condiciones Generales constituyen un acuerdo
                    vinculante entre el Usuario y Tecnoexpertos, y se consideran
                    aceptados por parte del Usuario cada vez que éste acceda al
                    Chatbot para consulta y/o solicitud de los Servicios
                    disponibles. En caso de desacuerdo, el Usuario deberá
                    abstenerse de utilizar el Chatbot.
                  </p>
                  <p className="auto-style2">
                    <strong>Modificación </strong>
                  </p>
                  <p className="auto-style3">
                    Tecnoexpertos se reserva el derecho de modificar, actualizar
                    o cambiar, a su entera discreción y en cualquier momento los
                    presentes si así lo estimase conveniente. Sin perjuicio de
                    lo anterior, los Usuarios serán responsables de leer los
                    Términos y Condiciones Generales cada vez que ingresen al
                    Chatbot. El acceso al Chatbot se encuentra dirigido,
                    inicialmente, exclusivamente a residentes en la República
                    Argentina, mayores de edad y con plena capacidad para obrar.
                    Tecnoexpertos pone a disposición, el uso de un Chatbot, con
                    el objeto de posibilitar que determinados Usuarios requieran
                    una prestación (Clientes) también a través del Chatbot
                    haciéndole saber que desde el momento en que el Usuario
                    accede, queda sujeto a los presentes Términos y Condiciones
                    Generales. Todo el contenido del Chatbot es propiedad del
                    Tecnoexpertos, con la excepción de las imágenes, sonidos e
                    infografías utilizadas bajo licencia, quedando reservados
                    todos los derechos. Se prohíbe su reproducción total o
                    parcial. Tecnoexpertos no garantiza la disponibilidad,
                    continuidad, precisión y fiabilidad del funcionamiento del
                    Chatbot.Estos Términos y Condiciones Generales regulan el
                    uso del Chatbot perteneciente y gestionado por
                    Tecnoexpertos. El Usuario podrá consultar las opciones de
                    Servicio a través del Chatbot sin necesidad de registración
                    de un usuario y contraseña.
                  </p>
                  <p className="auto-style2">
                    <strong>2. Protección de Datos</strong>
                  </p>
                  <p className="auto-style3">
                    Al utilizar el Chatbot, el Usuario acepta que Tecnoexpertos
                    puede recopilar y procesar los datos resultantes de la
                    navegación del Chatbot, tales como por ejemplo: número de
                    teléfono y nombre declarado. La información recopilada a
                    través del Chatbot se utilizará para mejorar nuestros
                    servicios y proporcionar una mejor experiencia al Usuario en
                    las consultas a través del Chatbot.
                  </p>
                  <p className="auto-style2">
                    <strong>
                      3. Gratuidad y no exigencia de suscripción. Correcto Uso.
                    </strong>
                  </p>
                  <p className="auto-style3">
                    Todo aquel Usuario que acceda a Chatbot, se compromete a su
                    correcta utilización, a tenor de lo establecido en la
                    legislación vigente que le fuera aplicable y a lo contenido
                    en las presentes, absteniéndose de realizar cualquier acto
                    que pudiera ir en contra de los intereses de terceros y de
                    la estructura y funcionamiento del Chatbot. El acceso y/o
                    utilización del Chatbot es gratuito. Tecnoexpertos se
                    reserva el derecho, en el futuro, de imponer el cobro de una
                    comisión por cada utilización del Chatbot, el que será
                    debidamente informado.
                  </p>
                  <p className="auto-style2">
                    <strong>4. Mayoría de edad</strong>
                  </p>
                  <p className="auto-style3">
                    El Usuario manifiesta que es mayor de edad, que tiene plena
                    capacidad de obrar, que ha leído y comprendido los Términos
                    y Condiciones Generales.
                  </p>
                  <p className="auto-style2">
                    <strong>
                      5. Propiedad intelectual (derechos de autor, propiedad
                      industrial y equivalentes)
                    </strong>
                  </p>
                  <p className="auto-style3">
                    Toda la información contenida en el Chatbot incluyendo, sin
                    carácter limitativo, bases de datos, diseño gráfico,
                    fotografías, logos, marcas, imágenes, audio, video,
                    documentos, código fuente (HTML y Javascript), constituye
                    una obra cuya propiedad intelectual pertenece a
                    Tecnoexpertos, o a terceros con especial autorización al
                    respecto, sin que pueda entenderse que el uso o acceso al
                    Chatbot y/o a las prestaciones que se ofrecen, atribuya al
                    Usuario derecho alguno sobre esta información. El Usuario se
                    abstendrá de reproducir o copiar, distribuir, permitir el
                    acceso del público a través de cualquier modalidad de
                    comunicación pública, transformar o modificar el Chatbot, a
                    menos que se cuente con la autorización de Tecnoexpertos;
                    suprimir, eludir o manipular cualquier dato o signo
                    identificativo de los derechos de Tecnoexpertos, y en
                    particular, utilizar la información de cualquier clase
                    obtenida a través del Chatbot, para remitir comunicaciones
                    con fines de venta directa o con cualquier otra clase de
                    finalidad comercial, enviar mensajes no solicitados
                    dirigidos a una pluralidad de personas con independencia de
                    su finalidad, así como a abstenerse de comercializar o
                    divulgar de cualquier modo dicha información; obtener
                    cualquier imagen, grabación, software y, en general,
                    cualquier clase de material accesible a través del Chatbot,
                    mediante cualquier medio diferente a los que el
                    Tecnoexpertos ponga a disposición de los Usuarios. Todo
                    nuevo diseño, clasificación, base de datos, diagramación,
                    software, incluyendo gráficos e imágenes que hayan sido
                    creados por Tecnoexpertos o que esté autorizado para su uso
                    y que no haya sido entregado y/o suministrado directamente
                    por el Usuario, es propiedad de Tecnoexpertos o de un
                    tercero de quien Tecnoexpertos ha obtenido la autorización.
                    En virtud de ello, dichas creaciones no podrán ser
                    utilizadas para fines privados o comerciales, ni copiados
                    y/o divulgados por ningún medio por el Usuario sin la previa
                    y expresa autorización de Tecnoexpertos.
                  </p>
                  <p>
                    <strong>
                      <span className="auto-style2">
                        6. Limitación de Responsabilidad
                      </span>
                    </strong>
                  </p>
                  <p className="auto-style3">
                    Tecnoexpertos no será responsable por cualquier daño
                    directo, indirecto, incidental o consecuente que resulte del
                    uso o la imposibilidad de uso del Chatbot. El Chatbot se
                    proporciona "tal cual" y "según disponibilidad", sin
                    garantías de ningún tipo, ya sean expresas o implícitas.
                  </p>
                  <p>
                    <strong>
                      <span className="auto-style2">7. Prelación</span>
                    </strong>
                  </p>
                  <p className="auto-style3">
                    Salvo que se establezca otro orden de prelación en los
                    Términos y Condiciones Particulares, en caso de existir
                    discrepancias entre los referidos documentos, regirá el
                    siguiente orden: 1) Los Términos y Condiciones Particulares.
                    2) Los Términos y Condiciones Generales.
                  </p>
                  <p className="auto-style2" style={{ fontSize: "18px" }}>
                    <strong style={{ fontSize: "18px" }}>
                      (II)Términos y Condiciones Particulares Servicio de
                      Alianzas.
                    </strong>
                  </p>
                  <p className="auto-style3">
                    Las definiciones y términos establecidos en los Términos y
                    Condiciones Generales tendrán igual alcance y aplicación en
                    los Términos y Condiciones Particulares, salvo que en estos
                    últimos se disponga expresamente lo contrario. En
                    consecuencia, cualquier referencia realizada en los Términos
                    y Condiciones Particulares se interpretará conforme a las
                    definiciones establecidas en los Términos y Condiciones
                    Generales. <br /> Los presentes Términos y Condiciones
                    Particulares, regulan la contratación de los Servicios por
                    parte del Cliente con Tecnoexpertos. <br /> La solicitud de
                    los Servicios se realizará a través del Chatbot. Los
                    Usuarios podrán tomar el rol de <strong> Cliente </strong>
                    requiriendo una prestación de un Servicio. Para poder
                    solicitar un Servicio y adquirir el rol de Cliente a través
                    del Chatbot, es necesario que el Usuario aporte la
                    información requerida para la solicitud del Servicio y abone
                    el mismo. Para poder solicitar un Servicio a través del
                    Chatbot de manera eficiente, los Usuarios deberán aportar
                    ciertos datos, entre ellos: su nombre y apellido, documento
                    nacional de identidad, un correo electrónico, domicilio
                    donde se prestará el Servicio y datos de pago. Al
                    completarlo, se compromete a hacerlo de manera exacta,
                    precisa y verdadera. El Usuario/Cliente será el único
                    responsable de la certeza de los datos brindados para la
                    solicitud del Servicio. Sin perjuicio de la información
                    brindada en el formulario, Tecnoexpertos se reserva la
                    posibilidad de solicitar y/o consultar información
                    adicional. Asimismo, Tecnoexpertos se reserva la posibilidad
                    de rechazar una solicitud de Servicio, sin que esto genere
                    derecho al Usuario de un resarcimiento. <br /> Los tipos de
                    prestaciones ofrecidas en el Chatbot podrán estar agrupadas
                    en distintas Categorías, pudiendo Tecnoexpertos agregar o
                    suprimir las mismas a su sola voluntad. <br /> Los Clientes
                    que requieran determinados Servicios, deberán seleccionar
                    dentro del Chatbot, la Categoría a requerir. Según el
                    Servicio requerido el Cliente podrá subir imágenes, y
                    detalles de la prestación que solicita.
                  </p>

                  <p className="auto-style2">
                    <strong>Alcance de los Servicios</strong>
                  </p>
                  <p className="auto-style3">
                    Una vez individualizado el Servicio a ser prestado por
                    Tecnoexpertos a través de la información que brinde el
                    Usuario en el Chatbot, Tecnoexpertos podrá informar detalles
                    particulares respecto del alcance específico de dicho
                    Servicio solicitado en dicha interacción, indicando alcances
                    y limitaciones específicas del mismo que se complementarán
                    con los informados en los presentes Términos y Condiciones
                    Particulares (“Alcance de los Servicios”). El pago de los
                    Servicios por parte del Cliente, implicará la previa lectura
                    y aceptación del Alcance de los Servicios informados a
                    través del Chatbot.
                  </p>
                  <p className="auto-style2">
                    <strong>Declaraciones y Garantías de Tecnoexpertos.</strong>
                  </p>
                  <p className="auto-style3">
                    Tecnoexpertos declara y garantiza que: <br /> (i) Prestará
                    los Servicios con los más altos estándares de calidad,
                    profesionalidad, diligencia, seguridad, y eficiencia, y
                    realizará sus máximos esfuerzos para proveer los Servicios
                    de manera tal que los plazos y costos involucrados sean
                    cumplidos. <br /> (ii) Cumple y cumplirá con toda la
                    normativa aplicable a su actividad, así como en relación a
                    la prestación de los Servicios, sean estas nacionales,
                    provinciales y/o municipales.
                    <br /> (iii) Cuenta con personal debidamente capacitado y
                    que cuenta con los permisos y seguros necesarios a tal fin.
                    <br /> (iv) Mantendrá el lugar de prestación del Servicio
                    libre de desechos y basuras producidas por sus operaciones.
                  </p>

                  <p className="auto-style2">
                    <strong>Declaración de Satisfacción del Cliente.</strong>
                  </p>
                  <p className="auto-style3">
                    El Cliente reconoce que una vez concluida la visita del
                    Experto luego de prestados los Servicios se considera
                    finalizada la instalación y/o reparación y/o revisión del
                    Producto y la terminación del Servicio satisfactoriamente,
                    sin defectos visibles o problemas en la instalación. El
                    Cliente recibirá comunicación que confirma la conclusión de
                    la visita del Experto. En caso de cualquier inconveniente
                    con el Servicio recibido, deberá comunicarse dentro del
                    plazo de ciento ochenta (180) días para su verificación y de
                    corresponder en su caso, solución por parte de
                    Tecnoexpertos.
                    <br />
                    Sin perjuicio de las especificaciones detalladas en el
                    Alcance del Servicio, se aclara que no se considerarán
                    problemas o defectos en la instalación las cuestiones de
                    índole estética, ya sea por preferencias en la ubicación del
                    producto, cambios estéticos del soporte, etc.
                  </p>

                  <p className="auto-style2">
                    <strong>Limitación de Responsabilidad.</strong>
                  </p>
                  <p className="auto-style3">
                    Tecnoexpertos no será responsable por daños derivados de:
                    <br /> -La incorrecta manipulación del equipo después de la
                    instalación.
                    <br />
                    -Condiciones inadecuadas del lugar de instalación no
                    informadas previamente.
                    <br />
                    -El uso indebido o mantenimiento inadecuado del Producto
                    instalado.
                    <br />
                    Tecnoexpertos no será responsable por ningún daño indirecto,
                    incidental, especial, consecuente o punitivo que surja del
                    uso o la imposibilidad de uso de los Servicios de
                    instalación y/o reparación y/o revisión de los Productos.
                    Esto incluye, pero no se limita a, daños en el domicilio del
                    Cliente que respondan a características del lugar,
                    deterioros de la tensión eléctrica relacionados con
                    deficiencias en la capacidad del sistema domiciliario, u
                    otras pérdidas pecuniarias.
                    <br />
                    En el hipotético caso que se infiera que Tecnoexpertos
                    debiera compensar o indemnizar ante cualquier daño al
                    Cliente, el Cliente acepta que en ningún caso, la
                    responsabilidad total de Tecnoexpertos hacia el Cliente por
                    todos los daños, pérdidas y causas de acción (ya sea por
                    contrato, agravio, incluida la negligencia, o de otro modo)
                    excederá la cantidad que el Cliente pagó por el Servicio.
                    <br />
                    Esta limitación de responsabilidad se aplicará en la máxima
                    medida permitida por la ley aplicable y permanecerá vigente
                    incluso después de brindados los Servicios.
                  </p>

                  <p className="auto-style2">
                    <strong>Limitaciones del Servicio.</strong>
                  </p>
                  <p className="auto-style3">
                    El Servicio brindado por Tecnoexpertos no incluye la
                    posibilidad de la realización de instalaciones y/o
                    reparaciones y /o revisiones en altura, entendiéndose que
                    realizar una instalación en altura se refiere al proceso de
                    montar, fijar o colocar equipos, estructuras o componentes
                    en lugares elevados a más de 2,5m de altura del suelo, ni al
                    vacío o andamios. Este tipo de instalación puede incluir
                    trabajos en techos, fachadas de edificios, entre otros.
                    Debido a los riesgos asociados con realizar trabajos a
                    grandes alturas, estas tareas suelen requerir medidas de
                    seguridad específicas, como el uso de arneses, andamios,
                    plataformas elevadoras y otros equipos de protección
                    personal que no se encuentran incluidos en el Servicio.
                  </p>
                  <p className="auto-style3">
                    El Cliente reconoce y acepta que los Servicios ya sean
                    instalaciones y/o reparaciones y/o revisiones que se
                    soliciten podrían afectar la validez y posterior utilización
                    de la garantía proporcionada por el fabricante y/o vendedor
                    del Producto sobre el cual se brindó el Servicio.
                  </p>
                  <p className="auto-style3">
                    El TITULAR no es responsable de la conducta de cualquier
                    Usuario dentro o fuera del Servicio del Prestador. Todos los
                    Usuarios aceptan tener precaución en todas las interacciones
                    con otros Usuarios.
                  </p>
                  <p className="auto-style3">
                    Ello así, aunque el Servicio ofrecido por Tecnoexpertos,
                    incluye la evaluación técnica para la realización de los
                    Servicios, el Cliente asume la responsabilidad de verificar
                    con el fabricante y/o vendedor del Producto si la prestación
                    de los Servicios puede invalidar o afectar su garantía.
                    Tecnoexpertos no se hace responsable por la pérdida o
                    modificación de la garantía del fabricante y/o vendedor del
                    Producto, debido a la prestación de los Servicios, y no se
                    compromete a reestablecer o reemplazar dicha garantía.
                    Tecnoexpertos responderá únicamente por la garantía prestada
                    respecto de los Servicios.
                  </p>
                  <p className="auto-style3">
                    El Cliente deberá defender, reparar y mantener indemne a
                    Tecnoexpertos por reclamos judiciales o extrajudiciales
                    presentadas por cualquier tercero, derivadas del uso por
                    parte de Tecnoexpertos de la información entregada y/o
                    suministrada por el Cliente.
                  </p>
                  <p className="auto-style3">
                    Cualquier información, dato y/o documentación comercial,
                    financiera, técnica, contable y demás información entregada
                    y/o suministrada por cualquier medio por Tecnoexpertos al
                    Cliente, tendrá el carácter de confidencial. En
                    consecuencia, el Cliente no podrá copiarla, divulgarla a
                    terceros o explotarla con fines comerciales o privados. Así
                    mismo, el Cliente deberá utilizar la máxima diligencia y la
                    buena fe para preservar y mantener como confidencial la
                    información que ha recibido de Tecnoexpertos.
                  </p>

                  <p className="auto-style2">
                    <strong>Aceptación del Alcance del Servicio</strong>
                  </p>
                  <p className="auto-style3">
                    Mediante el pago de los Servicios el Cliente declara haber
                    leído y entendido, y constituye la aceptación inequívoca de
                    su consentimiento de todas las condiciones establecidas en
                    el Alcance de los Servicios y los Términos y Condiciones y
                    demás políticas y principios{" "}
                    <strong>
                      incorporados por referencia, accesibles a través de la
                      URL.
                    </strong>
                  </p>

                  <p className="auto-style2">
                    <strong>Ley y Jurísdicción.</strong>
                  </p>
                  <p className="auto-style3">
                    El Usuario en su calidad y el Cliente aceptan que cualquier
                    controversia dentro del Alcance del Servicio de Alianza será
                    dirimida bajo la ley de la República Argentina bajo la
                    jurisdicción de los Tribunales Comerciales competentes con
                    sede en la Ciudad Autónoma de Buenos Aires.
                  </p>

                  <p className="auto-style2">
                    <strong style={{ fontSize: "18px" }}>
                      III) POLÍTICAS DE PRIVACIDAD.
                    </strong>
                  </p>
                  <p className="auto-style3">
                    Estas políticas de privacidad (en adelante, las “Políticas
                    de Privacidad“) complementan los Términos y Condiciones.Para
                    poder brindar los Servicios de forma correcta, los Usuarios
                    deberán aportar algunos datos, entre ellos, su nombre y
                    apellido, domicilio, cuenta de mail, documento de identidad
                    (en adelante, la “Información Personal”). Es por ello que se
                    requiere que éstos sean verdaderos y exactos.
                  </p>
                  <p className="auto-style3">
                    Como parte normal de nuestras actividades, recogemos y, en
                    algunos casos, revelamos información sobre nuestros Usuarios
                    y Clientes. Estas Políticas de Privacidad describen la
                    información que Tecnoexpertos recoge sobre los Usuarios y lo
                    que puede hacerse con dicha información.
                  </p>
                  <p className="auto-style3">
                    Esta Política de Privacidad es muy detallada porque es
                    importante que todos los Usuarios que accedan y utilicen el
                    Chatbot como canal de contratación de los Servicios. La
                    privacidad de la información de los Usuarios y Clientes es
                    muy importante para Tecnoexpertos. Es por esa razón que se
                    toman las precauciones y recaudos para resguardar la misma
                    utilizando los mecanismos de seguridad informática de
                    protección de la información más completos y eficaces.
                  </p>
                  <p className="auto-style3">
                    La presente política se considerará aceptada por parte del
                    Usuario cada vez que éste acceda al Chatbot, por lo que el
                    Usuario debe leer y entender todas las condiciones
                    establecidas en las Políticas de Privacidad. En caso de
                    desacuerdo, el Usuario deberá abstenerse de utilizar el
                    Chatbot y de proporcionar sus datos personales a través del
                    Chatbot.
                  </p>
                  <p className="auto-style2">
                    <strong>
                      PRIMERA: Derechos de acceso, cancelación y rectificación
                      de la Información Personal. Consentimiento.-
                    </strong>
                  </p>
                  <p className="auto-style3">
                    <strong>1.1.</strong> El Cliente tiene derecho a que sean
                    rectificados, actualizados y -cuando corresponda- suprimidos
                    o sometidos a confidencialidad los datos personales de los
                    que sea titular, dentro de los 5 (cinco) días hábiles de
                    acreditada su identidad y de requerida la medida en
                    cuestión. Téngase en cuenta que la solicitud de retiro o
                    supresión no procederá cuando exista una obligación legal de
                    conservar los datos. Ocasionalmente, puede llevarnos más
                    tiempo si la solicitud es particularmente compleja o si ha
                    hecho varias solicitudes. En este caso, le enviaremos un
                    aviso y lo mantendremos actualizado. El Cliente tiene
                    derecho a que sean rectificados, actualizados y -cuando
                    corresponda- suprimidos o sometidos a confidencialidad los
                    datos personales de los que sea titular, dentro de los 5
                    (cinco) días hábiles de acreditada su identidad y de
                    requerida la medida en cuestión. Téngase en cuenta que la
                    solicitud de retiro o supresión no procederá cuando exista
                    una obligación legal de conservar los datos. Ocasionalmente,
                    puede llevarnos más tiempo si la solicitud es
                    particularmente compleja o si ha hecho varias solicitudes.
                    En este caso, le enviaremos un aviso y lo mantendremos
                    actualizado.
                  </p>
                  <p className="auto-style3">
                    <strong>1.2.</strong> Los Clientes titulares de los datos,
                    garantizan y responden, en cualquier caso, de la veracidad,
                    exactitud, vigencia y autenticidad de la Información
                    Personal facilitada, y se comprometen a mantenerla
                    debidamente actualizada. Tecnoexpertos podrá rectificar,
                    actualizar o suprimir los datos incorrectos y demás
                    obligaciones dispuestas en la Ley N° 25.326 y lo aquí
                    dispuesto.
                  </p>
                  <p className="auto-style3">
                    <strong>1.3.</strong> Una vez solicitado el Servicio en el
                    Chatbot el Usuario podrá revisar y modificar la información
                    que ha enviado durante el proceso incluyendo: Información
                    como: nombre y apellido, domicilio, ciudad, región, código
                    postal, número principal de teléfono, correo electrónico,
                    etc.
                  </p>
                  <p className="auto-style3">
                    <strong>1.4.</strong> Tecnoexpertos conservará la
                    Información Personal de los Clientes por un periodo de diez
                    (10) años desde la compra efectuada, a fin de resolver
                    disputas o reclamos, detectar problemas o incidencias y
                    solucionarlos, y dar cumplimiento a lo dispuesto en los
                    Términos y Condiciones, así como para cumplir con sus
                    obligaciones legales. Ello, sin perjuicio al cumplimiento de
                    su deber de supresión previo al plazo referido, en caso de
                    corresponder, de oficio o a pedido de parte en los términos
                    de los artículos 4 y 16 de la Ley N° 25.326.
                  </p>
                  <p className="auto-style3">
                    <strong>1.5.</strong> Se informa que LA AGENCIA DE ACCESO A
                    LA INFORMACIÓN PUBLICA, en su carácter de órgano de Control
                    de la Ley N° 25.326, tiene la atribución de atender las
                    denuncias y reclamos que interpongan quienes resulten
                    afectados en sus derechos por incumplimiento de las normas
                    vigentes en materia de protección de datos personales.
                  </p>
                  <p className="auto-style3">
                    <strong>1.6.</strong> Se deja constancia que LA AGENCIA DE
                    ACCESO A LA INFORMACIÓN PUBLICA se encuentra en Av. Pte.
                    Gral. Julio A. Roca 710, piso 3, Ciudad Autónoma de Buenos
                    Aires, y su correo electrónico es{" "}
                    <a href="malito:info@aaip.gob.ar">info@aaip.gob.ar</a>
                  </p>

                  <p className="auto-style2">
                    <strong>SEGUNDA: La Información Personal.-</strong>
                  </p>
                  <p className="auto-style3">
                    <strong>2.1.</strong> A fin de prestar los Servicios, los
                    Clientes deben suministrar ciertos datos personales
                    completos y exactos. Tecnoexpertos podrá solicitar, recabar
                    y almacenar la siguiente información personal: nombre y
                    apellido, número de documento o identificación válida,
                    información física de contacto (como número de teléfono,
                    domicilio, dirección de e-mail, o scan de algún documento
                    adjuntado por el Usuario al Chatbot, etc.). Tecnoexpertos
                    podrá confirmar la Información Personal suministrada
                    acudiendo a entidades públicas, compañías especializadas o
                    centrales de riesgo, para lo cual el Usuario mediante el
                    presente lo autoriza expresamente. La información que
                    Tecnoexpertos obtenga de estas entidades será tratada en
                    forma confidencial.
                  </p>
                  <p className="auto-style3">
                    <strong>2.2.</strong> Adicionalmente a lo anterior, se
                    informa también que cuando el Cliente utiliza el Chatbot ,
                    se almacenan datos en los servidores para posibilitar la
                    conexión y por cuestiones de seguridad. Estos datos pueden
                    incluir el nombre de su proveedor de servicio de Internet,
                    los sitios web que derivan al Cliente al Chatbot y los
                    sitios webs que el Cliente visita desde el Chatbot, su
                    dirección IP (Internet Protocol), la fecha y duración de sus
                    visitas a la Aplicación, -previo permiso correspondiente-
                    etc.
                  </p>
                  <p className="auto-style3">
                    <strong>2.3.</strong> El Chatbot requiere de ciertos
                    permisos durante su instalación y uso, necesarios para el
                    correcto funcionamiento del mismo, los que serán
                    oportunamente requeridos al Usuario, tales como
                    localización, notificaciones, acceso a cámara y fotos,
                    almacenamiento, teléfono, envío de SMS, etc.
                  </p>
                  <p className="auto-style3">
                    <strong>2.4.</strong> La unión de estos permisos, más la
                    información facilitada por el usuario permitirá
                    Tecnoexpertos: <br /> (I) Utilizar toda la información con
                    carácter comercial para la personalización de las
                    prestaciones, y realizar tratamientos estadísticos para
                    realizar actividades de investigación y comercialización de
                    los servicios y productos así como elaboración de perfiles e
                    informes estadísticos relacionados con la actividad del
                    Cliente durante el uso del Chatbot su participación en
                    acciones comerciales, publicitarias o promocionales.
                    <br />
                    (II) Desarrollar y mostrar publicidad adaptada a sus
                    preferencias personales.
                    <br />
                    (III) Verificar la inexistencia de actuaciones fraudulentas
                    o contrarias a las condiciones de uso del Chatbot, así como
                    las Políticas de Privacidad.
                    <br />
                    (IV) Identificar y verificar que el Cliente cumple con los
                    requisitos necesarios para poder utilizar el Chatbot y
                    realizar sus acciones de forma lícita.
                  </p>
                  <p className="auto-style3">
                    <strong>2.5.</strong> Tecnoexpertos utiliza tecnologías
                    tales como cookies o similares para analizar tendencias, ,
                    en general, para recopilar información demográfica sobre los
                    Usuarios y Clientes. Además, utiliza cookies en la creación
                    de tareas, para procesos de autentificación y para otros
                    procesos similares.
                  </p>
                  <p className="auto-style2">
                    <strong>TERCERA: Uso de la Información Personal.-</strong>
                  </p>
                  <p className="auto-style3">
                    <strong>3.1.</strong> Para un funcionamiento eficiente del
                    Chatbot y a fin de que los Clientes puedan utilizarlo de
                    manera ágil y fácil, Tecnoexpertos requiere cierta
                    información de carácter personal, incluyendo dirección de
                    e-mail. La recolección de información permite ofrecer a los
                    Clientes funcionalidades que se adecuen mejor a sus
                    necesidades. La Información Personal que se recaba tiene las
                    siguientes finalidades: <br />
                    (I) Que se ubique en tiempo y espacio al Cliente para poder
                    prestar un servicio eficiente y rápido. <br /> (II) La
                    información Personal sólo podrá ser utilizada en el marco de
                    la prestación del Servicio. <br /> (III) Desarrollar
                    estudios internos sobre los intereses, comportamientos y
                    demografía de los Clientes para comprender mejor sus
                    necesidades e intereses y ofrecer mejores servicios o
                    proveerles información relacionada. <br /> (IV) Enviar
                    información o mensajes por e-mail sobre publicidad o
                    promociones, notificaciones, de interés para los usuarios,
                    noticias sobre Tecnoexpertos Si el Cliente lo prefiere,
                    puede solicitar que lo excluyan de las listas para el envío
                    de información promocional o publicitaria, mediante un
                    correo electrónico a hola@mannoapp.com <br /> (V) Enviar
                    información o avisos por mensajes cortos de texto (SMS) al
                    teléfono celular suministrado por el Cliente. Los mensajes
                    cortos de texto podrán contener (sin limitarse a)
                    información sobre las funcionalidades del Chatbot, que podrá
                    incluir claves personales para el uso del mismo y
                    recordatorios de vencimientos de pagos y otras obligaciones
                    adquiridas en dicho contexto.
                  </p>
                  <p className="auto-style3">
                    <strong>3.2.</strong> Tecnoexpertos podrá compartir la
                    Información Personal (incluyendo dirección de e-mail) con
                    los proveedores de servicios o las empresas de “outsourcing”
                    o con las empresas con quienes Tecnoexpertos tenga una
                    relación de colaboración o alianza, que contribuyan a
                    mejorar o facilitar las operaciones a través de
                    Tecnoexpertos. Tecnoexpertos velará porque se cumplan
                    ciertos estándares, mediante la firma de acuerdos o
                    convenios cuyo objeto sea la privacidad de los datos
                    personales de los Clientes.
                  </p>
                  <p className="auto-style3">
                    <strong>3.3.</strong> El Cliente reconoce y acepta que
                    Tecnoexpertos podrá revelar, transmitir o compartir
                    Información Personal con terceros que son proveedores de
                    servicios o empresas aliadas, afiliadas o relacionadas con
                    Tecnoexpertos Es decir, Tecnoexpertos podrá transmitir datos
                    a nivel nacional o internacional a clientes y/o proveedores
                    con los que Tecnoexpertos desarrolla actividades en
                    cumplimiento de su objeto social. Asimismo, se podrá hacer
                    una transferencia a los Partners y/o aliados estratégicos de
                    la empresa para llevar a cabo actividades de marketing,
                    publicidad y promociones asociadas con su objeto social.
                    Todo ello conforme a lo dispuesto en la legislación
                    argentina.
                  </p>
                  <p className="auto-style2">
                    <strong>
                      CUARTA: Confidencialidad de la Información Personal.-
                    </strong>
                  </p>
                  <p className="auto-style3">
                    <strong>4.1.</strong> Tecnoexpertos no venderá, alquilará o
                    compartirá la Información Personal excepto en las formas
                    establecidas en estas Políticas de Privacidad. Sin perjuicio
                    de ello, el Cliente consiente en forma expresa que
                    Tecnoexpertos transfiera total o parcialmente la Información
                    Personal a cualquiera de las sociedades controladas,
                    controlantes y/o vinculadas con Tecnoexpertos, a cualquier
                    título y en el momento, forma y condiciones que estime
                    pertinente. Asimismo, autoriza a Tecnoexpertos desde ya a
                    transferir su Información Personal en caso de venta o
                    transmisión de la totalidad o de una parte de nuestra
                    empresa o de nuestros activos (incluyendo los casos de
                    reestructuración, disolución o liquidación).
                  </p>
                  <p className="auto-style3">
                    <strong>4.2.</strong> La información personal que los
                    Clientes ingresan en el Chatbot será tratada en forma
                    confidencial y Tecnoexpertos hará su mejor esfuerzo para
                    proteger la privacidad de los mismos, de conformidad con lo
                    dispuesto en la ley 25.326. Para ésto se utilizará el
                    sistema de secure socket layer (SSL), que encripta los datos
                    suministrados y evita su uso desautorizado, garantizando una
                    operación segura. No obstante, lo anterior, el Cliente
                    deberá tener en cuenta que Internet no es un medio
                    inexpugnable en cuanto a su seguridad.
                  </p>
                  <p className="auto-style3">
                    <strong>4.3.</strong> Si se ingresaran datos y números
                    correspondientes a tarjetas de crédito, éstos serán
                    encriptados, asegurando así que se mantengan en total
                    confidencialidad y no puedan ser vistos por personas no
                    autorizadas.
                  </p>
                  <p className="auto-style3">
                    <strong>4.4.</strong> Tecnoexpertos garantiza a sus Clientes
                    que utilizará los datos dentro de las pautas establecidas
                    por la ley 25.326 de Protección de Datos Personales. En caso
                    de que su difusión sea requerida por la vía legal,
                    administrativa o judicial correspondiente, Tecnoexpertos se
                    verá obligado a revelar los mismos a la autoridad
                    solicitante. En la medida en que la legislación y normas de
                    procedimiento lo exija, Tecnoexpertos informará a los
                    usuarios sobre estos requerimientos. No obstante ello,
                    conforme se establece en la cláusula 7 del presente, puede
                    suceder que, en virtud de órdenes judiciales o
                    administrativas, o de regulaciones legales, Tecnoexpertos se
                    encuentre obligado a revelar la Información Personal a las
                    autoridades competentes o terceras partes bajo ciertas
                    circunstancias.
                  </p>
                  <p className="auto-style2">
                    <strong>QUINTA:</strong>
                  </p>
                  <p className="auto-style3">
                    <strong>5.1.</strong> Los Clientes serán responsables de
                    todos los actos que tengan lugar mediante el uso de su
                    nombre, lo que incluye hacerse cargo del pago de las tarifas
                    que eventualmente se devenguen o por los perjuicios que
                    puedan sufrir otros terceros por tal motivo.
                  </p>
                  <p className="auto-style2">
                    <strong>SEXTA: Menores de Edad.</strong>
                  </p>
                  <p className="auto-style3">
                    <strong>6.1.</strong> El Chatbot está dirigida
                    exclusivamente a personas humanas con capacidad legal
                    contractual, estando por tanto restringida el uso como
                    Usuario y como Cliente de menores de 18 (dieciocho) años.
                    Sin perjuicio de lo anterior, el Cliente se reserva el
                    derecho de verificar, por los medios que considere más
                    oportunos, la edad real de cualquier Cliente.
                  </p>
                  <p className="auto-style3">
                    <strong>6.2.</strong>  Bajo sospecha de que un Cliente del
                    Chatbot sea menor de 18 (dieciocho) años, y de que ha
                    falseado los datos que se requieren para su acceso,
                    Tecnoexpertos podrá denegar al referido el acceso al
                    Chatbot.
                  </p>
                  <p className="auto-style2">
                    <strong>SEPTIMA: Requerimientos Legales.-</strong>
                  </p>
                  <p className="auto-style3">
                    <br /> <br /> <strong>7.1.</strong> Tecnoexpertos cooperará
                    con las autoridades competentes y con otros terceros para
                    garantizar el cumplimiento de las leyes, por ejemplo, en
                    materia de protección de derechos de propiedad industrial e
                    intelectual, prevención del fraude y otras materias.
                    <br /> <br /> <strong>7.2.</strong> Tecnoexpertos podrá
                    revelar la Información Personal de los Clientes por
                    obligación legal o bajo requerimiento de la autoridades
                    judiciales o gubernamentales competentes para efectos de
                    investigaciones conducidas por ellas, o por ejemplo (y sin
                    limitación a este supuesto) cuando se trate de
                    investigaciones de carácter penal o de fraude o las
                    relacionadas con piratería informática o la violación de
                    derechos de autor, o ante cualquier actividad que pueda ser
                    ilegal o que pueda exponer a Tecnoexpertos o a los Clientes
                    a cualquier responsabilidad legal. En tales situaciones,
                    Tecnoexpertos colaborará con las autoridades competentes con
                    el fin de salvaguardar la integridad y la seguridad de la
                    comunidad y la de sus Clientes. En todos los casos, ante un
                    requerimiento de información solicitado por las autoridades,
                    Tecnoexpertos exigirá la notificación correspondiente
                    debidamente firmada por juez y/o autoridad competente. En
                    ningún caso Tecnoexpertos rindará Información Personal de
                    los Clientes en virtud de requerimientos de información que
                    sean excesivos y/o no cumplan con los requisitos legales
                    correspondientes. En la medida en que la legislación y
                    normas de procedimiento lo exija, Tecnoexpertos informará a
                    los Clientes sobre estos requerimientos.
                    <br /> <br /> <strong>7.3.</strong> Además, Tecnoexpertos se
                    reserva el derecho (y los Clientes lo autorizan expresamente
                    a ello) de comunicar información a entidades o terceros
                    cuando haya motivos suficientes para considerar que la
                    actividad de un Usuario o Cliente sea sospechosa de intentar
                    o cometer un delito o intentar perjudicar a otras personas.
                    Este derecho será utilizado por Tecnoexpertos para mantener
                    la integridad y la seguridad de la comunidad y la de sus
                    Clientes, para hacer cumplir los Términos y Condiciones y
                    demás políticas del uso del Chatbot y a efectos de cooperar
                    con la ejecución y cumplimiento de la ley. Este derecho será
                    ejercido por Tecnoexpertos independientemente que no exista
                    una orden judicial o administrativa al efecto.
                    <br /> <br /> <strong>7.4.</strong>  Tecnoexpertos hará todo
                    lo posible para proteger la privacidad de la Información
                    Personal, y compartirá dicha información en los supuestos
                    referidos en la presente cláusula sólo de ser apropiado o
                    necesario.
                  </p>
                  <p className="auto-style2">
                    <strong>
                      OCTAVA: Seguridad y Almacenamiento de la Información
                      Personal.-
                    </strong>
                  </p>
                  <p className="auto-style3">
                    <br /> <br />
                    <strong>8.1.</strong>  Tecnoexpertos está obligado a cumplir
                    con toda la normativa aplicable en materia de medidas de
                    seguridad aplicables a la Información Personal.
                    Adicionalmente, utilizará los estándares de la industria
                    entre materia de protección de la confidencialidad de su
                    Información Personal, incluyendo, en otras medidas,
                    cortafuegos (“firewalls”) y Secure Socket Layers (“SSL”).
                    Tecnoexpertos considera la Información Personal de los
                    titulares de los datos como un activo que debe ser protegido
                    de cualquier pérdida o acceso no autorizado. A tal fin,
                    Tecnoexpertos emplea diversas técnicas de seguridad para
                    proteger los mismos de accesos no autorizados por titulares
                    de los datos de dentro o fuera de la compañía. Sin perjuicio
                    de lo expuesto, considerando que internet es un sistema
                    abierto, de acceso público, Tecnoexpertos no puede
                    garantizar que terceros no autorizados puedan eventualmente
                    superar las medidas de seguridad y utilizar la Información
                    Personal en forma indebida.
                    <br /> <br />
                    <strong>8.2.</strong> Toda la información que recibimos
                    sobre el Cliente se almacena en servidores seguros y hemos
                    implementado medidas técnicas y organizativas adecuadas y
                    necesarias para proteger sus datos personales Tecnoexpertos
                    evalúa continuamente la seguridad de su red y la adecuación
                    de su programa interno de seguridad de la información
                    diseñado para (a) ayudar a mantener sus datos seguros en
                    caso de pérdida, acceso o divulgación accidentales o
                    ilícitos; (b) identificar riesgos razonablemente previsibles
                    a la seguridad de la red de Tecnoexpertos; y (c) minimizar
                    riesgos de seguridad mediante evaluaciones de riesgo y
                    verificaciones regulares.
                    <br /> <br />
                    <strong>8.3.</strong> El Cliente es titular de los datos
                    conoce y acepta expresamente que Tecnoexpertos a su
                    exclusivo criterio, recabe, almacene y eventualmente
                    monitoree el intercambio de mensajes y correos electrónicos
                    dentro del Chatbot con el objetivo de contribuir a la
                    seguridad de las relaciones y comunicaciones que se
                    desarrollan a través del mismo.
                    <br /> <br />
                    <strong>8.4.</strong> Por ello, Tecnoexpertos no se hace
                    responsable por interceptaciones ilegales o violación de sus
                    sistemas o bases de datos por parte de personas no
                    autorizadas. Tecnoexpertos, tampoco se hace responsable por
                    la indebida utilización de la información obtenida por esos
                    medios.
                    <br /> <br />
                    <strong>8.5.</strong> Todos los datos personales de los
                    Clientes serán almacenados en un archivo o soporte
                    automatizado de datos personales.
                  </p>

                  <p className="auto-style2">
                    <strong>
                      NOVENA: Cambio en las preferencias de e-mails.-
                    </strong>
                  </p>
                  <p className="auto-style3">
                    En caso de que el Cliente no quiera recibir correos
                    electrónicos de Tecnoexpertos, éste podrá desuscribirse
                    cambiando sus preferencias en el e-mail siguiendo las
                    instrucciones que Tecnoexpertos proporciona o enviando sus
                    preferencias por correo a la dirección postal indicada en
                    estas Políticas de Privacidad:
                    <a href="mailto:hola@mannoapp.com"> hola@mannoapp.com </a>
                  </p>
                  <p className="auto-style2">
                    <strong>DECIMA: Sitios.-</strong>
                  </p>
                  <p className="auto-style3">
                    El Chatbot puede contener enlaces y/o referencias a otras
                    aplicaciones o sitios web, lo cual no indica que sean
                    propiedad u operados por Tecnoexpertos. La instalación de
                    estos enlaces o referencias en el Chatbot se limita a
                    facilitar al Cliente la búsqueda y acceso a la información
                    allí disponible. En virtud de que Tecnoexpertos no tiene
                    control sobre tales sitios, Tecnoexpertos no será
                    responsable por los contenidos, materiales, acciones y/o
                    servicios prestados por los mismos, ni por daños o pérdidas
                    ocasionadas a los Clientes o a terceros por la utilización
                    de los mismos. La presencia de enlaces a otras aplicaciones
                    o sitios web no implica una sociedad, relación, aprobación
                    y/o respaldo Tecnoexpertos a dichas plataformas o sitios y
                    sus contenidos.
                  </p>

                  <p className="auto-style2">
                    <strong>
                      NOVENA: Cambio en las preferencias de e-mails.-
                    </strong>
                  </p>
                  <p className="auto-style3">
                    En caso de que el Cliente no quiera recibir correos
                    electrónicos de Tecnoexpertos, éste podrá desuscribirse
                    cambiando sus preferencias en el e-mail siguiendo las
                    instrucciones que Tecnoexpertos proporciona o enviando sus
                    preferencias por correo a la dirección postal indicada en
                    estas Políticas de Privacidad:
                    <a href="mailto:hola@mannoapp.com"> hola@mannoapp.com </a>
                  </p>
                  <p className="auto-style2">
                    <strong>
                      DECIMO PRIMERA: Modificación de las Políticas de
                      Privacidad .-
                    </strong>
                  </p>
                  <p className="auto-style3">
                    <br />
                    <br />
                    <strong>11.1.</strong>  Tecnoexpertos podrá modificar las
                    presentes Políticas de Privacidad en cualquier momento
                    haciendo públicos a través de mensaje fijado en el Chatbot
                    las Políticas de Privacidad modificadas. Todos los términos
                    modificados entrarán en vigor a partir de su publicación. En
                    caso de desacuerdo respecto de tales modificaciones, el
                    Cliente deberá comunicar a Tecnoexpertos su NO aceptación,
                    enviando un e-mail a hola@mannoapp.com desde su dirección de
                    correo electrónico registrada en el Chatbot dentro de los 2
                    (dos) días corridos siguientes a la publicación de las
                    modificaciones introducidas, en cuyo caso se procederá a dar
                    de baja su cuenta y se considerará finalizado su vínculo con
                    la Chatbot, debiendo dicho Cliente cumplir previamente con
                    cualquier obligación pendiente con Tecnoexpertos o cualquier
                    otro tercero. Vencido el plazo referido sin expresar su
                    disconformidad con las nuevas Políticas de Privacidad, se
                    considerará que el Cliente acepta las mismas y las partes
                    continuarán vinculadas según dichos términos.
                    <br />
                    <br />
                    <strong>11.2.</strong> Tecnoexpertos no se hace responsable
                    legal, comercial y económicamente ante cualquier información
                    suministrada por cualquier otro tercero en el Chatbot,
                    siendo los Clientes los únicos responsables por dicha
                    información debiendo dejar exento a Tecnoexpertos de
                    cualquier tipo de reclamo judicial o extrajudicial, en
                    cualquiera de las instancias que se sucedan.
                  </p>

                  <p className="auto-style2">
                    <strong>DECIMO SEGUNDA: Contacto.-</strong>
                  </p>
                  <p className="auto-style3">
                    Para hacer cualquier consulta, reclamo y/o petición relativa
                    a su Información Personal, podrás hacerlo enviándonos un
                    mail a{" "}
                    <a href="mailto:hola@mannoapp.com">hola@mannoapp.com</a>{" "}
                    desde la dirección de mail registrada en tu{" "}
                    <strong>cuenta.</strong>
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
        <div className="terms-bottom-div"></div>
      </div>
    </>
  );
}

export default Alianzas;
