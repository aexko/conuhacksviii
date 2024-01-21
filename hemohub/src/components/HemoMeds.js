import React, { useState } from 'react';
import './css/Components.css'
import './css/HemoMeds.css'

const RestrictedMedications = ['absorica',
'accutane roche',
'acenocoumarol',
'acitretin',
'aclavulanate',
'act diclo-miso',
'adalimumab',
'adempas',
'afatinib',
'afinitor',
'agalsidase',
'agrylin',
'alimta',
'alitretinoin',
'alkeran',
'altretamine',
'ambrisentan',
'amgevita',
'aminoglutethimide',
'amiodarone',
'amox',
'amoxi',
'amoxicillin',
'amoxicillin',
'amoxicillin',
'amoxi-clav',
'amoxil',
'ampi',
'ampicillin',
'ampicin',
'ampicin',
'anagrelide',
'anakinra',
'apalutamide',
'apixaban',
'arava',
'argatroban',
'aricept',
'arixtra',
'arlidin',
'aromasin',
'arthrotec',
'aubagio',
'auranofin',
'aurothiomalate',
'avodart',
'axitinib',
'azathioprine',
'bacampicillin',
'belimumab',
'bellergal spacetabs',
'bendamustine',
'benlysta',
'bicalutamide',
'bicillin l-a',
'bosentan',
'bosulif',
'bosutinib',
'brenzys',
'busulfan',
'cabergoline',
'capecitabine',
'carbachol',
'carbamylcholine',
'carfilzomib',
'carvedilol',
'casodex',
'ceclor',
'ceenu',
'cefaclor',
'cefadroxil',
'cefepime',
'cefixime',
'cefprozil',
'ceftolozane',
'ceftolozane',
'ceftin',
'ceftobiprole',
'cefuroxime axetil',
'cefzil',
'cellcept',
'cephalex',
'cephalexin',
'ceritinib',
'cetrorelix',
'cetrotide',
'chlorambucil',
'clarus',
'clavamoxin',
'clavulin',
'cloxacillin',
'cloxi',
'cloxin',
'cordarone',
'corvert',
'coumadin',
'crizotinib',
'crystapen',
'cuprimine',
'cyclomen',
'cyclophosphamide',
'absorica ld',
'tazobactam',
'clarithromycin',
'lansoprazole',
'clavulanic acid',
'dabigatran etexilate',
'dabrafenib',
'daclatasvir',
'daklinza',
'dalteparin',
'danaparoid',
'danazol',
'dasatinib',
'depakene',
'diclo-miso',
'diclofenac',
'diethylstilbestrol',
'dihidroergotamine',
'divalproex',
'donepezil',
'dostinex',
'dupilumab',
'dupixent',
'dutasteride',
'edoxaban',
'eliquis',
'emcyt',
'emtricitabine ',
'enasidenib ',
'enbrel',
'enoxaparin',
'enzalutamid',
'ephedrine',
'epival',
'epuris',
'erelzi',
'ergoloid mesylates',
'erleada',
'erivedge',
'erlotinib',
'estramustine',
'etanercept',
'etoposide',
'etretinate',
'euflex',
'everolimus',
'evista',
'exemastane',
'fabrazyme',
'femara',
'fingolimod',
'finasteride',
'flutamide',
'fondaparinux',
'foscarnet',
'fragmin',
'fraxiparine',
'fumarate tenofovir disoproxil',
'misoprostol',
'emtricitabine',
'mesylate',
'galantamine hydrobromide',
'gazyva',
'gefitinib',
'gilenya',
'giotrif',
'gleevec',
'golimumab',
'goserelin',
'hadlima',
'hanzema',
'heparin',
'hp-pac',
'hulio',
'human growth hormone',
'humira',
'hydergine',
'hydrea',
'hydroxyurea',
'hyrimoz',
'ibrutinib',
'ibutilide',
'iclustig',
'idacio',
'idamycin',
'idarubicin',
'idelalisib',
'idhifa',
'imatinibe',
'imbruvica',
'imdur',
'imuran',
'inclunox',
'inlyta',
'innohep',
'iressa',
'isdn',
'ismn',
'isosorbide',
'isotretinoin',
'istodax',
'hgh',
'jakavi',
'jalyn',
'juxtapid',
'keflex',
'keytruda',
'kineret',
'kyprolis',
'lapatinib ditosylate',
'leflunomide',
'lenalidomide',
'lenvatinib',
'lenvima',
'létrozole',
'leukeran',
'lexin',
'lixiana',
'lomitapide',
'lomustine',
'lovenox',
'macitentan',
'matulane',
'maxidol',
'maxipime',
'megace os',
'megestrol',
'mekinist',
'melphalan',
'mercaptopurine',
'methimazole',
'methotrexate',
'methoxsalen',
'methysergide maleate',
'metoject',
'mexiletin',
'mifegymiso',
'minitran',
'misoprostol',
'misoprostol',
'motrimax',
'mycophenolate',
'myfortic',
'myochrysine',
'myleran',
'nadroparine calcium',
'nafarelin',
'nicoumalone',
'nilotinib',
'nintedanib',
'nitro',
'nitro-dur',
'nitroglycerin',
'nitrol',
'nitrolingual',
'nitrostat',
'noromby',
'novamoxin',
'nylidrin',
'obinutuzumab',
'odomzo',
'ofev',
'opsumit',
'orgaran',
'oxsoralen',
'oxsoralen-ultra',
'diclofenac',
'mifepristone',
'acenocoumarol',
'glyceryl trinitrate',
'pegasys rbv',
'peginterferon alfa-2a',
'peginterferon beta-1a',
'pembrolizumab',
'pemetrexed',
'penicillamine',
'penicillin g',
'penicillin v',
'pen-g',
'pen-v',
'pen-vk',
'pivampicillin',
'pivmecillinam',
'plegridy',
'pomalidomide',
'pomalyst',
'ponatinib',
'pradax',
'pradaxa',
'procarbazine',
'procytox',
'propecia',
'propylthiouracil',
'propyl-thyracil',
'proscar',
'purinethol',
'quinidine',
'quinidine sulfate',
'raloxifene',
'rapamune',
'regorafenib',
'reminyl',
'replagal',
'revlimid',
'riabni',
'ridaura',
'rilutek',
'riluzole',
'riociguat',
'rituxan',
'rituximab',
'rivaroxaban',
'riximyo',
'romidepsin',
'ruxience',
'ruxolitinib',
'rylosol',
'sels dor',
'siltuximab',
'simponi',
'sintrom',
'sirolimus',
'sonidegib',
'sorbide',
'soriatane',
'sprycel',
'stilbestrol',
'stivagra',
'suprax',
'sylvant',
'synarel',
'tafinlar',
'tapazole',
'tarceva',
'tasigna',
'tazobactam',
'tazobactam',
'tegison',
'temodal',
'temozolomide',
'teriflunomide',
'thalidomide',
'thalomide',
'tinzaparin',
'tocainide',
'toctino',
'tracleer',
'trametinib',
'transderm',
'treanda',
'tretinoin',
'trimetrexate',
'trinipatch',
'truvada',
'truxima',
'tykerb',
'nitro',
'ceftolozane',
'valcyte',
'valganciclovir',
'valproic acid',
'vemurafenib',
'vepesid',
'verteporfin',
'vesanoid',
'vfend',
'vismodegib',
'visudyne',
'vocarvi',
'volibris',
'voriconazole',
'vorinostat',
'warfarin',
'xalkori',
'xarelto',
'xeloda',
'xtandi',
'yohimbine',
'zelboraf',
'zerbaxa',
'zoladex',
'zolinza',
'zydelig',
'zykadia'

];

const HemoMeds = () => {
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const checkRestrictedMedication = () => {
    setMessage(`Checking if "${userInput}" is a restricted medication...`);
    // Your logic to check if userInput is in the list of restricted medications
    if (RestrictedMedications.includes(userInput.toLowerCase())) {
      setMessage(`"${userInput}" is a restricted medication!`);
    } else {
      setMessage(`"${userInput}" is not a restricted medication.`);
    }
  };

  return (
    <div className='container'>
      <h1>Restricted Medication Checker</h1>
      <label>
        Select Medication:
        <input
          className='input'
          type="text"
          list="medicationsList"
          value={userInput}
          onChange={handleInputChange}
        />
        <datalist className='medications-list' id="medicationsList">
          {RestrictedMedications.map((medication, index) => (
            <option key={index} value={medication} />
          ))}
        </datalist>
      </label>
      <button className='button' onClick={checkRestrictedMedication}>Check</button>
      {message && (
        <p className="result-message" style={{ color: RestrictedMedications.includes(userInput.toLowerCase()) ? 'red' : 'green' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default HemoMeds;