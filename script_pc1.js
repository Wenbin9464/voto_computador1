// ======== Configurações ========
const adminPassword = "sistemavoto"; 
const chapas = ["NOVA UNIÃO","CHAPA MÁXIMA","VOZ ATIVA","FÚRIA EM PISTA","Nulo"];
let votos = JSON.parse(localStorage.getItem("votos_pc1")) || {
  "NOVA UNIÃO":0,"CHAPA MÁXIMA":0,"VOZ ATIVA":0,"FÚRIA EM PISTA":0,"Nulo":0
};
let usedPasswords = JSON.parse(localStorage.getItem("usedPasswords_pc1")) || {};

// ======== Senhas Pré-definidas (500 senhas exemplo) ========
const passwords_pc1 = [
  "FVQ887EI",
  "FVU592KS",
  "RUN236OR",
  "EAJ807GN",
  "NWL485TY",
  "ECW948LD",
  "VXC449WY",
  "QSF939YY",
  "OVA722ZN",
  "QZO836HN",
  "MDT415NK",
  "ELC172JH",
  "HZF448JN",
  "GQC502RE",
  "PUG638ZX",
  "RQX253ZG",
  "UUM528ZX",
  "RJR773WD",
  "SYV383DK",
  "IBN575KZ",
  "NWJ205HH",
  "NVK101HQ",
  "ACI888GV",
  "DOA640BE",
  "AYD078KT",
  "EDG062LP",
  "RTS956VF",
  "HUV768CZ",
  "KTF790QC",
  "XJW274OR",
  "VDV607ZL",
  "MAK486VL",
  "TVY083WA",
  "BRU266EA",
  "PPI144FT",
  "VCN321CB",
  "QEM361YA",
  "RIG497RC",
  "CCS808XF",
  "EOB195TM",
  "YWN431NO",
  "CIC168KY",
  "LYJ575ZI",
  "NMT499PR",
  "UZK217RK",
  "UVQ964CI",
  "PGT989LY",
  "ZTN194ND",
  "JYD722LB",
  "FQL897EQ",
  "ZJY893MB",
  "NJC778PI",
  "ZES106TH",
  "TUU412DY",
  "IHR461HW",
  "RHB061YX",
  "RTR035JY",
  "PYP872TR",
  "OHE690LX",
  "GRR456HH",
  "WTN614XS",
  "EPF045ND",
  "ZIV921IP",
  "XZN872XG",
  "GSK024DJ",
  "BYM487JH",
  "UWL846AM",
  "SSE783KJ",
  "BHR395NA",
  "WFV301ZA",
  "JBC147OA",
  "VWC733ST",
  "XWU848QZ",
  "XOZ543MN",
  "QIW416EI",
  "PZO479NK",
  "RYS491AF",
  "DZP463XW",
  "IXJ240TZ",
  "WBY844WO",
  "SMZ469HM",
  "GCR367WZ",
  "NXH629EP",
  "ERM767WH",
  "PNP008ZW",
  "OXV180RB",
  "RHW846QK",
  "GXV630DC",
  "KWJ844FQ",
  "VVH405YQ",
  "UNT430IW",
  "LBM664CZ",
  "DGL816NE",
  "NAT210HV",
  "RRZ469XN",
  "UHS823JT",
  "HVW092QY",
  "GAV883MI",
  "ICE457TI",
  "OCC710OB",
  "QKJ195ZQ",
  "XGM176FE",
  "EEX301VY",
  "AGW899MS",
  "VXE213JZ",
  "EOQ949CY",
  "JEX553AE",
  "SBJ766XA",
  "KWV280NX",
  "XZZ959BS",
  "PMX017KN",
  "DCQ941QO",
  "ORS215GI",
  "AOL542LZ",
  "BOW956YM",
  "LJD988IO",
  "VIS973YH",
  "VUI579KJ",
  "GTX938VO",
  "DYW222QX",
  "IZH752KG",
  "GKI337PG",
  "HEY396KW",
  "FJH234UT",
  "GHL304UP",
  "ZIG100GM",
  "XSP086XL",
  "QOT371MT",
  "SPT486FC",
  "JBB200GD",
  "DSP409QS",
  "QVM400PK",
  "EKC664LC",
  "WHI621CV",
  "QGI425GP",
  "EAA873VL",
  "DAN548AC",
  "MPB513QT",
  "YLM567BS",
  "KUX936QV",
  "OBC874AM",
  "DEL931GM",
  "PTT439XY",
  "BUW028EM",
  "CYU562FZ",
  "PYG244YB",
  "BVS323QC",
  "IUY930LE",
  "GWU186KZ",
  "BEE770ID",
  "LRB424GI",
  "ALV212RQ",
  "YVQ825EO",
  "KSO334MS",
  "CEP020FH",
  "MVV548NL",
  "HKD987LH",
  "SQG323FR",
  "ZTA649JP",
  "ADY745EB",
  "OYM003DK",
  "NIP862JF",
  "JDF512OA",
  "MLS417FD",
  "AKQ220XY",
  "JYB519PF",
  "QKU020MN",
  "QVS996CA",
  "NRM187AO",
  "EUZ647YU",
  "VRT072VD",
  "BER874UD",
  "VPS278WO",
  "OBF937CY",
  "RXJ197VW",
  "SXQ366AO",
  "LWH331QL",
  "RUI045FO",
  "MFR268TT",
  "GPX002DW",
  "CFW414VO",
  "YGX644UK",
  "ZZI066OT",
  "GSI326IG",
  "ZMT796BL",
  "WYD413JB",
  "YRU629NW",
  "ECQ585XA",
  "CTM313UJ",
  "KJZ833BS",
  "FLP261IF",
  "GOQ639DX",
  "SPZ050AJ",
  "BAE012YF",
  "DYN351LK",
  "FEB821JK",
  "TFG601SU",
  "JLW529MF",
  "BQB982MT",
  "IUY002VU",
  "GZV958SY",
  "NHQ286KX",
  "MJY965AM",
  "KVI524DB",
  "RWA262SL",
  "DQG299XA",
  "QPB619QF",
  "RHU052RQ",
  "KLL571OB",
  "WTP181NU",
  "FDP865FY",
  "QRC371ZY",
  "OLP590MM",
  "MZW117TS",
  "ONZ682OH",
  "LFO959XP",
  "FRS616SU",
  "FBO267FP",
  "KLZ949KS",
  "VLD356YF",
  "KQF999ZC",
  "SBU390KK",
  "GBP123OU",
  "BTJ990ZQ",
  "VQH023VJ",
  "VGY808YV",
  "GLH220RQ",
  "LKR749GR",
  "DOT497YW",
  "NPQ757DM",
  "IPT802OB",
  "HLL638EG",
  "YLM710OK",
  "AFF277GO",
  "UJN410XL",
  "HGP728EN",
  "VNC956UE",
  "CRZ329UL",
  "GMS002VY",
  "MRV374BW",
  "RUX396HX",
  "DPT667KO",
  "XOD642GL",
  "JTH955CT",
  "MWY288LZ",
  "TPY450TF",
  "KWE259UL",
  "FBF151HY",
  "EFX379ZF",
  "QWR734HY",
  "JPR815TS",
  "RDB595ZW",
  "UIF082VW",
  "THW190QH",
  "HGU229BO",
  "UHF972QQ",
  "FQA275YP",
  "MOY582AE",
  "PXP334VI",
  "MNP322HQ",
  "KDM109WJ",
  "LUO265HD",
  "ZDM550FF",
  "UQK633GE",
  "WVR627EZ",
  "GEE589DB",
  "KUA927HM",
  "ZAI032HU",
  "WDJ355JD",
  "WTZ289SD",
  "RKT067CL",
  "TRL576XB",
  "QWU459UD",
  "BDZ014HM",
  "SXK624XE",
  "UEQ144LJ",
  "MMR374WJ",
  "JGF894LA",
  "URT970KP",
  "WOM214QV",
  "MVP590HF",
  "MVC518AX",
  "PBS967EU",
  "XOX779CZ",
  "NUP851CU",
  "RQF215FJ",
  "MIS650GU",
  "NLJ203KC",
  "GKL311LC",
  "NDO262BB",
  "AEE401CC",
  "OQR232XX",
  "NPT116SC",
  "KPO090OY",
  "LLO649ZT",
  "ETG007RI",
  "QBM828AD",
  "YDI167PU",
  "NDP844YR",
  "HSE397KC",
  "ZHR331HL",
  "VNI074VF",
  "UPT323MY",
  "QHE967MM",
  "FNO837FW",
  "CRS793WM",
  "UIS751LY",
  "CRV661SQ",
  "QPO185XP",
  "MQK655IX",
  "WRU010UV",
  "UYT972GY",
  "ZCC990WV",
  "TVT478AZ",
  "WWG615PN",
  "RRA963KJ",
  "JWI092EZ",
  "QGO460XG",
  "OGM383EN",
  "KHD461MI",
  "ETA766ZF",
  "ICQ960KA",
  "PNE686VY",
  "RDQ844EU",
  "TGC127PR",
  "IIK837TU",
  "SER568TN",
  "RXF925PE",
  "WXH621UV",
  "PKO819VQ",
  "AYL881PB",
  "MIE938RA",
  "NYR338TD",
  "MWD367JB",
  "DFS289NQ",
  "FNA277SF",
  "AAZ890RJ",
  "CAR990GR",
  "OJV212CR",
  "ISE522NH",
  "YCN490UH",
  "VAH304XI",
  "OMS751RY",
  "RAB199HV",
  "SUK182OZ",
  "OKS935VS",
  "NAD024KZ",
  "UME147AR",
  "PXH891YA",
  "MYW860NS",
  "YKD914AF",
  "FDH964HV",
  "FQS758MT",
  "VET664FT",
  "TPD577FL",
  "TDS908VT",
  "KYE117FC",
  "DAO931CB",
  "FZQ907VT",
  "HGI491HQ",
  "ZBU634FL",
  "KWX694DL",
  "PXS929GW",
  "VNU070EE",
  "YNS970VB",
  "RVI573NG",
  "NTO552QN",
  "GKB919IX",
  "YCP969TQ",
  "FYS612WL",
  "FUY160LB",
  "CYD034NA",
  "CGC061YI",
  "BJS794SX",
  "EQG092OH",
  "DBY817RE",
  "FRI010XT",
  "XDY898MP",
  "GID574CR",
  "BAG625DG",
  "IMK401OY",
  "SKO605NQ",
  "GIX908IT",
  "BTQ456TM",
  "PET857FK",
  "CJS420HJ",
  "LJR947SK",
  "SXT124UC",
  "THF070JJ",
  "XQS997BB",
  "QXS568UH",
  "GQT061YY",
  "GLJ133GX",
  "YFC912GA",
  "TGO007RV",
  "XUY695YB",
  "HOO842PF",
  "WMJ093WJ",
  "RIC143TA",
  "ENG203KE",
  "OGZ897BK",
  "PYY218LJ",
  "VEF631AG",
  "BBY977FB",
  "UWG363SW",
  "QIG515LU",
  "YVK518LC",
  "CMK357LV",
  "UAD520VB",
  "MJU182TB",
  "XKZ646UD",
  "COY476QS",
  "MYB469LZ",
  "HLY140AE",
  "COZ125HG",
  "ZLT119MF",
  "AYC759TT",
  "UGC324ES",
  "HAS268XJ",
  "APZ879GE",
  "GFH052AG",
  "AFX634DA",
  "SQZ109HC",
  "CQN783PO",
  "SSP746AC",
  "NDD605UA",
  "JGB637NF",
  "YGL032FR",
  "VAN377GB",
  "RGJ451HT",
  "HOI785GT",
  "ZYD790UB",
  "JMI101UH",
  "TYA852NS",
  "JLP467ZB",
  "DFB399GX",
  "YWR720AU",
  "SBM832EA",
  "WJH144NN",
  "VZI302RZ",
  "YYA710RA",
  "LGA326IQ",
  "EBJ684CB",
  "VBX960NO",
  "XCE739KU",
  "DOI888RA",
  "TRC987QU",
  "ZYB754YI",
  "FLZ330RY",
  "SYM856ZL",
  "DIP388KU",
  "FRU175TD",
  "SSQ955ZN",
  "DPK082MG",
  "SHC321JW",
  "ZGF146KY",
  "OGS855CG",
  "ZXA811VY",
  "QUS625LO",
  "TCT057MO",
  "OLU989XT",
  "RXT372JG",
  "VZJ448ZA",
  "VCJ618NP",
  "PXP851GV",
  "GBZ435XM",
  "EOS146HK",
  "FXE376ZK",
  "JPH828YR",
  "IKW711YI",
  "WHO198JY",
  "SAW547BM",
  "MAL972LW",
  "ORE490WA",
  "KSE649SR",
  "ITA152MH",
  "DRI777KC",
  "OBV954UP",
  "MBR746GW",
  "LDG481AK",
  "XTA759WQ",
  "CLG743KT",
  "AJS685LU",
  "BMW825GF",
  "WAK205KR",
  "LAV127WF",
  "VTB327WK",
  "MDG554CP",
  "XCP301QC",
  "XNT485SY",
  "PYR860IV",
  "WVW527UF",
  "RGT405BM",
  "DWE911ME",
  "QPL527ZX",
  "OLO974ZW",
  "SEW841NI",
  "LNV605WR",
  "EJA066RM",
  "YVE805TU"
  ];

// Salvar senhas no localStorage caso não exista
if(!localStorage.getItem("passwords_pc1")) {
  localStorage.setItem("passwords_pc1", JSON.stringify(passwords_pc1));
  localStorage.removeItem("usedPasswords_pc1");
}

// ======== Login ========
function login() {
  const username=document.getElementById("username").value.trim();
  const password=document.getElementById("password").value.trim();
  const error=document.getElementById("login-error");

  if(username.toUpperCase()==="COMPUTADOR 1" && password===adminPassword){
    document.getElementById("login-container").style.display="none";
    document.getElementById("resultado-container").style.display="block";
    renderChart();
    renderPasswords();
    return;
  }

  if(passwords_pc1.includes(password) && !usedPasswords[password]){
    usedPasswords[password]=true;
    localStorage.setItem("usedPasswords_pc1",JSON.stringify(usedPasswords));
    document.getElementById("login-container").style.display="none";
    document.getElementById("voto-container").style.display="block";
    error.textContent="";
  } else error.textContent="Usuário ou senha inválidos, ou senha já usada.";
}

// ======== Votação ========
function confirmVote(chapa){
  if(confirm(`Você tem certeza que deseja votar nesta chapa: ${chapa}?`)){
    votos[chapa]++;
    localStorage.setItem("votos_pc1",JSON.stringify(votos));
    alert("Obrigado por votar!");
    setTimeout(()=>{
      document.getElementById("voto-container").style.display="none";
      document.getElementById("login-container").style.display="block";
      document.getElementById("username").value="COMPUTADOR 1";
      document.getElementById("password").value="";
      document.getElementById("voto-msg").textContent="";
      document.getElementById("login-error").textContent="";
    },500);
  }
}

// ======== Resultados ========
let chart;
function renderChart(){
  const ctx=document.getElementById('chart').getContext('2d');
  chart=new Chart(ctx,{
    type:'bar',
    data:{
      labels:chapas,
      datasets:[{
        label:'Votos',
        data:chapas.map(ch=>votos[ch]),
        backgroundColor:['#0d6efd','#198754','#ffc107','#6f42c1','#d32f2f']
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{display:false}},
      animation:false,
      scales:{y:{beginAtZero:true,precision:0}}
    }
  });
  updateTable();
}

function updateTable(){
  const tbody=document.getElementById("tabela-resultados");
  tbody.innerHTML="";
  chapas.forEach(ch=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td style="color:${getChapaColor(ch)}">${ch}</td><td>${votos[ch]}</td>`;
    tbody.appendChild(tr);
  });
}

function getChapaColor(chapa){
  switch(chapa){
    case "NOVA UNIÃO": return "#0d6efd";
    case "CHAPA MÁXIMA": return "#198754";
    case "VOZ ATIVA": return "#ffc107";
    case "FÚRIA EM PISTA": return "#6f42c1";
    case "Nulo": return "#d32f2f";
    default: return "#000";
  }
}

// Atualizar gráfico em tempo real
setInterval(()=>{
  votos=JSON.parse(localStorage.getItem("votos_pc1")) || {
    "NOVA UNIÃO":0,"CHAPA MÁXIMA":0,"VOZ ATIVA":0,"FÚRIA EM PISTA":0,"Nulo":0
  };
  if(chart){
    chart.data.datasets[0].data=chapas.map(ch=>votos[ch]);
    chart.update();
    updateTable();
  }
},1000);

// ======== Limpar votos com confirmação ========
function limparVotos(){
  if(confirm("Tem certeza que deseja limpar todos os votos deste computador?")){
    votos={"NOVA UNIÃO":0,"CHAPA MÁXIMA":0,"VOZ ATIVA":0,"FÚRIA EM PISTA":0,"Nulo":0};
    localStorage.setItem("votos_pc1",JSON.stringify(votos));
    if(chart){
      chart.data.datasets[0].data=chapas.map(ch=>votos[ch]);
      chart.update();
      updateTable();
    }
  }
}

// ======== Limpar senhas usadas ========
function limparSenhasUsadas(){
  if(confirm("Tem certeza que deseja resetar todas as senhas usadas?")){
    localStorage.removeItem("usedPasswords_pc1");
    usedPasswords={};
    alert("Senhas usadas foram limpas.");
    renderPasswords();
  }
}

// ======== Senhas ========
function toggleSenhas(){
  const section=document.getElementById("senhas-section");
  section.style.display=section.style.display==="none"?"block":"none";
}

function renderPasswords(){
  const div=document.getElementById("senhas-div");
  div.innerHTML="<h3>Senhas de Votação (Computador 1)</h3>";

  let table=document.createElement("table");
  table.style.width="100%";
  table.style.borderCollapse="collapse";
  table.style.textAlign="center";

  let thead=document.createElement("thead");
  thead.innerHTML="<tr><th>Senha</th><th>Usada?</th></tr>";
  table.appendChild(thead);

  let tbody=document.createElement("tbody");
  passwords_pc1.forEach(p=>{
    let tr=document.createElement("tr");
    tr.innerHTML=`<td>${p}</td><td>${usedPasswords[p]?"Sim":"Não"}</td>`;
    tr.style.border="1px solid #ccc";
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  div.appendChild(table);
}
