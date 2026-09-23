const modSets = {
  crystal: {
    banner: 'Marlow Crystal הוא נקודת פתיחה חזקה, והשאר כאן הם הפנינים שפחות מדברים עליהן.',
    mods: [
      { name: 'Marlow Crystal', label: 'רק ל-Crystal', description: 'כלים חכמים למיקום קריסטלים ותגובה מהירה.', tag: 'COMBAT', icon: '✦', featured: true, crystalOnly: true },
      { name: "Marlow's Crystal Optimizer", label: 'רק ל-Crystal', description: 'אופטימיזציה ממוקדת לפעולות ולחישובים של Crystal PvP.', tag: 'COMBAT', icon: '▦', crystalOnly: true },
      { name: 'Crystal Optimizer', label: 'רק ל-Crystal', description: 'עוזר לשמור על תגובה יציבה בזמן הנחת קריסטלים.', tag: 'COMBAT', icon: '◈', crystalOnly: true },
      { name: 'ShulkerBoxTooltip', label: 'פנינה נסתרת', description: 'תציץ בתכולת שולקר בלי לבזבז זמן בתפריטים.', tag: 'UTILITY', icon: '□' },
      { name: 'Armor HUD', label: 'קרב', description: 'השריון והעמידות שלו תמיד מול העיניים בזמן פייט.', tag: 'COMBAT', icon: '◇' },
      { name: 'Durability Viewer', label: 'קרב', description: 'מזהה מתי הנשק או הטוטם עומדים להישבר.', tag: 'COMBAT', icon: '▣' },
      { name: 'Status Effect Timer', label: 'קרב', description: 'טיימרים ברורים לשיקויים ואפקטים בזמן לחץ.', tag: 'COMBAT', icon: '≡' },
      { name: 'Better Ping Display', label: 'מידע', description: 'הפינג שלך ושל השרת גלויים בלי לפתוח תפריט.', tag: 'COMBAT', icon: '◌' },
      { name: 'BetterF3', label: 'פנינה נסתרת', description: 'מסך מידע מסודר לבדיקת קואורדינטות ונתוני עולם.', tag: 'VISUAL', icon: '▤' },
      { name: 'AppleSkin', label: 'שימושיות', description: 'רואה מראש כמה אוכל וריפוי באמת תקבל.', tag: 'UTILITY', icon: '◈' },
      { name: 'Mouse Tweaks', label: 'שימושיות', description: 'מעביר ציוד מהר יותר בזמן החלפת טוטמים.', tag: 'UTILITY', icon: '⌁' },
      { name: 'Mod Menu', label: 'ניהול', description: 'פותח הגדרות של מודים בלי לחפש קבצים.', tag: 'UTILITY', icon: '☷' },
      { name: 'Zoomify', label: 'מידע', description: 'זום נקי כדי לקרוא מרחקים ולבדוק תנועה.', tag: 'VISUAL', icon: '⌕' },
      { name: 'Noisium', label: 'ביצועים', description: 'מאיץ יצירת עולם ומפחית קפיצות בזמן טעינה.', tag: 'FPS', icon: '✧' }
    ]
  },
  sword: {
    banner: 'הסט הזה שומר את המסך נקי ומחדד את התזמון שלך, בלי להעמיס מודים מפורסמים.',
    mods: [
      { name: 'ImmediatelyFast', label: 'נישתי ושימושי', description: 'תנועה חלקה ו-FPS יציב בקרבות מהירים.', tag: 'FPS', icon: '✦', featured: true },
      { name: 'MoreCulling', label: 'פחות מוכר', description: 'מוריד עומס רינדור בלי לשנות את הוויזואליות של הקרב.', tag: 'FPS', icon: '▦' },
      { name: 'Mouse Tweaks', label: 'שימושיות', description: 'ניהול מהיר יותר של בלוקים וציוד בזמן לחץ.', tag: 'UTILITY', icon: '◈' },
      { name: 'BetterF3', label: 'פנינה נסתרת', description: 'מסך נתונים מסודר כשצריך לבדוק מצב במהירות.', tag: 'VISUAL', icon: '□' },
      { name: 'Armor HUD', label: 'קרב', description: 'מעקב מהיר אחרי מצב השריון בלי להוריד את העיניים מהיריב.', tag: 'COMBAT', icon: '◇' },
      { name: 'Durability Viewer', label: 'קרב', description: 'מראה מתי החרב והכלים שלך מתקרבים לשבירה.', tag: 'COMBAT', icon: '▣' },
      { name: 'Status Effect Timer', label: 'קרב', description: 'טיימרים לאפקטים כדי לדעת מתי להתחיל את הקומבו.', tag: 'COMBAT', icon: '◌' },
      { name: 'AppleSkin', label: 'שימושיות', description: 'תזמון אכילה מדויק יותר בקרב ארוך.', tag: 'UTILITY', icon: '◈' },
      { name: 'Inventory Profiles Next', label: 'ניהול', description: 'סידור וטעינה מהירים של ציוד בין סיבובים.', tag: 'UTILITY', icon: '□' },
      { name: 'Mod Menu', label: 'ניהול', description: 'כל הגדרות המודים במקום אחד.', tag: 'UTILITY', icon: '☷' },
      { name: 'Zoomify', label: 'מידע', description: 'בדוק תנועה ומרחק בלי לשנות את שדה הראייה.', tag: 'VISUAL', icon: '⌕' },
      { name: 'Better Ping Display', label: 'מידע', description: 'תצוגת פינג נקייה כדי להבין את תזמון השרת.', tag: 'COMBAT', icon: '✧' },
      { name: 'Sodium Extra', label: 'שליטה', description: 'שליטה עדינה בפרטים שמכבידים על המשחק.', tag: 'FPS', icon: '≡' },
      { name: 'Better Mount HUD', label: 'פנינה נסתרת', description: 'מידע ברור על סוס או כלי רכיבה בזמן תנועה.', tag: 'VISUAL', icon: '▤' }
    ]
  },
  bed: {
    banner: 'ב-Bed PvP, מודים קטנים למידע ותנועה עושים את ההבדל.',
    mods: [
      { name: 'ImmediatelyFast', label: 'נישתי ושימושי', description: 'ביצועים יציבים גם בבסיסים עמוסים.', tag: 'FPS', icon: '✦', featured: true },
      { name: 'ShulkerBoxTooltip', label: 'פחות מוכר', description: 'בדוק משאבים לפני ריצה לבסיס היריב.', tag: 'UTILITY', icon: '▦' },
      { name: 'Mouse Tweaks', label: 'שימושיות', description: 'סידור מהיר של בלוקים בזמן בנייה והגנה.', tag: 'UTILITY', icon: '◈' },
      { name: 'BetterF3', label: 'פנינה נסתרת', description: 'מצא נתוני עולם בלי מסך F3 מבולגן.', tag: 'VISUAL', icon: '□' },
      { name: 'Armor HUD', label: 'קרב', description: 'ראה את מצב השריון בזמן בנייה, הגנה ובריחה.', tag: 'COMBAT', icon: '◇' },
      { name: 'Durability Viewer', label: 'קרב', description: 'התראה ברורה לפני שכלי או נשק נשברים.', tag: 'COMBAT', icon: '▣' },
      { name: 'Inventory Profiles Next', label: 'ניהול', description: 'סידור מהיר של בלוקים וכלים בזמן הגנה.', tag: 'UTILITY', icon: '□' },
      { name: 'AppleSkin', label: 'שימושיות', description: 'דע מתי לאכול לפני ריצה או התקפה.', tag: 'UTILITY', icon: '◈' },
      { name: 'Status Effect Timer', label: 'קרב', description: 'אל תאבד אפקט חשוב באמצע הגנה על המיטה.', tag: 'COMBAT', icon: '◌' },
      { name: 'Better Ping Display', label: 'מידע', description: 'ראה את הפינג לפני שאתה נכנס לריצה מסוכנת.', tag: 'COMBAT', icon: '✧' },
      { name: 'Mod Menu', label: 'ניהול', description: 'שנה הגדרות של מודים בלי לצאת מהמשחק.', tag: 'UTILITY', icon: '☷' },
      { name: 'Zoomify', label: 'מידע', description: 'בדוק גשרים, שחקנים ומרחקים בקלות.', tag: 'VISUAL', icon: '⌕' },
      { name: 'Status Effect Timer', label: 'קרב', description: 'טיימרים לאפקטים כדי לתכנן את הקרב הבא.', tag: 'COMBAT', icon: '▤' },
      { name: 'Lighty', label: 'פנינה נסתרת', description: 'מצא נקודות חשוכות שיכולות ליצור הפתעות בבסיס.', tag: 'UTILITY', icon: '☼' }
    ]
  },
  uhc: {
    banner: 'ל-UHC צריך מידע, ביצועים וקצת פחות הפתעות, ממודים שאנשים מדלגים עליהם.',
    mods: [
      { name: 'Entity Culling', label: 'נישתי ושימושי', description: 'פחות עומס רינדור, יותר תגובה בעולם גדול.', tag: 'FPS', icon: '✦', featured: true },
      { name: 'ImmediatelyFast', label: 'פחות מוכר', description: 'מזרז מסכים, חלקיקים ואפקטים בלי רעש.', tag: 'FPS', icon: '▦' },
      { name: 'AppleSkin', label: 'פנינה נסתרת', description: 'תכנן את הריפוי שלך לפני שהקרב מתחיל.', tag: 'UTILITY', icon: '◈' },
      { name: 'BetterF3', label: 'מידע', description: 'מדדים שימושיים בלי מסך נתונים מבולגן.', tag: 'VISUAL', icon: '□' },
      { name: 'MoreCulling', label: 'ביצועים', description: 'יותר FPS במערות ובאזורים עם הרבה בלוקים.', tag: 'FPS', icon: '◇' },
      { name: 'Armor HUD', label: 'קרב', description: 'מצב השריון נשאר גלוי בזמן כרייה והיתקלות.', tag: 'COMBAT', icon: '▣' },
      { name: 'Inventory Profiles Next', label: 'ניהול', description: 'סידור מהיר של משאבים לפני שהקרב מתחיל.', tag: 'UTILITY', icon: '□' },
      { name: 'Durability Viewer', label: 'קרב', description: 'בדוק את עמידות הנשק והשריון לפני כניסה לקרב.', tag: 'COMBAT', icon: '◌' },
      { name: 'Better Ping Display', label: 'מידע', description: 'תצוגת פינג ברורה כדי להבין את תגובת השרת.', tag: 'COMBAT', icon: '✧' },
      { name: 'Mod Menu', label: 'ניהול', description: 'מקום אחד לכל הגדרות המודים שלך.', tag: 'UTILITY', icon: '☷' },
      { name: 'Zoomify', label: 'מידע', description: 'בדוק שחקנים ומרחקים לפני שאתה מתקדם.', tag: 'VISUAL', icon: '⌕' },
      { name: 'Lighty', label: 'פנינה נסתרת', description: 'מצא אזורים חשוכים לפני שהם הופכים לבעיה.', tag: 'UTILITY', icon: '☼' },
      { name: 'Mouse Tweaks', label: 'שימושיות', description: 'העבר אוכל וכלים מהר יותר בזמן הישרדות.', tag: 'UTILITY', icon: '⌁' },
      { name: 'Sodium Extra', label: 'שליטה', description: 'כוון את הגדרות הווידאו לפי המחשב שלך.', tag: 'FPS', icon: '≡' }
    ]
  }
};

const styleSelect = document.querySelector('#styleSelect');
const loaderSelect = document.querySelector('#loaderSelect');
const contentTypeSelect = document.querySelector('#contentTypeSelect');
const modGrid = document.querySelector('#modGrid');
const resultStatus = document.querySelector('#resultStatus');
const resultNumber = document.querySelector('#resultNumber');
const bannerText = document.querySelector('#bannerText');
const priorityChips = document.querySelectorAll('.chip');
const aiQuestion = document.querySelector('#aiQuestion');
const aiAnswer = document.querySelector('#aiAnswer');
const aiResults = document.querySelector('#aiResults');
const aiTip = document.querySelector('#aiTip');

const onlineQueries = {
  crystal: 'crystal pvp minecraft',
  sword: 'sword pvp minecraft',
  bed: 'bedwars pvp minecraft',
  uhc: 'uhc pvp minecraft'
};

const aiSearchKnowledge = [
  { words: ['fast respawn anchor', 'fast respawn ancher', 'respawn anchor', 'respawn ancher', 'anchor pvp', 'אנקר', 'עוגן'], queries: ['respawn anchor', 'anchor pvp', 'crystal pvp'] },
  { words: ['crystal', 'קריסטל'], queries: ['crystal pvp', 'crystal optimizer', 'client side crystals'] },
  { words: ['totem', 'טוטם'], queries: ['totem pvp', 'totem hud', 'inventory hud'] },
  { words: ['armor', 'armour', 'שריון'], queries: ['armor hud', 'armor durability', 'pvp hud'] },
  { words: ['sword', 'חרב', 'combo', 'קומבו'], queries: ['sword pvp', 'pvp combo', 'combat hud'] },
  { words: ['ping', 'פינג', 'lag', 'לאג'], queries: ['ping display', 'network pvp', 'lag reduction'] },
  { words: ['fps', 'performance', 'ביצועים', 'תקיעות'], queries: ['minecraft performance', 'pvp fps', 'client optimization'] }
];

function getOnlineSearchQueries(question) {
  const normalized = question.toLowerCase().replace(/\s+/g, ' ').trim();
  const queries = [onlineQueries[styleSelect.value]];
  if (normalized) queries.unshift(normalized);
  aiSearchKnowledge.forEach((entry) => {
    if (entry.words.some((word) => normalized.includes(word))) queries.push(...entry.queries);
  });
  return [...new Set(queries)].slice(0, 4);
}

function scoreOnlineMod(mod, question, requestedLoader, version) {
  const text = `${mod.title} ${mod.description || ''}`.toLowerCase();
  const words = question.toLowerCase().split(/\s+/).filter((word) => word.length > 2);
  let score = 0;
  words.forEach((word) => { if (text.includes(word)) score += 8; });
  if (mod.project_type === 'mod' && (mod.categories || []).includes(requestedLoader)) score += 6;
  if ((mod.versions || []).includes(version)) score += 7;
  if ((mod.categories || []).some((category) => ['pvp', 'combat', 'utility', 'equipment'].includes(category))) score += 2;
  return score;
}

function getLocalAiRecommendation() {
  const styleName = styleSelect.options[styleSelect.selectedIndex].text;
  const priority = document.querySelector('.chip.selected')?.textContent.trim() || 'קרב';
  const question = aiQuestion.value.trim().toLowerCase();
  const selected = modSets[styleSelect.value];
  const selectedPriority = document.querySelector('.chip.selected')?.dataset.priority;
  const sortedMods = [...selected.mods].sort((a, b) => {
    if (styleSelect.value === 'crystal' && a.crystalOnly !== b.crystalOnly) return a.crystalOnly ? -1 : 1;
    if (a.tag.toLowerCase() === selectedPriority) return -1;
    if (b.tag.toLowerCase() === selectedPriority) return 1;
    return 0;
  });
  let focus = `${priority} ב-${styleName}`;
  if (question.includes('fps') || question.includes('תקוע') || question.includes('ביצוע')) focus = 'ביצועים חלקים ו-FPS יציב';
  if (question.includes('שריון') || question.includes('עמידות') || question.includes('קרב')) focus = 'מידע שיעזור לך בזמן הקרב';
  if (question.includes('קריסטל') || question.includes('crystal')) focus = 'שליטה ב-Crystal PvP';
  const picks = sortedMods.slice(0, styleSelect.value === 'crystal' ? 3 : 2).map((mod) => mod.name).join(', ');
  return `לפי מה שבחרת, הייתי מתחיל עם ${picks}. הם מתאימים ל${focus}. עכשיו אני מחפש גם מודים אמיתיים באינטרנט שמתאימים לזה.`;
}

function renderOnlineMods(hits) {
  aiResults.innerHTML = hits.map((mod, index) => {
    const description = (mod.description || 'מוד PvP שנמצא בחיפוש.').replace(/<[^>]*>/g, '').slice(0, 130);
    const loaders = (mod.categories || []).filter((category) => ['fabric', 'forge', 'quilt', 'neoforge'].includes(category)).join(', ') || 'לא צוין';
    const versions = (mod.versions || []).slice(-3).join(', ') || 'לא צוין';
    const downloads = mod.downloads ? `${mod.downloads.toLocaleString()} הורדות` : 'אין נתון הורדות';
    const projectPath = mod.project_type === 'modpack' ? 'modpack' : mod.project_type === 'resourcepack' ? 'resourcepack' : mod.project_type === 'shader' ? 'shader' : 'mod';
    const projectLabel = projectPath === 'modpack' ? 'MODPACK' : projectPath === 'resourcepack' ? 'RESOURCE PACK' : projectPath === 'shader' ? 'SHADER' : 'MOD';
    return `<a class="online-mod" href="https://modrinth.com/${projectPath}/${mod.slug}" target="_blank" rel="noopener"><span class="online-mod-rank">0${index + 1}</span><span><span class="online-mod-name">${mod.title}</span><br><span class="online-mod-meta">${projectLabel} · ${description}</span><span class="online-mod-details">${loaders} · גרסאות: ${versions} · ${downloads}</span></span><span class="banner-arrow">↗</span></a>`;
  }).join('');
}

function renderRedditResults(posts) {
  if (!posts.length) return '';
  return `<div class="source-heading">דיונים שמצאתי ב-Reddit</div>${posts.slice(0, 8).map((post, index) => `<a class="online-mod reddit-mod" href="https://www.reddit.com${post.permalink}" target="_blank" rel="noopener"><span class="online-mod-rank">R${index + 1}</span><span><span class="online-mod-name">${post.title}</span><span class="online-mod-details">r/${post.subreddit} · ${post.num_comments || 0} תגובות · דיון מהקהילה</span></span><span class="banner-arrow">↗</span></a>`).join('')}`;
}

function renderYoutubeSearch(query) {
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${query} minecraft pvp mod`)}`;
  return `<div class="source-heading">סרטוני YouTube למדריכים והדגמות</div><a class="online-mod youtube-mod" href="${youtubeUrl}" target="_blank" rel="noopener"><span class="online-mod-rank">YT</span><span><span class="online-mod-name">חפש סרטוני ${query}</span><span class="online-mod-details">מדריכי התקנה, בדיקות PvP והדגמות מהקהילה</span></span><span class="banner-arrow">↗</span></a>`;
}

async function askLocalAi() {
  aiAnswer.textContent = getLocalAiRecommendation();
  aiResults.innerHTML = '<span class="online-mod-meta">מחפש במאגר המודים ובדיוני הקהילה...</span>';
  const question = aiQuestion.value.trim();
  const searchQueries = getOnlineSearchQueries(question);
  const requestedType = contentTypeSelect.value;
  try {
    const facets = requestedType === 'all' ? '' : encodeURIComponent(`[["project_type:${requestedType}"]]`);
    const requestedLoader = loaderSelect.value;
    const version = document.querySelector('#versionLabel').textContent;
    const responses = await Promise.allSettled(searchQueries.map(async (query) => {
      const facetQuery = facets ? `&facets=${facets}` : '';
      const url = `https://api.modrinth.com/v2/search?query=${encodeURIComponent(query)}${facetQuery}&limit=100&index=relevance`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Online search failed');
      return response.json();
    }));
    const uniqueMods = new Map();
    responses.filter((result) => result.status === 'fulfilled').flatMap((result) => result.value.hits || []).forEach((mod) => {
      if ((requestedType === 'all' || mod.project_type === requestedType) && !uniqueMods.has(mod.project_id)) uniqueMods.set(mod.project_id, mod);
    });
    const hits = [...uniqueMods.values()]
      .sort((a, b) => scoreOnlineMod(b, question, requestedLoader, version) - scoreOnlineMod(a, question, requestedLoader, version))
      .slice(0, 12);
    let redditPosts = [];
    try {
      const redditQuery = encodeURIComponent(question || searchQueries[0]);
      const redditResponse = await fetch(`https://www.reddit.com/search.json?q=${redditQuery}&limit=25&raw_json=1`);
      const redditData = redditResponse.ok ? await redditResponse.json() : { data: { children: [] } };
      redditPosts = (redditData.data?.children || []).map((item) => item.data).filter((post) => post && post.title && post.permalink);
    } catch {
      redditPosts = [];
    }
    renderOnlineMods(hits);
    aiResults.insertAdjacentHTML('beforeend', renderRedditResults(redditPosts));
    aiResults.insertAdjacentHTML('beforeend', renderYoutubeSearch(question || searchQueries[0]));
    const contentLabel = requestedType === 'modpack' ? 'modpacks' : requestedType === 'resourcepack' ? 'resource packs' : requestedType === 'shader' ? 'shaders' : requestedType === 'all' ? 'סוגי תוכן' : 'מודים';
    aiAnswer.textContent += ` חיפשתי ${searchQueries.length} ניסוחים במאגר Modrinth, ב-Reddit וב-YouTube, ומצאתי ${hits.length} ${contentLabel} ו-${redditPosts.length} דיוני קהילה.`;
    aiTip.textContent = `ה-AI בדק עד ${searchQueries.length * 100} תוצאות, הסיר כפילויות ודירג לפי מילות השאלה, סוג התוכן, loader וגרסת ${version}. דיוני Reddit הם רעיונות מהקהילה, לכן בדוק תמיד את עמוד התוכן וההרשאות שלו.`;
  } catch {
    aiResults.innerHTML = '<span class="online-mod-meta">החיפוש באינטרנט לא זמין כרגע, אז הצגתי את ההמלצות המקומיות.</span>';
    aiTip.textContent = 'כשהחיפוש יחזור, ה-AI יציג גם loader, גרסאות ומספר הורדות לכל מוד.';
  }
}

function renderMods() {
  const selected = modSets[styleSelect.value];
  const priority = document.querySelector('.chip.selected')?.dataset.priority;
  const sortedMods = [...selected.mods].sort((a, b) => {
    if (styleSelect.value === 'crystal' && a.crystalOnly !== b.crystalOnly) return a.crystalOnly ? -1 : 1;
    if (a.tag.toLowerCase() === priority) return -1;
    if (b.tag.toLowerCase() === priority) return 1;
    return 0;
  });
  modGrid.innerHTML = sortedMods.map((mod) => `
    <article class="mod-card ${mod.featured ? 'featured' : ''}">
      <span class="card-label">${mod.label}</span>
      <span class="card-icon">${mod.icon}</span>
      <h3>${mod.name}</h3>
      <p>${mod.description}</p>
      <span class="tag">${mod.tag}</span>
    </article>
  `).join('');
  bannerText.textContent = `${selected.banner} (${loaderSelect.value.charAt(0).toUpperCase() + loaderSelect.value.slice(1)})`;
  resultStatus.textContent = `${sortedMods.length} התאמות נמצאו`;
  resultNumber.textContent = String(sortedMods.length).padStart(2, '0');
}

priorityChips.forEach((chip) => chip.addEventListener('click', () => {
  priorityChips.forEach((item) => item.classList.remove('selected'));
  chip.classList.add('selected');
  renderMods();
}));
styleSelect.addEventListener('change', renderMods);
loaderSelect.addEventListener('change', renderMods);
contentTypeSelect.addEventListener('change', () => {
  aiTip.textContent = 'ה-AI יחפש את סוג התוכן שבחרת ב-Modrinth, יחד עם Reddit ו-YouTube.';
});
document.querySelector('#searchButton').addEventListener('click', () => {
  renderMods();
  document.querySelector('.results-panel').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
document.querySelector('#shareButton').addEventListener('click', async () => {
  const shareText = `הסט שלי ב-Blockwise: ${styleSelect.options[styleSelect.selectedIndex].text}`;
  try {
    await navigator.clipboard.writeText(shareText);
    document.querySelector('#shareButton').innerHTML = 'הסט הועתק <span>✓</span>';
    setTimeout(() => { document.querySelector('#shareButton').innerHTML = 'שיתוף הסט <span>↗</span>'; }, 1800);
  } catch {
    window.prompt('העתק את הסט שלך:', shareText);
  }
});
document.querySelector('#versionButton').addEventListener('click', () => {
  const label = document.querySelector('#versionLabel');
  label.textContent = label.textContent === '1.21.1' ? '1.20.4' : '1.21.1';
});
document.querySelector('#aiAskButton').addEventListener('click', askLocalAi);
aiQuestion.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') askLocalAi();
});
renderMods();
