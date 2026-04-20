(function () {
  var STORAGE_KEY = "richland-site-language";
  var DEFAULT_LANG = "en";
  var body = document.body;

  if (!body) return;

  function normalizeLang(value) {
    return value === "zh" ? "zh" : "en";
  }

  function getStoredLang() {
    try {
      return normalizeLang(window.localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG);
    } catch (error) {
      return DEFAULT_LANG;
    }
  }

  function setStoredLang(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, normalizeLang(value));
    } catch (error) {
      return;
    }
  }

  var currentLang = getStoredLang();

  var UI_TEXT = {
    askForQuote: { en: "Ask for Quote", zh: "获取报价" },
    backToTop: { en: "Back to top", zh: "返回顶部" },
    viewMore: {
      en: function (count) {
        return "View more (" + count + ")";
      },
      zh: function (count) {
        return "查看更多（" + count + "）";
      }
    },
    prevColor: { en: "Show previous color", zh: "查看上一个颜色" },
    nextColor: { en: "Show next color", zh: "查看下一个颜色" },
    sending: { en: "Sending...", zh: "发送中..." },
    inquiryConfigError: {
      en: "Inquiry form is not configured yet. Please contact us by email.",
      zh: "询盘表单暂未完成配置，请直接通过邮箱联系我们。"
    },
    inquirySubmitError: {
      en: "Your inquiry could not be sent right now. Please try again or contact us by email.",
      zh: "当前无法发送询盘，请稍后重试，或直接通过邮箱联系我们。"
    },
    locationFallback: {
      en: "Use the direct Google Maps link if the map preview is unavailable.",
      zh: "如果地图预览不可用，请使用 Google Maps 直接打开地址。"
    },
    openInGoogleMaps: {
      en: "Open in Google Maps",
      zh: "在 Google 地图中打开"
    },
    headquarters: { en: "Headquarters", zh: "总部" },
    factory: { en: "Factory", zh: "工厂" },
    heater: { en: "heater", zh: "电暖器" },
    airConditioner: { en: "air conditioner", zh: "空调扇" }
  };

  var CATEGORY_TEXT = {
    "Pedestal Fans": { en: "Pedestal Fans", zh: "落地扇" },
    "Table Fans": { en: "Table Fans", zh: "台扇" },
    "Wall Fans": { en: "Wall Fans", zh: "壁扇" },
    "Air Circulators": { en: "Air Circulators", zh: "循环扇" },
    "Ceiling Fans": { en: "Ceiling Fans", zh: "吊扇" },
    "Electric Heaters": { en: "Electric Heaters", zh: "电暖器" },
    "Air Conditioners": { en: "Air Conditioners", zh: "空调扇" },
    "Induction Cookers": { en: "Induction Cookers", zh: "电磁炉" },
    "Electric Pressure Cookers": { en: "Electric Pressure Cookers", zh: "电压力锅" },
    "Cookers": { en: "Cookers", zh: "炊具" },
    "Heating/cooling": { en: "Heating/cooling", zh: "冷暖产品" }
  };

  var COLOR_TEXT = {
    black: { en: "Black", zh: "黑色" },
    "black pearl": { en: "Black Pearl", zh: "黑珍珠色" },
    "black gold": { en: "Black Gold", zh: "黑金色" },
    blue: { en: "Blue", zh: "蓝色" },
    bronze: { en: "Bronze", zh: "古铜色" },
    "dark green": { en: "Dark Green", zh: "深绿色" },
    gold: { en: "Gold", zh: "金色" },
    green: { en: "Green", zh: "绿色" },
    grey: { en: "Grey", zh: "灰色" },
    "iron gray": { en: "Iron Gray", zh: "铁灰色" },
    orange: { en: "Orange", zh: "橙色" },
    "pearl white": { en: "Pearl White", zh: "珍珠白" },
    pink: { en: "Pink", zh: "粉色" },
    red: { en: "Red", zh: "红色" },
    "rose gold": { en: "Rose Gold", zh: "玫瑰金" },
    silver: { en: "Silver", zh: "银色" },
    vintage: { en: "Vintage", zh: "复古色" },
    white: { en: "White", zh: "白色" }
  };

  var FEATURE_TEXT = {
    "remote control": { en: "Remote Control", zh: "遥控" },
    voice_control: { en: "Voice Control", zh: "语音控制" },
    "voice control": { en: "Voice Control", zh: "语音控制" },
    wire_control: { en: "Wire Control", zh: "拉线控制" },
    "wire control": { en: "Wire Control", zh: "拉线控制" },
    "line control": { en: "Wire Control", zh: "拉线控制" },
    mechanical_control: { en: "Mechanical Control", zh: "机械控制" },
    "mechanical control": { en: "Mechanical Control", zh: "机械控制" },
    five_blades: { en: "Five Blades", zh: "五叶扇叶" },
    "five blades": { en: "Five Blades", zh: "五叶扇叶" },
    six_blades: { en: "Six Blades", zh: "六叶扇叶" },
    "six blades": { en: "Six Blades", zh: "六叶扇叶" },
    three_blades: { en: "Three Blades", zh: "三叶扇叶" },
    "three blades": { en: "Three Blades", zh: "三叶扇叶" },
    five_leaves: { en: "Five Leaves", zh: "五叶扇叶" },
    "five leaves": { en: "Five Leaves", zh: "五叶扇叶" },
    six_leaves: { en: "Six Leaves", zh: "六叶扇叶" },
    "six leaves": { en: "Six Leaves", zh: "六叶扇叶" },
    three_leaves: { en: "Three Leaves", zh: "三叶扇叶" },
    "three leaves": { en: "Three Leaves", zh: "三叶扇叶" },
    double_ball_bearing: { en: "Double Ball Bearing", zh: "双滚珠轴承" },
    "double ball bearing": { en: "Double Ball Bearing", zh: "双滚珠轴承" },
    angle_adjustable: { en: "Angle Adjustable", zh: "角度可调" },
    "angle adjustable": { en: "Angle Adjustable", zh: "角度可调" },
    patented_design: { en: "Patented Design", zh: "专利设计" },
    "patented design": { en: "Patented Design", zh: "专利设计" },
    negative_ion: { en: "Negative Ion", zh: "负离子" },
    "negative ion": { en: "Negative Ion", zh: "负离子" },
    timer_4_level: { en: "4-Level Timer", zh: "四档定时" },
    "4-level timer": { en: "4-Level Timer", zh: "四档定时" },
    "4 level timer": { en: "4-Level Timer", zh: "四档定时" },
    horn_fan: { en: "Horn Fan", zh: "牛角扇" },
    "horn fan": { en: "Horn Fan", zh: "牛角扇" },
    shaft: { en: "Shaft", zh: "转轴结构" },
    thicken_motor: { en: "Thickened Motor", zh: "加厚电机" },
    "thickened motor": { en: "Thickened Motor", zh: "加厚电机" },
    mosquito_control: { en: "Mosquito Control", zh: "灭蚊功能" },
    "mosquito control": { en: "Mosquito Control", zh: "灭蚊功能" },
    "double pull cord": { en: "Double Pull Cord", zh: "双拉绳" },
    "head shaking": { en: "Head Shaking", zh: "摇头功能" },
    "heating function": { en: "Heating Function", zh: "加热功能" },
    "turbine blades": { en: "Turbine Blades", zh: "涡轮扇叶" },
    "mobile control": { en: "Mobile Control", zh: "移动控制" },
    "touch panel": { en: "Touch Panel", zh: "触控面板" },
    "odor removal": { en: "Odor Removal", zh: "除异味" },
    "dust removal": { en: "Dust Removal", zh: "除尘" },
    "safety grill": { en: "Safety Grill", zh: "安全网罩" },
    "stepless angle adjustment": { en: "Stepless Angle Adjustment", zh: "无级调角" },
    heater: { en: "heater", zh: "电暖器" },
    "air conditioner": { en: "air conditioner", zh: "空调扇" },
    remote: { en: "Remote", zh: "遥控" }
  };

  var COMMON_TRANSLATIONS = [
    { selector: "title", text: { en: "RichLand Ltd. | Fan Manufacturing from Shunde, Foshan", zh: "RichLand Ltd. | 佛山顺德风扇制造商" }, property: "textContent" },
    { selector: ".brand-copy span", text: { en: "Shunde, Foshan Manufacturer", zh: "顺德·佛山 制造商" } },
    { selector: ".topnav a:nth-child(1)", text: { en: "Categories", zh: "产品品类" } },
    { selector: ".topnav a:nth-child(2)", text: { en: "Why RichLand", zh: "为什么选择 RichLand" } },
    { selector: ".topnav a:nth-child(3)", text: { en: "Featured Models", zh: "精选型号" } },
    { selector: ".topnav a:nth-child(4)", text: { en: "Products", zh: "产品中心" } },
    { selector: ".topnav a:nth-child(5)", text: { en: "Send Inquiry", zh: "发送询盘" } },
    { selector: ".footer-brand h3", text: { en: "RichLand Ltd.", zh: "RichLand Ltd." } },
    {
      selector: ".footer-brand > p",
      text: {
        en: "RichLand Electrical Appliance Technology Co., Ltd., also operating as Foshan HuaTian Electrical Appliance Co., Ltd., supports export-oriented fan programs from Foshan with established manufacturing capability, OEM / ODM cooperation, and practical coordination for long-term buyers.",
        zh: "RichLand Electrical Appliance Technology Co., Ltd.（亦以 Foshan HuaTian Electrical Appliance Co., Ltd. 运营）依托佛山制造基地，为海外买家提供以风扇为核心的出口型产品方案，支持 OEM / ODM 合作与长期稳定配合。"
      }
    },
    { selector: ".footer-meta-item:nth-child(1) strong", text: { en: "Base", zh: "基地" } },
    {
      selector: ".footer-meta-item:nth-child(1) span",
      text: {
        en: "Foshan, Guangdong fan manufacturing support with headquarters in Shunde and production expansion in Gaoming.",
        zh: "以广东佛山为制造基础，总部位于顺德，产能延伸覆盖高明。"
      }
    },
    { selector: ".footer-meta-item:nth-child(2) strong", text: { en: "Focus", zh: "重点" } },
    {
      selector: ".footer-meta-item:nth-child(2) span",
      text: {
        en: "Electric fans first, supported by household ventilation equipment and related motor and plastic component capability.",
        zh: "以电风扇为核心，同时覆盖家用通风设备及相关电机、塑胶配件能力。"
      }
    },
    { selector: ".footer-meta-item:nth-child(3) strong", text: { en: "Cooperation", zh: "合作" } },
    {
      selector: ".footer-meta-item:nth-child(3) span",
      text: {
        en: "Established in 1994 with export-oriented OEM / ODM support and integrated factory coordination.",
        zh: "公司成立于 1994 年，具备面向出口市场的 OEM / ODM 配合能力与一体化工厂协同。"
      }
    },
    { selector: ".footer-quicklinks-group:nth-child(1) h4", text: { en: "Explore", zh: "产品浏览" } },
    { selector: ".footer-quicklinks-group:nth-child(1) li:nth-child(1) a", text: { en: "Fan Categories", zh: "风扇品类" } },
    { selector: ".footer-quicklinks-group:nth-child(1) li:nth-child(2) a", text: { en: "Why RichLand", zh: "为什么选择 RichLand" } },
    { selector: ".footer-quicklinks-group:nth-child(1) li:nth-child(3) a", text: { en: "Featured Models", zh: "精选型号" } },
    { selector: ".footer-quicklinks-group:nth-child(1) li:nth-child(4) a", text: { en: "Products", zh: "产品中心" } },
    { selector: ".footer-quicklinks-group:nth-child(2) h4", text: { en: "Business Info", zh: "业务信息" } },
    { selector: ".footer-quicklinks-group:nth-child(2) li:nth-child(1) a", text: { en: "Inquiry Support", zh: "询盘支持" } },
    { selector: ".footer-quicklinks-group:nth-child(2) li:nth-child(2) a", text: { en: "OEM / ODM", zh: "OEM / ODM" } },
    { selector: ".footer-quicklinks-group:nth-child(2) li:nth-child(3) a", text: { en: "MOQ & Lead Time", zh: "MOQ 与交期" } },
    { selector: ".footer-quicklinks-group:nth-child(2) li:nth-child(4) a", text: { en: "Factory Profile", zh: "工厂介绍" } },
    { selector: ".footer-quicklinks-group:nth-child(2) li:nth-child(5) a", text: { en: "Contact Us", zh: "联系我们" } },
    { selector: ".footer-directory-head h4", text: { en: "Contact & Location", zh: "联系与地址" } },
    {
      selector: ".footer-directory-head p",
      text: {
        en: "Sales and factory details are organized for buyers who need direct routing, verified locations, and quick map access.",
        zh: "为便于买家快速联系销售、核对工厂地址并查看地图，这里集中整理了销售与工厂信息。"
      }
    },
    { selector: "[data-contact-sales] h5", text: { en: "Sales", zh: "销售" } },
    { selector: "[data-contact-factory] h5", text: { en: "Factory", zh: "工厂" } },
    { selector: "[data-location-tab='headquarters']", text: { en: "Headquarters", zh: "总部" } },
    { selector: "[data-location-tab='factory']", text: { en: "Factory", zh: "工厂" } },
    { selector: "[data-sales-name-item] span:first-child", text: { en: "Contact", zh: "联系人" } },
    { selector: "[data-sales-phone-item] span:first-child", text: { en: "Phone", zh: "电话" } },
    { selector: "[data-sales-email-item] span:first-child", text: { en: "Email", zh: "邮箱" } },
    { selector: "[data-factory-name-item] span:first-child", text: { en: "Contact", zh: "联系人" } },
    { selector: "[data-factory-phone-item] span:first-child", text: { en: "Phone", zh: "电话" } },
    { selector: "[data-factory-address-item] span:first-child", text: { en: "Address", zh: "地址" } },
    { selector: "[data-location-address-item] span:first-child", text: { en: "Address", zh: "地址" } },
    { selector: "[data-location-phone-item] span:first-child", text: { en: "Phone", zh: "电话" } },
    { selector: "[data-map-open]", text: { en: "Open in Google Maps", zh: "在 Google 地图中打开" } },
    { selector: ".bottom-bar > div:first-child", text: { en: "Copyright RichLand Ltd. All rights reserved.", zh: "Copyright RichLand Ltd. 版权所有。" } },
    { selector: ".bottom-links span", text: { en: "Foshan, Guangdong, China", zh: "中国广东佛山" } }
  ];

  var PAGE_TRANSLATIONS = {
    index: [
      { selector: "title", text: { en: "RichLand Ltd. | Fan Manufacturing from Shunde, Foshan", zh: "RichLand Ltd. | 佛山顺德风扇制造商" }, property: "textContent" },
      { selector: ".hero-visual-badge", text: { en: "Fan Manufacturing from Shunde, Foshan", zh: "佛山顺德风扇制造" } },
      { selector: ".hero-copy .eyebrow", text: { en: "Electric Fan Manufacturing", zh: "电风扇制造" } },
      { selector: ".hero-copy h1", text: { en: "Electric fan production built for long-term export programs", zh: "面向长期出口项目的电风扇制造能力" } },
      {
        selector: ".hero-copy .lead",
        text: {
          en: "RichLand, backed by Huatian's factory base in Shunde, Foshan, supports importers, distributors, and private-label buyers with around 25 years of manufacturing experience, broad fan categories, and practical OEM / ODM cooperation.",
          zh: "RichLand 依托佛山顺德华田工厂基础，为进口商、分销商和贴牌客户提供约 25 年制造经验支持，覆盖丰富风扇品类，并配合务实的 OEM / ODM 合作。"
        }
      },
      { selector: ".hero-actions .btn.primary", text: { en: "Request Quotation", zh: "获取报价" } },
      { selector: ".hero-actions .btn:not(.primary)", text: { en: "Explore Fan Categories", zh: "查看风扇品类" } },
      { selector: ".hero-metrics .metric:nth-child(1) strong", text: { en: "OEM / ODM", zh: "OEM / ODM" } },
      { selector: ".hero-metrics .metric:nth-child(1) span", text: { en: "Flexible private-label cooperation backed by practical factory coordination.", zh: "支持灵活贴牌合作，并由工厂端配合推进。" } },
      { selector: ".hero-metrics .metric:nth-child(2) strong", text: { en: "MOQ 500 pcs", zh: "MOQ 500 件" } },
      { selector: ".hero-metrics .metric:nth-child(2) span", text: { en: "Clear bulk-order baseline for line planning and quotation review.", zh: "提供清晰的起订量基线，便于产品规划与报价评估。" } },
      { selector: ".hero-metrics .metric:nth-child(3) strong", text: { en: "7 / 30 / 3 Days", zh: "7 / 30 / 3 天" } },
      { selector: ".hero-metrics .metric:nth-child(3) span", text: { en: "Reference timing for samples, bulk production, and available stock.", zh: "样品、量产与现货参考周期一目了然。" } },
      { selector: ".hero-metrics .metric:nth-child(4) strong", text: { en: "Around 25 Years", zh: "约 25 年" } },
      { selector: ".hero-metrics .metric:nth-child(4) span", text: { en: "Manufacturing experience across electric fans and supporting appliance lines.", zh: "长期专注电风扇及相关家电产品制造。" } },
      { selector: ".proof-card h2", text: { en: "Structured for factory evaluation and export follow-through", zh: "为工厂评估与出口跟进而设计" } },
      { selector: ".proof-card p", text: { en: "The homepage is organized for buyers who need to assess fan categories, factory capability, and inquiry readiness before moving into model-by-model discussion.", zh: "首页结构围绕风扇品类、工厂能力与询盘准备度展开，方便买家在进入具体型号讨论前先完成基础判断。" } },
      { selector: ".proof-list li:nth-child(1) span", text: { en: "Core focus", zh: "核心重点" } },
      { selector: ".proof-list li:nth-child(1) strong", text: { en: "Electric fan categories first", zh: "优先呈现电风扇品类" } },
      { selector: ".proof-list li:nth-child(2) span", text: { en: "Factory base", zh: "工厂基础" } },
      { selector: ".proof-list li:nth-child(2) strong", text: { en: "Shunde, Foshan manufacturing support", zh: "佛山顺德制造支持" } },
      { selector: ".proof-list li:nth-child(3) span", text: { en: "Production logic", zh: "生产逻辑" } },
      { selector: ".proof-list li:nth-child(3) strong", text: { en: "Integrated chain from model range to export delivery", zh: "从型号覆盖到出口交付的一体化链路" } },
      { selector: ".proof-list li:nth-child(4) span", text: { en: "Buyer route", zh: "买家路径" } },
      { selector: ".proof-list li:nth-child(4) strong", text: { en: "Start with category, market, quantity, and branding need", zh: "从品类、市场、数量与品牌需求开始" } },
      { selector: ".quote-card strong", text: { en: "Quotation-ready inquiry flow", zh: "适合报价沟通的询盘流程" } },
      { selector: ".quote-card p", text: { en: "After reviewing the main fan categories, buyers can send the commercial basics needed for a focused factory response.", zh: "买家在浏览主要风扇品类后，可直接提交工厂回复所需的核心商业信息。" } },
      { selector: ".quote-points li:nth-child(1)", text: { en: "Target category or model family", zh: "目标品类或型号系列" } },
      { selector: ".quote-points li:nth-child(2)", text: { en: "Estimated quantity and destination market", zh: "预估数量与目标市场" } },
      { selector: ".quote-points li:nth-child(3)", text: { en: "Branding, OEM / ODM, or existing-model preference", zh: "品牌需求、OEM / ODM 或现有型号偏好" } },
      { selector: ".quote-card .btn.primary", text: { en: "Start Inquiry", zh: "开始询盘" } },
      { selector: "#categories .section-kicker", text: { en: "Product Range", zh: "产品范围" } },
      { selector: "#categories h2", text: { en: "Main fan categories for export assortment planning", zh: "适合出口配货规划的主要风扇品类" } },
      { selector: "#categories .section-head p", text: { en: "Electric fans remain the core business. The homepage therefore leads with the categories overseas buyers most often compare when building retail, distribution, and private-label programs.", zh: "电风扇仍是核心业务，因此首页优先呈现海外买家在零售、分销与贴牌项目中最常比较的风扇品类。" } },
      { selector: "#categories .section-note", text: { en: "Fan products lead the conversation. Supporting appliance lines remain visible, but clearly secondary to the fan business.", zh: "风扇产品是首页主线，其它家电品类保留展示，但明确作为辅助业务。" } },
      { selector: "#categories .category-card:nth-child(1) .category-label", text: { en: "Primary Category", zh: "核心品类" } },
      { selector: "#categories .category-card:nth-child(1) h3", text: { en: "Pedestal Fans", zh: "落地扇" } },
      { selector: "#categories .category-card:nth-child(1) p", text: { en: "Core standing-fan programs for household demand, retail programs, and volume export orders.", zh: "适用于家用需求、零售项目及大批量出口订单的核心落地扇产品线。" } },
      { selector: "#categories .category-card:nth-child(2) .category-label", text: { en: "Primary Category", zh: "核心品类" } },
      { selector: "#categories .category-card:nth-child(2) h3", text: { en: "Table Fans", zh: "台扇" } },
      { selector: "#categories .category-card:nth-child(2) p", text: { en: "Compact tabletop models suited to personal cooling, portable demand, and smaller-space assortments.", zh: "适用于个人使用、便携场景及小空间配货的紧凑型台扇。" } },
      { selector: "#categories .category-card:nth-child(3) .category-label", text: { en: "Primary Category", zh: "核心品类" } },
      { selector: "#categories .category-card:nth-child(3) h3", text: { en: "Wall Fans", zh: "壁扇" } },
      { selector: "#categories .category-card:nth-child(3) p", text: { en: "Wall-mounted fan lines for utility-led applications, compact layouts, and commercial practicality.", zh: "适合实用型场景、节省空间布局及商用用途的壁挂风扇系列。" } },
      { selector: "#categories .category-card:nth-child(4) .category-label", text: { en: "Primary Category", zh: "核心品类" } },
      { selector: "#categories .category-card:nth-child(4) h3", text: { en: "Air Circulators", zh: "循环扇" } },
      { selector: "#categories .category-card:nth-child(4) p", text: { en: "Airflow-focused models for buyers who need stronger circulation positioning within a wider fan lineup.", zh: "适合希望在风扇产品线中增加空气循环定位的买家。" } },
      { selector: "#categories .category-card:nth-child(5) .category-label", text: { en: "Primary Category", zh: "核心品类" } },
      { selector: "#categories .category-card:nth-child(5) h3", text: { en: "Ceiling Fans", zh: "吊扇" } },
      { selector: "#categories .category-card:nth-child(5) p", text: { en: "Practical ceiling-fan options that extend the main fan program with fixed-installation demand.", zh: "面向固定安装需求的实用吊扇，补充主力风扇产品线。" } },
      { selector: "#categories .category-link", text: { en: "View Products", zh: "查看产品" }, multiple: true },
      { selector: ".secondary-band .section-kicker", text: { en: "Other Product Lines", zh: "其它产品线" } },
      { selector: ".secondary-band h3", text: { en: "Supporting appliance lines for broader cooperation", zh: "支持更广合作的辅助家电品类" } },
      { selector: ".secondary-band p", text: { en: "RichLand also supplies selected practical appliances, but these remain supporting categories around the main electric-fan business rather than equal product pillars.", zh: "RichLand 也提供部分实用家电产品，但它们仍作为电风扇主营业务的辅助品类，而非同等主力。"} },
      { selector: ".secondary-tags a:nth-child(1)", text: { en: "Electric Pressure Cookers", zh: "电压力锅" } },
      { selector: ".secondary-tags a:nth-child(2)", text: { en: "Electric Heaters", zh: "电暖器" } },
      { selector: ".secondary-tags a:nth-child(3)", text: { en: "Air Conditioners", zh: "空调扇" } },
      { selector: ".secondary-tags a:nth-child(4)", text: { en: "Induction Cookers", zh: "电磁炉" } },
      { selector: "#why-richland .section-kicker", text: { en: "Why Choose RichLand", zh: "为什么选择 RichLand" } },
      { selector: "#why-richland h2", text: { en: "Factory cooperation shaped for practical export business", zh: "为务实出口业务而打造的工厂合作方式" } },
      { selector: "#why-richland .section-head p", text: { en: "RichLand is strongest when it is presented as a source manufacturer: broad fan coverage, factory-based coordination, and clear commercial terms that help buyers move from category review into real export discussion.", zh: "RichLand 最适合以源头制造商形象呈现：品类覆盖广、工厂协同清晰、商业条件明确，帮助买家从品类浏览顺利进入真实出口沟通。" } },
      { selector: ".why-intro .section-kicker", text: { en: "How We Work", zh: "合作方式" } },
      { selector: ".why-intro h3", text: { en: "From fan category planning to factory execution", zh: "从风扇品类规划到工厂落地" } },
      { selector: ".why-intro > p", text: { en: "Based in Shunde, Foshan, RichLand supports buyers who prefer to start with the right fan category, then move into model selection, branding direction, packing details, and production planning.", zh: "依托佛山顺德制造基础，RichLand 适合从风扇品类切入，再逐步推进型号选择、品牌方向、包装细节与生产计划。" } },
      { selector: ".brief-row:nth-child(1) span", text: { en: "Private-label support and model adaptation for practical market requirements.", zh: "支持贴牌合作，并可配合实际市场需求做型号调整。" } },
      { selector: ".brief-row:nth-child(2) span", text: { en: "500 pcs baseline for clearer quantity planning and quotation handling.", zh: "500 件起订量基线，便于数量规划与报价处理。" } },
      { selector: ".brief-row:nth-child(3) strong", text: { en: "Experience", zh: "经验" } },
      { selector: ".brief-row:nth-child(3) span", text: { en: "Around 25 years of manufacturing experience across fan production and export supply.", zh: "约 25 年风扇制造与出口供货经验。" } },
      { selector: ".brief-row:nth-child(4) strong", text: { en: "Production", zh: "生产" } },
      { selector: ".brief-row:nth-child(4) span", text: { en: "Integrated chain support for category development, factory follow-up, and export cooperation.", zh: "支持从品类开发、工厂跟进到出口协作的一体化配合。" } },
      { selector: ".why-card:nth-child(1) h4", text: { en: "Fan-focused manufacturing range", zh: "聚焦风扇的制造范围" } },
      { selector: ".why-card:nth-child(1) p", text: { en: "Pedestal, table, wall, ceiling, and air-circulator models give buyers a practical fan range from one manufacturer.", zh: "从落地扇、台扇、壁扇到吊扇和循环扇，买家可在同一制造商处完成实用风扇组合。" } },
      { selector: ".why-card:nth-child(2) h4", text: { en: "Integrated factory coordination", zh: "一体化工厂协同" } },
      { selector: ".why-card:nth-child(2) p", text: { en: "Category review, model confirmation, packaging discussion, and export follow-up stay inside one practical manufacturing conversation.", zh: "品类评估、型号确认、包装讨论与出口跟进都可在同一制造沟通链路内完成。" } },
      { selector: ".why-card:nth-child(3) h4", text: { en: "OEM / ODM practicality", zh: "务实的 OEM / ODM 配合" } },
      { selector: ".why-card:nth-child(3) p", text: { en: "Private-label cooperation is handled with a realistic export mindset, from existing models to customized market programs.", zh: "从现有型号到定制市场方案，贴牌合作均以务实出口逻辑推进。" } },
      { selector: ".why-card:nth-child(4) h4", text: { en: "Shunde, Foshan factory base", zh: "佛山顺德工厂基础" } },
      { selector: ".why-card:nth-child(4) p", text: { en: "The company story is rooted in one of China’s best-known appliance manufacturing regions, which adds credibility to long-term supply cooperation.", zh: "公司扎根于中国知名家电制造区域之一，为长期供货合作提供更强可信度。" } },
      { selector: ".why-card:nth-child(5) h4", text: { en: "Clear commercial basics", zh: "清晰的商务基础" } },
      { selector: ".why-card:nth-child(5) p", text: { en: "MOQ, lead-time reference, and inquiry routing stay visible so the buyer can move quickly into quotation planning.", zh: "MOQ、交期参考与询盘路径保持清晰，便于买家更快进入报价阶段。" } },
      { selector: ".why-card:nth-child(6) h4", text: { en: "Supporting appliance lines", zh: "辅助家电产品线" } },
      { selector: ".why-card:nth-child(6) p", text: { en: "Selected heaters, cookers, and related appliances can support broader cooperation, while electric fans remain the main business priority.", zh: "电暖器、炊具及相关家电可支持更广合作，但电风扇仍是主营重点。" } },
      { selector: "#showcase .section-kicker", text: { en: "Featured Models", zh: "精选型号" } },
      { selector: "#showcase h2", text: { en: "Representative fan models for quotation review", zh: "适合报价评估的代表性风扇型号" } },
      { selector: "#showcase .section-head p", text: { en: "These featured models help buyers quickly understand the range direction before moving into detailed inquiries by category, market, quantity, and cooperation mode.", zh: "这些代表型号有助于买家在进入详细询盘前，快速理解产品方向与合作结构。" } },
      { selector: ".showcase-card:nth-child(1) .showcase-meta", text: { en: "Pedestal Fans", zh: "落地扇" } },
      { selector: ".showcase-card:nth-child(1) p", text: { en: "A practical pedestal-fan model for mainstream household programs and volume-oriented export assortments.", zh: "适合主流家用项目与大批量出口配货的实用落地扇型号。" } },
      { selector: ".showcase-card:nth-child(1) li:nth-child(1)", text: { en: "General lineup anchor for mainstream fan programs", zh: "适合作为主流风扇项目的基础型号" } },
      { selector: ".showcase-card:nth-child(1) li:nth-child(2)", text: { en: "Useful for distributor and wholesale assortment discussion", zh: "便于分销与批发配货讨论" } },
      { selector: ".showcase-card:nth-child(1) li:nth-child(3)", text: { en: "Fits practical export category positioning", zh: "适合务实的出口品类定位" } },
      { selector: ".showcase-card:nth-child(1) .showcase-cta span", text: { en: "Start with category, quantity, and market", zh: "建议先确认品类、数量与市场" } },
      { selector: ".showcase-card:nth-child(1) .showcase-cta a", text: { en: "Send Inquiry", zh: "发送询盘" } },
      { selector: ".showcase-card:nth-child(2) .showcase-meta", text: { en: "Table Fans", zh: "台扇" } },
      { selector: ".showcase-card:nth-child(2) p", text: { en: "A compact tabletop model for personal cooling programs, lighter retail lines, and smaller-space demand.", zh: "适合个人使用、轻量零售项目与小空间需求的紧凑型台扇。" } },
      { selector: ".showcase-card:nth-child(2) li:nth-child(1)", text: { en: "Compact format for portable or desktop assortment planning", zh: "适合便携或桌面产品组合规划" } },
      { selector: ".showcase-card:nth-child(2) li:nth-child(2)", text: { en: "Helps buyers extend lineup beyond standard standing fans", zh: "帮助买家扩展标准落地扇之外的产品线" } },
      { selector: ".showcase-card:nth-child(2) li:nth-child(3)", text: { en: "Clear category fit for practical export discussions", zh: "适合进行务实出口讨论的明确品类" } },
      { selector: ".showcase-card:nth-child(2) .showcase-cta span", text: { en: "Useful for lighter product-line planning", zh: "适合轻量产品线规划" } },
      { selector: ".showcase-card:nth-child(2) .showcase-cta a", text: { en: "Request Details", zh: "了解详情" } },
      { selector: ".showcase-card:nth-child(3) .showcase-meta", text: { en: "Wall Fans", zh: "壁扇" } },
      { selector: ".showcase-card:nth-child(3) p", text: { en: "A wall-mounted model suited to compact installation requirements and utility-oriented fan programs.", zh: "适合节省空间安装需求与实用型风扇项目的壁挂型号。" } },
      { selector: ".showcase-card:nth-child(3) li:nth-child(1)", text: { en: "Useful for space-saving category requirements", zh: "适合节省空间型产品需求" } },
      { selector: ".showcase-card:nth-child(3) li:nth-child(2)", text: { en: "Supports practical and utility-led product positioning", zh: "支持偏实用导向的产品定位" } },
      { selector: ".showcase-card:nth-child(3) li:nth-child(3)", text: { en: "Suitable for structured export inquiry flow", zh: "适合结构化出口询盘" } },
      { selector: ".showcase-card:nth-child(3) .showcase-cta span", text: { en: "Best reviewed by application and market", zh: "更适合结合应用与市场判断" } },
      { selector: ".showcase-card:nth-child(3) .showcase-cta a", text: { en: "Request Quotation", zh: "获取报价" } },
      { selector: ".showcase-card:nth-child(4) .showcase-meta", text: { en: "Air Circulators", zh: "循环扇" } },
      { selector: ".showcase-card:nth-child(4) p", text: { en: "A circulation-led model for buyers who want a more differentiated airflow option within the broader fan range.", zh: "适合希望在整体风扇产品线中增加差异化循环送风选项的买家。" } },
      { selector: ".showcase-card:nth-child(4) li:nth-child(1)", text: { en: "Recognizable circulation form for higher category distinction", zh: "循环送风外形更具品类识别度" } },
      { selector: ".showcase-card:nth-child(4) li:nth-child(2)", text: { en: "Useful for buyers expanding beyond conventional fan programs", zh: "适合扩展常规风扇之外的产品线" } },
      { selector: ".showcase-card:nth-child(4) li:nth-child(3)", text: { en: "Supports premium but restrained export presentation", zh: "适合稳重而有层次的出口展示" } },
      { selector: ".showcase-card:nth-child(4) .showcase-cta span", text: { en: "Suitable for OEM / ODM review", zh: "适合 OEM / ODM 评估" } },
      { selector: ".showcase-card:nth-child(4) .showcase-cta a", text: { en: "Send Inquiry", zh: "发送询盘" } },
      { selector: "#inquiry .section-kicker", text: { en: "Start Your Inquiry", zh: "开始询盘" } },
      { selector: "#inquiry h2", text: { en: "Move from category review into a working quotation discussion", zh: "从品类评估进入实际报价沟通" } },
      { selector: "#inquiry .section-head p", text: { en: "The inquiry section is kept practical for export business: select the fan category, share the estimated quantity, note the target market, and clarify whether the request is for OEM, ODM, or existing models.", zh: "询盘区为出口业务而设计：选择目标品类、填写预估数量与市场，并说明是 OEM、ODM 还是现有型号需求。" } },
      { selector: ".inquiry-copy .section-kicker", text: { en: "Inquiry Details", zh: "询盘信息" } },
      { selector: ".inquiry-copy h3", text: { en: "Share the sourcing requirement in a clear structure", zh: "用清晰结构说明采购需求" } },
      { selector: ".inquiry-copy > p:not(.form-status)", text: { en: "A well-structured inquiry helps the factory team reply faster with the right category guidance, model direction, and quotation basis for your market.", zh: "结构清晰的询盘能帮助工厂团队更快给出合适的品类建议、型号方向与报价依据。" } },
      { selector: "label[for='target-category']", text: { en: "Target Category", zh: "目标品类" } },
      { selector: "#target-category option[value='']", text: { en: "Select a category", zh: "请选择品类" } },
      { selector: "#target-category option[value='Pedestal Fans']", text: { en: "Pedestal Fans", zh: "落地扇" } },
      { selector: "#target-category option[value='Table Fans']", text: { en: "Table Fans", zh: "台扇" } },
      { selector: "#target-category option[value='Wall Fans']", text: { en: "Wall Fans", zh: "壁扇" } },
      { selector: "#target-category option[value='Air Circulators']", text: { en: "Air Circulators", zh: "循环扇" } },
      { selector: "#target-category option[value='Ceiling Fans']", text: { en: "Ceiling Fans", zh: "吊扇" } },
      { selector: "#target-category option[value='Electric Heaters']", text: { en: "Electric Heaters", zh: "电暖器" } },
      { selector: "#target-category option[value='Air Conditioners']", text: { en: "Air Conditioners", zh: "空调扇" } },
      { selector: "#target-category option[value='Induction Cookers']", text: { en: "Induction Cookers", zh: "电磁炉" } },
      { selector: "#target-category option[value='Electric Pressure Cookers']", text: { en: "Electric Pressure Cookers", zh: "电压力锅" } },
      { selector: "label[for='estimated-quantity']", text: { en: "Estimated Quantity", zh: "预估数量" } },
      { selector: "#estimated-quantity", property: "placeholder", text: { en: "e.g. 500 pcs / 1x40HQ", zh: "例如：500 件 / 1x40HQ" } },
      { selector: "label[for='destination-market']", text: { en: "Destination Market / Country", zh: "目标市场 / 国家" } },
      { selector: "#destination-market", property: "placeholder", text: { en: "e.g. Nigeria / UAE / South America", zh: "例如：尼日利亚 / 阿联酋 / 南美" } },
      { selector: "label[for='cooperation-mode']", text: { en: "Cooperation Mode", zh: "合作方式" } },
      { selector: "#cooperation-mode option[value='']", text: { en: "Select cooperation mode", zh: "请选择合作方式" } },
      { selector: "#cooperation-mode option[value='OEM']", text: { en: "OEM", zh: "OEM" } },
      { selector: "#cooperation-mode option[value='ODM']", text: { en: "ODM", zh: "ODM" } },
      { selector: "#cooperation-mode option[value='Standard / Existing Models']", text: { en: "Standard / Existing Models", zh: "标准款 / 现有型号" } },
      { selector: "#cooperation-mode option[value='Not Sure Yet']", text: { en: "Not Sure Yet", zh: "暂未确定" } },
      { selector: "label[for='company-name']", text: { en: "Company Name", zh: "公司名称" } },
      { selector: "label[for='website']", text: { en: "Website", zh: "公司网站" } },
      { selector: "#website", property: "placeholder", text: { en: "https://yourcompany.com", zh: "https://yourcompany.com" } },
      { selector: "label[for='email']", text: { en: "Email", zh: "邮箱" } },
      { selector: "#email", property: "placeholder", text: { en: "name@company.com", zh: "name@company.com" } },
      { selector: "label[for='contact-person']", text: { en: "Contact Person", zh: "联系人" } },
      { selector: ".message-card h4", text: { en: "Your Message", zh: "留言内容" } },
      { selector: ".message-card > p", text: { en: "Use this space to explain the application, market preference, branding request, or model questions that matter most to your inquiry.", zh: "可在这里补充应用场景、市场偏好、品牌要求，或你最关心的型号问题。" } },
      { selector: "label[for='message']", text: { en: "Message", zh: "留言" } },
      { selector: "#message", property: "placeholder", text: { en: "Share the product types, expected quantity, market background, branding needs, or any questions you want RichLand to review.", zh: "请说明目标产品、预估数量、市场背景、品牌需求，或希望 RichLand 评估的问题。" } },
      { selector: "[data-submit-button]", text: { en: "Send", zh: "发送" } },
      { selector: "[data-success-modal] h3", text: { en: "Thank you for your inquiry.", zh: "感谢您的询盘。" } },
      { selector: "[data-success-modal] p", text: { en: "RichLand has received your submission. Our team will review the details and contact you soon.", zh: "RichLand 已收到您的提交信息，我们会尽快审核并与您联系。" } },
      { selector: ".success-modal__actions .btn.primary", text: { en: "Close", zh: "关闭" } },
      { selector: "[data-modal-close][aria-label]", property: "aria-label", text: { en: "Close confirmation", zh: "关闭提示框" } }
    ],
    products: [
      { selector: "title", text: { en: "Fan Products | RichLand Ltd.", zh: "产品中心 | RichLand Ltd." }, property: "textContent" },
      { selector: ".hero-panel .section-kicker", text: { en: "Products", zh: "产品中心" } },
      { selector: ".hero-panel h1", text: { en: "Fan catalog arranged for practical export sourcing", zh: "为务实出口采购整理的风扇产品目录" } },
      {
        selector: ".hero-panel p",
        text: {
          en: "This page is built around RichLand’s main electric-fan categories first, then supporting appliance lines. Buyers can review the range by category, compare model families in order, and move into inquiry once the right product direction is clear.",
          zh: "本页优先展示 RichLand 的主要电风扇品类，再延伸到辅助家电产品线。买家可按分类浏览、比较型号系列，并在明确方向后直接进入询盘。"
        }
      }
    ]
  };

  function getUiText(key, params) {
    var entry = UI_TEXT[key];
    if (!entry) return "";
    var value = entry[currentLang];
    if (typeof value === "function") return value((params && params.count) || 0);
    return value;
  }

  function translateCategoryName(value) {
    var entry = CATEGORY_TEXT[value];
    return entry ? entry[currentLang] : value;
  }

  function translateLocationLabel(value) {
    if (value === "Factory" || value === "factory") return getUiText("factory");
    if (value === "Headquarters" || value === "headquarters") return getUiText("headquarters");
    return value;
  }

  function translateColorLabel(value) {
    if (!value) return value;
    return value
      .split(/\s*,\s*/)
      .map(function (part) {
        var normalized = part.trim().toLowerCase();
        var entry = COLOR_TEXT[normalized];
        return entry ? entry[currentLang] : part.trim();
      })
      .join(", ");
  }

  function translateSizeText(value) {
    if (!value || currentLang !== "zh") return value;
    return value
      .replace(/(\d+)\s*inch/gi, "$1寸")
      .replace(/Size not explicit/gi, "尺寸未明确");
  }

  function translateFeatureText(value) {
    if (!value) return value;

    var parts = value.split(/\s*·\s*/).map(function (part) {
      var normalized = part.trim().toLowerCase();
      var entry = FEATURE_TEXT[normalized];
      if (entry) return entry[currentLang];
      return currentLang === "zh" ? part.trim() : part.trim();
    });

    return parts.join(" · ");
  }

  function applyRules(rules) {
    rules.forEach(function (rule) {
      var nodes = document.querySelectorAll(rule.selector);
      if (!nodes.length) return;
      nodes.forEach(function (node) {
        if (rule.property) {
          if (rule.property === "textContent" || rule.property === "innerHTML" || rule.property === "placeholder") {
            node[rule.property] = rule.text[currentLang];
          } else {
            node.setAttribute(rule.property, rule.text[currentLang]);
          }
        } else {
          node.textContent = rule.text[currentLang];
        }
      });
    });
  }

  function updateToggleButtons() {
    var nextLang = currentLang === "en" ? "zh" : "en";
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      var code = button.querySelector("[data-lang-toggle-code]");
      var text = button.querySelector("[data-lang-toggle-text]");
      var nextLabel = nextLang === "zh" ? "中文" : "EN";
      var textLabel = nextLang === "zh" ? "切换到中文" : "Switch to English";
      if (code) code.textContent = nextLabel;
      if (text) text.textContent = textLabel;
      button.setAttribute("aria-label", textLabel);
      button.setAttribute("title", textLabel);
    });
  }

  function bindToggleButtons() {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      if (button.dataset.boundLangToggle === "true") return;
      button.dataset.boundLangToggle = "true";
      button.addEventListener("click", function () {
        setStoredLang(currentLang === "en" ? "zh" : "en");
        window.location.reload();
      });
    });
  }

  function applyPageTranslations() {
    currentLang = getStoredLang();
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    body.dataset.siteLang = currentLang;

    applyRules(COMMON_TRANSLATIONS);

    var pageName = body.dataset.page;
    if (pageName && PAGE_TRANSLATIONS[pageName]) {
      applyRules(PAGE_TRANSLATIONS[pageName]);
    }

    updateToggleButtons();
    bindToggleButtons();
  }

  window.RICHLAND_I18N = {
    getLang: function () {
      return currentLang;
    },
    isChinese: function () {
      return currentLang === "zh";
    },
    getUiText: getUiText,
    translateCategoryName: translateCategoryName,
    translateColorLabel: translateColorLabel,
    translateFeatureText: translateFeatureText,
    translateSizeText: translateSizeText,
    translateLocationLabel: translateLocationLabel,
    applyPageTranslations: applyPageTranslations
  };

  applyPageTranslations();
})();
