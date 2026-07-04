import { renderCategories } from './render-functions';

export function getCategoryClass(total, index) {
  const remainder = total % 4;
  const lastRowStartIndex = total - remainder;
  if (remainder === 0) return 'row-of-4';
  if (index < lastRowStartIndex) {
    return 'row-of-4';
  }
  if (remainder === 3) return 'row-last-3';
  if (remainder === 2) return 'row-last-2';
  if (remainder === 1) return 'row-last-1';
  return '';
}
