import { franchiseCategories } from './franchiseCatalog';

export type StoreIdentity = {
  category: string;
  name: string;
  shortName: string;
  icon: string;
  descriptor: string;
  trademarkPolicy: 'ORIGINAL_PROJECT_MARK';
};

const iconSet = ['MOBILE','COMPUTE','DESKTOP','DISPLAY','SERVER','NETWORK','SECURE','OFFICE','INTERIOR','LOBBY','LIGHT','SMART','ACCESS','VISION','ALARM','SOLAR','ENERGY','EV','HVAC','HEAT','WATER','PACK','CNC','METAL','WELD','TOOLS','AIR','PUMP','POWER','LIFT','RACK','CONVEY','BUILD','CLEAN','AGRO','LAB','MEASURE','CARE','DENTAL','FIT','SPA','HOTEL','GASTRO','COLD','VEND','PAY','AV','SIGN','ENTRY','OUTDOOR'] as const;

const identityNames = ['MOBILIS','NEXORA','COREX','VISTRA','SERVION','NETRIA','FORTIQ','OFFICERA','EXECUTIVA','LOBBIA','LUMERA','DOMIQ','ACCESSA','VIGILIS','SENTRA','SOLVIA','ENERGIA MODULAR','EVORA','CLIMORA','THERMIA','AQUAVIA','PACKORA','PRECISION CNC','METALIS','WELDORA','PROTOOLS','PNEUMA','PUMPEX','RESERVA POWER','LIFTORA','STORIX','FLOWLINE','CONSTRUCTA','MUNICIPA','AGRIVA','LABORA','METRIX','MEDIVA','DENTIVA','VITALIS','SERENIA','HOSPITA','GASTRONIQ','FRIGORA','VENDORA','PAYSAFE EQUIPMENT','CONFERA','SIGNORA','ENTRIX','TERRAZA'] as const;

export const storeIdentities: StoreIdentity[] = franchiseCategories.map((category, index) => ({
  category,
  name: `PROFESJA ${identityNames[index]}`,
  shortName: identityNames[index],
  icon: iconSet[index],
  descriptor: `Tematyczny sklep PROFESJA: ${category}. Identyfikacja własna projektu; zakres, parametry i dostępność ofert podlegają weryfikacji przed publikacją wiążącej oferty.`,
  trademarkPolicy: 'ORIGINAL_PROJECT_MARK',
}));

if (storeIdentities.length !== 50) {
  throw new Error(`Expected 50 store identities, received ${storeIdentities.length}`);
}
