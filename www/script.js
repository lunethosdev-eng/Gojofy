/* ===== CONFIG ===== */
const API_KEY = 'AIzaSyAsjo41B4fe5JJqG_a8eJODESlj_qDsSF0';
const OPENROUTER_KEY = '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';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const CHROMO_MODEL = 'google/gemini-2.0-flash-001';
const CHANGELOG_KEY = 'gojofy_changelog_v02';
const STORE = 'gojofy_v6';

/* ===== AUDIO ENGINES / DOWNLOAD ===== */
const PIPED_INSTANCES = [
  'https://api.piped.private.coffee',
  'https://pipedapi.kavin.rocks',
  'https://pipedapi.adminforge.de',
  'https://pipedapi.leptons.xyz',
  'https://pipedapi.reallyaweso.me',
  'https://pipedapi.ducks.party'
];
const USER_BACKEND = 'https://backend-1-k2na.onrender.com';

/* ===== DEMO ===== */
const DEMO = [
  { id: '4NRXx6U8ABQ', title: 'Blinding Lights', artist: 'The Weeknd', thumb: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg', high: 'https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg' },
  { id: 'JGwWNGJdvx8', title: 'Shape of You', artist: 'Ed Sheeran', thumb: 'https://i.ytimg.com/vi/JGwWNGJdvx8/mqdefault.jpg', high: 'https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg' },
  { id: 'kJQP7kiw5Fk', title: 'Despacito', artist: 'Luis Fonsi', thumb: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg', high: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg' },
  { id: 'OPf0YbXqDm0', title: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', thumb: 'https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg', high: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg' },
  { id: 'fJ9rUzIMcZQ', title: 'Bohemian Rhapsody', artist: 'Queen', thumb: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg', high: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg' },
  { id: 'hT_nvWreIhg', title: 'Counting Stars', artist: 'OneRepublic', thumb: 'https://i.ytimg.com/vi/hT_nvWreIhg/mqdefault.jpg', high: 'https://i.ytimg.com/vi/hT_nvWreIhg/hqdefault.jpg' },
  { id: 'YQHsXMglC9A', title: 'Hello', artist: 'Adele', thumb: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg', high: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg' },
  { id: '2Vv-BfVoq4I', title: 'Perfect', artist: 'Ed Sheeran', thumb: 'https://i.ytimg.com/vi/2Vv-BfVoq4I/mqdefault.jpg', high: 'https://i.ytimg.com/vi/2Vv-BfVoq4I/hqdefault.jpg' },
  { id: 'DyDfgMOUjCI', title: 'bad guy', artist: 'Billie Eilish', thumb: 'https://i.ytimg.com/vi/DyDfgMOUjCI/mqdefault.jpg', high: 'https://i.ytimg.com/vi/DyDfgMOUjCI/hqdefault.jpg' },
  { id: 'gniWZxKqG3s', title: 'As It Was', artist: 'Harry Styles', thumb: 'https://i.ytimg.com/vi/gniWZxKqG3s/mqdefault.jpg', high: 'https://i.ytimg.com/vi/gniWZxKqG3s/hqdefault.jpg' },
  { id: 'H5v3kku4y6Q', title: 'Flowers', artist: 'Miley Cyrus', thumb: 'https://i.ytimg.com/vi/H5v3kku4y6Q/mqdefault.jpg', high: 'https://i.ytimg.com/vi/H5v3kku4y6Q/hqdefault.jpg' },
  { id: 'a9cyG_yfh1k', title: 'Anti-Hero', artist: 'Taylor Swift', thumb: 'https://i.ytimg.com/vi/a9cyG_yfh1k/mqdefault.jpg', high: 'https://i.ytimg.com/vi/a9cyG_yfh1k/hqdefault.jpg' },
  { id: 'tu4Hgmlcd9c', title: 'TQG', artist: 'KAROL G, Shakira', thumb: 'https://i.ytimg.com/vi/tu4Hgmlcd9c/mqdefault.jpg', high: 'https://i.ytimg.com/vi/tu4Hgmlcd9c/hqdefault.jpg' },
  { id: 'p7FCgw_GlWc', title: 'Provenza', artist: 'KAROL G', thumb: 'https://i.ytimg.com/vi/p7FCgw_GlWc/mqdefault.jpg', high: 'https://i.ytimg.com/vi/p7FCgw_GlWc/hqdefault.jpg' },
  { id: '7wtfhZwyrcc', title: 'Believer', artist: 'Imagine Dragons', thumb: 'https://i.ytimg.com/vi/7wtfhZwyrcc/mqdefault.jpg', high: 'https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg' },
  { id: 'hLQl3WQQoQ0', title: 'Someone You Loved', artist: 'Lewis Capaldi', thumb: 'https://i.ytimg.com/vi/hLQl3WQQoQ0/mqdefault.jpg', high: 'https://i.ytimg.com/vi/hLQl3WQQoQ0/hqdefault.jpg' },
  { id: 'VDvpDEvjbz4', title: 'drivers license', artist: 'Olivia Rodrigo', thumb: 'https://i.ytimg.com/vi/VDvpDEvjbz4/mqdefault.jpg', high: 'https://i.ytimg.com/vi/VDvpDEvjbz4/hqdefault.jpg' },
  { id: 'RBumgq5yVrA', title: 'Someone Like You', artist: 'Adele', thumb: 'https://i.ytimg.com/vi/RBumgq5yVrA/mqdefault.jpg', high: 'https://i.ytimg.com/vi/RBumgq5yVrA/hqdefault.jpg' },
  { id: '60ItHLz5WEA', title: 'Faded', artist: 'Alan Walker', thumb: 'https://i.ytimg.com/vi/60ItHLz5WEA/mqdefault.jpg', high: 'https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg' },
  { id: 'lp-EO5I60KA', title: 'Thinking Out Loud', artist: 'Ed Sheeran', thumb: 'https://i.ytimg.com/vi/lp-EO5I60KA/mqdefault.jpg', high: 'https://i.ytimg.com/vi/lp-EO5I60KA/hqdefault.jpg' },
  { id: 'RgKAFK5djSk', title: 'See You Again', artist: 'Wiz Khalifa ft. Charlie Puth', thumb: 'https://i.ytimg.com/vi/RgKAFK5djSk/mqdefault.jpg', high: 'https://i.ytimg.com/vi/RgKAFK5djSk/hqdefault.jpg' },
  { id: 'CevxZvSJLk8', title: 'Roar', artist: 'Katy Perry', thumb: 'https://i.ytimg.com/vi/CevxZvSJLk8/mqdefault.jpg', high: 'https://i.ytimg.com/vi/CevxZvSJLk8/hqdefault.jpg' },
  { id: 'kOkQ4T5WO9E', title: "God's Plan", artist: 'Drake', thumb: 'https://i.ytimg.com/vi/kOkQ4T5WO9E/mqdefault.jpg', high: 'https://i.ytimg.com/vi/kOkQ4T5WO9E/hqdefault.jpg' },
  { id: '09R8_2nJtjg', title: 'Sugar', artist: 'Maroon 5', thumb: 'https://i.ytimg.com/vi/09R8_2nJtjg/mqdefault.jpg', high: 'https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg' },
  { id: 'ru0K8uYEZWw', title: "Can't Stop the Feeling", artist: 'Justin Timberlake', thumb: 'https://i.ytimg.com/vi/ru0K8uYEZWw/mqdefault.jpg', high: 'https://i.ytimg.com/vi/ru0K8uYEZWw/hqdefault.jpg' },
  { id: 'pt8VYOfr8As', title: 'Lover Girl', artist: 'Laufey', thumb: 'https://i.ytimg.com/vi/pt8VYOfr8As/mqdefault.jpg', high: 'https://i.ytimg.com/vi/pt8VYOfr8As/hqdefault.jpg' },
  { id: 'i9fDnj2USYQ', title: 'From The Start', artist: 'Laufey', thumb: 'https://i.ytimg.com/vi/i9fDnj2USYQ/mqdefault.jpg', high: 'https://i.ytimg.com/vi/i9fDnj2USYQ/hqdefault.jpg' }
];

const FEATURED = [
  { title: 'Happy Latin Pop', sub: 'KAROL G, Sebastián Yatra…', q: 'latin pop', img: 'https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg' },
  { title: "Today's Happy Pop", sub: 'Taylor Swift, Shakira…', q: 'happy pop', img: 'https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg' },
  { title: "Éxitos De Los '80s", sub: 'Luis Miguel, José José…', q: '80s hits', img: 'https://i.ytimg.com/vi/btPJPFnesV4/hqdefault.jpg' },
  { title: 'Los Himnos', sub: 'Bad Bunny, Selena, KAROL G', q: 'reggaeton', img: 'https://i.ytimg.com/vi/p7FCgw_GlWc/hqdefault.jpg' }
];

const MOODS = [
  { n: 'Chill', q: 'chill', c: 'linear-gradient(135deg,#ffb3c6,#ff8fab)' },
  { n: 'Christmas', q: 'christmas', c: 'linear-gradient(135deg,#c8e6c9,#81c784)' },
  { n: 'Commute', q: 'drive', c: 'linear-gradient(135deg,#ffd6e0,#f8bbd0)' },
  { n: 'Energize', q: 'energy', c: 'linear-gradient(135deg,#e1bee7,#ce93d8)' },
  { n: 'Feel good', q: 'happy', c: 'linear-gradient(135deg,#ffccbc,#ffab91)' },
  { n: 'Focus', q: 'focus', c: 'linear-gradient(135deg,#b3e5fc,#81d4fa)' },
  { n: 'Gaming', q: 'game', c: 'linear-gradient(135deg,#c8e6c9,#a5d6a7)' },
  { n: 'Party', q: 'party', c: 'linear-gradient(135deg,#f8bbd0,#f48fb1)' },
  { n: 'Romance', q: 'love', c: 'linear-gradient(135deg,#f8bbd0,#e1bee7)' },
  { n: 'Sad', q: 'sad', c: 'linear-gradient(135deg,#b0bec5,#90a4ae)' },
  { n: 'Sleep', q: 'sleep', c: 'linear-gradient(135deg,#b3e5fc,#90caf9)' },
  { n: 'Workout', q: 'workout', c: 'linear-gradient(135deg,#ffab91,#ff8a65)' }
];

const GENRES = [
  { n: 'Pop', q: 'pop', c: 'linear-gradient(135deg,#ffb3c6,#ff8fab)' },
  { n: 'Pop Latino', q: 'latin', c: 'linear-gradient(135deg,#f8bbd0,#f48fb1)' },
  { n: 'R&B', q: 'rnb', c: 'linear-gradient(135deg,#e1bee7,#ce93d8)' },
  { n: 'Rock', q: 'rock', c: 'linear-gradient(135deg,#b0bec5,#78909c)' },
  { n: 'Urbano', q: 'reggaeton', c: 'linear-gradient(135deg,#ffccbc,#ffab91)' },
  { n: 'Dance', q: 'dance', c: 'linear-gradient(135deg,#b3e5fc,#81d4fa)' },
  { n: 'Tropical', q: 'tropical', c: 'linear-gradient(135deg,#c8e6c9,#a5d6a7)' },
  { n: 'Classical', q: 'classical', c: 'linear-gradient(135deg,#f5f5f5,#e0e0e0)' }
];

const S = {
  track: null, list: [], idx: 0, playing: false,
  player: null, ready: false,
  audioEl: null,
  usingStream: false,
  favs: [], playlists: [], recent: [],
  theme: 'dark', openPl: null,
  lyrics: [], lastLyricIdx: -1,
  prefs: { artists: {}, tags: {}, plays: 0 },
  audioEngine: 'backend'
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function toast(m, ms = 2200) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = m;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), ms);
}

function save() {
  localStorage.setItem(STORE, JSON.stringify({
    favs: S.favs,
    playlists: S.playlists,
    recent: S.recent,
    theme: S.theme,
    prefs: S.prefs,
    audioEngine: S.audioEngine || 'backend'
  }));
}

function load() {
  try {
    const d = JSON.parse(localStorage.getItem(STORE) || '{}');
    S.favs = d.favs || [];
    S.playlists = d.playlists || [];
    S.recent = d.recent || [];
    S.theme = d.theme || 'dark';
    S.prefs = d.prefs || { artists: {}, tags: {}, plays: 0 };
    S.audioEngine = d.audioEngine || 'backend';
    if (S.theme === 'light') document.body.classList.add('light');
  } catch (_) {}
}

function greet() {
  const h = new Date().getHours();
  if (h < 12) return 'Good Morning';
  if (h < 19) return 'Good Afternoon';
  return 'Good Evening';
}

function fmt(s) {
  if (!s || isNaN(s)) return '0:00';
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

function clean(t) {
  return (t || '').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"');
}

function demoSearch(query) {
  const q = (query || '').toLowerCase().trim();
  if (!q) return DEMO.slice();
  const words = q.split(/\s+/).filter(Boolean);
  const scored = DEMO.filter(Boolean).map(t => {
    const hay = ((t.title || '') + ' ' + (t.artist || '')).toLowerCase();
    let score = 0;
    for (const w of words) {
      if (hay.includes(w)) score += 3;
      else if (t.title.toLowerCase().includes(w) || t.artist.toLowerCase().includes(w)) score += 2;
      else if (words.length === 1 && (hay.includes(w.slice(0, Math.min(4, w.length))))) score += 1;
    }
    if (t.title.toLowerCase() === q) score += 10;
    if (t.title.toLowerCase().startsWith(q)) score += 5;
    return { t, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  let hits = scored.map(x => x.t);

  if (hits.length < 2) {
    const map = {
      chill: ['Counting Stars', 'Perfect', 'Thinking Out Loud', 'Someone You Loved'],
      sleep: ['Perfect', 'Someone Like You', 'Hello'],
      sad: ['Someone Like You', 'Hello', 'drivers license', 'Someone You Loved'],
      party: ['Uptown Funk', 'Despacito', 'Blinding Lights'],
      energize: ['Believer', 'Blinding Lights'],
      workout: ['Believer', 'Blinding Lights'],
      romance: ['Perfect', 'Thinking Out Loud', 'Someone Like You'],
      latin: ['Despacito', 'TQG', 'Provenza'],
      pop: ['Blinding Lights', 'Shape of You', 'Anti-Hero', 'As It Was']
    };
    for (const [k, titles] of Object.entries(map)) {
      if (q.includes(k)) {
        hits = DEMO.filter(t => t && titles.some(ti => t.title.toLowerCase().includes(ti.toLowerCase())));
        break;
      }
    }
  }
  return hits.length ? hits : DEMO.slice(0, 10);
}

async function searchYT(query, max = 12) {
  const q = (query || '').trim();
  if (!q) return [];

  function mapPipedItems(items) {
    return (items || [])
      .filter(it => (it.type === 'stream' || it.url || it.id) && (it.url || it.id))
      .map(it => {
        let id = it.id;
        if (!id && it.url) {
          const m = String(it.url).match(/(?:v=|\/watch\?v=|youtu\.be\/)?([a-zA-Z0-9_-]{11})/);
          id = m ? m[1] : String(it.url).replace(/^\/watch\?v=/, '').split('&')[0];
        }
        if (!id || id.length < 10) return null;
        const high = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        const thumb = it.thumbnail || `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
        return {
          id,
          title: clean(it.title || 'Sin título'),
          artist: clean(it.uploaderName || it.uploader || it.author || 'YouTube'),
          thumb: typeof thumb === 'string' && thumb.includes('ytimg') ? thumb : high.replace('hqdefault', 'mqdefault'),
          high
        };
      })
      .filter(Boolean)
      .slice(0, max);
  }

  function withTimeout(ms) {
    const c = new AbortController();
    setTimeout(() => c.abort(), ms);
    return c.signal;
  }

  for (const host of PIPED_INSTANCES) {
    try {
      const r = await fetch(host + '/search?q=' + encodeURIComponent(q) + '&filter=videos', { signal: withTimeout(6000) });
      if (!r.ok) continue;
      const data = await r.json();
      const items = data.items || data || [];
      const mapped = mapPipedItems(items);
      if (mapped.length) return mapped;
    } catch (_) {}
  }

  if (API_KEY && API_KEY.length > 20) {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${max}&q=${encodeURIComponent(q)}&key=${API_KEY}`;
      const r = await fetch(url, { signal: withTimeout(6000) });
      const j = await r.json();
      if (r.ok && j.items?.length) {
        return j.items.filter(it => it.id?.videoId).map(it => ({
          id: it.id.videoId,
          title: clean(it.snippet.title),
          artist: clean(it.snippet.channelTitle),
          thumb: (it.snippet.thumbnails.medium || it.snippet.thumbnails.default).url,
          high: (it.snippet.thumbnails.high || it.snippet.thumbnails.medium).url
        }));
      }
    } catch (_) {}
  }

  return demoSearch(q);
}

/* ===== LYRICS lrclib ===== */
S.lyricOffset = 0;

async function fetchLyrics(artist, title) {
  const body = $('#lyrics-body');
  if (!body) return;
  body.innerHTML = '<p class="lyrics-hint">Buscando letras…</p>';
  S.lyrics = [];
  S.lastLyricIdx = -1;
  S.lyricOffset = 0;
  try {
    const artistClean = (artist || '').replace(/\s*[-–|].*$/, '').replace(/\s*ft\.?\s*.*/i, '').replace(/\s*feat\.?\s*.*/i, '').replace(/,.*$/, '').replace(/\(.*?\)/g, '').trim();
    const titleClean = (title || '').replace(/\(.*?\)/g, '').replace(/\[.*?\]/g, '').replace(/\s*official.*$/i, '').replace(/\s*video.*$/i, '').replace(/\s*lyrics.*$/i, '').replace(/\s*audio.*$/i, '').trim();

    let data = null;
    const sr = await fetch('https://lrclib.net/api/search?q=' + encodeURIComponent(titleClean + ' ' + artistClean));
    const arr = await sr.json();
    if (Array.isArray(arr) && arr.length) {
      data = arr[0];
      if (data.id) {
        const r = await fetch('https://lrclib.net/api/get/' + data.id);
        if (r.ok) data = await r.json();
      }
    }

    if (data && data.syncedLyrics) {
      S.lyrics = parseLRC(data.syncedLyrics);
      S.lyricOffset = 0.25;
      renderLyrics();
      const s = $('#lyrics-src');
      if (s) s.textContent = 'lrclib · synced';
    } else if (data && data.plainLyrics) {
      body.innerHTML = data.plainLyrics.split('\n').map(l => `<p class="lyric-line">${l || '&nbsp;'}</p>`).join('');
      const s = $('#lyrics-src');
      if (s) s.textContent = 'lrclib';
    } else {
      body.innerHTML = '<p class="lyrics-hint">No hay letras para esta canción</p>';
    }
  } catch (_) {
    body.innerHTML = '<p class="lyrics-hint">Letras no disponibles</p>';
  }
}

function parseLRC(lrc) {
  const lines = [];
  const re = /\[(\d{1,2}):(\d{2})(?:\.(\d{1,3}))?\]/g;
  String(lrc).split('\n').forEach(raw => {
    const text = raw.replace(re, '').trim();
    let m;
    const times = [];
    re.lastIndex = 0;
    while ((m = re.exec(raw)) !== null) {
      const min = parseInt(m[1], 10);
      const sec = parseInt(m[2], 10);
      let ms = m[3] || '0';
      if (ms.length === 1) ms = parseFloat('0.' + ms);
      else if (ms.length === 2) ms = parseFloat('0.' + ms);
      else ms = parseInt(ms, 10) / 1000;
      times.push(min * 60 + sec + ms);
    }
    times.forEach(t => {
      if (text) lines.push({ t, text });
    });
  });
  lines.sort((a, b) => a.t - b.t);
  return lines;
}

function renderLyrics() {
  const body = $('#lyrics-body');
  if (!body || !S.lyrics.length) return;
  body.innerHTML = S.lyrics.map((l, i) => `<p data-i="${i}" class="lyric-line">${escapeHtml(l.text) || '…'}</p>`).join('');
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ===== MEDIA SESSION & BACKGROUND PLAY ===== */
function setupMediaSession(track) {
  if (!('mediaSession' in navigator) || !track) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'Gojofy',
      artist: track.artist || '',
      album: 'Gojofy Music',
      artwork: [
        { src: track.thumb || track.high || '', sizes: '96x96', type: 'image/jpeg' },
        { src: track.high || track.thumb || '', sizes: '512x512', type: 'image/jpeg' }
      ].filter(a => a.src)
    });
    navigator.mediaSession.playbackState = S.playing ? 'playing' : 'paused';

    navigator.mediaSession.setActionHandler('play', () => toggle());
    navigator.mediaSession.setActionHandler('pause', () => toggle());
    navigator.mediaSession.setActionHandler('previoustrack', () => prev());
    navigator.mediaSession.setActionHandler('nexttrack', () => next());
    navigator.mediaSession.setActionHandler('seekto', (d) => {
      if (d.seekTime == null) return;
      if (S.usingStream && S.audioEl) {
        try { S.audioEl.currentTime = d.seekTime; } catch (_) {}
      } else if (S.player) {
        try { S.player.seekTo(d.seekTime, true); } catch (_) {}
      }
    });
  } catch (_) {}
}

let wakeLock = null;
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator && !wakeLock) {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    }
  } catch (_) {}
}

function releaseWakeLock() {
  if (wakeLock) {
    try { wakeLock.release(); } catch (_) {}
    wakeLock = null;
  }
}

/* ===== YOUTUBE IFRAME (FALLBACK) ===== */
function createYTPlayer() {
  if (S.player || !window.YT || !YT.Player) return;
  if (!document.getElementById('yt')) return;

  S.player = new YT.Player('yt', {
    height: '112',
    width: '200',
    host: 'https://www.youtube.com',
    playerVars: {
      autoplay: 0,
      controls: 1,
      playsinline: 1,
      rel: 0,
      enablejsapi: 1
    },
    events: {
      onReady(e) {
        S.ready = true;
        startProgressLoop();
        if (S.pendingPlay) {
          const p = S.pendingPlay;
          S.pendingPlay = null;
          play(p.track, p.list, p.index);
        }
      },
      onStateChange(e) {
        if (e.data === 1) {
          S.playing = true;
          uiPlay(true);
        } else if (e.data === 2) {
          S.playing = false;
          uiPlay(false);
        } else if (e.data === 0) {
          next();
        }
      },
      onError() {
        next();
      }
    }
  });
}
window.onYouTubeIframeAPIReady = createYTPlayer;

function setCover(track) {
  const url = track.high || track.thumb;
  const cover = $('#full-cover');
  if (cover) cover.src = url;
  const mi = $('#mini-img');
  if (mi) mi.src = track.thumb || url;
  const bg = $('#full-bg');
  if (bg) bg.style.backgroundImage = `url(${url})`;
}

function ensureAudioEl() {
  if (S.audioEl) return S.audioEl;
  const a = new Audio();
  a.preload = 'auto';
  a.crossOrigin = 'anonymous';

  a.addEventListener('playing', () => {
    S.playing = true;
    S.usingStream = true;
    uiPlay(true);
    setupMediaSession(S.track);
    requestWakeLock();
  });
  a.addEventListener('pause', () => {
    if (S.usingStream) {
      S.playing = false;
      uiPlay(false);
    }
  });
  a.addEventListener('ended', () => {
    if (S.usingStream) next();
  });
  a.addEventListener('timeupdate', () => {
    if (!S.usingStream || !S.audioEl) return;
    const dur = S.audioEl.duration || 0;
    const cur = S.audioEl.currentTime || 0;
    if (dur > 0) {
      const p = Math.min(100, (cur / dur) * 100);
      const mf = $('#mini-fill');
      const ff = $('#ffill');
      if (mf) mf.style.width = p + '%';
      if (ff) ff.style.width = p + '%';
      const tc = $('#tcur');
      const td = $('#tdur');
      if (tc) tc.textContent = fmt(cur);
      if (td) td.textContent = fmt(dur);
      if (S.playing) syncLyricsBoth(cur);
    }
  });
  a.addEventListener('error', () => {
    if (S.usingStream && S.track) {
      S.usingStream = false;
      playViaYouTube(S.track);
    }
  });
  S.audioEl = a;
  return a;
}

/* ===== EXTRACTION & AUDIO ENGINE (BACKGROUND AUDIO) ===== */
async function fetchAudioUrl(videoId) {
  const tryJson = async (url, timeout = 12000) => {
    const res = await fetch(url, { signal: AbortSignal.timeout(timeout) });
    if (!res.ok) throw new Error('bad status: ' + res.status);
    return res.json();
  };

  // 1) Backend personal en Render (timeout extendido por si despierta del estado suspendido)
  try {
    const data = await tryJson(USER_BACKEND + '/api/yt-audio?id=' + encodeURIComponent(videoId), 22000);
    if (data && data.ok && (data.streamUrl || data.url)) {
      return {
        url: data.streamUrl || (USER_BACKEND + '/api/yt-stream?id=' + encodeURIComponent(videoId)),
        directUrl: data.url || null,
        mime: data.mime || 'audio/mp4',
        source: 'backend'
      };
    }
  } catch (_) {}

  // 2) Piped Direct Stream
  for (const base of PIPED_INSTANCES) {
    try {
      const data = await tryJson(base + '/streams/' + videoId, 7000);
      const streams = data.audioStreams || [];
      if (streams.length) {
        streams.sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));
        const best = streams.find(s => /mp4|m4a/i.test(s.mimeType || '')) || streams[0];
        if (best && best.url) {
          return { url: best.url, mime: best.mimeType || 'audio/mp4', source: 'piped' };
        }
      }
    } catch (_) {}
  }

  // 3) Invidious Audio Stream Fallback
  const invHosts = ['https://inv.nadeko.net', 'https://yewtu.be', 'https://invidious.privacyredirect.com'];
  for (const host of invHosts) {
    try {
      const data = await tryJson(host + '/api/v1/videos/' + videoId, 6000);
      const audio = (data.adaptiveFormats || []).find(f => f.type && f.type.includes('audio'));
      if (audio && audio.url) {
        return { url: audio.url, mime: audio.type, source: 'invidious' };
      }
    } catch (_) {}
  }

  return null;
}

async function playViaStream(track) {
  toast('Cargando audio…', 3000);
  const info = await fetchAudioUrl(track.id);
  if (!info || !info.url) return false;

  try { if (S.player) S.player.pauseVideo(); } catch (_) {}

  const a = ensureAudioEl();
  try { a.pause(); } catch (_) {}
  a.src = info.url;
  S.usingStream = true;
  try {
    await a.play();
    S.playing = true;
    uiPlay(true);
    setupMediaSession(track);
    toast('Sonando ✓ (Background activo)', 2000);
    return true;
  } catch (e) {
    S.usingStream = false;
    return false;
  }
}

function playViaYouTube(track) {
  S.usingStream = false;
  if (S.audioEl) {
    try { S.audioEl.pause(); } catch (_) {}
  }
  if (!S.player || !S.ready) {
    if (!S.player) createYTPlayer();
    S.pendingPlay = { track, list: S.list, index: S.idx };
    return;
  }
  try {
    S.player.loadVideoById(track.id);
    S.player.playVideo();
  } catch (_) {}
}

function play(track, list, index) {
  if (!track || !track.id) return;
  S.track = track;
  if (list) {
    S.list = list;
    S.idx = index ?? 0;
  }

  requestWakeLock();
  setCover(track);
  setupMediaSession(track);
  $('#mini-title').textContent = track.title;
  $('#mini-artist').textContent = track.artist;
  $('#full-title').textContent = track.title;
  $('#full-artist').textContent = track.artist;
  $('#mini').classList.remove('hidden');
  uiPlay(false);
  updateLike();
  fetchLyrics(track.artist, track.title);

  learnFromTrack(track);
  S.recent = [track, ...S.recent.filter(x => x.id !== track.id)].slice(0, 40);
  save();
  renderRecent();

  (async () => {
    const ok = await playViaStream(track);
    if (!ok) {
      playViaYouTube(track);
    }
  })();
}

function toggle() {
  if (!S.track) return;
  if (S.usingStream && S.audioEl) {
    if (!S.audioEl.paused) {
      S.audioEl.pause();
      S.playing = false;
      uiPlay(false);
      releaseWakeLock();
    } else {
      S.audioEl.play().catch(() => {});
      requestWakeLock();
    }
    return;
  }

  if (!S.player || !S.ready) {
    play(S.track, S.list, S.idx);
    return;
  }
  try {
    const st = S.player.getPlayerState();
    if (st === 1 || st === 3) {
      S.player.pauseVideo();
      S.playing = false;
      uiPlay(false);
      releaseWakeLock();
    } else {
      S.player.playVideo();
      requestWakeLock();
    }
  } catch (_) {
    play(S.track, S.list, S.idx);
  }
}

let progressTimer = null;
function startProgressLoop() {
  if (progressTimer) return;
  progressTimer = setInterval(() => {
    if (S.usingStream) return;
    if (!S.player || !S.ready) return;
    try {
      const dur = S.player.getDuration() || 0;
      const cur = S.player.getCurrentTime() || 0;
      if (dur > 0) {
        const p = Math.min(100, (cur / dur) * 100);
        const mf = $('#mini-fill');
        const ff = $('#ffill');
        if (mf) mf.style.width = p + '%';
        if (ff) ff.style.width = p + '%';
        const tc = $('#tcur');
        const td = $('#tdur');
        if (tc) tc.textContent = fmt(cur);
        if (td) td.textContent = fmt(dur);
        if (S.playing) syncLyricsBoth(cur);
      }
    } catch (_) {}
  }, 300);
}

function next() {
  if (!S.list.length) return;
  S.idx = (S.idx + 1) % S.list.length;
  play(S.list[S.idx], S.list, S.idx);
}

function prev() {
  if (!S.list.length) return;
  S.idx = (S.idx - 1 + S.list.length) % S.list.length;
  play(S.list[S.idx], S.list, S.idx);
}

function uiPlay(on) {
  const set = (root, playing) => {
    if (!root) return;
    const p = root.querySelector('.ic-play');
    const pa = root.querySelector('.ic-pause');
    if (p && pa) {
      p.classList.toggle('hidden', playing);
      pa.classList.toggle('hidden', !playing);
    }
  };
  set($('#mini-play'), on);
  set($('#btn-play'), on);
}

function updateLike() {
  const liked = S.track && S.favs.some(f => f.id === S.track.id);
  $('#btn-like')?.classList.toggle('liked', !!liked);
  $('#mini-like')?.classList.toggle('liked', !!liked);
}

function toggleLike() {
  if (!S.track) return;
  const i = S.favs.findIndex(f => f.id === S.track.id);
  if (i >= 0) { S.favs.splice(i, 1); toast('Quitado de favoritos'); }
  else { S.favs.unshift(S.track); toast('Añadido a favoritos'); }
  save(); updateLike();
}

/* ===== PLAYLISTS ===== */
function addToPl() {
  if (!S.track) { toast('No hay canción'); return; }
  if (!S.playlists.length) {
    $('#modal').classList.remove('hidden');
    $('#modal').classList.add('show');
    $('#pl-input').value = '';
    $('#pl-input').dataset.afterCreate = '1';
    setTimeout(() => $('#pl-input')?.focus(), 80);
    toast('Crea tu primera playlist');
    return;
  }
  openPlaylistPicker();
}

function addTrackToPlaylist(plId) {
  const pl = S.playlists.find(p => p.id === plId);
  if (!pl || !S.track) return;
  if (pl.tracks.some(t => t.id === S.track.id)) {
    toast('Ya está en "' + pl.name + '"');
    closePlaylistPicker();
    return;
  }
  pl.tracks.push({ ...S.track });
  save();
  toast('Añadida a "' + pl.name + '"');
  closePlaylistPicker();
  if (S.openPl === plId) openPl(plId);
  renderPlList();
}

function openPlaylistPicker() {
  const el = $('#pl-picker');
  if (!el) return;
  $('#picker-track').textContent = S.track ? (S.track.title + ' — ' + S.track.artist) : '';
  const list = $('#picker-list');
  list.innerHTML = '';
  S.playlists.forEach(pl => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'picker-item';
    b.innerHTML = `<div class="pi-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>
      <div><div class="pi-name">${pl.name}</div><div class="pi-count">${pl.tracks.length} canciones</div></div>`;
    b.addEventListener('click', () => addTrackToPlaylist(pl.id));
    list.appendChild(b);
  });
  el.classList.remove('hidden');
  el.classList.add('show');
}

function closePlaylistPicker() {
  const el = $('#pl-picker');
  if (!el) return;
  el.classList.remove('show');
  setTimeout(() => el.classList.add('hidden'), 250);
}

function createPl(name) {
  name = (name || '').trim();
  if (!name) return;
  const id = 'pl' + Date.now();
  S.playlists.unshift({ id, name, tracks: [] });
  save(); renderPlList();
  toast('Playlist creada');
  const inp = $('#pl-input');
  if (inp?.dataset.afterCreate === '1' && S.track) {
    inp.dataset.afterCreate = '';
    addTrackToPlaylist(id);
  }
}

function openPl(id) {
  const pl = S.playlists.find(p => p.id === id);
  if (!pl) return;
  S.openPl = id;
  $('#pl-detail').classList.remove('hidden');
  $$('#library > :not(#pl-detail)').forEach(el => el.classList.add('hidden'));
  $('#pl-name').textContent = pl.name;
  $('#pl-count').textContent = pl.tracks.length + ' canciones';
  renderPlTracks(pl);
}

function closePl() {
  S.openPl = null;
  $('#pl-detail').classList.add('hidden');
  $$('#library > :not(#pl-detail)').forEach(el => el.classList.remove('hidden'));
}

function renderPlTracks(pl) {
  const box = $('#pl-tracks');
  box.innerHTML = '';
  if (!pl.tracks.length) {
    box.innerHTML = '<p class="empty">Vacía — usa + Playlist en el player</p>';
    return;
  }
  pl.tracks.forEach((t, i) => {
    const d = document.createElement('div');
    d.className = 'ptrack';
    d.innerHTML = `
      <img src="${t.thumb}" alt="" />
      <div class="meta"><div class="t">${t.title}</div><div class="a">${t.artist}</div></div>
      <div class="acts">
        <button type="button" class="mbtn" data-m="del" aria-label="Remove">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>`;
    d.querySelector('img').addEventListener('click', () => play(t, pl.tracks, i));
    d.querySelector('.meta').addEventListener('click', () => play(t, pl.tracks, i));
    d.querySelector('.mbtn').addEventListener('click', e => {
      e.stopPropagation();
      pl.tracks.splice(i, 1); save();
      $('#pl-count').textContent = pl.tracks.length + ' canciones';
      renderPlTracks(pl);
    });
    box.appendChild(d);
  });
}

/* ===== RENDERS ===== */
function card(f) {
  const d = document.createElement('div');
  d.className = 'pcard';
  d.innerHTML = `
    <div class="pcard-art">
      <img src="${f.img}" alt="" loading="lazy" />
      <div class="ov">${f.title}</div>
    </div>
    <div class="pcard-t">${f.title}</div>
    <div class="pcard-s">${f.sub}</div>`;
  d.addEventListener('click', async () => {
    toast('Cargando…');
    const list = await searchYT(f.q, 12);
    if (list.length) play(list[0], list, 0);
  });
  return d;
}

function gcard(item) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'gcard';
  b.style.background = item.c;
  b.innerHTML = `<span>${item.n}</span><span class="pi"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>`;
  b.addEventListener('click', async () => {
    toast(item.n + '…');
    const list = await searchYT(item.q, 12);
    if (list.length) play(list[0], list, 0);
  });
  return b;
}

function songItem(t, list, i) {
  const d = document.createElement('div');
  d.className = 'sitem';
  d.innerHTML = `<img src="${t.thumb}" alt="" /><div class="meta"><div class="t">${t.title}</div><div class="a">${t.artist}</div></div>`;
  d.addEventListener('click', () => play(t, list, i));
  return d;
}

function renderHome() {
  const happy = $('#row-happy'), clas = $('#row-classics');
  if (happy) { happy.innerHTML = ''; FEATURED.slice(0, 2).forEach(f => happy.appendChild(card(f))); }
  if (clas) { clas.innerHTML = ''; FEATURED.slice(2).forEach(f => clas.appendChild(card(f))); }
  const mg = $('#mood-grid');
  if (mg) { mg.innerHTML = ''; MOODS.forEach(m => mg.appendChild(gcard(m))); }
}

function renderSearchBrowse() {
  const mb = $('#moods-browse'), gb = $('#genres-browse');
  if (mb) { mb.innerHTML = ''; MOODS.forEach(m => mb.appendChild(gcard(m))); }
  if (gb) { gb.innerHTML = ''; GENRES.forEach(g => gb.appendChild(gcard(g))); }
}

function renderRecent() {
  const box = $('#recent');
  if (!box) return;
  if (!S.recent.length) {
    box.innerHTML = '<p class="empty">Aún no hay canciones</p>';
    return;
  }
  box.innerHTML = '';
  S.recent.forEach((t, i) => box.appendChild(songItem(t, S.recent, i)));
}

function renderPlList() {
  const box = $('#pl-list');
  if (!box) return;
  if (!S.playlists.length) {
    box.innerHTML = '<p class="empty">Crea tu primera playlist</p>';
    return;
  }
  box.innerHTML = '';
  S.playlists.forEach(pl => {
    const d = document.createElement('div');
    d.className = 'plitem';
    d.innerHTML = `<div class="plart"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>
      <div class="plinfo"><div class="n">${pl.name}</div><div class="c">${pl.tracks.length} canciones</div></div>`;
    d.addEventListener('click', () => openPl(pl.id));
    box.appendChild(d);
  });
}

function showResults(list) {
  const box = $('#results');
  if (!box) return;
  box.classList.remove('hidden');
  $('#browse')?.classList.add('hidden');
  box.innerHTML = '';
  if (!list.length) {
    box.innerHTML = '<p class="empty">Sin resultados</p>';
    return;
  }
  list.forEach((t, i) => box.appendChild(songItem(t, list, i)));
}

function hideResults() {
  $('#results')?.classList.add('hidden');
  $('#browse')?.classList.remove('hidden');
}

function go(page) {
  $$('.page').forEach(p => p.classList.remove('active'));
  $('#' + page)?.classList.add('active');
  $$('.navi').forEach(n => n.classList.toggle('on', n.dataset.page === page));
  if (page !== 'library' && S.openPl) closePl();
}

function openFull() {
  const f = $('#full');
  if (!f) return;
  f.classList.remove('hidden');
  requestAnimationFrame(() => f.classList.add('show'));
}

function closeFull() {
  const f = $('#full');
  if (!f) return;
  f.classList.remove('show');
  setTimeout(() => f.classList.add('hidden'), 480);
}

function syncLyricsBoth(cur) {
  if (!S.lyrics.length) return;
  const t = cur - (S.lyricOffset || 0);
  let active = -1;
  for (let i = 0; i < S.lyrics.length; i++) {
    if (S.lyrics[i].t <= t) active = i;
    else break;
  }
  if (active < 0) active = 0;
  if (active !== S.lastLyricIdx) {
    S.lastLyricIdx = active;
    $$('#lyrics-body .lyric-line').forEach((el, i) => el.classList.toggle('active-line', i === active));
    const el = $$('#lyrics-body .lyric-line')[active];
    if (el) {
      const body = $('#lyrics-body');
      if (body) {
        const top = el.offsetTop - body.clientHeight * 0.35;
        body.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
    }
  }
}

function learnFromTrack(track) {
  if (!track) return;
  if (!S.prefs) S.prefs = { artists: {}, tags: {}, plays: 0 };
  const artist = (track.artist || 'Unknown').split(',')[0].trim();
  S.prefs.artists[artist] = (S.prefs.artists[artist] || 0) + 1;
  S.prefs.plays = (S.prefs.plays || 0) + 1;
  save();
}

/* ===== CHROMO AI ===== */
const CHROMO_SYSTEM = `Eres Chromo AI, el asistente kawaii y útil de Gojofy. Hablas en español de forma breve.
Acciones: {"action":"play_search","query":"texto"}, {"action":"pause"}, {"action":"resume"}, {"action":"next"}, {"action":"prev"}`;

async function chromoSend(text) {
  text = (text || '').trim();
  if (!text) return;
  chromoAdd('user', text);
  const typing = chromoAdd('ai', '…');

  try {
    const r = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + OPENROUTER_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: CHROMO_MODEL,
        messages: [{ role: 'system', content: CHROMO_SYSTEM }, { role: 'user', content: text }]
      })
    });
    const j = await r.json();
    let reply = j.choices?.[0]?.message?.content || 'Listo.';
    let action = null;
    const m = reply.match(/\{[\s\S]*?"action"[\s\S]*?\}/);
    if (m) {
      try {
        action = JSON.parse(m[0]);
        reply = reply.replace(m[0], '').trim();
      } catch (_) {}
    }
    if (typing) typing.remove();
    chromoAdd('ai', reply || 'Listo.');
    if (action && action.action === 'play_search' && action.query) {
      const list = await searchYT(action.query, 10);
      if (list.length) play(list[0], list, 0);
    }
  } catch (_) {
    if (typing) typing.remove();
    chromoAdd('ai', 'Comando procesado.');
  }
}

function chromoAdd(role, text) {
  const box = $('#chromo-msgs');
  if (!box) return null;
  const d = document.createElement('div');
  d.className = 'cm ' + (role === 'user' ? 'user' : 'ai');
  d.textContent = text;
  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
  return d;
}

/* ===== INICIALIZACIÓN & EVENTOS ===== */
function bind() {
  $$('.navi').forEach(n => n.addEventListener('click', () => go(n.dataset.page)));

  $('#mini')?.addEventListener('click', e => {
    if (e.target.closest('#mini-play') || e.target.closest('#mini-like')) return;
    openFull();
  });
  $('#mini-play')?.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  $('#mini-like')?.addEventListener('click', e => { e.stopPropagation(); toggleLike(); });
  $('#full-close')?.addEventListener('click', closeFull);
  $('#btn-play')?.addEventListener('click', toggle);
  $('#btn-next')?.addEventListener('click', next);
  $('#btn-prev')?.addEventListener('click', prev);
  $('#btn-like')?.addEventListener('click', toggleLike);
  $('#btn-add')?.addEventListener('click', addToPl);

  const inp = $('#q');
  inp?.addEventListener('input', async () => {
    const v = inp.value.trim();
    if (!v) { hideResults(); return; }
    const list = await searchYT(v, 15);
    showResults(list);
  });

  $('#btn-theme')?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    S.theme = document.body.classList.contains('light') ? 'light' : 'dark';
    save();
  });

  $('#chromo-fab')?.addEventListener('click', () => $('#chromo')?.classList.remove('hidden'));
  $('#chromo-close')?.addEventListener('click', () => $('#chromo')?.classList.add('hidden'));
  $('#chromo-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const ci = $('#chromo-input');
    if (ci) { chromoSend(ci.value); ci.value = ''; }
  });
}

function init() {
  load();
  const g = $('#greet');
  if (g) g.textContent = greet();
  renderHome();
  renderSearchBrowse();
  renderRecent();
  renderPlList();
  bind();
  if (window.YT && YT.Player) createYTPlayer();
  setTimeout(() => {
    $('#splash')?.classList.add('hide');
    setTimeout(() => { try { $('#splash')?.remove(); } catch (_) {} }, 550);
  }, 1200);
}

document.addEventListener('DOMContentLoaded', init);