export interface Claim {
  id: string;
  policyNumber: string;
  claimant: string;
  type: string;
  typeEn: string;
  incidentDate: string;
  claimedAmount: number;
  approvedAmount: number;
  policyLimit: number;
  rawDescription: string;
  rawDescriptionEn: string;
  attachments: string[];
  policyExcerpt: string;
  policyExcerptEn: string;
  aiSummary: string;
  aiSummaryEn: string;
  aiRecommendation: 'approve' | 'reject' | 'flag';
  aiConfidence: number;
  aiReasoning: string;
  aiReasoningEn: string;
}

export const claims: Claim[] = [
  {
    id: 'CLM-2024-4421',
    policyNumber: 'POL-HH-887234',
    claimant: 'Mäkinen, Timo',
    type: 'Kotivakuutus — Vesivahinko',
    typeEn: 'Home Insurance — Water Damage',
    incidentDate: '2024-01-08',
    claimedAmount: 8400,
    approvedAmount: 7200,
    policyLimit: 15000,
    rawDescription: `Vakuutettu ilmoittaa, että 8.1.2024 kello 02.30 astianpesukoneen poistoletku irtosi liitoksestaan ja aiheutti laajan vesivahingon keittiöön ja viereiseen eteiseen. Vettä oli levinnyt arviolta 15 neliömetrille. Vahinkoa on syntynyt: laminaattilattia (45 m²), keittiön kaapistot alapohja, eteisen kaappi sekä seinärakenteet. Vakuutettu kertoo havainneensa vahingon aamulla herättyään ja sulkeneensa pääsulun heti. Hän on tilannut kosteuskartoituksen (liite 3) ja pyytänyt korjaustarjouksen kahdelta urakoitsijalta (liitteet 4 ja 5). Edullisempi tarjous on 8 400 euroa. Aiempia vesivahinkoja ei ole ollut.`,
    rawDescriptionEn: `The insured reports that on 8.1.2024 at 02:30, the dishwasher drain hose detached from its connection, causing extensive water damage to the kitchen and adjacent hallway. Water had spread to approximately 15 square meters. Damage includes: laminate flooring (45 m²), kitchen cabinet bases, hallway cabinet, and wall structures. The insured discovered the damage upon waking and immediately shut off the main water valve. A moisture survey has been ordered (attachment 3) and repair quotes from two contractors have been requested (attachments 4 and 5). The lower quote is €8,400. No previous water damage claims.`,
    attachments: ['Kuitti_astianpesukone.pdf', 'Valokuvat_vahinko.zip', 'Kosteuskartoitus.pdf', 'Tarjous_Remonttipalvelu_Oy.pdf', 'Tarjous_Kodin_Korjaus.pdf'],
    policyExcerpt: `§12 VESIVAHINGOT: Vakuutus korvaa äkillisestä ja ennalta arvaamattomasta vuodosta aiheutuneet vahingot. Korvauksen edellytyksenä on, että vahinko on tapahtunut vakuutuskohteessa olevasta putkistosta tai kodinkoneesta. Omavastuuosuus: 500 €. Vakuutusmäärä: 15 000 €. Korvattavuuden ulkopuolelle jäävät: hitaasta vuodosta aiheutuneet vahingot, routavahingot.`,
    policyExcerptEn: `§12 WATER DAMAGE: The insurance covers damages caused by sudden and unforeseen leaks. Coverage requires that damage occurred from pipes or appliances within the insured premises. Deductible: €500. Coverage limit: €15,000. Excluded: damages from slow leaks, frost damage.`,
    aiSummary: 'Äkillinen vesivahinko astianpesukoneesta. Kosteuskartoitus tehty. Kaksi kilpailevaa tarjousta saatu. Edullisempi tarjous 8 400 €. Omavastuu 500 €. Ei aiempia vahinkoja.',
    aiSummaryEn: 'Sudden water damage from dishwasher drain hose failure. Moisture survey completed. Two competitive repair quotes obtained. Lower quote €8,400. Deductible €500. No prior claims.',
    aiRecommendation: 'approve',
    aiConfidence: 94,
    aiReasoning: 'Äkillinen vahinko täyttää §12 ehdot. Kosteuskartoitus vahvistaa laajuuden. Korvaussuositus: 8 400 € − 500 € omavastuu = 7 200 €.',
    aiReasoningEn: 'Sudden damage meets §12 criteria. Moisture survey confirms extent. Recommended payout: €8,400 − €500 deductible = €7,200.',
  },
  {
    id: 'CLM-2024-4422',
    policyNumber: 'POL-AU-221099',
    claimant: 'Virtanen, Sari',
    type: 'Autovakuutus — Kolari',
    typeEn: 'Auto Insurance — Collision',
    incidentDate: '2024-01-11',
    claimedAmount: 3800,
    approvedAmount: 3800,
    policyLimit: 10000,
    rawDescription: `Vakuutettu ilmoittaa 11.1.2024 tapahtuneesta kolarista. Hän ajoi pysäköintialueella ja toinen ajoneuvo peruutti hänen autoaan vasten. Vastapuoli on myöntänyt syyllisyytensä ja heidän vakuutusyhtiönsä on vahvistanut korvausvelvollisuuden. Kuitenkin vakuutettu pyytää korvausta omasta vakuutuksestaan prosessin nopeuttamiseksi. Auto on VW Golf 2019, rekisterinumero ABC-123. Vahingot: keula oikea, etupuskuri, etuvalo. Korjaustarjous autovahinkokeskuksesta: 3 800 €. Ajokelpoinen.`,
    rawDescriptionEn: `The insured reports a collision on 11.1.2024. She was driving in a parking area when another vehicle reversed into her car. The other party admitted fault and their insurer confirmed liability. However, the insured requests payment from her own insurance to speed up the process. Car is VW Golf 2019, plate ABC-123. Damage: front right, bumper, headlight. Repair quote from authorized center: €3,800. Vehicle is drivable.`,
    attachments: ['Poliisilausunto.pdf', 'Valokuvat_auto.zip', 'Korjaustarjous_Autokeskus.pdf', 'Vastapuolen_vakuutustodistus.pdf'],
    policyExcerpt: `§8 TÖRMÄYSVAHINKO: Kattaa ajoneuvon vahingot törmäystilanteessa riippumatta syyllisyydestä. Omavastuuosuus: 0 € (toisen osapuolen myöntäessä syyllisyyden). Takautumisoikeus vastapuolen vakuutukseen.`,
    policyExcerptEn: `§8 COLLISION DAMAGE: Covers vehicle damage in collision regardless of fault. Deductible: €0 (when other party admits fault). Subrogation rights apply to other party's insurer.`,
    aiSummary: 'Pysäköintialuekolari. Vastapuoli myöntänyt syyllisyyden. Nopeutettu käsittely omasta vakuutuksesta, takautumisoikeus käynnistettävä. Korjaustarjous 3 800 €. Omavastuu 0 €.',
    aiSummaryEn: 'Parking lot collision. Other party admitted fault. Expedited own-insurance claim, subrogation to be initiated. Repair quote €3,800. Zero deductible applies.',
    aiRecommendation: 'approve',
    aiConfidence: 97,
    aiReasoning: '§8 ehdot täyttyvät. Omavastuu 0 € koska syyllisyys myönnetty. Käynnistä takautumismenettely vastapuolen vakuuttajaa vastaan. Korvaus: 3 800 €.',
    aiReasoningEn: '§8 conditions met. Zero deductible as fault admitted. Initiate subrogation against other party\'s insurer. Payout: €3,800.',
  },
  {
    id: 'CLM-2024-4423',
    policyNumber: 'POL-HH-334521',
    claimant: 'Korhonen, Petri',
    type: 'Kotivakuutus — Murto',
    typeEn: 'Home Insurance — Burglary',
    incidentDate: '2024-01-09',
    claimedAmount: 12600,
    approvedAmount: 0,
    policyLimit: 10000,
    rawDescription: `Vakuutettu ilmoittaa 9.1.2024 tapahtuneesta murrosta. Hän kertoo olleensa ulkomailla 5.-12.1.2024 ja palanneensa kotiin löytäen asunnon murretuksi. Viedyksi väitetään: MacBook Pro (2022), Sony-televisio 65", PS5-konsoli, kultakoruja arvoltaan 4 200 €, käteistä 800 €, Rolex-kello (hankintahinta 8 200 €). Yhteensä vaadittu korvaus: 12 600 €. Poliisille tehty rikosilmoitus liitteenä.`,
    rawDescriptionEn: `The insured reports a burglary on 9.1.2024. He states he was abroad from 5.-12.1.2024 and returned home to find the apartment had been broken into. Items allegedly stolen: MacBook Pro (2022), Sony TV 65", PS5 console, gold jewelry valued at €4,200, cash €800, Rolex watch (purchase price €8,200). Total claimed: €12,600. Police report attached.`,
    attachments: ['Rikosilmoitus.pdf', 'Valokuvat_asunto.zip', 'Lentolippu_ulkomaat.pdf'],
    policyExcerpt: `§15 VARKAUS JA MURTO: Käteisen enimmäiskorvaus: 300 €. Arvoesineet (kellot, korut) yhteensä enintään 2 000 € ilman erillistä arvoesinelisäturvaa. Omavastuu: 300 €. Korvauksen edellytyksenä: poliisille tehty rikosilmoitus 24h sisällä havaitsemisesta.`,
    policyExcerptEn: `§15 THEFT AND BURGLARY: Cash maximum: €300. Valuables (watches, jewelry) combined maximum €2,000 without separate valuables rider. Deductible: €300. Requirement: police report within 24h of discovery.`,
    aiSummary: 'Murtoilmoitus. HUOMIO: Vaaditaan erityistarkastus. Käteinen ylittää §15 rajan (800 € vs. 300 € max). Arvoesineet (kello + korut = 12 400 €) ylittävät 2 000 € rajan ilman lisäturvaa. Korvauskelpoinen osuus laskettava.',
    aiSummaryEn: 'Burglary claim. ATTENTION: Special review required. Cash exceeds §15 limit (€800 vs. €300 max). Valuables (watch + jewelry = €12,400) exceed €2,000 limit without valuables rider. Eligible portion must be calculated.',
    aiRecommendation: 'flag',
    aiConfidence: 88,
    aiReasoning: 'Merkittävät rajoitukset sovellettava: käteinen max 300 €, arvoesineet max 2 000 €. Korvattava osuus: elektroniikka + max rajoitetuille erille. Pyydä alkuperäiskuitit arvoesineistä.',
    aiReasoningEn: 'Significant policy limits apply: cash max €300, valuables max €2,000. Eligible: electronics + capped amounts. Request original receipts for valuables.',
  },
  {
    id: 'CLM-2024-4424',
    policyNumber: 'POL-TR-556712',
    claimant: 'Leinonen, Kaisa',
    type: 'Matkavakuutus — Peruutus',
    typeEn: 'Travel Insurance — Cancellation',
    incidentDate: '2024-01-05',
    claimedAmount: 2200,
    approvedAmount: 2200,
    policyLimit: 5000,
    rawDescription: `Vakuutettu joutui peruuttamaan matkan Thaimaahan (5.-19.1.2024, hinta 2 200 €) lääketieteellisistä syistä. Hänelle diagnosoitiin 3.1.2024 akuutti keuhkokuume, joka esti matkustamisen. Lääkärintodistus liitteenä. Vakuutusyhtiö pyytää myös tietoa siitä, onko vakuutettu hakenut korvausta lentoyhtiöltä tai matkanjärjestäjältä.`,
    rawDescriptionEn: `The insured had to cancel a trip to Thailand (5.-19.1.2024, cost €2,200) for medical reasons. She was diagnosed with acute pneumonia on 3.1.2024, preventing travel. Medical certificate attached. Insurer requests information on whether compensation has been sought from the airline or tour operator.`,
    attachments: ['Lääkärintodistus.pdf', 'Matkavaraus_Thailand.pdf', 'Peruutusvahvistus.pdf'],
    policyExcerpt: `§6 MATKAN PERUUTUS: Korvattavia peruutussyitä: äkillinen sairaus, tapaturma, lähiomaisen vakava sairaus. Edellytys: lääkärintodistus. Kaksoiskorvaus kielletty — muilta tahoilta saadut korvaukset vähennetään. Omavastuu: 0 €.`,
    policyExcerptEn: `§6 TRIP CANCELLATION: Eligible reasons: sudden illness, accident, serious illness of close family. Requirement: medical certificate. Double compensation prohibited — payments from other sources will be deducted. Deductible: €0.`,
    aiSummary: 'Lääketieteellinen matkan peruutus (keuhkokuume). Lääkärintodistus toimitettu. Tarkistettava: onko matkanjärjestäjä tai lentoyhtiö hyvittänyt osan. Omavastuu 0 €.',
    aiSummaryEn: 'Medical trip cancellation (pneumonia). Medical certificate provided. Verify: has tour operator or airline provided any refund. Deductible €0.',
    aiRecommendation: 'approve',
    aiConfidence: 91,
    aiReasoning: 'Keuhkokuume on hyväksyttävä §6 peruutussyy. Lääkärintodistus vahvistaa diagnoosin. Pyydä selvitys muiden tahojen maksuista ennen lopullista korvausta.',
    aiReasoningEn: 'Pneumonia is valid §6 cancellation reason. Medical certificate confirms diagnosis. Request statement on other refunds before final payout.',
  },
  {
    id: 'CLM-2024-4425',
    policyNumber: 'POL-HH-119876',
    claimant: 'Heikkinen, Juha',
    type: 'Kotivakuutus — Tulipalo',
    typeEn: 'Home Insurance — Fire',
    incidentDate: '2024-01-07',
    claimedAmount: 31000,
    approvedAmount: 28500,
    policyLimit: 50000,
    rawDescription: `Vakuutettu ilmoittaa 7.1.2024 aamuyöllä syttyneestä tulipalosta. Palo sai alkunsa saunasta ja levisi olohuoneeseen. Pelastuslaitos sammutuksen liitteenä. Vauriot: sauna täysin tuhoutunut, olohuone savuvaurio ja osittainen rakennusvaurio. Vakuutettu ja perhe eivät olleet kotona. Korjausarvio: 31 000 €. Palotutkinta käynnissä, alustava raportti liitteenä.`,
    rawDescriptionEn: `The insured reports a fire that broke out in the early hours of 7.1.2024. The fire started in the sauna and spread to the living room. Fire department suppression report attached. Damage: sauna completely destroyed, living room smoke damage and partial structural damage. The insured and family were not home. Repair estimate: €31,000. Fire investigation ongoing, preliminary report attached.`,
    attachments: ['Pelastuslaitoksen_raportti.pdf', 'Palotutkinta_alustava.pdf', 'Valokuvat_palo.zip', 'Korjausarvio.pdf', 'Asumiskulut_tilapäinen.pdf'],
    policyExcerpt: `§10 TULIPALO: Kattaa tulipalosta aiheutuneet vahingot rakennukselle ja irtaimistolle. Tilapäiset asumiskulut korvataan enintään 3 kuukautta. Omavastuu: 500 €. Palotutkintaraportti vaadittava vahingon syyn selvittämiseksi.`,
    policyExcerptEn: `§10 FIRE: Covers fire damage to building and contents. Temporary housing covered up to 3 months. Deductible: €500. Fire investigation report required to determine cause.`,
    aiSummary: 'Saunapalo, levisi olohuoneeseen. Pelastuslaitoksen raportti ja alustava palotutkinta toimitettu. Lopullinen tutkinta kesken. Tilapäiset asumiskulut korvattavissa. Omavastuu 500 €.',
    aiSummaryEn: 'Sauna fire, spread to living room. Fire department and preliminary investigation reports provided. Final investigation pending. Temporary housing costs eligible. Deductible €500.',
    aiRecommendation: 'approve',
    aiConfidence: 85,
    aiReasoning: '§10 ehdot täyttyvät. Alustava raportti ei viittaa tahalliseen sytyttämiseen. Hyväksy korjauskorvaus 31 000 € − 500 € = 30 500 €. Seuraa lopullista tutkintaa. Tilapäiset asumiskulut käsitellään erikseen.',
    aiReasoningEn: '§10 conditions met. Preliminary report shows no indication of arson. Approve repair: €31,000 − €500 = €30,500. Monitor final investigation. Temporary housing processed separately.',
  },
];
