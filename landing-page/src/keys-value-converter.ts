export class KeysValueConverter {
  toView(value) {
    if (value === null || typeof value !== 'object') {
      return [];
    }
    return Object.keys(value);
  }
}
