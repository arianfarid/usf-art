/**************************************************
 *
 *         Our main angular script!!!!
 *
 **************************************************/

      /**
       *
       * Create our module for usf
       *
       **/
    var usf = angular.module('usf', ['ngRoute', 'leaflet-directive']);

/**************************************************
 *
 *         Our routes!!!!
 *
 **************************************************/
    usf.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/artTour', {
                templateUrl : '/pages/artTour.html',
                controller  : 'artTourController'
            })

            .when('/about', {
                templateUrl : '/pages/about.html',
                controller  : 'aboutController'
            });

            // use the HTML5 History API
        	$locationProvider.html5Mode(true);

    });

/**************************************************
 *
 *         Our home page controller!
 *
 **************************************************/
    
    usf.controller('mainController', function($scope) {


    });

/**************************************************
 *
 *        Our art tour controller!
 *
 **************************************************/

    usf.controller('artTourController', function($scope, $http) {

      /**
       *
       * Set the defaults for this map. USF center, then pull in our geojson data and style it
       *
       **/

      angular.extend($scope, {
        defaults: {
            scrollWheelZoom: true,
            attributionControl: false,
            tileLayerOptions: {
                attribution: false
            },
            center: {
                lat: 28.061,
                lng: -82.4131,
                zoom: 13,
            },
            events: {
                map: {
                    enable: ['locationfound'],
                    logic: 'emit'
                }
            }
        },
        geojson : {
              data : {
                "type": "FeatureCollection",
                "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                                
                "features": [
                { "type": "Feature", "properties": { "id": 1, "name": "Bust of Reverend Martin Luther King, Jr.", "author": "Linda Ackley", "place": "MLK Plaza", "year": 1996 }, "geometry": { "type": "Point", "coordinates": [ -82.413271987450869, 28.062544063490577 ] } },
                { "type": "Feature", "properties": { "id": 2, "name": "Maze 2000", "author": "Alice Aycock", "place": "PCD", "year": 2001 }, "geometry": { "type": "Point", "coordinates": [ -82.417589752961106, 28.064028700421343 ] } },
                { "type": "Feature", "properties": { "id": 7, "name": "Concentric Figures", "author": "Harrison Covington", "place": "Simmons Park", "year": 1996 }, "geometry": { "type": "Point", "coordinates": [ -82.418573791891276, 28.061628686847289 ] } },
                { "type": "Feature", "properties": { "id": 16, "name": "Puzzle Walk", "author": "Gary Moore", "place": "MDC", "year": 1999 }, "geometry": { "type": "Point", "coordinates": [ -82.423653961612573, 28.064026187532029 ] } },
                { "type": "Feature", "properties": { "id": 29, "name": "Sanctuary", "author": "Elyn Zimmerman", "place": "MCC", "year": 1991 }, "geometry": { "type": "Point", "coordinates": [ -82.421170412372561, 28.064545384773847 ] } },
                { "type": "Feature", "properties": { "id": 23, "name": "Double Rotation", "author": "Alyson Shotz", "place": "MDH", "year": 2011 }, "geometry": { "type": "Point", "coordinates": [ -82.419957201155697, 28.066609248717604 ] } },
                { "type": "Feature", "properties": { "id": 33, "name": "Half the Truth", "author": "Richard Beckman", "place": "PCD", "year": 1990 }, "geometry": { "type": "Point", "coordinates": [ -82.417584143299123, 28.063601282577352 ] } },
                { "type": "Feature", "properties": { "id": 30, "name": "(Variuos Works)", "author": "(Various Artists)", "place": "MSC - Floors 1-4", "year": null }, "geometry": { "type": "Point", "coordinates": [ -82.413774965188182, 28.063907381809244 ] } },
                { "type": "Feature", "properties": { "id": 15, "name": "Icon II", "author": "Alexander Liberman", "place": "TAT", "year": 1999 }, "geometry": { "type": "Point", "coordinates": [ -82.414501909494561, 28.063108057771519 ] } },
                { "type": "Feature", "properties": { "id": 25, "name": "Forum II", "author": "Joe Testa-Secca", "place": "CHE", "year": 1960 }, "geometry": { "type": "Point", "coordinates": [ -82.415796616458962, 28.061581330250149 ] } },
                { "type": "Feature", "properties": { "id": 14, "name": "Tampa Wind", "author": "Stacy Levy", "place": "NES", "year": 2009 }, "geometry": { "type": "Point", "coordinates": [ -82.414940067308194, 28.061435237492034 ] } },
                { "type": "Feature", "properties": { "id": 24, "name": "Forum I", "author": "Joe Testa-Secca", "place": "ADM", "year": 1960 }, "geometry": { "type": "Point", "coordinates": [ -82.413236279303902, 28.061236181383499 ] } },
                { "type": "Feature", "properties": { "id": 12, "name": "Unspecific Gravity", "author": "Dough Hollis", "place": "SCA", "year": 1997 }, "geometry": { "type": "Point", "coordinates": [ -82.415489527732291, 28.060421130797039 ] } },
                { "type": "Feature", "properties": { "id": 28, "name": "Path", "author": "Andy Yoder", "place": "ENB", "year": 2004 }, "geometry": { "type": "Point", "coordinates": [ -82.415253623467763, 28.059448113890912 ] } },
                { "type": "Feature", "properties": { "id": 18, "name": "Untitled (Anatomy)", "author": "Matt Mullican", "place": "ENC", "year": 1988 }, "geometry": { "type": "Point", "coordinates": [ -82.414676620608134, 28.059099743478484 ] } },
                { "type": "Feature", "properties": { "id": 34, "name": "Steel Eye", "author": "Allison Armour", "place": "LIB", "year": 2012 }, "geometry": { "type": "Point", "coordinates": [ -82.412669477748523, 28.059195005467416 ] } },
                { "type": "Feature", "properties": { "id": 13, "name": "Solar Rotary", "author": "Nancy Holt", "place": "CIS", "year": 1995 }, "geometry": { "type": "Point", "coordinates": [ -82.410982739565313, 28.059060296684393 ] } },
                { "type": "Feature", "properties": { "id": 21, "name": "Frogs\/Amerika", "author": "Tim Rollins", "place": "EDU", "year": 1997 }, "geometry": { "type": "Point", "coordinates": [ -82.411240019690524, 28.060434758174548 ] } }
                ]
                },
              style: {
                fillColor: "green",
                weight: 2,
                opacity: 1,
                color: 'white',
                dashArray: '3',
                fillOpacity: 0.7
              }
            }

      });

      /**
       *
       * Assign the map center and marker to the scope so we can manipulate them.
       *
       **/

      $scope.center = {
          lat: 28.061,
          lng: -82.4131,
          zoom: 13,
          autoDiscover: true
      }

      $scope.markers = {

          mainMarker: {
            lat: 28.061,
            lng: -82.4131,
            focus: true,
            draggable: true,
          }

        }


      /**
       *
       * Here lets handle our location error/success
       *
       **/

      $scope.$on('locationerror', Materialize.toast('Location not found!', 5000));


      /**
       *
       * Here lets handle our location error/success
       *
       **/

      $scope.$on('leafletDirectiveMap.moveend', function(event) {

      /**
       *
       * Here lets bind our marker to the map center, which will change with location
       *
       **/

        $scope.markers.mainMarker.lat = $scope.center.lat;
        $scope.markers.mainMarker.lng = $scope.center.lng;

      /**
       *
       * Make this into an official leaflet geojson, then dynamically detect
       * if our user is in our buffer zone, and then bind the data to the scope
       *
       **/
        usfArt = L.geoJson({
            "type": "FeatureCollection",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
                                                                                            
            "features": [
            { "type": "Feature", "properties": { "id": 1, "name": "Bust of Reverend Martin Luther King, Jr.", "author": "Linda Ackley", "place": "MLK Plaza", "year": 1996, "info": "This piece was not funded by Florida’s Art in State Buildings Program", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.413119386698639, 28.062545634507917 ], [ -82.413126308261042, 28.062503726954262 ], [ -82.413147489903025, 28.062465767827927 ], [ -82.413180858207141, 28.062435472827218 ], [ -82.413223146850214, 28.062415807430558 ], [ -82.413270216334212, 28.062408696617613 ], [ -82.413317459185706, 28.062414836441288 ], [ -82.413360250961489, 28.062433625894386 ], [ -82.413394402915188, 28.062463225739783 ], [ -82.413416572016658, 28.062500738545697 ], [ -82.413424588190821, 28.062542492303702 ], [ -82.413417666743072, 28.062584399868051 ], [ -82.413396485176648, 28.062622359032844 ], [ -82.413363116880134, 28.062652654085081 ], [ -82.413320828173781, 28.062672319526662 ], [ -82.41327375857982, 28.062679430360763 ], [ -82.413226515613673, 28.062673290526398 ], [ -82.413183723762302, 28.062654501034842 ], [ -82.413149571801014, 28.062624901137916 ], [ -82.413127402762825, 28.062587388287074 ], [ -82.413119386698639, 28.062545634507917 ] ] ] } },
            { "type": "Feature", "properties": { "id": 2, "name": "Maze 2000", "author": "Alice Aycock", "place": "PCD", "year": 2001, "info": "The sculpture consists of a series of curvilinear ramps that wrap around, intersect and are superimposed on one another. The composition of volumetric spirals references the whirlwind vortexes of hurricanes, spiral staircases and spiral galaxies, the petal structure of roses as well as theatrical amphitheaters. -Alice Aycock", "source": "http://www.graphicstudio.usf.edu/PA/Pages/pa_aycock.html" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.417437150397063, 28.064030276313929 ], [ -82.417444070342157, 28.063988368608911 ], [ -82.417465250702492, 28.063950408868813 ], [ -82.417498618186087, 28.063920112852006 ], [ -82.417540906550073, 28.063900446136397 ], [ -82.41758797632373, 28.063893333830748 ], [ -82.41763522000528, 28.063899472134072 ], [ -82.417678013070287, 28.063918260188 ], [ -82.417712166646155, 28.063947858892373 ], [ -82.417734337543976, 28.063985370927089 ], [ -82.4177423555128, 28.064027124359217 ], [ -82.417735435682374, 28.064069032074915 ], [ -82.417714255397641, 28.06410699185346 ], [ -82.417680887921676, 28.064137287921792 ], [ -82.417638599494424, 28.064156954682343 ], [ -82.417591529610789, 28.064164067009166 ], [ -82.417544285814557, 28.064157928695163 ], [ -82.417501492673964, 28.06413914060278 ], [ -82.417467339090479, 28.064109541846882 ], [ -82.417445168255938, 28.064072029767228 ], [ -82.417437150397063, 28.064030276313929 ] ] ] } },
            { "type": "Feature", "properties": { "id": 7, "name": "Concentric Figures", "author": "Harrison Covington", "place": "Simmons Park", "year": 1996, "info": null, "source": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.41842119278239, 28.061630263710292 ], [ -82.418428112232704, 28.061588355961007 ], [ -82.4184492918085, 28.061550396085984 ], [ -82.418482658294565, 28.061520099856811 ], [ -82.41852494554567, 28.061500432872172 ], [ -82.418572014200066, 28.061493320267157 ], [ -82.418619256865497, 28.061499458270106 ], [ -82.418662049117032, 28.061518246052032 ], [ -82.418696202161641, 28.061547844539398 ], [ -82.418718372862457, 28.061585356433365 ], [ -82.418726390987842, 28.061627109814761 ], [ -82.418719471652182, 28.061669017574726 ], [ -82.418698292151973, 28.061706977488186 ], [ -82.418664925673539, 28.061737273768891 ], [ -82.418622638359182, 28.061756940798467 ], [ -82.418575569594836, 28.06176405342465 ], [ -82.418528326814737, 28.061757915411036 ], [ -82.41848553448763, 28.061739127590666 ], [ -82.418451381435389, 28.061709529051765 ], [ -82.418429210797811, 28.061672017112869 ], [ -82.41842119278239, 28.061630263710292 ] ] ] } },
            { "type": "Feature", "properties": { "id": 16, "name": "Puzzle Walk", "author": "Gary Moore", "place": "MDC", "year": 1999, "info": "Rustic terrazzo walkway with exposed zinc imbeds, planting, bench and lighting", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.423501359454249, 28.064027770164884 ], [ -82.423508277031445, 28.063985862240195 ], [ -82.423529455215942, 28.063947901642141 ], [ -82.423562820928765, 28.063917604213096 ], [ -82.423605108100375, 28.063897935669189 ], [ -82.423652177376781, 28.063890821298148 ], [ -82.423699421304832, 28.063896957501175 ], [ -82.42374221533602, 28.063915743625465 ], [ -82.42377637050312, 28.063945340759759 ], [ -82.423798543461501, 28.063982851737645 ], [ -82.423806563758518, 28.064024604729635 ], [ -82.423799646296004, 28.064066512664986 ], [ -82.423778468187109, 28.064104473301473 ], [ -82.423745102481931, 28.064134770782047 ], [ -82.423702815247097, 28.064154439370899 ], [ -82.423655745860742, 28.064161553763139 ], [ -82.423608501817995, 28.064155417549454 ], [ -82.423565707711219, 28.064136631386731 ], [ -82.42353155253646, 28.064107034200909 ], [ -82.423509379641303, 28.064069523178077 ], [ -82.423501359454249, 28.064027770164884 ] ] ] } },
            { "type": "Feature", "properties": { "id": 29, "name": "Sanctuary", "author": "Elyn Zimmerman", "place": "MCC", "year": 1991, "info": "The concept for Sanctuary was based on a response to the needs of patients, family members and staff of the H. Lee Moffitt Cancer Center. Elyn Zimmerman's Sanctuary is intended to function as an intimate gathering area suitable for conversation and reflection. The location of the piece, which is adjacent to the Center's North entrance and cafeteria/patio, is close enough to the hospital so that users can experience the serene environment of Sanctuary, while not traveling far from the hospital.", "source": "http://www.graphicstudio.usf.edu/PA/Pages/pa_zimmerman.html" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.421017809315913, 28.06454696467296 ], [ -82.421024727886731, 28.064505056840023 ], [ -82.421045907055515, 28.064467096592349 ], [ -82.421079273646953, 28.064436799737997 ], [ -82.421121561505487, 28.064417131936843 ], [ -82.421168631209881, 28.064410018403905 ], [ -82.421215875265148, 28.06441615545836 ], [ -82.421258669110244, 28.064434942364059 ], [ -82.421292823796207, 28.064464540133237 ], [ -82.421314996025515, 28.064502051537346 ], [ -82.42132301541686, 28.064543804705195 ], [ -82.421316096960737, 28.064585712548791 ], [ -82.421294917867542, 28.064623672834909 ], [ -82.421261551283749, 28.064653969740796 ], [ -82.421219263361976, 28.064673637586889 ], [ -82.421172193547605, 28.064680751141001 ], [ -82.421124949377671, 28.064674614075891 ], [ -82.421082155456958, 28.064655827131755 ], [ -82.421048000763349, 28.064626229311045 ], [ -82.421025828597294, 28.064588717861987 ], [ -82.421017809315913, 28.06454696467296 ] ] ] } },
            { "type": "Feature", "properties": { "id": 23, "name": "Double Rotation", "author": "Alyson Shotz", "place": "MDH", "year": 2011, "info": "Mirror-polished stainless steel", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.419804595102988, 28.066610827374376 ], [ -82.419811514242568, 28.066568919592775 ], [ -82.419832694217703, 28.066530959513013 ], [ -82.419866061774144, 28.066500662926718 ], [ -82.419908350661927, 28.066480995467529 ], [ -82.419955421358992, 28.066473882317002 ], [ -82.42000266627322, 28.066480019756845 ], [ -82.420045460759496, 28.066498807013222 ], [ -82.420079615806102, 28.06652840506403 ], [ -82.420101788080174, 28.066565916653154 ], [ -82.420109807196056, 28.066607669891273 ], [ -82.420102888171172, 28.066649577683549 ], [ -82.420081708271638, 28.066687537801762 ], [ -82.420048340722829, 28.066717834439586 ], [ -82.420006051771807, 28.066737501943717 ], [ -82.419958980964736, 28.066744615115436 ], [ -82.419911735935813, 28.066738477664913 ], [ -82.419868941373934, 28.066719690370096 ], [ -82.419834786319697, 28.066690092267756 ], [ -82.419812614108892, 28.066652580633686 ], [ -82.419804595102988, 28.066610827374376 ] ] ] } },
            { "type": "Feature", "properties": { "id": 33, "name": "Half the Truth", "author": "Richard Beckman", "place": "PCD", "year": 1990, "info": null, "source": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.417431541338473, 28.063602858441755 ], [ -82.417438461266059, 28.0635609507354 ], [ -82.417459641551545, 28.063522990996866 ], [ -82.417493008910242, 28.063492694984362 ], [ -82.417535297111556, 28.063473028275371 ], [ -82.417582366700671, 28.063465915977996 ], [ -82.417629610193856, 28.063472054290472 ], [ -82.417672403085149, 28.063490842353495 ], [ -82.417706556518908, 28.063520441066036 ], [ -82.417728727320167, 28.063557953107196 ], [ -82.417736745247453, 28.063599706543414 ], [ -82.417729825434535, 28.06364161426044 ], [ -82.417708645224636, 28.063679574037423 ], [ -82.417675277873542, 28.063709870101455 ], [ -82.417632989608975, 28.063729536855387 ], [ -82.417585919909897, 28.063736649173929 ], [ -82.417538676302044, 28.063730510850782 ], [ -82.417495883335164, 28.063711722749304 ], [ -82.417461729893787, 28.063682123985227 ], [ -82.417439559155781, 28.063644611899136 ], [ -82.417431541338473, 28.063602858441755 ] ] ] } },
            { "type": "Feature", "properties": { "id": 30, "name": "(Variuos Works)", "author": "(Various Artists)", "place": "MSC - Floors 1-4", "year": null, "info": null, "source": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.413622362543407, 28.063908953455453 ], [ -82.413629283972369, 28.063867045888426 ], [ -82.413650465679197, 28.063829086688468 ], [ -82.413683834240146, 28.063798791561098 ], [ -82.413726123306873, 28.063779125997129 ], [ -82.413773193339878, 28.063772014992608 ], [ -82.413820436811989, 28.063778154619197 ], [ -82.413863229219288, 28.063796943888985 ], [ -82.413897381753515, 28.063826543582792 ], [ -82.413919551327766, 28.063864056283681 ], [ -82.41392756782065, 28.063905809993496 ], [ -82.413920646506384, 28.063947717571217 ], [ -82.413899464875101, 28.063985676809633 ], [ -82.413866096321755, 28.064015971988539 ], [ -82.413823807191761, 28.064035637597428 ], [ -82.413776737048792, 28.064042748623105 ], [ -82.413729493461986, 28.064036608985827 ], [ -82.413686700979127, 28.064017819677584 ], [ -82.413652548437298, 28.063988219932241 ], [ -82.413630378926314, 28.063950707186429 ], [ -82.413622362543407, 28.063908953455453 ] ] ] } },
            { "type": "Feature", "properties": { "id": 15, "name": "Icon II", "author": "Alexander Liberman", "place": "TAT", "year": 1999, "info": "This piece was not funded by Florida’s Art in State Buildings Program", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.414349308026857, 28.063109630184766 ], [ -82.414356229135109, 28.063067722588471 ], [ -82.414377410437424, 28.063029763287044 ], [ -82.414410778549609, 28.062999467995905 ], [ -82.414453067167273, 28.062979802221928 ], [ -82.414500136794871, 28.062972690981695 ], [ -82.414547379944935, 28.062978830369943 ], [ -82.414590172145026, 28.062997619422092 ], [ -82.414624324607203, 28.063027218940281 ], [ -82.414646494251613, 28.063064731524744 ], [ -82.414654510949958, 28.06310648518874 ], [ -82.414647589956374, 28.063148392795714 ], [ -82.414626408729632, 28.063186352135602 ], [ -82.41459304062505, 28.063216647478267 ], [ -82.41455075194412, 28.063236313297175 ], [ -82.414503682206544, 28.063243424558568 ], [ -82.414456438941826, 28.06323728515963 ], [ -82.414413646666162, 28.063218496069023 ], [ -82.414379494196368, 28.063188896499309 ], [ -82.414357324615253, 28.063151383869915 ], [ -82.414349308026857, 28.063109630184766 ] ] ] } },
            { "type": "Feature", "properties": { "id": 25, "name": "Forum II", "author": "Joe Testa-Secca", "place": "CHE", "year": 1960, "info": "One of the first two pieces on campus", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.415644017233234, 28.061582904024117 ], [ -82.415650937765591, 28.061540996375367 ], [ -82.415672118328942, 28.061503036893413 ], [ -82.415705485611397, 28.06147274131137 ], [ -82.415747773389825, 28.061453075164565 ], [ -82.415794842250804, 28.061445963506088 ], [ -82.415842084781872, 28.061452102471616 ], [ -82.415884876571255, 28.061470891137951 ], [ -82.415919028871144, 28.061500490344976 ], [ -82.415941198617602, 28.06153800272341 ], [ -82.415949215672384, 28.06157975630666 ], [ -82.415942295254681, 28.06162166396609 ], [ -82.415921114766903, 28.061659623486488 ], [ -82.41588774749205, 28.061689919120059 ], [ -82.415845459650356, 28.061709585311789 ], [ -82.415798390679441, 28.061716696991425 ], [ -82.415751148033692, 28.061710558015214 ], [ -82.41570835616875, 28.061691769310439 ], [ -82.415674203861244, 28.061662170051882 ], [ -82.415652034178052, 28.061624657628528 ], [ -82.415644017233234, 28.061582904024117 ] ] ] } },
            { "type": "Feature", "properties": { "id": 14, "name": "Tampa Wind", "author": "Stacy Levy", "place": "NES", "year": 2009, "info": "Stacy Levy’s, Tampa Wind, is a wind-activated rendering of a section of the Hillsborough River as it passes through the eastern edge the USF Tampa Campus. Fabricated in stainless steel, Tampa Wind reflects the changing light and environmental conditions specific to the site. The Levy commission is mounted on the exterior stair tower wall running the full height of the four-story Natural and Environmental Sciences facility. There are over 2000 stainless discs ranging in size from one and half inches to four inches, attached to individual posts that emerge from a stainless plate cut to render the topography of the river. The slightest breeze causes the discs to move creating an ever-changing field of reflected light that can be seen thousands of yards away from the site. The effect is not unlike the play between wind and light on water, reminding the viewer of the source of Levy’s imagery and the nature of the natural environment.", "source": "http://www.graphicstudio.usf.edu/PA/Pages/pa_levy.html" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.414787468232205, 28.061436810306528 ], [ -82.414794389092222, 28.061394902688335 ], [ -82.414815569936508, 28.061356943327873 ], [ -82.414848937425674, 28.061326647946348 ], [ -82.41489122531631, 28.06130698205947 ], [ -82.414938294184068, 28.061299870694892 ], [ -82.414985536615816, 28.061306009959509 ], [ -82.415028328209459, 28.061324798900852 ], [ -82.415062480236415, 28.061354398331893 ], [ -82.41508464965942, 28.061391910861406 ], [ -82.415092666371862, 28.061433664508023 ], [ -82.415085745626499, 28.061475572136892 ], [ -82.415064564857786, 28.061513531535809 ], [ -82.415031197376223, 28.061543826968862 ], [ -82.41498890942232, 28.061563492900657 ], [ -82.414941840444598, 28.061570604286402 ], [ -82.414894597898197, 28.061564465011099 ], [ -82.414851806228981, 28.061545676031304 ], [ -82.414817654194422, 28.061516076548738 ], [ -82.414795484834684, 28.061478563974298 ], [ -82.414787468232205, 28.061436810306528 ] ] ] } },
            { "type": "Feature", "properties": { "id": 24, "name": "Forum I", "author": "Joe Testa-Secca", "place": "ADM", "year": 1960, "info": "First donated site specific artwork on campus", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.413083680396596, 28.061237752294186 ], [ -82.4130906019126, 28.061195844737131 ], [ -82.413111783332127, 28.061157885618172 ], [ -82.413145151259485, 28.061127590634896 ], [ -82.413187439408432, 28.061107925264007 ], [ -82.413234508329268, 28.061100814482653 ], [ -82.413281750603687, 28.061106954340655 ], [ -82.413324541845014, 28.06112574382745 ], [ -82.413358693359129, 28.061155343702609 ], [ -82.413380862158959, 28.061192856531445 ], [ -82.41338887819893, 28.061234610303291 ], [ -82.413381956797593, 28.061276517871036 ], [ -82.41336077545364, 28.061314477028443 ], [ -82.413327407533842, 28.061344772063258 ], [ -82.413285119321642, 28.061364437479064 ], [ -82.413238050290843, 28.061371548281564 ], [ -82.413190807901771, 28.061365408412875 ], [ -82.413148016584884, 28.061346618887633 ], [ -82.413113865063167, 28.061317018960935 ], [ -82.413091696326617, 28.061279506087182 ], [ -82.413083680396596, 28.061237752294186 ] ] ] } },
            { "type": "Feature", "properties": { "id": 12, "name": "Unspecific Gravity", "author": "Dough Hollis", "place": "SCA", "year": 1997, "info": "Unspecific Gravity is a site-specific landscape project consisting of a circular reflecting pool with fountain elements based on the H2O molecule, exposed aggregate pathways that formalize preexisting desire lines, and seating based on the atomic structure of the eleven most common elements. Finishing details include the reintroduction of native Florida grasses to the area adjacent to the pool; and tree uplights in the defined drip-line areas surrounding the twelve existing laurel oaks on the site.", "source": "http://www.graphicstudio.usf.edu/PA/Pages/pa_hollis.html" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.41533693012488, 28.0604227041702 ], [ -82.415343850723644, 28.060380796528442 ], [ -82.415365031188458, 28.060342837092023 ], [ -82.41539839821715, 28.0603125415896 ], [ -82.415440685611358, 28.060292875548718 ], [ -82.415487753995293, 28.0602857640121 ], [ -82.415534996003231, 28.060291903103487 ], [ -82.415577787274543, 28.060310691887356 ], [ -82.415611939112196, 28.060340291192105 ], [ -82.415634108497429, 28.060377803638865 ], [ -82.415642125327381, 28.06041955725436 ], [ -82.415635204843284, 28.060461464906812 ], [ -82.41561402445403, 28.060499424381671 ], [ -82.41558065743294, 28.060529719935616 ], [ -82.415538369975479, 28.060549386021417 ], [ -82.415491301481595, 28.060556497579206 ], [ -82.415444059359004, 28.060550358477133 ], [ -82.415401268012133, 28.060531569654817 ], [ -82.415367116166877, 28.060501970298542 ], [ -82.415344946844897, 28.060464457806866 ], [ -82.41533693012488, 28.0604227041702 ] ] ] } },
            { "type": "Feature", "properties": { "id": 28, "name": "Path", "author": "Andy Yoder", "place": "ENB", "year": 2004, "info": "Inscribed granite boulders, cement, benches, landscape", "source": "http://news.usf.edu/article/templates/?z=0&a=4639" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.415101027218952, 28.059449686952004 ], [ -82.415107947864939, 28.059407779315315 ], [ -82.415129128239386, 28.059369819914021 ], [ -82.415162495048918, 28.059339524473337 ], [ -82.415204782116675, 28.059319858514769 ], [ -82.415251850098798, 28.059312747072962 ], [ -82.415299091668885, 28.059318886262403 ], [ -82.41534188250921, 28.059337675137957 ], [ -82.415376033964876, 28.059367274519051 ], [ -82.415398203054551, 28.059404787019339 ], [ -82.41540621970428, 28.059446540660314 ], [ -82.415399299172947, 28.05948844830769 ], [ -82.41537811887406, 28.059526407747423 ], [ -82.415344752072144, 28.059556703239643 ], [ -82.415302464941135, 28.059576369243132 ], [ -82.415255396849048, 28.059583480706092 ], [ -82.415208155164308, 28.059577341505971 ], [ -82.415165364248438, 28.05955855259197 ], [ -82.41513121278517, 28.059528953159351 ], [ -82.415109043758747, 28.059491440614142 ], [ -82.415101027218952, 28.059449686952004 ] ] ] } },
            { "type": "Feature", "properties": { "id": 18, "name": "Untitled (Anatomy)", "author": "Matt Mullican", "place": "ENC", "year": 1988, "info": null, "source": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.414524024813176, 28.059101315880472 ], [ -82.414530945668346, 28.059059408263472 ], [ -82.414552126187061, 28.05902144894446 ], [ -82.414585493061836, 28.058991153640591 ], [ -82.414627780109427, 28.058971487859974 ], [ -82.414674847987953, 28.058964376619851 ], [ -82.414722089381158, 28.058970516014956 ], [ -82.414764879988581, 28.058989305080029 ], [ -82.414799031178177, 28.059018904615936 ], [ -82.414821199994648, 28.059056417221182 ], [ -82.414829216390785, 28.059098170906992 ], [ -82.414822295650268, 28.059140078534679 ], [ -82.414801115207098, 28.059178037892142 ], [ -82.414767748339926, 28.059208333247533 ], [ -82.414725461229068, 28.059227999073066 ], [ -82.414678393240607, 28.059235110334345 ], [ -82.414631151732763, 28.059228970928555 ], [ -82.41458836104978, 28.059210181825033 ], [ -82.414554209852582, 28.059180582237609 ], [ -82.414532041099363, 28.059143069587442 ], [ -82.414524024813176, 28.059101315880472 ] ] ] } },
            { "type": "Feature", "properties": { "id": 34, "name": "Steel Eye", "author": "Allison Armour", "place": "LIB", "year": 2012, "info": null, "source": null }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.412516881686585, 28.059196575643682 ], [ -82.412523803329648, 28.059154668099893 ], [ -82.412544984585267, 28.059116709064782 ], [ -82.412578352073837, 28.059086414227735 ], [ -82.412620639551989, 28.059066749051155 ], [ -82.412667707635748, 28.05905963849316 ], [ -82.412714948988722, 28.059065778581704 ], [ -82.412757739314443, 28.059084568283655 ], [ -82.412791890008393, 28.05911416833754 ], [ -82.412814058163789, 28.059151681291166 ], [ -82.412822073798168, 28.059193435121642 ], [ -82.412815152269744, 28.059235342676129 ], [ -82.41279397108967, 28.059273301749688 ], [ -82.412760603608689, 28.059303596638262 ], [ -82.41271831606727, 28.059323261859756 ], [ -82.412671247873561, 28.059330372438904 ], [ -82.412624006405935, 28.059324232339669 ], [ -82.412581216004696, 28.059305442599264 ], [ -82.412547065303144, 28.059275842493854 ], [ -82.412524897211, 28.059238329495312 ], [ -82.412516881686585, 28.059196575643682 ] ] ] } },
            { "type": "Feature", "properties": { "id": 13, "name": "Solar Rotary", "author": "Nancy Holt", "place": "CIS", "year": 1995, "info": "At solar noon on the day of summer solstice, Solar Rotary's shadow caster casts a circle of light around the central seat. On five specific days of the year, at times specific for each day, Solar Rotary casts its circle of light around plaques placed in the ground plane of the plaza that mark historic events for the State of Florida and the city of Tampa. Additional seating is provided both around the perimeter of the plaza, and on four benches set into the nearby landscape marking the cardinal directions, North, South, East and West.", "source": "http://www.graphicstudio.usf.edu/PA/Pages/pa_holt.html" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.410830143582459, 28.059061864979245 ], [ -82.410837065877729, 28.059019957496243 ], [ -82.410858247713975, 28.058981998700137 ], [ -82.410891615654734, 28.058951704256916 ], [ -82.410933903412428, 28.058932039590431 ], [ -82.410980971575654, 28.058924929608864 ], [ -82.411028212800289, 28.058931070283748 ], [ -82.411071002802387, 28.058949860524564 ], [ -82.411105153009146, 28.058979461017081 ], [ -82.411127320561476, 28.059016974266182 ], [ -82.411135335535903, 28.059058728220037 ], [ -82.411128413355257, 28.05910063571374 ], [ -82.411107231594556, 28.059138594548294 ], [ -82.411073863661372, 28.059168889043047 ], [ -82.411031575840425, 28.059188553754442 ], [ -82.410984507567221, 28.059195663757151 ], [ -82.410937266227961, 28.059189523071566 ], [ -82.410894476150318, 28.059170732792296 ], [ -82.410860325935971, 28.059141132248254 ], [ -82.410838158446921, 28.05910361895425 ], [ -82.410830143582459, 28.059061864979245 ] ] ] } },
            { "type": "Feature", "properties": { "id": 21, "name": "Frogs\/Amerika", "author": "Tim Rollins", "place": "EDU", "year": 1997, "info": "Tim Rollins & K.O.S. emerged from a public high school art education setting to establish themselves as an internationally renowned art group. They are represented by the Mary Boone Gallery, one of the world's most prestigious commercial fine art galleries. Their signature work involves the creation of visual images based on classical literature.<p>In the early 1980's Tim Rollins was hired as a public high school teacher, and began a decade long relationship with a group of students that would eventually be known as K.O.S. for Kids of Survival. These students had been labeled by the school administrators as marginal performers and likely dropouts. Rollins quickly realized these students had talent as visual artists, though they had yet to master reading and writing. He decided to make reading the classics a prerequisite and point of departure for the creation of visual images by these students. The success of this experiment is measured by the fact that 9 of the original eleven students have completed their college education or are currently enrolled in university programs.<p>Tim Rollins held a series of workshops with elementary, middle and high school students from Hillsborough, Pasco, and Pinellas county. Through these workshops the students created visual images based on Franz Kafka's Amerika and Aristophanes' The Frogs. Kafka's Amerika was the theme for the high school group, while younger children explored Aristophanes' The Frogs. Rollins and his own students, K.O.S., translated the drawings produced in Tampa into the full size murals installed in the USF Education building.", "source": "http://www.graphicstudio.usf.edu/PA/Pages/pa_rollins.html" }, "geometry": { "type": "Polygon", "coordinates": [ [ [ -82.411087421783506, 28.060436326825599 ], [ -82.411094344041828, 28.060394419338181 ], [ -82.411115526033072, 28.060356460503233 ], [ -82.411148894305626, 28.060326165990531 ], [ -82.411191182539426, 28.060306501230734 ], [ -82.411238251276473, 28.060299391141154 ], [ -82.411285493116466, 28.060305531703907 ], [ -82.411328283715264, 28.060324321839435 ], [ -82.4113624344416, 28.060353922243827 ], [ -82.411384602385539, 28.060391435430578 ], [ -82.411392617585278, 28.060433189353983 ], [ -82.411385695441624, 28.060475096852098 ], [ -82.411364513525911, 28.060513055725497 ], [ -82.411331145260931, 28.060543350289731 ], [ -82.411288856963864, 28.060563015094441 ], [ -82.41124178811684, 28.060570125205167 ], [ -82.411194546162193, 28.060563984631717 ], [ -82.411151755487879, 28.060545194457728 ], [ -82.411117604753954, 28.06051559400181 ], [ -82.411095436873282, 28.060478080770149 ], [ -82.411087421783506, 28.060436326825599 ] ] ] } }
            ]
        });

        layer = leafletPip.pointInLayer([$scope.center.lng, $scope.center.lat], usfArt);
        if (layer.length > 0) {
          $scope.artist = layer[0].feature.properties.author;
          $scope.title = layer[0].feature.properties.title;
          $scope.year = layer[0].feature.properties.year;
          $scope.info = layer[0].feature.properties.info;
          $scope.source = layer[0].feature.properties.source;
        }
      });

		
    });


/**************************************************
 *
 *         Our home page controller!
 *
 **************************************************/
    
    usf.controller('aboutController', function($scope) {

        // create a message to display in our view
        $scope.message = 'La-la-la-lala';
    });
