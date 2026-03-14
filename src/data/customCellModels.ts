// data/customCellModels.ts
import { CustomCellModel } from '../types/customCell.types';

export const customCellModels: CustomCellModel[] = [
  {
    id: 'weldrive-cobot',
    name: 'WELDRIVE COBOT',
    subtitle: {
      en: 'Collaborative robot with mobile table',
      es: 'Robot colaborativo con mesa móvil',
      pt: 'Robô colaborativo com mesa móvel'
    },
    images: [
      { url: '/img/cell1.png', alt: { en: 'WELDRIVE COBOT front view', es: 'WELDRIVE COBOT vista frontal', pt: 'WELDRIVE COBOT vista frontal' } },
    ],
    description: {
      en: 'Portable table with CRP-RC09-13-10-W collaborative robot, ideal for tight spaces and collaborative environments without physical barriers. Designed for SMEs and light production. Easy programming reduces the need for highly trained personnel.',
      es: 'Mesa portátil con robot colaborativo CRP-RC09-13-10-W, ideal para espacios reducidos y entornos colaborativos sin barreras físicas. Orientada a pymes y producción liviana. Gran facilidad de programación reduciendo la necesidad de personal altamente capacitado.',
      pt: 'Mesa portátil com robô colaborativo CRP-RC09-13-10-W, ideal para espaços reduzidos e ambientes colaborativos sem barreiras físicas. Orientada para PMEs e produção leve. Facilidade de programação reduzindo a necessidade de pessoal altamente capacitado.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Metalworking', 'Auto parts', 'Ironwork - supports, frames, folded sheets', 'Machinery subassemblies'],
        es: ['Metalmecánica', 'Autopartista', 'Herrería - soportes, marcos, chapas plegadas', 'Subensambles de maquinaria'],
        pt: ['Metalurgia', 'Autopeças', 'Ferraria - suportes, quadros, chapas dobradas', 'Subconjuntos de máquinas']
      }
    },
    benefits: {
      en: [
        'Easy intuitive programming',
        'No closed cell protection required',
        'Portable within the factory or for field transport',
        'Ideal for SMEs'
      ],
      es: [
        'Fácil programación intuitiva',
        'No requiere celda cerrada de protección',
        'Portátil dentro de la fábrica o para trasladar a campo',
        'Ideal para pymes'
      ],
      pt: [
        'Programação intuitiva fácil',
        'Não requer célula fechada de proteção',
        'Portátil dentro da fábrica ou para transporte em campo',
        'Ideal para PMEs'
      ]
    },
    technicalSpecs: [
      { label: { en: 'External Cell Dimensions', es: 'Dimensión externa de la celda', pt: 'Dimensão externa da célula' }, value: '950 × 1050 × 750x900 mm' },
      { label: { en: 'Welding Area', es: 'Área de soldado', pt: 'Área de soldagem' }, value: '1050 × 750 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '120 Kg' },
      { label: { en: 'Estimated Weight', es: 'Peso estimado', pt: 'Peso estimado' }, value: '85 Kg' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT 950 CROBOTP: CRP-RC09-05-W',
          specifications: ['Collaborative robot', '5kg payload']
        },
        { 
          name: 'ROBOT 1300 CROBOTP: CRP-RC09-13-10-W',
          specifications: ['Collaborative robot', '13kg payload']
        },
        { 
          name: 'ROBOT 1800 CROBOTP: CRP-RC18-05',
          specifications: ['Collaborative robot', '18kg payload']
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'External axes'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Ejes Externos'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Eixos externos'
        ]
      }
    }
  },
  {
    id: 'weldrive-c01',
    name: 'WELDRIVE C 01',
    subtitle: {
      en: 'Compact cell with double fixed station',
      es: 'Celda compacta con doble estación fija',
      pt: 'Célula compacta com dupla estação fixa'
    },
    images: [
      { url: '/img/cell2.png', alt: { en: 'WELDRIVE C 01 front view', es: 'WELDRIVE C 01 vista frontal', pt: 'WELDRIVE C 01 vista frontal' } },
    ],
    description: {
      en: 'Designed for repetitive MIG/MAG welding processes of medium scale. Optimized for medium-sized parts in semi-continuous cycle. The robot welds in one station while the operator changes the part in the opposite station, maximizing robot utilization.',
      es: 'Diseñada para procesos de soldadura MIG/MAG repetitivos de mediana escala. Optimizada para piezas medianas en ciclo semi-continuo. El robot estará soldando en una estación mientras el operador cambia la pieza en la estación opuesta, maximizando su aprovechamiento.',
      pt: 'Projetada para processos de soldagem MIG/MAG repetitivos de média escala. Otimizada para peças médias em ciclo semi-contínuo. O robô solda em uma estação enquanto o operador troca a peça na estação oposta, maximizando o aproveitamento do robô.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Metal Casing', 'Frames', 'Electrical Box', 'Auto parts', 'Agricultural Parts'],
        es: ['Carcasa Metálica', 'Cuadros', 'Caja Eléctrica', 'Autopartista', 'Agro Piezas'],
        pt: ['Carcaça Metálica', 'Quadros', 'Caixa Elétrica', 'Autopeças', 'Peças Agrícolas']
      }
    },
    benefits: {
      en: [
        'Self-supporting compact design',
        'Double table for high production',
        'Safety enclosure',
        'Flexible and high productivity',
        'Ideal for repetitive beads in medium and large batches'
      ],
      es: [
        'Compacta autoportante',
        'Doble mesa para alta producción',
        'Cerramiento de seguridad',
        'Flexible y de alta producción',
        'Ideal para cordones repetitivos en lotes medianos y grandes'
      ],
      pt: [
        'Design compacto autoportante',
        'Mesa dupla para alta produção',
        'Cercamento de segurança',
        'Flexível e de alta produtividade',
        'Ideal para cordões repetitivos em lotes médios e grandes'
      ]
    },
    technicalSpecs: [
      { label: { en: 'External Cell Dimensions', es: 'Dimensión externa de la celda', pt: 'Dimensão externa da célula' }, value: '2700 x 2500 x 2200 mm' },
      { label: { en: 'Welding Area', es: 'Área de soldado', pt: 'Área de soldagem' }, value: '900 x 600 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '250 kg' },
      { label: { en: 'Estimated Weight', es: 'Peso estimado', pt: 'Peso estimado' }, value: '1200 kg' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT KUKA: KR 10 R1420',
          specifications: ['10kg payload', '1420mm reach']
        },
        { 
          name: 'CROBOTP: CRP-RH14-10',
          specifications: ['14kg payload', '10kg capacity']
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'AI-assisted programming',
          'HMI and PLC for production control'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Programación asistida por IA',
          'HMI y PLC para control de producción'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Programação assistida por IA',
          'HMI e PLC para controle de produção'
        ]
      }
    }
  },
  {
    id: 'weldrive-c02',
    name: 'WELDRIVE C 02',
    subtitle: {
      en: 'Robotic cell with servo-controlled rotary table',
      es: 'Celda robotizada con mesa rotativa servo-controlada',
      pt: 'Célula robotizada com mesa rotativa servo-controlada'
    },
    images: [
      { url: '/img/cell3.png', alt: { en: 'WELDRIVE C 02 front view', es: 'WELDRIVE C 02 vista frontal', pt: 'WELDRIVE C 02 vista frontal' } }
    ],
    description: {
      en: 'Designed for repetitive MIG/MAG welding processes of medium scale. Optimized for medium-sized parts in semi-continuous cycle. 1 or 2 external rotary axes for rotating the part. The robot welds in one station while the operator changes the part in the opposite station.',
      es: 'Diseñada para procesos de soldadura MIG/MAG repetitivos de mediana escala. Optimizada para piezas medianas en ciclo semi-continuo. 1 o 2 ejes rotativos externos para rotar la pieza. El robot solda en una estación mientras el operador cambia la pieza en la estación opuesta.',
      pt: 'Projetada para processos de soldagem MIG/MAG repetitivos de média escala. Otimizada para peças médias em ciclo semi-contínuo. 1 ou 2 eixos rotativos externos para girar a peça. O robô solda em uma estação enquanto o operador troca a peça na estação oposta.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Metal Casing', 'Electrical Box', 'Agricultural Parts', 'Auto parts', 'Parts requiring rotation geometry'],
        es: ['Carcasa Metálica', 'Caja Eléctrica', 'Agro Piezas', 'Autopartista', 'Piezas de geometría que requiere rotación'],
        pt: ['Carcaça Metálica', 'Caixa Elétrica', 'Peças Agrícolas', 'Autopeças', 'Peças com geometria que requer rotação']
      }
    },
    benefits: {
      en: [
        'Self-supporting compact design',
        'Double table for high production',
        'Safety enclosure',
        'Flexible and high productivity',
        'Rotary tables allow 360° beads',
        'Ideal for complex geometries requiring welding on multiple faces'
      ],
      es: [
        'Compacta autoportante',
        'Doble mesa para alta producción',
        'Cerramiento de seguridad',
        'Flexible y de alta producción',
        'Mesas rotativas permiten cordones de 360°',
        'Ideal para geometrías complejas que requieran soldadura en varias caras'
      ],
      pt: [
        'Design compacto autoportante',
        'Mesa dupla para alta produção',
        'Cercamento de segurança',
        'Flexível e de alta produtividade',
        'Mesas rotativas permitem cordões de 360°',
        'Ideal para geometrias complexas que requerem soldagem em várias faces'
      ]
    },
    technicalSpecs: [
      { label: { en: 'External Cell Dimensions', es: 'Dimensión externa de la celda', pt: 'Dimensão externa da célula' }, value: '2700 x 2500 x 2200 mm' },
      { label: { en: 'Welding Area', es: 'Área de soldado', pt: 'Área de soldagem' }, value: '400 x 600 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '250 kg' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT KUKA: KR 10 R1420',
          specifications: ['10kg payload', '1420mm reach']
        },
        { 
          name: 'CROBOTP: CRP-RH14-10',
          specifications: ['14kg payload', '10kg capacity']
        },
        { 
          name: 'POSITIONER NYNHAN CRP 250Kg',
          specifications: ['250kg capacity', 'Servo-controlled']
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'AI-assisted programming',
          'HMI and PLC for production control'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Programación asistida por IA',
          'HMI y PLC para control de producción'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Programação assistida por IA',
          'HMI e PLC para controle de produção'
        ]
      }
    }
  },
  {
    id: 'weldrive-c03',
    name: 'WELDRIVE C 03',
    subtitle: {
      en: 'Compact cell with double rotary station',
      es: 'Celda compacta con doble estación rotatoria',
      pt: 'Célula compacta com dupla estação rotatória'
    },
    images: [
      { url: '/img/cell4.png', alt: { en: 'WELDRIVE C 03 front view', es: 'WELDRIVE C 03 vista frontal', pt: 'WELDRIVE C 03 vista frontal' } },
    ],
    description: {
      en: 'Designed for repetitive MIG/MAG welding processes of medium scale. Optimized for medium-sized parts in semi-continuous cycle. 1 additional axis for table change. The robot is centered relative to the table for larger welding area.',
      es: 'Diseñada para procesos de soldadura MIG/MAG repetitivos de mediana escala. Optimizada para piezas medianas en ciclo semi-continuo. 1 eje adicional para cambio de mesa. El robot se encuentra centrado respecto de la mesa para mayor área de soldadura.',
      pt: 'Projetada para processos de soldagem MIG/MAG repetitivos de média escala. Otimizada para peças médias em ciclo semi-contínuo. 1 eixo adicional para troca de mesa. O robô está centrado em relação à mesa para maior área de soldagem.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Metal Casing', 'Electrical Box', 'Agricultural Parts', 'Auto parts'],
        es: ['Carcasa Metálica', 'Caja Eléctrica', 'Agro Piezas', 'Autopartista'],
        pt: ['Carcaça Metálica', 'Caixa Elétrica', 'Peças Agrícolas', 'Autopeças']
      }
    },
    benefits: {
      en: [
        'Self-supporting compact design',
        'Double table for high production',
        'Larger welding area',
        'Safety enclosure',
        'Flexible and high productivity'
      ],
      es: [
        'Compacta autoportante',
        'Doble mesa para alta producción',
        'Mayor área de soldadura',
        'Cerramiento de seguridad',
        'Flexible y de alta producción'
      ],
      pt: [
        'Design compacto autoportante',
        'Mesa dupla para alta produção',
        'Maior área de soldagem',
        'Cercamento de segurança',
        'Flexível e de alta produtividade'
      ]
    },
    technicalSpecs: [
      { label: { en: 'Model 2400 Dimensions', es: 'Dimensiones Modelo 2400', pt: 'Dimensões Modelo 2400' }, value: '4500 x 2100 x 2120 mm' },
      { label: { en: 'Model 2900 Dimensions', es: 'Dimensiones Modelo 2900', pt: 'Dimensões Modelo 2900' }, value: '4500 x 2100 x 2120 mm' },
      { label: { en: 'Model 2400 Welding Area', es: 'Área de soldado Modelo 2400', pt: 'Área de soldagem Modelo 2400' }, value: '700 x 1300 mm' },
      { label: { en: 'Model 2900 Welding Area', es: 'Área de soldado Modelo 2900', pt: 'Área de soldagem Modelo 2900' }, value: '700 x 2250 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '500 kg' },
      { label: { en: 'Number of Robots', es: 'Cantidad de robots', pt: 'Quantidade de robôs' }, value: '1' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT 2400: KUKA KR 10 R1420 / CROBOTP CRP-RH14-10',
        },
        { 
          name: 'ROBOT 2900: KUKA KR 16 R2010-2 / CROBOTP CRP-RH21-06-W',
        },
        { 
          name: 'POWER SOURCE: GALAGAR / NYNHAN',
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'AI-assisted programming',
          'HMI and PLC for production control'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Programación asistida por IA',
          'HMI y PLC para control de producción'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Programação assistida por IA',
          'HMI e PLC para controle de produção'
        ]
      }
    }
  },
  {
    id: 'weldrive-c04',
    name: 'WELDRIVE C 04',
    subtitle: {
      en: 'Cell with double opposite stations',
      es: 'Celda con dobles estaciones opuestas',
      pt: 'Célula com duplas estações opostas'
    },
    images: [
      { url: '/img/cell5.png', alt: { en: 'WELDRIVE C 04 front view', es: 'WELDRIVE C 04 vista frontal', pt: 'WELDRIVE C 04 vista frontal' } },
     
    ],
    description: {
      en: 'Designed for repetitive MIG/MAG welding processes of medium scale. Optimized for medium-sized parts in semi-continuous cycle. The robot welds in one station while the operator changes the part in the opposite station, maximizing robot utilization.',
      es: 'Diseñada para procesos de soldadura MIG/MAG repetitivos de mediana escala. Optimizada para piezas medianas en ciclo semi-continuo. El robot solda en una estación mientras el operador cambia la pieza en la estación opuesta, maximizando su aprovechamiento.',
      pt: 'Projetada para processos de soldagem MIG/MAG repetitivos de média escala. Otimizada para peças médias em ciclo semi-contínuo. O robô solda em uma estação enquanto o operador troca a peça na estação oposta, maximizando o aproveitamento do robô.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Metal Casing', 'Frames', 'Electrical Box', 'Auto parts', 'Agricultural Parts', 'Parts requiring rotation geometry', 'Large parts'],
        es: ['Carcasa Metálica', 'Cuadros', 'Caja Eléctrica', 'Autopartista', 'Agro Piezas', 'Piezas de geometría que requieren rotación', 'Piezas de grandes dimensiones'],
        pt: ['Carcaça Metálica', 'Quadros', 'Caixa Elétrica', 'Autopeças', 'Peças Agrícolas', 'Peças com geometria que requer rotação', 'Peças de grandes dimensões']
      }
    },
    benefits: {
      en: [
        'Large dimensions capacity',
        'Double table for high production',
        'Safety enclosure',
        'Flexible and high productivity',
        'Ideal for repetitive beads in medium and large batches'
      ],
      es: [
        'Grandes dimensiones',
        'Doble mesa para alta producción',
        'Cerramiento de seguridad',
        'Flexible y de alta producción',
        'Ideal para cordones repetitivos en lotes medianos y grandes'
      ],
      pt: [
        'Grandes dimensões',
        'Mesa dupla para alta produção',
        'Cercamento de segurança',
        'Flexível e de alta produtividade',
        'Ideal para cordões repetitivos em lotes médios e grandes'
      ]
    },
    technicalSpecs: [
      { label: { en: 'Model 2000 Dimensions', es: 'Dimensiones Modelo 2000', pt: 'Dimensões Modelo 2000' }, value: '5340 x 2680 x 2225 mm' },
      { label: { en: 'Model 3000 Dimensions', es: 'Dimensiones Modelo 3000', pt: 'Dimensões Modelo 3000' }, value: '5340 x 3840 x 2225 mm' },
      { label: { en: 'Model 4500 Dimensions', es: 'Dimensiones Modelo 4500', pt: 'Dimensões Modelo 4500' }, value: '5340 x 5180 x 2225 mm' },
      { label: { en: 'Model 2000 Welding Area', es: 'Área de soldado Modelo 2000', pt: 'Área de soldagem Modelo 2000' }, value: '1500 x 2000 mm' },
      { label: { en: 'Model 3000 Welding Area', es: 'Área de soldado Modelo 3000', pt: 'Área de soldagem Modelo 3000' }, value: '1500 x 3000 mm' },
      { label: { en: 'Model 4500 Welding Area', es: 'Área de soldado Modelo 4500', pt: 'Área de soldagem Modelo 4500' }, value: '1250 x 4500 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '250/500/1000 kg' },
      { label: { en: 'Number of Robots', es: 'Cantidad de robots', pt: 'Quantidade de robôs' }, value: '1-2' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT 2000: KUKA KR 12 R1810-2 / CROBOTP CRP-RH18-06-W',
        },
        { 
          name: 'ROBOT 3000: KUKA KR 16 R2010-2 / CROBOTP CRP-RH21-06-W',
        },
        { 
          name: 'ROBOT 4500: KUKA KR 12 R1810-2 / CROBOTP CRP-RH18-06-W',
        },
        { 
          name: 'POWER SOURCE: GALAGAR / NYNHAN',
        },
        { 
          name: 'PANEL: SMARTPAD',
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'AI-assisted programming',
          'HMI and PLC for production control'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Programación asistida por IA',
          'HMI y PLC para control de producción'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Programação assistida por IA',
          'HMI e PLC para controle de produção'
        ]
      }
    }
  },
  {
    id: 'weldrive-c05',
    name: 'WELDRIVE C 05',
    subtitle: {
      en: '3-axis H-type positioner with horizontal axis',
      es: 'Posicionador 3 ejes tipo H eje horizontal',
      pt: 'Posicionador 3 eixos tipo H eixo horizontal'
    },
    images: [
      { url: '/img/cell6.png', alt: { en: 'WELDRIVE C 05 front view', es: 'WELDRIVE C 05 vista frontal', pt: 'WELDRIVE C 05 vista frontal' } }
    ],
    description: {
      en: 'Advanced robotic cell for circular or multilateral welding of parts with 2 horizontal rotary plate stations with servo-controlled 3-axis positioner. Ideal for parts requiring continuous welding in different planes such as cylindrical parts, cable carriers, small tanks. Rotary frames, complex shape supports.',
      es: 'Celda robotizada avanzada para soldadura circular o multilateral de piezas con 2 estaciones de platos giratorios horizontales con posicionador servo-controlado de 3 ejes. Ideal para piezas que requieren soldadura continua en distintos planos tales como piezas cilíndricas, portacables, tanques chicos. Bastidores rotativos, soportes de formas complejas.',
      pt: 'Célula robotizada avançada para soldagem circular ou multilateral de peças com 2 estações de pratos giratórios horizontais com posicionador servo-controlado de 3 eixos. Ideal para peças que requerem soldagem contínua em diferentes planos, como peças cilíndricas, porta-cabos, tanques pequenos. Bastidores rotativos, suportes de formas complexas.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Cylindrical parts', 'Cable carriers', 'Small tanks', 'Rotary frames', 'Complex shape supports'],
        es: ['Piezas cilíndricas', 'Portacables', 'Tanques chicos', 'Bastidores rotativos', 'Soportes de formas complejas'],
        pt: ['Peças cilíndricas', 'Porta-cabos', 'Tanques pequenos', 'Bastidores rotativos', 'Suportes de formas complexas']
      }
    },
    benefits: {
      en: [
        'Servo-controlled interlocking',
        'Robot controller with integrated multi-axis synchronization',
        'Refrigerated robotic torch with integrated automatic cleaning',
        'Closed metal cabin with side access for loading',
        'Touch interface for station, program and cycle control'
      ],
      es: [
        'Enclavamiento servo-controlado',
        'Controlador Robot con sincronización multieje integrada',
        'Antorcha Robotizada Refrigerada con limpieza automática integrada',
        'Cabina metálica cerrada con acceso lateral para carga',
        'Interfaz táctil para control de estaciones, programas y ciclos'
      ],
      pt: [
        'Intertravamento servo-controlado',
        'Controlador de robô com sincronização multieixo integrada',
        'Tocha robótica refrigerada com limpeza automática integrada',
        'Cabine metálica fechada com acesso lateral para carga',
        'Interface touch para controle de estações, programas e ciclos'
      ]
    },
    technicalSpecs: [
      { label: { en: 'Model 2000 Dimensions', es: 'Dimensiones Modelo 2000', pt: 'Dimensões Modelo 2000' }, value: '3900 × 2800 × 2120 mm' },
      { label: { en: 'Model 3000 Dimensions', es: 'Dimensiones Modelo 3000', pt: 'Dimensões Modelo 3000' }, value: '4100 x 5100 x 2120 mm' },
      { label: { en: 'Model 3500 Dimensions', es: 'Dimensiones Modelo 3500', pt: 'Dimensões Modelo 3500' }, value: '5420 x 4470 x 2120 mm' },
      { label: { en: 'Model 2000 Welding Area', es: 'Área de soldado Modelo 2000', pt: 'Área de soldagem Modelo 2000' }, value: '1000 x 2000 mm' },
      { label: { en: 'Model 3000 Welding Area', es: 'Área de soldado Modelo 3000', pt: 'Área de soldagem Modelo 3000' }, value: '1250 x 3000 mm' },
      { label: { en: 'Model 3500 Welding Area', es: 'Área de soldado Modelo 3500', pt: 'Área de soldagem Modelo 3500' }, value: '1250 x 3500 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '250 / 500 / 1000 kg' },
      { label: { en: 'Number of Robots', es: 'Cantidad de robots', pt: 'Quantidade de robôs' }, value: '1-2' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT 2000: KUKA KR 10 R1420 / CROBOTP CRP-RH14-10',
        },
        { 
          name: 'ROBOT 3000: KUKA KR 16 R2010-2 / CROBOTP CRP-RH21-06-W',
        },
        { 
          name: 'ROBOT 3500: KUKA KR 12 R1810-2 / CROBOTP CRP-RH18-06-W',
        },
        { 
          name: 'POWER SOURCE: NYNHAN',
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'AI-assisted programming',
          'HMI and PLC for production control'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Programación asistida por IA',
          'HMI y PLC para control de producción'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Programação assistida por IA',
          'HMI e PLC para controle de produção'
        ]
      }
    }
  },
  {
    id: 'weldrive-c06',
    name: 'WELDRIVE C 06',
    subtitle: {
      en: '3-axis H-type positioner with vertical axis',
      es: 'Posicionador 3 ejes tipo H eje vertical',
      pt: 'Posicionador 3 eixos tipo H eixo vertical'
    },
    images: [
      { url: '/img/cell7.png', alt: { en: 'WELDRIVE C 06 front view', es: 'WELDRIVE C 06 vista frontal', pt: 'WELDRIVE C 06 vista frontal' } }
    ],
    description: {
      en: 'Advanced robotic cell for circular or multilateral welding of parts with 2 horizontal rotary plate stations with servo-controlled 3-axis positioner. Ideal for parts requiring continuous welding in different planes such as cylindrical parts, cable carriers, small tanks. Rotary frames, complex shape supports.',
      es: 'Celda robotizada avanzada para soldadura circular o multilateral de piezas con 2 estaciones de platos giratorios horizontales con posicionador servo-controlado de 3 ejes. Ideal para piezas que requieren soldadura continua en distintos planos tales como piezas cilíndricas, portacables, tanques chicos. Bastidores rotativos, soportes de formas complejas.',
      pt: 'Célula robotizada avançada para soldagem circular ou multilateral de peças com 2 estações de pratos giratórios horizontais com posicionador servo-controlado de 3 eixos. Ideal para peças que requerem soldagem contínua em diferentes planos, como peças cilíndricas, porta-cabos, tanques pequenos. Bastidores rotativos, suportes de formas complexas.'
    },
    applications: {
      title: {
        en: 'Applications',
        es: 'Aplicaciones',
        pt: 'Aplicações'
      },
      items: {
        en: ['Cylindrical parts', 'Cable carriers', 'Small tanks', 'Rotary frames', 'Complex shape supports', 'Parts with multiple positioning requirements'],
        es: ['Piezas cilíndricas', 'Portacables', 'Tanques chicos', 'Bastidores rotativos', 'Soportes de formas complejas', 'Partes con requerimiento de posicionamiento múltiple'],
        pt: ['Peças cilíndricas', 'Porta-cabos', 'Tanques pequenos', 'Bastidores rotativos', 'Suportes de formas complexas', 'Peças com requisito de posicionamento múltiplo']
      }
    },
    benefits: {
      en: [
        'Servo-controlled interlocking',
        'Robot controller with integrated multi-axis synchronization',
        'Refrigerated robotic torch with integrated automatic cleaning',
        'Closed metal cabin with side access for loading',
        'Touch interface for station, program and cycle control'
      ],
      es: [
        'Enclavamiento servo-controlado',
        'Controlador Robot con sincronización multieje integrada',
        'Antorcha Robotizada Refrigerada con limpieza automática integrada',
        'Cabina metálica cerrada con acceso lateral para carga',
        'Interfaz táctil para control de estaciones, programas y ciclos'
      ],
      pt: [
        'Intertravamento servo-controlado',
        'Controlador de robô com sincronização multieixo integrada',
        'Tocha robótica refrigerada com limpeza automática integrada',
        'Cabine metálica fechada com acesso lateral para carga',
        'Interface touch para controle de estações, programas e ciclos'
      ]
    },
    technicalSpecs: [
      { label: { en: 'Model 1500 Dimensions', es: 'Dimensiones Modelo 1500', pt: 'Dimensões Modelo 1500' }, value: '5640 x 3840 x 2000 mm' },
      { label: { en: 'Model 2600 Dimensions', es: 'Dimensiones Modelo 2600', pt: 'Dimensões Modelo 2600' }, value: '5940 x 4700 x 3600 mm' },
      { label: { en: 'Model 1500 Welding Area', es: 'Área de soldado Modelo 1500', pt: 'Área de soldagem Modelo 1500' }, value: '1800 x 800 mm' },
      { label: { en: 'Model 2600 Welding Area', es: 'Área de soldado Modelo 2600', pt: 'Área de soldagem Modelo 2600' }, value: '1500 x 2600 mm' },
      { label: { en: 'Load Capacity per Station', es: 'Capacidad de carga por estación', pt: 'Capacidade de carga por estação' }, value: '500-1000 kg' },
      { label: { en: 'Number of Robots', es: 'Cantidad de robots', pt: 'Quantidade de robôs' }, value: '1' }
    ],
    mainComponents: {
      title: {
        en: 'Main Components',
        es: 'Componentes principales',
        pt: 'Componentes principais'
      },
      components: [
        { 
          name: 'ROBOT 1500: KUKA KR 12 R1810-2 / CROBOTP CRP-RH18-06-W',
        },
        { 
          name: 'ROBOT 2600: KUKA KR 12 R1810-2 / CROBOTP CRP-RH18-06-W',
        },
        { 
          name: 'POWER SOURCE: GALAGAR / NYNHAN',
        }
      ]
    },
    options: {
      title: {
        en: 'Optional Features',
        es: 'Opcionales',
        pt: 'Opcionais'
      },
      items: {
        en: [
          'Part probing by wire',
          'Laser joint measurement and tracking',
          'AI-assisted programming',
          'HMI and PLC for production control'
        ],
        es: [
          'Palpado de piezas por alambre',
          'Medición y seguimiento de junta láser',
          'Programación asistida por IA',
          'HMI y PLC para control de producción'
        ],
        pt: [
          'Palpagem de peças por fio',
          'Medição e rastreamento de junta a laser',
          'Programação assistida por IA',
          'HMI e PLC para controle de produção'
        ]
      }
    }
  }
];