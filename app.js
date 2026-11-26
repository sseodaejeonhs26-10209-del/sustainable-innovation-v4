// 버전4: 브랜드 공식 제품 페이지를 확인한 실제 제품 7개.
// 확인일: 2026-11-26. 인증 적용 범위는 제품별 공식 안내를 참고하세요.
const certifications = {
  fairtrade: {
    name: '공정무역', symbol: '⚖', short: '생산자에게 더 공정한 거래를',
    description: '농부와 노동자가 더 공정한 조건에서 일하고 거래할 수 있도록 돕는 인증이에요.',
    criteria: 'Fairtrade는 생산자에게 지급하는 최저가격(적용 품목)과 공동체를 위한 추가 장려금, 노동·환경 기준 등을 정해요.',
    note: '공정무역이 곧 유기농을 뜻하지는 않아요. 인증만으로 모든 노동 문제가 없다고 단정할 수도 없어요.',
    source: 'https://www.fairtrade.net/en/why-fairtrade/how-we-do-it/standards/fairtrade-minimum-price-and-premium-information.html'
  },
  organic: {
    name: '유기농', symbol: '♧', short: '땅과 재배 방식을 생각해요',
    description: '유기농산물은 합성농약과 화학비료를 사용하지 않는 등 정해진 유기 재배 기준에 맞게 생산한 농산물이에요.',
    criteria: '토양과 재배 관리, 사용 가능한 자재 등 인증 기준을 살펴봐요. 가공식품은 유기가공식품 인증 기준이 따로 있어요.',
    note: '국가와 인증 종류에 따라 기준이 달라요. 유기농 인증이 탄소배출이나 포장까지 모두 평가하는 것은 아니에요.',
    source: 'https://enviagro.go.kr/portal/content/html/info/certSys.jsp'
  },
  rainforest: {
    name: '레인포레스트 얼라이언스', symbol: '❧', short: '사람과 숲을 함께 생각해요',
    description: '농장과 기업이 숲과 자연을 보호하고, 농부의 생계와 인권을 개선하기 위한 기준에 참여하는 인증이에요.',
    criteria: '숲과 생태계 보호, 환경을 고려한 농업, 노동자의 인권 등 지속가능 농업 기준을 살피고 독립적인 심사를 받아요.',
    note: '제품 전체가 아니라 특정 원료에 적용될 수 있어요. 포장에 어떤 원료가 인증 대상인지 확인해 주세요.',
    source: 'https://www.rainforest-alliance.org/what-does-rainforest-alliance-certified-mean/'
  }
};

const products = [
  {
    "id": "tonys-dark-70",
    "category": "초콜릿",
    "name": "다크 초콜릿 70%",
    "company": "토니스 초코론리",
    "reason": "공정무역 인증 카카오와 설탕을 사용해요. 공식 페이지는 카카오 원두의 추적 가능한 공급망도 안내해요.",
    "certs": [
      "fairtrade"
    ],
    "emoji": "🍫",
    "color": "#f0e4d9",
    "source": "https://us.tonyschocolonely.com/products/dark-chocolate-70"
  },
  {
    "id": "tonys-milk-32",
    "category": "초콜릿",
    "name": "밀크 초콜릿 32%",
    "company": "토니스 초코론리",
    "reason": "공정무역 인증 카카오와 설탕을 사용해요. 설탕에는 물량수지 방식이 적용돼요.",
    "certs": [
      "fairtrade"
    ],
    "emoji": "🍫",
    "color": "#f3dedb",
    "source": "https://us.tonyschocolonely.com/products/milk-chocolate-32"
  },
  {
    "id": "equal-mind-body-soul",
    "category": "커피",
    "name": "유기농 마인드·바디·소울 커피",
    "company": "이퀄 익스체인지",
    "reason": "유기농 아라비카 원두 100%를 사용해요. USDA Organic 표시와 Oregon Tilth 유기농 인증을 공식 페이지에서 확인할 수 있어요.",
    "certs": [
      "organic"
    ],
    "emoji": "☕",
    "color": "#ece1d6",
    "source": "https://shop.equalexchange.coop/products/organic-mind-body-and-soul-coffee-5lb"
  },
  {
    "id": "lundberg-brown-jasmine",
    "category": "쌀",
    "name": "유기농 브라운 자스민 라이스",
    "company": "런드버그 패밀리 팜스",
    "reason": "USDA Organic과 재생유기농 인증을 안내하는 현미예요. 토양 건강과 야생동물 서식지를 고려한 재배 방식을 소개해요.",
    "certs": [
      "organic"
    ],
    "emoji": "🌾",
    "color": "#efecd8",
    "source": "https://www.lundberg.com/collections/all-products/products/organic-brown-jasmine-rice-2lb"
  },
  {
    "id": "organic-valley-whole",
    "category": "우유",
    "name": "유기농 홀밀크",
    "company": "오가닉밸리",
    "reason": "USDA Organic 표시가 있는 유기농 우유예요. 공식 페이지에서 원료와 방목 사육에 대한 안내를 확인할 수 있어요.",
    "certs": [
      "organic"
    ],
    "emoji": "🥛",
    "color": "#e2ebef",
    "source": "https://www.organicvalley.coop/products/whole-milk"
  },
  {
    "id": "clipper-pure-green",
    "category": "차",
    "name": "유기농 공정무역 퓨어 그린티",
    "company": "클리퍼",
    "reason": "유기농 녹차를 사용해요. 공식 판매 페이지는 차 원료 100%가 공정무역 기준에 따라 거래된다고 안내해요.",
    "certs": [
      "organic",
      "fairtrade"
    ],
    "emoji": "🍵",
    "color": "#e4ecd9",
    "source": "https://shop.clipper-teas.com/collections/green-tea/products/clipper-organic-fairtrade-pure-green-tea-20-bags"
  },
  {
    "id": "clipper-green-lemon",
    "category": "차",
    "name": "유기농 공정무역 그린티 & 레몬",
    "company": "클리퍼",
    "reason": "브랜드 공식 페이지에서 유기농·공정무역 제품으로 소개하는 레몬 녹차예요. 녹차에 레몬 껍질과 향을 더했어요.",
    "certs": [
      "organic",
      "fairtrade"
    ],
    "emoji": "🍵",
    "color": "#f1edd1",
    "source": "https://www.clipper-teas.com/product/organic-fairtrade-green-tea-lemon/"
  }
];

const $ = (selector) => document.querySelector(selector);
const categories = [...new Set(products.map(product => product.category))];
const storageKey = 'green-basket-v4';
let cart = [];
let visibleProducts = [];
let toastTimer;

function notify(message) {
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 2600);
}

function saveCart() {
  try { localStorage.setItem(storageKey, JSON.stringify(cart)); }
  catch { $('#storage-note').textContent = '저장 공간을 사용할 수 없어 현재 화면에서만 유지돼요.'; }
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    if (Array.isArray(saved)) {
      const seen = new Set();
      cart = saved.filter(item => item && products.some(p => p.id === item.id) && !seen.has(item.id) && seen.add(item.id))
        .map(item => ({ id: item.id, done: item.done === true }));
    }
  } catch { $('#storage-note').textContent = '저장된 목록을 읽지 못했어요. 새 목록을 만들 수 있어요.'; }
}

function openCertification(id) {
  const cert = certifications[id];
  if (!cert) return;
  $('#dialog-title').textContent = cert.name;
  $('#dialog-symbol').textContent = cert.symbol;
  $('#dialog-description').textContent = cert.description;
  $('#dialog-criteria').textContent = cert.criteria;
  $('#dialog-note').textContent = cert.note;
  $('#dialog-source').href = cert.source;
  $('#cert-dialog').showModal();
}

function renderProducts() {
  $('#results').innerHTML = visibleProducts.map(product => {
    const added = cart.some(item => item.id === product.id);
    return `<article class="product-card">
      <div class="product-art" style="background:${product.color}"><small>실제 제품 · 공식 정보</small><span aria-hidden="true">${product.emoji}</span></div>
      <div class="product-body"><p class="company">${product.company}</p><h4>${product.name}</h4><p class="reason">${product.reason}</p>
      <div class="cert-tags">${product.certs.map(id => `<button type="button" class="cert-tag" data-cert="${id}" aria-label="${certifications[id].name} 인증 설명 보기"><span aria-hidden="true">${certifications[id].symbol}</span>${certifications[id].name} ⓘ</button>`).join('')}</div>
      <a class="product-source" href="${product.source}" target="_blank" rel="noopener noreferrer" aria-label="${product.company} ${product.name} 공식 제품 정보 (새 창)">공식 제품·인증 정보 보기 ↗</a>
      <button type="button" class="add-button" data-add="${product.id}" ${added ? 'disabled' : ''} aria-label="${product.name} ${added ? '담김' : '장바구니에 담기'}">${added ? '✓ 장바구니에 담았어요' : '+ 장바구니 담기'}</button></div>
    </article>`;
  }).join('');
}

function renderCart() {
  $('#nav-count').textContent = cart.length;
  $('#list-count').textContent = cart.length;
  $('#mobile-cart-count').textContent = cart.length;
  $('#mobile-cart').setAttribute('aria-label', `내 장바구니 ${cart.length}개 보기`);
  const done = cart.filter(item => item.done).length;
  $('#list-progress').textContent = cart.length ? `${cart.length}개 중 ${done}개 구매 완료` : '아직 담은 제품이 없어요';
  $('#clear-done').hidden = done === 0;
  $('#shopping-list').innerHTML = cart.length ? cart.map(item => {
    const product = products.find(p => p.id === item.id);
    return `<div class="list-item ${item.done ? 'done' : ''}"><input type="checkbox" id="check-${item.id}" data-check="${item.id}" ${item.done ? 'checked' : ''}><label for="check-${item.id}">${product.name}<small>${product.category} · ${product.company}</small></label><button type="button" class="remove-button" data-remove="${item.id}" aria-label="${product.name} 삭제">×</button></div>`;
  }).join('') : '<div class="empty-list"><span aria-hidden="true">♧</span>마음에 드는 제품의<br>‘장바구니 담기’를 눌러주세요.</div>';
}

function updateCart() { saveCart(); renderCart(); renderProducts(); }

function searchFoods(rawQuery, initial = false) {
  const query = rawQuery.trim();
  $('#food-search').removeAttribute('aria-invalid');
  document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
  if (!query) {
    visibleProducts = [];
    $('#result-title').textContent = '음식 이름을 입력해 주세요';
    $('#result-count').textContent = '';
    $('#search-message').textContent = '초콜릿, 커피, 쌀처럼 살 음식 이름을 입력하거나 아래 추천 검색어를 눌러주세요.';
    $('#search-message').hidden = false;
    $('#food-search').setAttribute('aria-invalid', 'true');
    $('#food-search').focus();
    renderProducts();
    return;
  }
  const terms = [...new Set(query.split(/[,，、\n]+/).map(term => term.trim().toLowerCase()).filter(Boolean))];
  const aliases = { '초코': '초콜릿', 'chocolate': '초콜릿', 'coffee': '커피', 'banana': '바나나', 'milk': '우유', 'rice': '쌀', 'tea': '차', '녹차': '차', '원두': '커피' };
  const match = (product, term) => {
    const word = aliases[term] || term;
    return word === '전체' || `${product.category} ${product.name} ${product.company}`.toLowerCase().includes(word);
  };
  visibleProducts = products.filter(product => terms.some(term => match(product, term)));
  const missing = terms.filter(term => !products.some(product => match(product, term)));
  $('#result-title').textContent = initial || query === '전체' ? '지속가능한 선택, 실제 제품 7개' : (visibleProducts.length ? `‘${query}’ 추천 제품` : '검색 결과가 없어요');
  $('#result-count').textContent = `${visibleProducts.length}개 제품`;
  $('#search-message').hidden = missing.length === 0 && visibleProducts.length > 0;
  $('#search-message').textContent = visibleProducts.length ? `‘${missing.join(', ')}’ 제품은 아직 없어요. 등록된 음식: ${categories.join(', ')}.` : '일치하는 제품이 없어요. 초콜릿, 커피, 쌀, 우유, 차 중에서 다시 찾아볼까요?';
  document.querySelectorAll('.chip').forEach(chip => { if (terms.some(term => (aliases[term] || term) === chip.dataset.food)) chip.classList.add('active'); });
  renderProducts();
}

$('#search-form').addEventListener('submit', event => { event.preventDefault(); searchFoods($('#food-search').value); });
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.food) { $('#food-search').value = button.dataset.food; searchFoods(button.dataset.food); }
  if (button.dataset.cert) openCertification(button.dataset.cert);
  if (button.dataset.add && !cart.some(item => item.id === button.dataset.add)) {
    cart.push({ id: button.dataset.add, done: false }); updateCart(); notify('장바구니에 담았어요.');
  }
  if (button.dataset.remove) {
    cart = cart.filter(item => item.id !== button.dataset.remove); updateCart(); notify('장바구니에서 삭제했어요.');
  }
});
$('#shopping-list').addEventListener('change', event => {
  const id = event.target.dataset.check;
  const item = cart.find(item => item.id === id);
  if (item) { item.done = event.target.checked; saveCart(); renderCart(); }
});
$('#clear-done').addEventListener('click', () => { cart = cart.filter(item => !item.done); updateCart(); notify('구매한 제품을 지웠어요.'); });
$('#close-dialog').addEventListener('click', () => $('#cert-dialog').close());
$('#cert-dialog').addEventListener('click', event => { if (event.target === $('#cert-dialog')) { const box = event.target.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) event.target.close(); } });
$('#food-chips').innerHTML = ['전체', ...categories].map(food => `<button type="button" class="chip" data-food="${food}">${food}</button>`).join('');
$('#guide-cards').innerHTML = Object.entries(certifications).map(([id, cert]) => `<button type="button" class="guide-card" data-cert="${id}" aria-label="${cert.name} 인증 설명 보기"><span class="cert-symbol" aria-hidden="true">${cert.symbol}</span><div><strong>${cert.name}</strong><p>${cert.short}</p></div></button>`).join('');
loadCart();
renderCart();
searchFoods('전체', true);
