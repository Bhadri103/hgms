import {readState, updateState} from './repository';

export const defaultProfile = {name: 'Manoj', studio: 'Highgrade Fitness Studio', email: 'highgradefitnessstudio@gmail.com', mobile: '', address: ''};
export const accountProfile = state => ({...defaultProfile, ...state.profile});
const hex = bytes => Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
async function derive(password, salt) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  return hex(new Uint8Array(await crypto.subtle.deriveBits({name: 'PBKDF2', salt, iterations: 210000, hash: 'SHA-256'}, key, 256)));
}
export async function verifyPassword(password) {
  const saved = readState().accountPassword;
  if (!saved) return password === 'HGMS@123';
  return await derive(password, new Uint8Array(saved.salt)) === saved.hash;
}
export async function changePassword(current, next) {
  if (!await verifyPassword(current)) throw Error('Current password is incorrect.');
  if (next.length < 8) throw Error('Use at least 8 characters for your new password.');
  if (next === current) throw Error('Choose a different new password.');
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const hash = await derive(next, salt);
  updateState(state => ({...state, accountPassword: {salt: Array.from(salt), hash}}));
}
