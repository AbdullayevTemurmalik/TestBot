const STORAGE_KEY = 'olimpiada_test_session_v2';
const DRAFT_KEY = 'olimpiada_input_draft_v2';

/**
 * Saqlangan to'liq sessiyani olish
 */
export function getSavedSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading session from localStorage:', e);
    return null;
  }
}

/**
 * To'liq sessiyani saqlash
 */
export function saveSession(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Error saving session to localStorage:', e);
  }
}

/**
 * Input qoralamasini (draft) saqlash (sahifa yangilanganda o'chib ketmasligi uchun)
 */
export function saveInputDraft(draft) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch (e) {
    console.error('Error saving draft:', e);
  }
}

/**
 * Input qoralamasini olish
 */
export function getInputDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error loading draft:', e);
    return null;
  }
}

/**
 * Yangi o'quvchi kelganda barcha ma'lumotlarni tozalash
 */
export function clearAllSessionAndDraft() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(DRAFT_KEY);
  } catch (e) {
    console.error('Error clearing storage:', e);
  }
}
