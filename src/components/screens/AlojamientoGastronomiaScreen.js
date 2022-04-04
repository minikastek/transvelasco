import React from 'react'
import './ScreensStyle.css'
import imgAloja from '../../assets/pictures/imgAloja.jpg'

export const AlojamientoGastronomiaScreen = () => {
  return (
    <div>
      {/* Titulo */}
      <div
        className="contenedor"
        style= {{backgroundImage: `url(${imgAloja})`}}
      > 
        <div className='boxTitulo'>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="texto-encima">Alojamiento y Gastronomia</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="textoEncima">
            Tenemos los mejores Alojamientos y Gastronomia para que disfrutes de la experiencia 
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>

      {/* Cuerpo */}

      <div className='boxAlojamientoGrande'>
        <div className="boxAlojamiento">
            <h3>Hoteles</h3>
            <ul>
              <li>A.C.A Timoteo Gordillo y Alberto G. Ocampo Tel. (03825) 422201/2 </li>
              <li>BELSAVAC
              9 de Julio 80 esq. Adolfo E. Dávila
              Tel. (03825) 422977/530 – (3825) 15550734</li>
              <li>HOTEL MAC ROYAL SUITES
              19 de Febrero esq. Roque Lanús
              Tel. (03825) 422211</li>
              <li>PETIT HOTEL TERMINAL
              Colombia y Bolivia B° Paimán
              Tel. (03825) 424681/15558342</li>
              <li>RUTA 40
              Libertad 68
              Tel. (03825) 422804/15454074.</li>
              <li>WAMATINAG
              25 de Mayo 37 –
              Tel. (03825) 425996/ (3825) 15458646</li>
              <li>EL CAUDILLO
              Florencio Dávila 220
              Tel. (03825) 423156/ 15555066</li>
              <li>HOTEL PUKARA
              Castro Barros 178
              Tel (3825)-15432359</li>
              <li>HOTEL RINCON DE CHILECITO
              Prof. Gregorio Cavero 450 esq. Facundo Quiroga
              Tel: (03825)15528240</li>
              <li>HOTEL CASA GRANDE
              PIO XII 469.B°San Francisco.
              03825/15501412/ 15432493</li>
          </ul>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="boxAlojamiento">
          <h3>Apart Hotel</h3>
          <ul>
            <li>COMPLEJO TORRES DEL CERRO APART
            Santa Rosa 880
            Tel. (03825) 424662/15440681</li>
            <li>BELLA VISTA APART–
            Leandro N. Além 1060-
            Tel. (03825)423033/ 15430647</li>
            <li>HUELLAS DEL TRAPICHE APART
            Camino a Sta. Florentina –B° El Trapiche
            Tel (03825)15673776</li>
            <li>APART LAS CAÑITAS
            El Maestro 75-
            Tel (03825) 422866/15552373</li>
            <li>APART HOTEL CHILECITO
            Gdor. Gordillo 300-
            Tel 03825/ 15419035/ 15679775</li>
            <li>RUKA APART HOTEL
            Antonia Iribarren 489. Esq. San Francisco
            Tel.03825/422556 / 15660582</li>
            <li>APART HOTEL DEL SOL
            B°Paiman Venezuela y Costa Rica S/N
            Tel 03825/15679775</li>
            <li>CUATRO ESTACIONES APART
            25 de Mayo 669-
            TE: 03825-15459783</li>
          </ul>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="boxAlojamiento">
          <h3>Hostel</h3>
          <ul>
            <li>LA CASONA
            Leandro N.Alem puerta 160 –Los Sarmientos
            Tel (0380)4344212</li>
            <li>HOSTEL CULTURAL DON ISIDRO.
            19 de Febrero 558.
            Tel 03825-15672867 / 351-3134244</li>
            <li>BED AND BREAKFAST
            (B & B) “Los Cerros 2 “
            12 de Octubre 23- Barrios Los Cerros 2
            Tel. 03825-15409542</li>
          </ul>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="boxAlojamiento">
          <h3>Cabañas</h3>
          <ul>
            <li>ALBERKEL
            Sta. Florentina R Nº14 Km 9
            Tel. (03825) 423692/15521423</li>
            <li> EL MOLINO
            Santa Rita 72 Bº El Parque – Tel. (03825) 15660424</li>
            <li>LA ALAMEDA
            San Román 788
            Tel. (03825) 423199/15554888</li>
            <li>LA HIGUERA
            Leandro N. Além 1050 (Los Sarmientos)
            Tel. (03825)426914/15400865</li>
            <li>LA MARTINA
            Leandro N. Além (Los Sarmientos) –
            Tel. (03825) 423353/15409880</li>
            <li>LAS VIÑAS
            Santa Rosa s/n (Anguinán) –
            Tel. (03825) 491717/15523214.</li>
            <li>LOS ALGARROBOS
            Bº La Calle Sañogasta –
            (03825) 15670469</li>
            <li>LOS NOGALES
            B° El Pozo – Sañogasta –
            Tel. (03825) 422518/495789/15557098/97</li>
            <li>MARÍA BELÉN
            Ruta Nac. 40 Km 3869 –
            Tel. (03825) 15537690.</li>
            <li>RIO AMARILLO
            Ruta Prov. 14 (Las Talas) –
            Tel. (03825) 15559448</li>
            <li>VALLES DE SAN MIGUEL/
            Miguel Azcuénaga s/n –
            Tel. (03825) 429153/15518519/15407024</li>
            <li>DON ROQUE
            Señora de la Merced 9005 (Anguinán)
            Tel (03825) /15677076/ 15671100</li>
            <li>CABLE CARRIL
            Ruta 40 –Acceso Sur Km. 4868aprox.
            Tel. (03825) 15404444</li>
            <li>SANTA BÁRBARA
            Tel.( 3825) 431989 (CEL) / (264) 5633718</li>
          </ul>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="boxAlojamiento">
          <h3>Posadas y Hosterias</h3>
          <ul>
            <li>POSADA DEL SENDERO/
            Callejón Spilinbergo S/N (San Miguel)
            Tel. (03825) 425489/15414041/15679651</li>
            <li>POSADA NOCENTA PISETTA/
            Ruta 12 s/n San Miguel
            Tel.(03825)498108/15663322</li>
            <li>POSADA LAS MARÍAS
            Cornelio Saavedra 756 (La Puntilla)
            Tel. (03825) 423570-15406115</li>
            <li>POSADA EL VIEJO MOLINO
            Jamin Ocampo 75
            Tel:(03825)-426662-15566040</li>
            <li>POSADA DEL OLIVO
            Nonogasta
            Tel. (03825)15445172 /15512451</li>
            <li>POSADA AIRES CORDILLERANOS.
            Miranda Tel (03825) 15618425</li>
            <li>POSADA LA SOÑADA Maipú 52 –La Puntilla Tel: (3825)- 15537111/15440448.</li>
            <li>HOSTERIA LAS CATALINAS: Belgrano 25 Esq. La Merced Tel: (03825)423177 /15667646</li>
          </ul>
        </div>
        <hr className="w-100 clearfix d-md-none" />
        <div className="boxAlojamiento">
          <h3>Camping</h3>
          <ul>
            <li>Camping Los Algarrobos
            Km 27 Ruta Prov. Nº15 (Sañogasta) –
            / Tel. (03825) 15 410805</li>
            <li>Camping Costa del Río
            / Km7.5 Ruta Prov. Nº14 Km (Las Talas) –
            Tel. (03825 668142)</li>
            <li>Camping Las Talas
            / Km7.5 Ruta Prov. Nº14 (Las Talas) –
            Tel. (03825) 582030</li>
            <li>Camping Santa Florentina
            Km7 Ruta Prov. N 14 (Santa Florentina) –
            Tel. (03825) 15674238</li>
            <li>Camping Balneario Municipal Parque El Bosquecillo
            Km 27 Ruta Prov. Nº15 (Sañogasta)
            ( 3825 56-9437 )</li>
            <li>Camping Municipal La Estación/
            Frente Plaza Los Mineros- Santa Florentina Km 7
            (03825) 15522708</li>
            <li>Camping Amebaplar
            Km3 Ruta Prov. Nº12 (San Miguel)
            Tel. (03825) 3825 440034</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
